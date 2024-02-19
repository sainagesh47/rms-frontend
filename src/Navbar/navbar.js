import React from "react";
import './nav.css';
import { Navbar, Nav } from 'react-bootstrap';
import logo from '../images/logo2.png'



function NavbarRes() {
    return (
        <div>
        <Navbar expand="lg" className="shadow-lg nav-div mr-auto">
        <img src={logo} className='img'/>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="ml-auto">
          <Nav>
            <Nav.Link href="/employee-details" className="nav-heading">Employee Details</Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
        
        
      </Navbar>
        </div>
    );
  }
  
  export default NavbarRes;