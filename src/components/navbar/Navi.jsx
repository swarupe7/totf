import React from 'react';

import { Link } from 'react-router-dom';

const Navi = () => {
  return (

    
    <nav>
    <div class="container main-nav flex">
        <a href="#" class="company-logo">
            <div className="hover-links" style={{fontWeight:"700", fontSize:"20px"}}>TOTF</div>
        </a>
        <div class="nav-links">
            <ul class="flex">
                <li href="#about" class="hover-links">About</li>
                <li href="#features" class="hover-links">Features</li>
                <li href="#testimonals" class="hover-links">Testimonals</li>
                <li href="#resources" class="hover-links">Resources</li>
                <li href="#"class="hover-links secondary-button" style={{paddingTop:"15px"}}><Link to="/login">SignIn</Link></li>
                <li href="#" class="hover-links secondary-button" style={{paddingTop:"15px"}} > <Link to="/signup">Signup</Link> </li>
            </ul>
        </div>




    </div>
</nav>






  )
}

export default Navi;


{/* <Navbar bg="dark" data-bs-theme="dark">
<Container>
  <Navbar.Brand href="#home">TOTC</Navbar.Brand>
  <Nav className="me-auto" >
    <Nav.Link href="#home" style={{left:"550px"}}>Home</Nav.Link>
    <Nav.Link href="#features">Features</Nav.Link>
    <Nav.Link href="#pricing">Pricing</Nav.Link>
        
  </Nav>
</Container>
</Navbar> */}







 