import {react,useEffect} from'react';
import Loginstyle from'../Style/Loginstyle.css';
import imglogin from '../Images/imglogin.png';
import logo from '../Images/logo.png';
import i18n from 'i18next';
import Dashboard from '../Dashboard';
import { useNavigate } from 'react-router-dom';

import { Link, Route, Routes } from 'react-router-dom';
export default function Login() {
  useEffect(() => {
    const dir = i18n.dir(i18n.language);
    document.documentElement.dir = dir;
  }, [i18n, i18n.language]);


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
        <div class="card rounded-3 text-black">
          <div class="row g-0">
            <div class="col-lg-6">
              <div class="card-body p-md-5 mx-md-4">

                <div class="text-center">
                  <img id="imgg" src={logo}
                  alt="logo" style={{width:100}}/>
                  <h4 className="mt-2 mb-5 pb-1  fw-bold" style={{marginLeft:100,color:'#000',fontWeight:'bold'}}>تسجيل دخول</h4>
                </div>

                <form>

                  <div className="form-outline mb-4">
                  <label className="" style={{fontWeight:'bold'}}>الاسم</label>

                    <input type="text" id="form2Example11" class="form-control "
                    style={{backgroundColor:'#C9DDDF'}}
                    />
                  </div>

                  <div className="form-outline mb-4">
                  <label className="form-label" style={{fontWeight:'bold'}}>كلمة المرور</label>

                    <input type="password" id="form2Example22" className="form-control"       style={{backgroundColor:'#C9DDDF'}}/>
                  </div>

                  <div className="text-center pt-1 mb-5 pb-1">
              
                    <button   onClick={()=>navigateToConfirmed()} type="button" className="btn px-5 fw-bold  text-white"
                     style={{backgroundColor:'#2E7C84',fontWeight:'bold'}}> تسجيل دخول</button>
                  </div>

                </form>

              </div>
            </div>
            <div className="col-lg-6 d-flex align-items-center gradient-custom-2 ">
              {/* <div class="h-100 w-100 ">
                <img className='img-fluid w-100 h-100' src={imglogin}/>
              </div> */}
                                            
 
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
