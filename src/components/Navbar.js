export default function Navbar(props) {
    return (
     <>
     
     <nav>
      <div class="navbar navbar-expand-lg pt-4 " >
        <a href="/" class="brand text-decoration-none d-block d-lg-none fw-bold fs-1"> UPSKILL </a>
      
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul id="nav-length" class="navbar-nav justify-content-between border-top border-2 text-center">
             <div class="py-2 px-3 mb-4 bg-light d-lg-none" id="profile">
              <div class="media d-flex align-items-center"><img src="https://bootstrapious.com/i/snippets/sn-v-nav/avatar.png" alt="..." width="65" class="mr-3 rounded-circle img-thumbnail shadow-sm" />
                <div class="media-body">
                  <h4 class="m-0 text-dark">Prachi Vavhal</h4>
                  <p class="font-weight-light text-muted mb-0">Full Stack Developer</p>
                </div>
              </div>
            </div> 
              <li class="nav-item">
                <a href="/" class="nav-link border-hover ">Home</a>
              </li>
              <li class="nav-item">
                <a href="/" class="nav-link border-hover active">Courses</a>
              </li>
              <li class="nav-item">
                <a href="/" class="nav-link border-hover ">Practice</a>
              </li>
              <li class="nav-item">
                <a href="/" class="nav-link border-hover ">About</a>
              </li>
              <li class="nav-item">
                <a href="/" class="nav-link border-hover ">Contact</a>
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
      
     </nav>
     </>
    );
  }