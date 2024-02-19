import React from "react";
import './founder.css';
import phanisir from '../images/phanisir.png'



function Founder() {
    return (
         <div className="founder-div">
            <div className="text-center">
            <img src={phanisir} className="phanisir-img"/>
            <h1 className="phanisir-name">PHANIRAJ JALIGAMA<br/><span>CEO </span></h1>
            </div>
            <p className="founder-details">Aja Consulting Services LLP was founded in 2022 by Mr. Phaniraj Jaligama a serial entrepreneur and successful businessman along with Ms. Srilatha Kusumba, a software professional with 20+ years of experience.<br/> 
            Phaniraj jaligama, CEO comes with 25+ years of experience in diversified industries like Government, Administration, IT services, IT products and IT Captives. He has served in key roles in TCS, Cognizant and TIBCO software.  He has bootstrapped an IT services
            company and built it from 2 resources to 700+ resources in the capacity of CEO.  
            He is a motivational speaker and mentor. Phaniraj has done his Post Graduate Diploma in Business from Pune University.
            <br/>Ms. Srilatha Kusumba comes with 20+ years of experience in software industry and worked with top IT MNCs in testing domain.  Currently she is working out of USA.  Srilatha has done her Masters in Computer Applications from Kakatiya University.
</p>      
         </div>
    );
  }
  
  export default Founder;