import React, { useState, useEffect } from 'react';
import mystyle from '../Style/Mystyle.css';
import 'font-awesome/css/font-awesome.min.css';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../lib/supabaseClient';

export default function Sarvices() {
  const navigate = useNavigate();
  const [services, setServices] = useState([]);
  const [hotels, setHotels] = useState([]);
  const [selectedHotel, setSelectedHotel] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchHotels();
    fetchServices();
  }, []);

  async function fetchHotels() {
    try {
      const { data, error } = await supabase
        .from('hotels')
        .select('id, hotel_name')
        .order('hotel_name');

      if (error) throw error;
      setHotels(data || []);
    } catch (err) {
      console.error('خطأ في جلب الفنادق:', err);
    }
  }

  async function fetchServices() {
    try {
      setLoading(true);
      let query = supabase
        .from('services')
        .select(`
          *,
          hotels (
            hotel_name
          )
        `);

      if (selectedHotel) {
        query = query.eq('hotel_id', selectedHotel);
      }

      const { data, error } = await query;

      if (error) throw error;
      setServices(data || []);
    } catch (err) {
      setError(err.message);
      console.error('خطأ في جلب الخدمات:', err);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchServices();
  }, [selectedHotel]);

  const handleHotelChange = (e) => {
    setSelectedHotel(e.target.value);
  };

  const navigateToHotelDetails = (hotelId) => {
    navigate(`/HotelDetails/${hotelId}`);
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
    <div className='container pt-3'>
      <div className='pt-3'>
        <h3 className='' style={{ fontWeight: 'bold' }}>الخدمات</h3>

        <select 
          className="my-select form-control mb-3 w-25" 
          value={selectedHotel}
          onChange={handleHotelChange}
        >
          <option value="" style={{ fontWeight: 'bold' }}>جميع الفنادق</option>
          {hotels.map((hotel) => (
            <option key={hotel.id} value={hotel.id}>
              {hotel.hotel_name}
            </option>
          ))}
        </select>
      </div>

      <div className='row mt-2 bg-white'>
        <div className="container mt-3">
          <table className="table table-hover">
            <thead style={{ backgroundColor: '#ECECEC' }}>
              <tr>
                <th scope="col">#رقم الخدمة</th>
                <th scope="col">#اسم الخدمة</th>
                <th scope="col">#الفندق</th>
                <th scope="col">#الوصف</th>
                <th scope="col">#السعر</th>
                <th scope="col">#الحالة</th>
                <th scope="col">#تاريخ الإضافة</th>
              </tr>
            </thead>
            <tbody>
              {services.length === 0 ? (
                <tr>
                  <td colSpan="7" className="text-center text-muted py-4">
                    لا توجد خدمات حالياً
                  </td>
                </tr>
              ) : (
                services.map((service, index) => (
                  <tr 
                    key={service.id} 
                    className='bg-white'
                    style={{ cursor: 'pointer' }}
                    onClick={() => navigateToHotelDetails(service.hotel_id)}
                  >
                    <td className='text-black'>{index + 1}</td>
                    <td className='text-black'>{service.service_name || '-'}</td>
                    <td className='text-black'>{service.hotels?.hotel_name || '-'}</td>
                    <td className='text-black'>{service.description || '-'}</td>
                    <td className='text-black'>{service.price ? `${service.price} ريال` : '-'}</td>
                    <td className='text-black'>
                      <span className={`badge ${service.is_available ? 'bg-success' : 'bg-danger'}`}>
                        {service.is_available ? 'متاح' : 'غير متاح'}
                      </span>
                    </td>
                    <td className='text-black'>
                      {service.created_at 
                        ? new Date(service.created_at).toLocaleDateString('ar-EG')
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