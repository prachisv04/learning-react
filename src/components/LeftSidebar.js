import React from 'react'

export default function LeftSidebar(props) {
  return (
    <>
   
<div class="vertical-nav bg-white" id="sidebar">
  <p class="text-gray font-weight-bold text-uppercase py-3 px-3 small pb-4 mb-0">Introduction</p>

  <ul class="nav flex-column bg-white mb-0">
    <li class="nav-item">
      <a href="/" class="nav-link text-dark font-italic bg-light">
                <i class="fa fa-th-large mr-3 text-primary fa-fw"></i>
                What is Java?
            </a>
    </li>
    <li class="nav-item">
      <a href="/" class="nav-link text-dark font-italic">
                <i class="fa fa-address-card mr-3 text-primary fa-fw"></i>
                How is Java ?
            </a>
    </li>
    <li class="nav-item">
      <a href="/" class="nav-link text-dark font-italic">
                <i class="fa fa-cubes mr-3 text-primary fa-fw"></i>
                Who is java ?
            </a>
    </li>
    <li class="nav-item">
      <a href="/" class="nav-link text-dark font-italic">
                <i class="fa fa-picture-o mr-3 text-primary fa-fw"></i>
                Why is Java?
            </a>
    </li>
  </ul>

  <p class="text-gray font-weight-bold text-uppercase px-3 small py-4 mb-0">Charts</p>

  <ul class="nav flex-column bg-white mb-0">
    <li class="nav-item">
      <a href="/" class="nav-link text-dark font-italic">
                <i class="fa fa-area-chart mr-3 text-primary fa-fw"></i>
                Area charts
            </a>
    </li>
    <li class="nav-item">
      <a href="/" class="nav-link text-dark font-italic">
                <i class="fa fa-bar-chart mr-3 text-primary fa-fw"></i>
                Bar charts
            </a>
    </li>
    <li class="nav-item">
      <a href="/" class="nav-link text-dark font-italic">
                <i class="fa fa-pie-chart mr-3 text-primary fa-fw"></i>
                Pie charts
            </a>
    </li>
    <li class="nav-item">
      <a href="/" class="nav-link text-dark font-italic">
                <i class="fa fa-line-chart mr-3 text-primary fa-fw"></i>
                Line charts
            </a>
    </li>
  </ul>
</div>

    </>
  )
}
