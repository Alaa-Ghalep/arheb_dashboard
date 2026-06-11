import React from 'react'
import holidy from'../Images/holidy.jpg';
import reyal from'../Images/reyal.jpg';
import mapholidy from'../Images/mapholidy.jpg';

export default function HotelDetails() {
  return (
    <div>
          <div className='container pt-4 mb-5'>
          <div className='d-lg-flex  mt-3 aa' >
          <h3 className='mb-4'  style={{fontWeight:'bold'}}> الخدمات/ الفنادق/ تفاصيل الفندق </h3>
            <button className='btn text-white px-5 ' style={{backgroundColor:'#2E7C84'}}>
              <a className='text-white text-decoration-none'> تسوية</a></button>
        </div>

            <div className='row g-4'>
               
                <div className='col-md-6 col-lg-3 col-xl-3'>
                    <div className='d-flex py-3' style={{borderRadius:20,justifyContent:'space-around'}}>
                        <h5 className='mt-2 ' style={{marginRight:1,fontWeight:'bold'}}> رقم الفندق :</h5>
                        
                        <h5 className='mt-2' style={{color:'#29ABB8'}}>GLOL2000 </h5>
                        
                    </div>
                </div>
          
            
                <div className='col-md-6 col-lg-3 col-xl-3'>
                    <div className='d-flex py-3 ' style={{borderRadius:20,justifyContent:'space-around'}}>
                        <h5 className='mt-2 ' style={{marginRight:1}}>رصيد الحساب :</h5>
                        
                        <h5 className='mt-2' style={{color:'#29ABB8'}}>1,000 ريال</h5>
                        
                    </div>
                </div>
                <div className='col-md-6 col-lg-3 col-xl-3'>
                    <div className='d-flex py-3' style={{borderRadius:20,justifyContent:'space-around'}}>
                        <h5 className='mt-2 ' style={{marginRight:1}}>رقم الحساب البنكي:</h5>
                        
                        <h5 className='mt-2' style={{color:'#29ABB8'}}>00000</h5>
                        
                    </div>
                </div>
          
         
          
            </div>
            <div className='row mt-lg-4  g-4'>
               
         
               <div className='col-md-6 col-lg-4 col-xl-4'>
                <div>
                    <img className='img-fluid w-75' src={holidy}/>
                    </div>
                    </div> 
          
                    <div className='col-md-6 col-lg-4 col-xl-4'>
                <div>
                    <img className='img-fluid w-100' src={reyal}/>
                    </div>
                    </div> 
          
         
           </div>
             <div className='row mt-5'>
                <div className='col-lg-4'></div>
                    <img className='img-fluid w-50' src={mapholidy}/>
                <div className='col-lg-8'><div></div></div>

             </div>
             
             
             
              </div>
    </div>
  )
}
