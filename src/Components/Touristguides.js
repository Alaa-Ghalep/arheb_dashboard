import React, { useState, useEffect } from 'react';
import circlegreen from '../Images/circlegreen.svg';
import circlered from '../Images/circlered.svg';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../lib/supabaseClient';

export default function Touristguides() {
  const navigate = useNavigate();
  const [guides, setGuides] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchGuides();
  }, []);

  async function fetchGuides() {
    try {
      const { data, error } = await supabase
        .from('guides')
        .select('*')
        .order('guide_number');

      if (error) throw error;
      setGuides(data || []);
    } catch (err) {
      setError(err.message);
      console.error('خطأ في جلب المرشدين:', err);
    } finally {
      setLoading(false);
    }
  }

  const navigateToGuideDetails = (guideId) => {
    navigate(`/GuideDetails/${guideId}`);
  };

  // دالة لتحديد لون ونص الحالة
  const getStatusBadge = (status) => {
    switch (status) {
      case 'available':
        return { text: 'متفرغ', color: '#28a745', icon: circlegreen };
      case 'busy':
        return { text: 'مشغول', color: '#dc3545', icon: circlered };
      case 'off_duty':
        return { text: 'غير متوفر', color: '#6c757d', icon: circlered };
      default:
        return { text: 'غير محدد', color: '#6c757d', icon: circlered };
    }
  };

  if (loading) {
    return (
      <div className="container-fluid w-100 text-center py-5">
        <div className="spinner-border text-info" role="status">
          <span className="visually-hidden">جاري التحميل...</span>
        </div>
        <p className="mt-2">جاري تحميل البيانات...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container-fluid w-100 text-center py-5">
        <div className="alert alert-danger d-inline-block">
          <strong>خطأ:</strong> {error}
        </div>
      </div>
    );
  }

  return (
    <div className='container-fluid'>
      <div className='container pt-3'>
        <div className='d-flex mt-3' style={{ justifyContent: 'space-between' }}>
          <h3 style={{ fontWeight: 'bold' }}>المرشدين السياحيين</h3>
        </div>
        
        <div className='row mt-2 bg-white'>
          <div className="container table-responsive mt-3 text-center">
            <table className="table table-hover">
              <thead style={{ backgroundColor: '#ECECEC' }}>
                <tr>
                  <th scope="col">#رقم المرشد</th>
                  <th scope="col">#اسم المرشد</th>
                  <th scope="col">#المدينة</th>
                  <th scope="col">#تاريخ الانضمام للتطبيق</th>
                  <th scope="col">#عدد الطلبيات</th>
                  <th scope="col">#حالة المندوب</th>
                  <th scope="col">#رقم الجوال</th>
                  <th scope="col">#التواجد</th>
                </tr>
              </thead>
              <tbody>
                {guides.length === 0 ? (
                  <tr>
                    <td colSpan="8" className="text-center text-muted py-4">
                      لا يوجد مرشدين حالياً
                    </td>
                  </tr>
                ) : (
                  guides.map((guide) => {
                    const statusInfo = getStatusBadge(guide.status);
                    return (
                      <tr 
                        key={guide.id} 
                        className='bg-white'
                        style={{ cursor: 'pointer' }}
                        onClick={() => navigateToGuideDetails(guide.id)}
                      >
                        <td className='text-black'>{guide.guide_number || '-'}</td>
                        <td className='text-black'>{guide.full_name || '-'}</td>
                        <td className='text-black'>{guide.city || '-'}</td>
                        <td className='text-black'>
                          {guide.date_of_joining 
                            ? new Date(guide.date_of_joining).toLocaleDateString('ar-EG')
                            : '-'}
                        </td>
                        <td className='text-black'>{guide.num_of_requests || 0}</td>
                        <td className='text-black'>
                          {guide.status ? (
                            <span style={{ color: statusInfo.color }}>
                              {statusInfo.text}
                            </span>
                          ) : '-'}
                        </td>
                        <td className='text-black'>{guide.phone || '-'}</td>
                        <td>
                          <img 
                            src={guide.is_active ? circlegreen : circlered} 
                            width={15} 
                            alt={guide.is_active ? 'نشط' : 'غير نشط'}
                            title={guide.is_active ? 'نشط' : 'غير نشط'}
                          />
                        </td>
                      </tr>
                    );
                  })
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}