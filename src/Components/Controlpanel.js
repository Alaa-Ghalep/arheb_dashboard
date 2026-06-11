import { React, useState, useEffect } from 'react';
import group1 from '../Images/group1.svg';
import group2 from '../Images/group2.svg';
import group3 from '../Images/group3.svg';
import group4 from '../Images/group4.svg';
import ChartComp2 from './ChartComp2';
import ChartComp3 from './ChartComp3';
import { supabase } from '../lib/supabaseClient';

export default function Controlpanel() {
  const [hotels, setHotels] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [stats, setStats] = useState({
    totalHotels: 0,
    totalGuides: 0,
    totalServices: 0,
    totalManagers: 0,
    totalTourists: 0
  });

  useEffect(() => {
    fetchHotels();
    fetchStats();
  }, []);

  async function fetchHotels() {
    try {
      const { data, error } = await supabase
        .from('hotels')
        .select('*')
        .order('hotel_name');

      if (error) throw error;
      setHotels(data || []);
    } catch (err) {
      setError(err.message);
      console.error('خطأ في جلب الفنادق:', err);
    } finally {
      setLoading(false);
    }
  }

  async function fetchStats() {
    try {
      const { count: hotelsCount } = await supabase
        .from('hotels')
        .select('*', { count: 'exact', head: true });

      const { count: guidesCount } = await supabase
        .from('guides')
        .select('*', { count: 'exact', head: true });

      const { count: servicesCount } = await supabase
        .from('services')
        .select('*', { count: 'exact', head: true });

      const { count: managersCount } = await supabase
        .from('admin_managers')
        .select('*', { count: 'exact', head: true });

      const { count: touristsCount } = await supabase
        .from('tourists')
        .select('*', { count: 'exact', head: true });

      setStats({
        totalHotels: hotelsCount || 0,
        totalGuides: guidesCount || 0,
        totalServices: servicesCount || 0,
        totalManagers: managersCount || 0,
        totalTourists: touristsCount || 0
      });
    } catch (err) {
      console.error('خطأ في جلب الإحصائيات:', err);
    }
  }

  if (loading) {
    return (
      <div className="text-center py-5">
        <div className="spinner-border text-info" role="status">
          <span className="visually-hidden">جاري التحميل...</span>
        </div>
        <p className="mt-2">جاري تحميل البيانات...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-5">
        <div className="alert alert-danger d-inline-block">
          <strong>خطأ:</strong> {error}
        </div>
        <br />
        <button className="btn btn-info mt-3" onClick={() => window.location.reload()}>
          إعادة المحاولة
        </button>
      </div>
    );
  }

  return (
    <div>
      {/* قسم الإحصائيات */}
      <div className="container pt-4 mb-5">
        <h3 className="mb-4 fw-bold">الاحصائيات</h3>

        <div className="row g-4">
          {/* الفنادق */}
          <div className="col-md-6 col-lg-3 col-xl-3 mb-3">
            <div className="d-flex py-3 bg-white rounded-4 justify-content-around shadow-sm h-100">
              <img src={group1} width={38} alt="hotels" />
              <h5 className="mt-2">عدد الفنادق</h5>
              <h2 className="fw-bold text-info">{stats.totalHotels}</h2>
            </div>
          </div>

          {/* المرشدين */}
          <div className="col-md-6 col-lg-3 col-xl-3 mb-3">
            <div className="d-flex py-3 bg-white rounded-4 justify-content-around shadow-sm h-100">
              <img src={group2} width={38} alt="guides" />
              <h5 className="mt-2">عدد المرشدين</h5>
              <h2 className="fw-bold text-info">{stats.totalGuides}</h2>
            </div>
          </div>

          {/* الخدمات */}
          <div className="col-md-6 col-lg-3 col-xl-3 mb-3">
            <div className="d-flex py-3 bg-white rounded-4 justify-content-around shadow-sm h-100">
              <img src={group3} width={38} alt="services" />
              <h5 className="mt-2">عدد الخدمات</h5>
              <h2 className="fw-bold text-info">{stats.totalServices}</h2>
            </div>
          </div>

          {/* المدراء */}
          <div className="col-md-6 col-lg-3 col-xl-3 mb-3">
            <div className="d-flex py-3 bg-white rounded-4 justify-content-around shadow-sm h-100">
              <img src={group4} width={38} alt="managers" />
              <h5 className="mt-2">عدد المدراء</h5>
              <h2 className="fw-bold text-info">{stats.totalManagers}</h2>
            </div>
          </div>

          {/* السياح */}
          <div className="col-md-6 col-lg-3 col-xl-3 mb-3">
            <div className="d-flex py-3 bg-white rounded-4 justify-content-around shadow-sm h-100">
              <img src={group1} width={38} alt="tourists" />
              <h5 className="mt-2">عدد السياح</h5>
              <h2 className="fw-bold text-info">{stats.totalTourists}</h2>
            </div>
          </div>
        </div>
      </div>

      {/* قسم المخططات */}
      <div className="container mb-5 pt-4">
        <div className="row g-4">
          <div className="col-lg-6">
            <ChartComp3 />
          </div>
          <div className="col-lg-6">
            <ChartComp2 />
          </div>
        </div>
      </div>

      {/* قسم قائمة الفنادق */}
      <div className="container mb-5 pt-4">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h3 className="fw-bold">قائمة الفنادق</h3>
          <span className="badge bg-info p-2">عدد الفنادق: {hotels.length}</span>
        </div>

        <div className="table-responsive">
          <table className="table table-striped table-hover">
            <thead className="table-info">
              <tr>
                <th>#</th>
                <th>اسم الفندق</th>
                <th>العنوان</th>
                <th>رقم الهاتف</th>
                <th>عدد الطلبات</th>
                <th>تاريخ الانضمام</th>
              </tr>
            </thead>
            <tbody>
              {hotels.length === 0 ? (
                <tr>
                  <td colSpan="6" className="text-center text-muted">
                    لا توجد فنادق حالياً
                  </td>
                </tr>
              ) : (
                hotels.map((hotel, index) => (
                  <tr key={hotel.id}>
                    <td>{index + 1}</td>
                    <td className="fw-bold">{hotel.hotel_name || hotel.name || '-'}</td>
                    <td>{hotel.address || '-'}</td>
                    <td>{hotel.phone || '-'}</td>
                    <td>
                      <span className="badge bg-info">{hotel.num_of_requests || 0}</span>
                    </td>
                    <td>
                      {hotel.date_of_joining
                        ? new Date(hotel.date_of_joining).toLocaleDateString('ar-EG')
                        : '-'}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}