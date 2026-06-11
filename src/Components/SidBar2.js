import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import ADM from './ADM'
import Sarvices from './Sarvices'
import Index from './Index'
import logo from'../Images/logo.png';
import Touristguides from './Touristguides'
import Tourists from './Tourists';
import AddManager from './AddManager'

export default function SidBar2() {
  return (
    <div>
       <div className='container-fluid'>
        <div className='row'>
            <div className='col-sm-1 col-md-1 col-lg-2 min-vh-100 bg-white shadow-sm '>
<div className=' d-md- d-lg-block d-xl-block block d-sm-none px-3 mb-2'>
  <img src={logo} className='logo' />
</div>
        <ul  className='' style={{listStyleType:'none'}}>
          <li>
            <Link to='/dashboard' className='nav-link px-2 text-black'>
              <i className='fa fa-home ' style={{fontSize:28}}/><span className='ms-1 d-none d-lg-inline ms-4 me-2'>لوحة التحكم</span>
            </Link>
          </li>
          <li>
            <Link to='/ADM' className='nav-link px-2 text-black'>
              <i className='fa fa-home' style={{fontSize:28}}/><span className='ms-1 d-none d-lg-inline ms-4 me-2'>ادارة مدير التطبيق</span>
            </Link>
          </li>
           <li >
            <Link to='/Sarvices' className='nav-link px-2 text-black'>
              <i className='fa fa-home ' style={{fontSize:28}}/><span className='ms-1 d-none d-lg-inline ms-4 me-2'>الخدمات</span>
            </Link>
          </li> 
          <li>
            <Link to='/Touristguides' className='nav-link px-2 text-black'>
              <i className='fa fa-home  ' style={{fontSize:28}}/><span className=' d-none d-lg-inline ms-5 me-1'>مرشدين سياحين</span>
            </Link>
          </li>
          
          <li>
            <Link to='/Tourists' className='nav-link px-2 text-black'>
              <i className='fa fa-home ' style={{fontSize:28}}/><span className='ms-1 d-none d-lg-inline  ms-4 me-2'> سائحين</span>
            </Link>
          </li>
        </ul>
</div>

<div className='col-sm-11 col-xsm-11 col-md-11 col-lg-10'>
  <Routes>
   
    <Route path="/dashboard" exact element={<Index/>}></Route>

    <Route path="/ADM" exact element={<ADM/>}></Route>
    <Route path="/Sarvices" exact element={<Sarvices/>}></Route>
    <Route path="/Touristguides" exact element={<Touristguides/>}></Route>
    <Route path="/Tourists" exact element={<Tourists/>}></Route>
    <Route path="/AddManager" exact element={<AddManager/>}></Route>





  </Routes>
</div>
</div>
</div>

</div>

  )
}
