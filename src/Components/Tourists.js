import React, { useState, useEffect } from 'react';
import { supabase } from '../lib/supabaseClient';

export default function Tourists() {
  const [tourists, setTourists] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchTourists();
  }, []);

  async function fetchTourists() {
    try {
      const { data, error } = await supabase
        .from('tourists')
        .select('*')
        .order('id');

      if (error) throw error;
      setTourists(data || []);
    } catch (err) {
      setError(err.message);
      console.error('خطأ في جلب السائحين:', err);
    } finally {
      setLoading(false);
    }
  }

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
        <div className='mt-3'>
          <h3 style={{ fontWeight: 'bold' }}>السائحين</h3>
        </div>

        <div className='row mt-2 bg-white'>
          <div className="container table-responsive mt-3">
            <table className="table table-hover">
              <thead style={{ backgroundColor: '#ECECEC' }}>
                <tr>
                  <th scope="col">#رقم السائح</th>
                  <th scope="col">#اسم السائح</th>
                  <th scope="col">#المدينة</th>
                  <th scope="col">#رقم الجوال</th>
                </tr>
              </thead>
              <tbody>
                {tourists.length === 0 ? (
                  <tr>
                    <td colSpan="4" className="text-center text-muted py-4">
                      لا يوجد سائحين حالياً
                    </td>
                  </tr>
                ) : (
                  tourists.map((tourist) => (
                    <tr key={tourist.id} className='bg-white'>
                      <td className='text-black'>{tourist.id || '-'}</td>
                      <td className='text-black'>{tourist.full_name || '-'}</td>
                      <td className='text-black'>{tourist.city || tourist.nationality || '-'}</td>
                      <td className='text-black'>{tourist.phone || '-'}</td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}