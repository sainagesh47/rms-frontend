import React from "react";
import './contact.css'
import loc from '../images/locname.png'
import loc2 from '../images/locname2.png'


function Contact() {
    return (
          <div className="contactus-div">
            <p className="main-heading-contact">AJA Global Locations</p>
            <div className="d-flex flex-row">
            <h1 className="contact-loc">INDIA</h1>
            <img src={loc} className="locname"/>
            </div>
            
            <p className="para-contact">Aja Consulting Services LLP
                9th Floor, Block B, MJR Magnifique, 
                Raidurgam, Prashant Hills, Hyderabad, 
                Telangana 500008</p>
                <div className="d-flex flex-row">
            <h1 className="contact-loc">USA</h1>
            <img src={loc} className="locname"/>
            </div>
            <p className="para-contact">Aja Consulting Services INC
                838 Garden Street, Milpitas 95035 CA</p>
            <h1 className="main-heading-contact startup">#startupindia</h1>
            <p className="para-contact">DPIIT Recongnised Start Up<br/>Certificate No: DIPP151459</p>
            <p className="copyrights-contact mt-5">©2022 AJACS LLP, INC. All rights reserved</p>
          </div>
    );
  }
  
  export default Contact;