import React, { useState } from 'react'
import './LoginSignup.css'
import email_icon from '../Assets/email.png'
import password_icon from '../Assets/password.png'
import person_icon from '../Assets/person.png'
const LoginSignup = () => {

    // hook i used 
    const [action,setAction]=useState("Login ");
    return (
        <div className='container'>
        <div className='heder'>
        <div className="text">{action}</div>
        <div className='underline'></div>

        <div className='inputs'>
            {action==="Login"?<div></div>:<div className='input'>
                <img src={person_icon}alt=""></img>
                <input type='text' placeholder='Name'></input>
            </div>}
            
            <div className='input'>
                <img src={email_icon}alt=""></img>
                <input type='email' placeholder='Email Id'></input>
            </div>
            <div className='input'>
                <img src={password_icon}alt=""></img>
                <input type='password' placeholder='Password'></input>
            </div>
            {action==="Signup"?<div></div>:
        <div className="forgot-password">Lost Password..? <span>Click here</span>
        </div>}
        
        <div className='submit-container'>
            <div className={action==="Login"?"submit gray":"submit"} onClick={()=>setAction("Signup")}>Signup</div>
       
            <div className={action==="Sign Up "?" submit gray":"submit"} onClick={()=>setAction("Login")}>Login</div>
        </div>
        </div>
        </div>
        </div>
        
    );
};

export default LoginSignup;
