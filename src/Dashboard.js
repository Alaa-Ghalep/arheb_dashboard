import React, { useState } from 'react';
import './Dashboard.css';
import ADM from'./Components/ADM.js';
import Sarvices from'./Components/Sarvices.js';
import AddManager from'./Components/AddManager.js';
import Tourists from'./Components/Tourists.js';
import Touristguides from'./Components/Touristguides.js';
import Controlpanel from'./Components/Controlpanel.js';
import HotelDetails from'./Components/HotelDetails.js';
import GuideDetails from'./Components/GuideDetails.js';
import Settings from'./Components/Settings.js';
import Notification from'./Components/Notification.js';
import Login from'./Components/Login.js';
import logo from'./Images/logo.png';
import icon_messages from'./Images/icon_messages.svg';
import icon_notifications from'./Images/icon_notifications.svg';
import icon_settings from'./Images/icon_settings.svg';
import icon_home from'./Images/icon_home.svg';
import icon_app_management from'./Images/icon_app_management.svg';
import icon_services from'./Images/icon_services.svg';
import { Link, Route, Routes } from 'react-router-dom';
import icon_search from'./Images/icon_search.svg';
import icon_tourists from'./Images/icon_tourists.svg';
import icon_tour_guides from'./Images/icon_tour_guides.svg';
import { useNavigate } from 'react-router-dom';
import {react,useEffect} from'react';


import './Dashboard.css';

function Dashboard() {
      useEffect(() => {
      navigate("/Dashboard");
    
  }, []);
  
    const navigate = useNavigate();

    const navigateToConfirmed= () =>{
      navigate(`/Settings`);
   }
   const CountSittingDisplaynone=()=>{
  var a= document.getElementById('countsetting');
  a.classList.add('d-none');
   }

   const CountNotiDisplaynone=()=>{
    var b= document.getElementById('countNoti');
    b.classList.add('d-none');
     }  
      const CountCommentDisplaynone=()=>{
        var c= document.getElementById('countComment');
        c.classList.add('d-none');
         }
   
    const [style, setStyle] = useState("navbar-nav bg-white sidebar sidebar-dark accordion");

    const changeStyle = () => {
        if (style == "navbar-nav bg-white sidebar sidebar-dark accordion")
        {
            setStyle("navbar-nav bg-white sidebar sidebar-dark accordion toggled");
        }
        else{
            setStyle("navbar-nav bg-white sidebar sidebar-dark accordion")
        }
    };
    const changeStyle1 = () => {
        if (style == "navbar-nav bg-white sidebar sidebar-dark accordion")
        {
            setStyle("navbar-nav bg-white sidebar sidebar-dark accordion toggled1");
        }
        else{
            setStyle("navbar-nav bg-white sidebar sidebar-dark accordion")
        }
    };

    return (
        <div>
            <body id="page-top">

                {/*  <!-- Page Wrapper --> */}
                <div id="wrapper">

                    {/*  <!-- Sidebar --> */}
                    <ul className={style} id="accordionSidebar" style={{paddingInlineStart:0}}>

                        {/*  <!-- Sidebar - Brand --> */}
                     

                        <div className='  d-md-inline text-center mt-3  '>
                            <Link to='/'>
                            <img src={logo} className='w-50 logo ' style={{marginBottom:22,marginLeft:55}} />
                            </Link>
                            </div>


                        {/*  <!-- Nav Item - Dashboard --> */}
                        <li className="nav-item active hoverbg" >
                            <Link className="nn"  to="/">
                            <img src={icon_home} className='iconn' style={{width:22}}/>
                                <span className='d-md-inline mm'>لوحة التحكم</span></Link>
                        </li>


                        <li className="nav-item active hoverbg" >
                            <Link className="nn"  to="/ADM">
                            <img src={icon_app_management} className='iconn' style={{width:22}}/>
                                <span className=' d-md-inline mm' 
                                style={{
                                    marginRight: 10
                                }}> ادارة مدير التطبيق</span></Link>
                        </li>
                        <li className="nav-item active hoverbg" >
                            <Link className="nn"  to="/Sarvices">
                            <img src={icon_services} className='iconn' style={{width:22}}/>
                                <span className=' d-md-inline mm'>الخدمات </span></Link>
                        </li>
                        <li className="nav-item active hoverbg" >
                            <Link className="nn"  to="/Touristguides">
                            <img src={icon_tour_guides} className='iconn' style={{width:22}}/>
                                <span className=' d-md-inline mm'>مرشدين سياحين </span></Link>
                        </li>
                        <li className="nav-item active hoverbg" >
                            <Link className="nn"  to="/Tourists">
                            <img src={icon_tourists} className='iconn' style={{width:22}}/>
                                <span className=' d-md-inline mm'> سائحين</span></Link>
                        </li>

















                  
                        
                    </ul>
                    {/*  <!-- End of Sidebar --> */}

                    {/*  <!-- Content Wrapper --> */}
                    <div id="content-wrapper" className="d-flex flex-column">

                        {/*  <!-- Main Content --> */}
                        <div id="content">

                            {/*  <!-- Topbar --> */}
                            <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">

                                {/*  <!-- Sidebar Toggle (Topbar) --> */}
                                <button id="sidebarToggleTop" className="btn btn-link d-md-none rounded-circle mr-3" onClick={changeStyle1}>
                                    <i className="fa fa-bars" style={{color:'#2E7C84'}}></i>
                                </button>

                                {/*  <!-- Topbar Search --> */}
                              
                                <form
                                    className="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
                                    <div className="input-group">
                                    {/* <div className="input-group-append">
                                         
                                        </div> */}
                                        {/* <button className="btn btn-primary" type="button"> */}
                                        <img src={icon_search}  style={{width:16,position:'absolute',right:33,top:7,zIndex:1}}/>
                                            {/* </button> */}
                                        <input type="search" className="form-control inputsearch bg-light border-0 small" 
                                            aria-label="Search" aria-describedby="basic-addon2"
                                            style={{borderRadius:20,position:'relative'}} />
                                     
                                    </div>
                                </form>

                                {/*  <!-- Topbar Navbar --> */}
                                <ul className="navbar-nav ml-auto">

                                    {/*  <!-- Nav Item - Search Dropdown (Visible Only XS) --> */}
                                    <li className="nav-item dropdown no-arrow d-sm-none">
                                        <a className="nav-link dropdown-toggle" href="#" id="searchDropdown" role="button"
                                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <i className="fas fa-search fa-fw"></i>
                                        </a>
                                        {/*   <!-- Dropdown - Messages --> */}
                                        <div className="dropdown-menu dropdown-menu-right p-3 shadow animated--grow-in"
                                            aria-labelledby="searchDropdown">
                                            <form className="form-inline mr-auto w-100 navbar-search">
                                                <div className="input-group">
                                                <div className="input-group-append">
                                                        <button className="btn btn-primary" type="button">
                                                            <i className="fas fa-search fa-sm "></i>
                                                        </button>
                                                    </div>
                                                    <input type="search" className="form-control bg-light border-0 small"
                                                        placeholder="ابحث هنا..." aria-label="Search"
                                                        aria-describedby="basic-addon2" />
                                                 
                                                </div>
                                            </form>
                                        </div>
                                    </li>

                                   {/*  <!-- Nav Item - Alerts --> */}
                                   <li className="nav-item dropdown no-arrow mx-lg-2 mx-sm-1 mx-xs-1"
                                   
                                   onClick={()=>CountCommentDisplaynone()}>
                                        <a className="nav-link dropdown-toggle" href="#" id="alertsDropdown" role="button"
                                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            {/* <i className="fas fa-bell fa-fw"></i> */}
                                            <img src={icon_messages}/>
                                            
                                            {/*  <!-- Counter - Alerts --> */}
                                            <span className="badge badge-success badge-counter" 
                                            id="countComment">3+</span>
                                        </a>
                                        {/*   <!-- Dropdown - Alerts --> */}
                                     
                                    </li>



                                    {/*  <!-- Nav Item - Messages --> */}
                                    <li className="nav-item dropdown no-arrow mx-sm-1 mx-xs-1"
                                    onClick={()=>CountNotiDisplaynone()}>
                                        <Link to='/Notification2' className="nav-link dropdown-toggle" href="#" id="messagesDropdown" role="button"
                                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            {/* <i className="fas fa-envelope fa-fw"></i> */}
                                            <img src={icon_notifications}/>
                                            {/*  <!-- Counter - Messages --> */}
                                            <span className="badge badge-success badge-counter" id="countNoti">7</span>
                                        </Link>
                                        {/*   <!-- Dropdown - Messages --> */}
                                    
                                    </li>
                                    
                                    <li className="nav-item dropdown no-arrow mx-sm-1 mx-xsm-1"
                                     onClick={()=>CountSittingDisplaynone()}
                                  >
                                        <Link  to='/Settings'
                                        className="nav-link dropdown-toggle" href="#" id="alertsDropdown" role="button"
                                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            {/* <i className="fas fa-bell fa-fw"></i> */}
                                            <img src={icon_settings}/>
                                            
                                            {/*  <!-- Counter - Alerts --> */}
                                            <span className="badge badge-danger badge-counter" id="countsetting">3+</span>
                                        </Link>
                                        {/*   <!-- Dropdown - Alerts --> */}
                                     
                                    </li>

                            

                                </ul>

                                <div class="dropdown no-arrow imgg" role="search">
     
        <a className="nav-link dropdown-toggle" href="#" role="button"
                                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <span className="mr-2 d-none d-lg-inline text-dark" style={{fontWeight:'bold',marginLeft:16}}> Ricardo Gomez</span>
                                            {/* <span>Superadmin</span> */}
                                            <img className="img-profile rounded-circle  d-none d-lg-inline "
                                                src="img/undraw_profile.svg" />
                                        </a>
                                     
                                 </div>
                            </nav>
                            {/*  <!-- End of Topbar --> */}

                            {/* <!-- Begin Page Content --> */}
                            <div className="container-fluid">

                             
                              
       <Routes>
   <Route path="/" exact element={<Controlpanel/>}></Route>
   <Route path="/Dashboard" exact element={<Controlpanel/>}></Route> 
   <Route path="/ADM" exact element={<ADM/>}></Route>
   <Route path="/Sarvices" exact element={<Sarvices/>}></Route>
   <Route path="/AddManager" exact element={<AddManager/>}></Route>
   <Route path="/Touristguides" exact element={<Touristguides/>}></Route>
   <Route path="/Tourists" exact element={<Tourists/>}></Route>
   <Route path="/HotelDetails" exact element={<HotelDetails/>}></Route>
   <Route path="/GuideDetails" exact element={<GuideDetails/>}></Route>
   <Route path="/Settings" exact element={<Settings/>}></Route>
 </Routes> 
                 
                 
                 
                            </div>
                            {/*   <!-- /.container-fluid --> */}

                        </div>
                        {/*   <!-- End of Main Content -->

                  
                 


                        {/* <!-- End of Footer --> */}

                    </div>
                    {/*  <!-- End of Content Wrapper --> */}

                </div>
                {/*  <!-- End of Page Wrapper -->

                                <!-- Scroll to Top Button--> */}
                <a className="scroll-to-top rounded" href="#page-top">
                    <i className="fas fa-angle-up"></i>
                </a>

            </body>
        </div>
    )
}

export default Dashboard;
