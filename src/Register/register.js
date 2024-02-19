import React, { useEffect, useState } from "react";
import './register.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";


function Register(){
    const [userinfo, setuserinfo] = useState({
        name:"",
        userName:"",
        password:"",
        dateOfJoining:"",
        noOfDaysInCompany:null,
        designation:"",
        reportingManager:"",
        previousClient:"",
        noOfDaysInBench:null,
        technology:"",
        phoneNumber: null,
        emailId:"",
        currentAddress:"",
        permanentAddress:"",
        laptopStatus:""
    })

 
    const postData = async () => {
     console.log(userinfo)
        // try {
        //     const response = await fetch('http://localhost:8080/saveEmployee', {
        //         method: 'POST',
        //         headers: {
        //             'Content-Type': 'application/json',
        //         },
        //         body: JSON.stringify(userinfo),
        //     });
         
        //     if (response.ok) {
                
                
        //         const data = await response.json();
        //         console.log(data);
        //     } else {
        //         console.error('Error:', response.status, response.statusText);
        //     }
        // } finally{
            
        // }
    };

       

    const handleChange = (e) => {
        const { name, value } = e.target;
        setuserinfo(prevUserInfo => ({
            ...prevUserInfo,
            [name]: value
        }));
    };

    const handleSubmit =()=>{
        postData()
        
    }
    


    
    return(
    <div className="d-flex  justify-content-center container">
        <div className="cardform m-3 p-5 row">
        <div className='col-12'>
            <form className="form-div"> 
                <div>
                    <label htmlFor="name">Name</label>
                    <input type='text' id="name"  name="name" className="input-ele" onChange={handleChange} value={userinfo.name}/>
                    <label htmlFor="username">Username</label>
                    <input type='email' id="username"  name="userName" className="input-ele" onChange={handleChange} value={userinfo.userName}/>
                    <label htmlFor="password">Password</label>
                    <input type='password' id="password"  name="password" className="input-ele" onChange={handleChange} value={userinfo.password}/>
                    <label htmlFor="dateofjoin">Date of Join</label>
                    <input type='date' id="dateofjoin"  name="dateOfJoining" className="input-ele" onChange={handleChange} value={userinfo.dateOfJoining}/>
                    <label htmlFor="previousClient">Previous Client</label>
                    <input type='text' id="previousClient"  name="previousClient" className="input-ele" onChange={handleChange} value={userinfo.previousClient} />
                </div>
                <div className="second-form">
                 <label htmlFor="noOfDaysInBench">No of Days in Bench</label>
                <input type='text' id="noOfDaysInBench"  name="noOfDaysInBench" className="input-ele" onChange={handleChange} value={userinfo.noOfDaysInBench} />
                <label htmlFor="technology">Technology</label>
                <select name="technology" id="technology"  className="input-ele"  onChange={(e) => {
                                                    setuserinfo((prevUserInfo) => ({
                                                    ...prevUserInfo,
                                                    qualifications: e.target.value,
                                                    }));
                                                }}>
                       <option ></option>
                        <option >Java</option>
                        <option >Python</option>
                        <option >ReactJS</option>
                        <option >DevOps</option>
                        <option >.Net</option>
                                                
                    </select>
                <label htmlFor="phoneNumber">Phone Number</label>
                <input type='text' id="phoneNumber"  name="phoneNumber" className="input-ele" onChange={handleChange} value={userinfo.phoneNumber} />
                <label htmlFor="emailId">Email ID</label>
                <input type='text' id="emailId"  name="emailId" className="input-ele" onChange={handleChange} value={userinfo.emailId} />
                <label htmlFor="noofDaysinCompany">No of Days in Company</label>
                <input type='text' id="noofDaysinCompany"  name="noOfDaysInCompany" onChange={handleChange} className="input-ele" value={userinfo.noOfDaysInCompany}/>
                   
                </div>
                <div className="third-form">
                   <label htmlFor="designation">Designation</label>
                   <select name="designation" id="designation"  className="input-ele"  onChange={(e) => {
                                                    setuserinfo((prevUserInfo) => ({
                                                    ...prevUserInfo,
                                                    designation: e.target.value,
                                                    }));
                                                }}>
                       <option ></option>
                        <option >DevOps Engineer</option>
                        <option >ReactJS Developer</option>
                        <option >Dot Net Developer</option>
                        <option >Python Developer</option>
                        <option >Full Stack Developer</option>
                        <option >Java Developer</option>
                                                
                    </select>
                    <label htmlFor="reportingManager">Reporting Manager</label>
                    <input type='text' id="reportingManager"  name="reportingManager" className="input-ele" onChange={handleChange} value={userinfo.reportingManager}/>
                    <label htmlFor="currentAddress">Current Address</label>
                    <input type='text' id="currentAddress"  name="currentAddress" className="input-ele" onChange={handleChange} value={userinfo.currentAddress} />
                    <label htmlFor="permanentAddress">Permanent Address</label>
                    <input type='text' id="permanentAddress"  name="permanentAddress" className="input-ele" onChange={handleChange} value={userinfo.permanentAddress} />
                    <label htmlFor="laptopStatus">Laptop Status</label>
                    <select name="laptopStatus" id="laptopStatus"  className="input-ele"  onChange={(e) => {
                                                    setuserinfo((prevUserInfo) => ({
                                                    ...prevUserInfo,
                                                    laptopStatus: e.target.value,
                                                    }));
                                                }}>
                       <option ></option>
                        <option >Yes</option>
                        <option >No</option>
                                           
                    </select>
                </div>
            </form>
        </div>
        <div className="text-center">
        <button className="btn btn-primary" onClick={handleSubmit}>Register</button>
        </div>
        <Link to="/">
            <button className="btn btn-primary">Back</button>
        </Link>
        
        
        
        
        </div>
    </div>

            
    )
}

export default Register