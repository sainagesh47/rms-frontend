import React from "react";
import './client.css';
import client1 from '../images/client1.png'
import client2 from '../images/client2.png'
import client3 from '../images/client3.jpg'
import client4 from '../images/client4.png'
import client5 from '../images/client5.png'
import client6 from '../images/client6.png'



function Client() {
    return (
         <div className="client-div">
            <h1 className="client-main-heading mr-2">Our Clients</h1>
            
            <div className="client-logo ml-3 mt-3">
                <img src={client1} className="clientlogo"/>
                <img src={client2} className="clientlogo"/>
                <img src={client3} className="clientlogo"/>
                <img src={client4} className="clientlogo"/>
                <img src={client5} className="clientlogo"/>
                <img src={client6} className="clientlogo"/>

            </div>
            <p className="client-para">The heartbeat of every business, the canvas on which success is painted.</p>
            
            
            
         </div>
    );
  }
  
  export default Client;