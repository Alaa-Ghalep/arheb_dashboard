import React, { useState, useEffect } from 'react';
import mystyle from '../Style/Mystyle.css';
import 'font-awesome/css/font-awesome.min.css';
import { Link } from 'react-router-dom';
import { supabase } from '../lib/supabaseClient';

export default function ADM() {
  const [managers, setManagers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchManagers();
  }, []);

  async function fetchManagers() {
    try {
      const { data, error } = await supabase
        .from('admin_managers')
        .select('*')
        .order('user_name');

      if (error) throw error;
      setManagers(data || []);
    } catch (err) {
      setError(err.message);
      console.error('خطأ في جلب المدراء:', err);
    } finally {
      setLoading(false);
    }
  }

  async function handleDelete(id) {
    if (window.confirm('هل أنت متأكد من حذف هذا المدير؟')) {
      try {
        const { error } = await supabase
          .from('admin_managers')
          .delete()
          .eq('id', id);

        if (error) throw error;
        
        fetchManagers();
      } catch (err) {
        alert('خطأ في الحذف: ' + err.message);
      }
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
    <div className='container-fluid w-100'>
      <div className='pt-3'>
        <div className='d-lg-flex mt-3 aa'>
          <h3 className='txtsiz' style={{ fontWeight: 'bold' }}>ادارة مدير التطبيق</h3>
          <button className='btn text-white px-5' style={{ backgroundColor: '#2E7C84' }}>
            <Link to='/AddManager' className='text-white text-decoration-none'>اضافة مدير</Link>
          </button>
        </div>

        <div className='row mt-2 bg-white'>
          <div className="container table-responsive mt-3">
            <table className="table table-hover">
              <thead style={{ backgroundColor: '#ECECEC' }}>
                <tr>
                  <th scope="col">#رقم المستخدم</th>
                  <th scope="col">#اسم المستخدم</th>
                  <th scope="col">#المدينة</th>
                  <th scope="col">#الصلاحيات</th>
                  <th scope="col">#رقم الجوال</th>
                  <th scope="col">#البريد الالكتروني</th>
                  <th scope="col">#تعديل</th>
                  <th scope="col">#حذف</th>
                </tr>
              </thead>
              <tbody>
                {managers.length === 0 ? (
                  <tr>
                    <td colSpan="8" className="text-center text-muted py-4">
                      لا يوجد مدراء حالياً
                    </td>
                  </tr>
                ) : (
                  managers.map((manager, index) => (
                    <tr key={manager.id} className='bg-white'>
                      <td className='text-black'>{manager.user_name || index + 1}</td>
                      <td className='text-black'>{manager.user_name || '-'}</td>
                      <td className='text-black'>{manager.city || '-'}</td>
                      <td className='text-black'>
                        <span className={`badge ${manager.role === 'super_admin' ? 'bg-danger' : manager.role === 'hotel_manager' ? 'bg-info' : 'bg-secondary'}`}>
                          {manager.role === 'super_admin' ? 'مدير عام' : manager.role === 'hotel_manager' ? 'مدير فندق' : 'مشرف'}
                        </span>
                      </td>
                      <td className='text-black'>{manager.phone || '-'}</td>
                      <td className='text-black'>{manager.email || '-'}</td>
                      <td>
                        <Link to={`/EditManager/${manager.id}`}>
                          <i className='fas fa-pen' style={{ fontSize: 24, color: '#29ABB8', cursor: 'pointer' }}></i>
                        </Link>
                      </td>
                      <td>
                        <i 
                          className="fa fa-trash" 
                          style={{ fontSize: 24, color: '#29ABB8', cursor: 'pointer' }} 
                          onClick={() => handleDelete(manager.id)}
                        ></i>
                      </td>
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