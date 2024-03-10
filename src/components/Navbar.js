import { useState } from "react"
import SubMenu from './SubMenu'
import { Link } from 'react-router-dom'
export default function Navbar(props) {
  const ImgstyleLogo = {
    height:"50px",
    width:"50px",
    borderRadius:"25px"
  }
    const Imgstyle = {
      height:"25px",
      width:"25px",
      borderRadius:"25px"
    }
    const[SubMenuItems , setMenuItems] = useState([]);
    const [UserDetails,SetUserDetails] = useState({
      status: "Logout",
      userName : "User",
      imgurl : "./person-circle.svg"
    })

    function showProfile(){
      if(UserDetails.status==='Logout'){
        SetUserDetails({
          status: "Login",
          userName : "Prachi vavhal",
          imgurl : '/avtar/Repunzel.jpg'
        });
      }
      else
      {
        SetUserDetails({
          status: "Logout",
          userName : "User",
          imgurl : "./person-circle.svg"
        });
      } 
    }  
    function showContact(){
      setMenuItems(null);
      document.getElementById("home").classList.remove("active");
      document.getElementById("courses").classList.remove("active");
      document.getElementById("practice").classList.remove("active");
      document.getElementById("about").classList.remove("active");
      document.getElementById("contact").classList.add("active");
    }
    function showAbout(){
      setMenuItems([]);
      document.getElementById("home").classList.remove("active");
      document.getElementById("courses").classList.remove("active");
      document.getElementById("practice").classList.remove("active");
      document.getElementById("about").classList.add("active");
      document.getElementById("contact").classList.remove("active");
    }
    function showHome(){
      setMenuItems([]);
      document.getElementById("home").classList.add("active");
      document.getElementById("courses").classList.remove("active");
      document.getElementById("practice").classList.remove("active");
      document.getElementById("about").classList.remove("active");
      document.getElementById("contact").classList.remove("active");
    }
    function showCourses() {
      setMenuItems(['Core Java','Advanced Java','Data Structures','Spring Boot','React.JS','Hibernate','GCP','AWS']);
      document.getElementById("home").classList.remove("active");
      document.getElementById("courses").classList.add("active");
      document.getElementById("practice").classList.remove("active");
      document.getElementById("about").classList.remove("active");
      document.getElementById("contact").classList.remove("active");

    }
    function showPractice() {
      setMenuItems(['Array','String','Data Structures','DP','SQL']);
      document.getElementById("home").classList.remove("active");
      document.getElementById("courses").classList.remove("active");
      document.getElementById("practice").classList.add("active");
      document.getElementById("about").classList.remove("active");
      document.getElementById("contact").classList.remove("active");
    }
    return (
     <>
     <nav className="py-3">
      <div className="navbar navbar-expand-lg pt-4" >
        <a href="/" className="brand text-decoration-none d-block d-lg-none fw-bold fs-1"> UPSKILL </a>
      
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

        <div className="collapse navbar-collapse " id="navbarSupportedContent">
            <ul id="nav-length" className="navbar-nav justify-content-between border-top border-2 text-center">
             <div className="py-2 px-3 mb-4 bg-light d-lg-none" id="profile">
              <div className="media d-flex align-items-center"><img src="https://bootstrapious.com/i/snippets/sn-v-nav/avatar.png" alt="..." width="65" className="mr-3 rounded-circle img-thumbnail shadow-sm" />
                <div className="media-body">
                  <h4 className="m-0 text-dark">Prachi Vavhal</h4>
                  <p className="font-weight-light text-muted mb-0">Full Stack Developer</p>
                </div>
              </div>
            </div> 
              <li className="nav-item">
                <a href="/" className="nav-link border-hover" id="logo"><img src="favicon.ico" alt="UPSKILL" style={ImgstyleLogo}  /></a>
              </li>
              <li className="nav-item">
                <Link to='/' className="btn bg-transparent nav-link border-hover text-white active" id="home" onClick={showHome}>Home</Link>
              </li>
              <li className="nav-item">
                <button className="btn bg-transparent nav-link border-hover text-white" id="courses" onClick={showCourses}>Courses</button>
              </li>
              <li className="nav-item">
              <button className="btn bg-transparent nav-link border-hover text-white" id="practice" onClick={showPractice}>Practice</button>
              </li>
              <li className="nav-item">
                <Link to="/about" className="btn bg-transparent nav-link border-hover text-white" id="about" onClick={showAbout}>About</Link>
              </li>
              <li className="nav-item">
                <a href="/" className="btn bg-transparent nav-link border-hover text-white" id="contact" onClick={showContact}>Contact</a>
              </li>
              <li className="nav-item">
                <button  id="sign-in" className="nav-link my-2 px-4 text-white btn-outline-light" onClick={showProfile}>
                  <img className="mx-2" src={UserDetails.imgurl} alt="person-circle icon" style={Imgstyle} />
                
                  {UserDetails.userName}
                 
                </button>
              </li>
              <li className="nav-item">
              <button  onClick={props.toggleMode} type='button' className={`nav-link btn bg-transparent btn-sm ${props.mode === 'dark' ? 'text-white': 'text-dark'}`}><i class={props.modeIcon}></i> { props.mode === 'light' ? 'Dark Mode' : 'Light Mode' } </button> 
              </li>
            </ul>
          </div>
        </div>
        
        <div className="container">
    
          <SubMenu list={SubMenuItems} />
           
        
        </div>
     </nav>
     </>
    );
  }