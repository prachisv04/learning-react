import React from 'react'
export default function LeftSidebar(props) {

  return (
    <>
  
<div className={`vertical-nav bg-light`} id="sidebar">

  <p className="text-gray font-weight-bold text-uppercase py-3 px-3 small pb-4 mb-0">Introduction</p>

  <ul className="nav flex-column bg-white mb-0">
    <li className="nav-item">
      <a href="/" className=" nav-link text-dark font-italic " >
              What is Java?
            </a>
    </li>
    <li className="nav-item">
      <a href="/" className="nav-link text-dark font-italic ">
                How is Java ?
            </a>
    </li>
    <li className="nav-item">
      <a href="/" className="nav-link text-dark font-italic">
               Who is java ?
            </a>
    </li>
    <li className="nav-item">
      <a href="/" className="nav-link text-dark font-italic">
                Why is Java?
            </a>
    </li>
  </ul>

  <p className="text-gray font-weight-bold text-uppercase px-3 small py-4 mb-0">Object Oriented Programming</p>

  <ul className="nav flex-column bg-white mb-0">
    <li className="nav-item">
      <a href="/" className="nav-link text-dark font-italic">
                <i className="fa fa-area-chart mr-3 text-primary fa-fw"></i>
                Class & Objects
            </a>
    </li>
    <li className="nav-item">
      <a href="/" className="nav-link text-dark font-italic">
                <i className="fa fa-bar-chart mr-3 text-primary fa-fw"></i>
                Polymorphism
            </a>
    </li>
    <li className="nav-item">
      <a href="/" className="nav-link text-dark font-italic">
                <i className="fa fa-pie-chart mr-3 text-primary fa-fw"></i>
                Inheritance
            </a>
    </li>
    <li className="nav-item">
      <a href="/" className="nav-link text-dark font-italic">
                <i className="fa fa-line-chart mr-3 text-primary fa-fw"></i>
                Abstraction
            </a>
    </li>
  </ul>
  <p className="text-gray font-weight-bold text-uppercase px-3 small py-4 mb-0">Object Oriented Programming</p>

<ul className="nav flex-column bg-white mb-4">
  <li className="nav-item">
    <a href="/" className="nav-link text-dark font-italic">
              <i className="fa fa-area-chart mr-3 text-primary fa-fw"></i>
              Class & Objects
          </a>
  </li>
  <li className="nav-item">
    <a href="/" className="nav-link text-dark font-italic">
              <i className="fa fa-bar-chart mr-3 text-primary fa-fw"></i>
              Polymorphism
          </a>
  </li>
  <li className="nav-item">
    <a href="/" className="nav-link text-dark font-italic">
              <i className="fa fa-pie-chart mr-3 text-primary fa-fw"></i>
              Inheritance
          </a>
  </li>
  <li className="nav-item">
    <a href="/" className="nav-link text-dark font-italic">
              <i className="fa fa-line-chart mr-3 text-primary fa-fw"></i>
              Abstraction
          </a>
  </li>
</ul>

<div id='justheight'>

</div>
   
  </div>
    </>
  )
}