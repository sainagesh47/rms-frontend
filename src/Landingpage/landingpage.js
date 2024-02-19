import React from 'react';
import './landingpage.css'
import { Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../images/logo2.png';
import silde1 from '../images/Asset21.png';
import silde2 from '../images/silde2.png';
import silde3 from '../images/Asset12.png'
import Founder from '../Founder/founder';
import Client from '../Cilents/client';


function Landingpage() {
  return (
    <div className='container'>
      <div className='row'>
        <div>
        {/* <div className='top-session col-12 d-flex justify-content-between'>
      <img src={logo} className='img'/>
      <div className='mt-4'>
        <Link to="/login">
            <button className="m-2 login-btn">Login</button>
        </Link>
        <Link to="/register">
            <button className='m-2 register-btn'>Register</button>
        </Link>
      </div>
      </div> */}
      {/* <div>
      <Navbar bg="light" expand="lg" className='navdiv'>
      
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className="ml-auto">
        <Nav>
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#about">About</Nav.Link>
          <Nav.Link href="#services">Services</Nav.Link>
          <Nav.Link href="#contact">Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
      
    </Navbar>
      </div> */}
      <div className='top-session col-12 d-flex justify-content-between mt-5'>
      <h1 className='text-center main-heading'>Resource Management System</h1>
       <div>
        <Link to="/login">
            <button className="m-2 login-btn">Login</button>
        </Link>
        <Link to="/register">
            <button className='m-2 register-btn'>Register</button>
        </Link>
      </div>
      </div>
       
       <div className='carousel-div'>
       <Carousel>
      <Carousel.Item>
        <div className='d-flex flex-row'>
        <img
          className="d-block carousel-img w-50 m-5"
          src={silde1}
          alt="First slide"
        />
        <div className='text-center m-2 d-flex flex-column justify-content-center w-50'>
        <h1 className='carousel-heading'>IT Services</h1>
        <p className='para-carsl'>AJA helps you transforming your business requirements into a scalable and reliable Digital Application by using cutting edge technologies.</p>
        </div>

        </div>
      </Carousel.Item>
      <Carousel.Item>
      <div className='d-flex flex-row'>
        <img
          className="d-block carousel-img w-50 m-5"
          src={silde2}
          alt="First slide"
        />
        <div className='text-center m-2 d-flex flex-column justify-content-center w-50'>
        <h1 className='carousel-heading'>Resource Augmentation Services </h1>
        <p className='para-carsl'>We understand the dynamic requirements of IT Companies to fulfil their Project needs and meet the Customer deadlines or expectations within their budget.</p>
       </div>

        </div>
      </Carousel.Item>
      <Carousel.Item>
      <div className='d-flex flex-row'>
        <img
          className="d-block carousel-img w-50 m-5 silde3"
          src={silde3}
          alt="First slide"
        />
        <div className='text-center m-2 d-flex flex-column justify-content-center w-50'>
        <h1 className='carousel-heading'>Interns Pool</h1>
        <p className='para-carsl'>All the Internally groomed Freshers will be at disposal for our Premium Customers to hire as Interns in their Projects for 3-6 Months.  We provide our resources...</p>
       

        </div>

        </div>
      </Carousel.Item>
    </Carousel>      
       </div>
       <div className='d-flex flex-row'>
        <div className='w-50'>
        <Founder/>
        </div>
        <div className='w-50'>
        <Client/>
        </div>
          
          
       </div>
        </div>
      
      
    
      </div>
    </div>
   
  );
}

export default Landingpage;