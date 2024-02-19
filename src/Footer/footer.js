import React from "react";
import './footer.css'
import logo from '../images/logo2.png'
import { Link } from "react-router-dom";
import facebook from '../images/facebooklogo.jpg'
import insta from '../images/instalogo.jpg'
import linkedin from '../images/linkedinlogo.png'
import youtube from '../images/youtubelogo.png'

function Footer() {
    return (
      <div className="footer-div">      
        
         <footer >
          <div>
            
            <img src={logo} className='logo-aja'/>
            
             
             <h1 className="footer-main-heading">Lets Get In Touch!</h1>
             <p className="follow-footer">Follow Us</p>
             <div>
                <img src={facebook} className="follow-logo"/>
                <img src={insta}  className="follow-logo"/>
                <img src={youtube} className="follow-logo"/>
                <img src={linkedin} className="follow-logo"/>
                
             </div>
             <div>
             </div>
             <Link to="/contact-details">
                  <p>Contact Us</p>
             </Link>
          </div>
        </footer>
         
      </div>
    );
  }
  
  export default Footer;