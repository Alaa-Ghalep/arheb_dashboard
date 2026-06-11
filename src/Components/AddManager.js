import React from 'react'
import '../Style/Mystyle.css';
export default function AddManager() {
  return (
    <div className='container-fluid'>
      <div className='container pt-3 mb-5'>
      <h3 className='mb-4' style={{fontWeight:'bold'}}>ادارة مدير التطبيق/اضافة مدير</h3>
        <div className='row'>
            <div className='col-sm-12 col-md-6 col-lg-6'>
                <div className=''>
                <form>
  <div class="mb-3">
<label className='mb-2'>الاسم</label>
    <input type="text" class="form-control input"/>
  </div>
  <div class="mb-3">
<label className='mb-2'>العنوان</label>

    <input type="text" class="form-control input" />
  </div>

  <div class="mb-3 k">
    <h5>الصلاحيات</h5>
    <div className='mb-3'>

    <input type="checkbox" className=""/>
    <label class=""> اضافة صلاحيات </label>
    </div>
    <div className='mb-3'>

<input type="checkbox" className=""  />
<label class="form-check-label"> اضافة صلاحيات </label>
</div> <div className='mb-3'>

<input type="checkbox" className="ms-3" />
<label class="form-check-label"> اضافة صلاحيات </label>
</div> <div className='mb-3'>

<input type="checkbox" className="ms-3" />
<label class="form-check-label"> اضافة صلاحيات </label>
</div> <div className='mb-3'>

<input type="checkbox" className="ms-3" />
<label class="form-check-label"> اضافة صلاحيات </label>
</div> <div className='mb-3'>

</div>

  </div>
</form>
                </div>
            </div>

            <div className='col-sm-12 col-md-6 col-lg-6'>
                <div className=''>
                <form>
  <div class="mb-3">
<label className='mb-2'>رقم الجوال</label>
    <input type="text" class="form-control input"/>
  </div>
  <div class="mb-3">
<label className='mb-2'>البريد الاكتروني</label>

    <input type="email" class="form-control input" />
  </div>
  <div class="mb-3">
<label className='mb-2'> انشاء كلمة مرور</label>

    <input type="password" class="form-control input" />
  </div>


</form>
                </div>
            </div>
           
        </div>
        <div className='text-center px-5'>
  <button type="submit" class="btn text-center  w-25 text-white fw-bold" style={{backgroundColor:'#175960',fontWeight:'bold'}}>ارســال</button>


 </div>
      </div>
    </div>
  )
}
