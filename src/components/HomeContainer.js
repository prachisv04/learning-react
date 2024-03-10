import React, { useState } from 'react'
export default function HomeContainer(props) {
  const [CopyLabel,setCopyLabel] = useState("Copy");
  
      function copyText(){
        if(CopyLabel === "Copied"){
          setCopyLabel("Copy");
        }
         else{
          let text = document.getElementById("content").innerText;
          navigator.clipboard.writeText(text);
          setCopyLabel("Copied");
         }
         setTimeout(()=>{
            setCopyLabel("Copy");
          },5000)
      }
  return (
    <>
    <div className="page-content  " id="content" >
    <div className=" container d-flex justify-content-between" >
    <h2 className={`display-4 `}>{props.getTopic}</h2>
    {/* <button id="sidebarCollapse" type="button" className="btn btn-light bg-white rounded-pill shadow-sm px-4 mb-4"><small className="text-uppercase font-weight-bold">Index</small></button> */}
     <button  onClick={copyText} type='button'  className={`btn  bg-transparent rounded-pill shadow-0 px-4 mt-5 ${props.mode==='light'?'text-dark':'text-light'}`}><i className="bi bi-copy"> {CopyLabel}</i></button> 
  
  </div>
  <div className="separator"></div>

  <div className="row ">
    <div className="col-lg-6">
      <p className="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
        dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      <p className="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
        dolor.
      </p>
      <div className="bg-white p-5 rounded my-5 shadow-sm">
        <p className="lead font-italic mb-0 text-muted">"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
          irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
      </div>
      <p className="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
        dolor.
      </p>
      <p className="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
        dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      <p className="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
        dolor.
      </p>
    </div>
    <div className="col-lg-4">
      <p className="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
        dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      <p className="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
        dolor.
      </p>
      <p className="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
        dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      <p className="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
        dolor.
      </p>
    </div>
    
  </div>

<div class="sticky-icon">
 
   <a href="https://www.instagram.com/?hl=en" class="Instagram"><strong><i class="bi bi-instagram"></i> Instagram </strong></a>
   <a href="https://www.facebook.com/" class="Facebook"><strong><i class="bi bi-facebook"></i> Facebook</strong> </a>
   <a href="https://aboutme.google.com/u/0/?referer=gplus" class="Google"><strong><i class="bi bi-google"></i> Google</strong></a>
   <a href="https://www.youtube.com/" class="Youtube"><strong><i class="bi bi-youtube"></i> Youtube</strong> </a>
   <a href="https://twitter.com/login" class="Thread"><strong><i class="bi bi-threads"></i>Threads</strong> </a>   
   
</div>
  </div>
  
  </>
  )
}

