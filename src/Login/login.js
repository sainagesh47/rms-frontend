import React, { useEffect, useState } from "react";
import './login.css'
import { Link } from "react-router-dom";

function Login(){
    const [logininfo, setlogininfo] = useState({
        username:"",
        password:"",
    })

 
    const postData = async () => {
        
        try {
            const response = await fetch(`http://localhost:8080/login/${logininfo.username}/${logininfo.password}`, {
                method: 'GET' 
            });
            if (response.ok) {
                const data = await response.json();
                console.log(data);
            } else {
                console.error('Error:', response.status, response.statusText);
            }
        } catch (error) {
            console.error('Fetch error:', error);
        }
    };

       

    const handleChange = (e) => {
        const { name, value } = e.target;
        setlogininfo(prevUserInfo => ({
            ...prevUserInfo,
            [name]: value
        }));
    };

    const handleLogin =()=>{
        postData()
        
    }

    return(
        <div className="d-flex flex-row justify-content-center container">
        <div className='login-cardform m-5 p-5 row'>
        <div className='col-12'>
            <form className="form-div"> 
                <div>
                    <label htmlFor="username">Username</label>
                    <input type='email' id="username"  name="username" className="input-ele" onChange={handleChange} value={logininfo.username}/>
                    <label htmlFor="password">Password</label>
                    <input type='password' id="password"  name="password" className="input-ele" onChange={handleChange} value={logininfo.password}/>
                    <Link to="/forget-password">
                        <p className="text-center">Forget password</p>
                    </Link>
                </div>
               
            </form>
        </div>
            <div className="text-center">
        <button className="btn btn-primary" onClick={handleLogin}>Login</button>
        </div>
        <Link to="/">
            <button className="btn btn-primary mt-2">Back</button>
        </Link>
        
        </div>
        
        
        </div>
            
        
    )
}

export default Login