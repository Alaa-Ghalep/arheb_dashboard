import React from 'react'
import '../Style/Mystyle.css';
export default function Settings() {
  return (
    <div className='container-fluid'>
      <div className='container pt-3 mb-5'>
      <h3 className='mb-4' style={{fontWeight:'bold'}}>  الاعدادات</h3>
        <div className='row mb-5'>
            <div className='col-sm-12 col-md-6 col-lg-6'>
                <div class=''>
                <div className='d-flex' style={{}}>
    <h5 class='ms-5'style={{fontWeight:'bold',paddingLeft:33}}>الصلاحيات      </h5>
    <div className='d-flex' style={{marginRight:110}}>
    <i  class="ms-5 me-5 fa fa-plus-circle" aria-hidden="true" style={{fontsize:18,color:'#175960',}}></i>
      <i class="fa fa-pen" aria-hidden="true" style={{fontsize:18,color:'#175960',marginRight:22}}></i>
      </div>
    
      </div>
      <p>الصلاحيات الصلاحيات الصلاحيات الصلاحيات </p>
      <p>الصلاحيات الصلاحيات الصلاحيات الصلاحيات </p>
      <p>الصلاحيات الصلاحيات الصلاحيات الصلاحيات </p>
      <p>الصلاحيات الصلاحيات الصلاحيات الصلاحيات </p>
 


                </div>

                <div class='mt-5'>
                <div className='d-flex' style={{}}>
    <h5 class='ms-5'style={{fontWeight:'bold',paddingLeft:33}}>سياسة الاستخدام      </h5>
    <div className='d-flex' style={{marginRight:60}}>
    <i  class="ms-5 me-5 fa fa-plus-circle" aria-hidden="true" style={{fontsize:18,color:'#175960',}}></i>
      <i class="fa fa-pen" aria-hidden="true" style={{fontsize:18,color:'#175960',marginRight:22}}></i>
      </div>
    
      </div>
      <p>الصلاحيات الصلاحيات الصلاحيات الصلاحيات </p>
      <p>الصلاحيات الصلاحيات الصلاحيات الصلاحيات </p>
      <p>الصلاحيات الصلاحيات الصلاحيات الصلاحيات </p>


                </div>
            </div>

            <div className='col-sm-12 col-md-6 col-lg-6'>
                <div className=''>
                <form>
  <div class="mb-3">
<label style={{fontWeight:'bold',fontSize:19}} className='mb-2'>كود الخصم 
<span> <i  class="ms-5 me-5 fa fa-plus-circle" aria-hidden="true" style={{fontsize:18,color:'#175960',marginRight:55}}></i></span>
</label>
    <input type="text" class="form-control input"/>
  </div>


</form>
                </div>
            </div>
           
        </div>
        <div className='text-center px-5'>
        <form>

  <button type="submit" class="btn text-center  w-50 text-white fw-bold" style={{backgroundColor:'#175960',fontWeight:'bold'}}>ارســال</button>
  </form>


 </div>
      </div>
    </div>
  )
}
