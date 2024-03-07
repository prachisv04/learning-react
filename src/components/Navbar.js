export default function Navbar(props) {
    return (
     <>
     
     <nav id="top-navigation" class="menuNav">
      <div class="navbar navbar-expand-lg pt-4 " >
        <div class="d-flex justify-content-between">
        <a href="/" class="brand text-decoration-none d-block d-lg-none fw-bold fs-1"> UPSKILL </a>
        
        <button id="navbarCollapse" type="button" class="btn btn-light bg-white  rounded-pill shadow-sm px-4 mb-4 float-right"><i class="fa fa-bars mr-2"></i><small class="text-uppercase font-weight-bold">MENU</small></button>

        </div>
        <div class="container-fluid">
        
    <div  id="menu">
            <ul id="nav-length" class="navbar-nav justify-content-between border-top border-2 text-center">
              <li class="nav-item">
                <a href="/" class="nav-link border-hover py-3 text-white">Home</a>
              </li>
              <li class="nav-item">
                <a href="/" class="nav-link border-hover py-3 text-white active">Courses</a>
              </li>
              <li class="nav-item">
                <a href="/" class="nav-link border-hover py-3 text-white">Practice</a>
              </li>
              <li class="nav-item">
                <a href="/" class="nav-link border-hover py-3 text-white">About</a>
              </li>
              <li class="nav-item">
                <a href="/" class="nav-link border-hover py-3 text-white">Contact</a>
              </li>
              <li class="nav-item">
                <a href="/" id="sign-in" class="nav-link my-2 px-4 text-white">
                  <img class="mx-3" src="./person-circle.svg" alt="person-circle icon" />
                  Sign In
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
     </nav>
     </>
    );
  }