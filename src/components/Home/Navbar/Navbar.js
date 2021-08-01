import React from 'react';

const Navbar = () => {
    return (
      <nav class="navbar navbar-expand-sm me-auto navbar-light">
  <div class="container-fluid ml-auto ">
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0 fs-4 ">
        <li class="nav-item">
          <a class="nav-link  active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link  ms-5  " href="#">About</a>
        </li>
        <li class="nav-item">
          <a class="nav-link ms-5 text-grey" href="#">Dental service</a>
        </li>
        <li class="nav-item">
          <a class="nav-link ms-5 text-white" href="#">Review</a>
        </li>
        <li class="nav-item">
          <a class="nav-link ms-5 text-white" href="#">Blog</a>
        </li>
        <li class="nav-item">
          <a class="nav-link ms-5 text-white " href="#">Contact Us</a>
        </li>
        
      </ul>
     
    </div>
  </div>
</nav>
       
    );
};

export default Navbar;