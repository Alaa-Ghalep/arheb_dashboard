import React from 'react'
import '../Style/Mystyle.css';
import icon_back from '../Images/icon_back.png';
import { Link, Route, Routes } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export default function Notification2() {
  const navigate = useNavigate();

  const navigateToConfirmed= () =>{
    navigate(`/Dashboard`);
 }
  return (
    <div>

<section class="h-100 gradient-form" style={{backgroundcolor: '#eee'}}>
  <div class="container py-5 h-100">   
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col-xl-10">
        <div class=" rounded-3 text-black">
          <div class="row g-0">
            <div class="col-lg-7" style={{marginTop:80}}>
             
            <div className='px-5'>
                    <h3  className='mb-5 ' style={{fontWeight:'bold'}}><span>
                      <img   onClick={()=>navigateToConfirmed()} className='ms-5 iconback' src={icon_back} style={{width:25,marginLeft:33}}/>
                    </span>التنبيهات</h3>
                   <h6 style={{fontWeight:'bold',color:'#707070'}}>اليوم</h6> 
                   <div className='d-flex mb-4 px-3  pt-2 rounded' style={{color:'#fff',backgroundColor:'#175960',justifyContent:'space-between'}} >
                        <p className='text-end' >قام احد المرشدين  بإضافة عرض في التطبيق </p>
                        <span className='text-start' style={{fontSize:11,paddingTop:20}}> م12:00</span>
                    </div>
                    <div className='d-flex mb-4 px-3  shadow-sm pt-2 rounded' style={{justifyContent:'space-between'}} ><p>هناك تسجيل جديد في تطبيق مزودي الخدمه </p>
<span className='text-start' style={{fontSize:11,paddingTop:20}}> 5:00م</span>

                    </div>
                </div>


            </div>
            <div className="col-lg-5 d-flex align-items-center  " style={{backgroundColor:'#ECECEC',}}>
              {/* <div class="h-100 w-100 ">
                <img className='img-fluid w-100 h-100' src={imglogin}/>
              </div> */}
                                            
        <div className='px-5  py-5'>
          <p className='text-center mb-5'>قام المرشد محمود بإضافة عرض  </p>
          <div className='d-flex '>
              <div className='mrginlft'>
              <h5 className='mb-3' style={{fontWeight:'bold'}}>اسم المرشد</h5>
              <h5 className='mb-3' style={{fontWeight:'bold'}}>المدينة </h5>
              <h5 className='mb-3' style={{fontWeight:'bold'}}>رقم الجوال </h5>
              <h5 className='mb-3' style={{fontWeight:'bold'}}>المدينة </h5>
              <h5 className='mb-3' style={{fontWeight:'bold'}}>تفاصيل العرض </h5>

              </div>
          <div>
          <p className='mb-3'>عبد العزيز محمود</p>
          <p className='mb-3'>  مكة المكرمة</p>
          <p className='mb-3'>  00000000</p>
          <p className='mb-3'>  مكة المكرمة</p>
          <p className='mb-3'>  0000000000</p>

          </div>
          </div>
          <div className='text-center mb-3 mt-5'>
              
                <button className='btn rounded text-center mx-auto w-100' style={{backgroundColor:'#175960',color:'#fff'}}>الموافقة</button>
                
          </div>
          <div className='text-center mb-3'>
              
                <button className='btn rounded text-center bg-light mx-auto w-100 bb' 
              >رفض الطلــب</button>
                
          </div>

                          </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>












              </div>
            )
          }
