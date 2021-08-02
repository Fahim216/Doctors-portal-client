import React from 'react';

const Navbar = () => {
    return (
      <nav class="navbar navbar-expand-sm me-auto navbar-light">
  <div class="container-fluid ml-auto ">
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0 fs-4 ">
        <li class="nav-item">
          <a class="nav-link  active" aria-current="page" href="/home">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link  ms-5  " href="/about">About</a>
        </li>
        <li class="nav-item">
          <a class="nav-link ms-5 text-grey" href="/dental service">Dental service</a>
        </li>
        <li class="nav-item">
          <a class="nav-link ms-5 text-white" href="/review">Review</a>
        </li>
        <li class="nav-item">
          <a class="nav-link ms-5 text-white" href="/blog">Blog</a>
        </li>
        <li class="nav-item">
          <a class="nav-link ms-5 text-white " href="/contact">Contact Us</a>
        </li>
        
      </ul>
     
    </div>
  </div>
</nav>
       
    );
};

export default Navbar;