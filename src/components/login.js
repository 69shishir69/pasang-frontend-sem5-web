import { useState } from "react";
import React from "react";
import axios from 'axios';
import {Link} from "react-router-dom";
import "../components/css/login.css"

const Login =()=>{
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const LoginUser =(e)=>{
        e.preventDefault();
        const dataLogin={
            Email: email,
            Password: password, 
        }
        axios.post("http://localhost:90/customer/login", dataLogin)
        .then((response)=>{
            // if(response.data.msg == "Success"){
            //  setMessage("Login Succesful");
            // } else{
            //     setMessage("Login Failed")
            // }
            if(response.data.token){
                // save token locally so that it is available in every component
                localStorage.setItem('ticket', response.data.token)
                setMessage("Login Succesful")
                // redirect to home
                window.location.replace('/dashboard')
            } else{
                setMessage("Invalid Login Credentials!")
            }
            console.log("token:")
            console.log(response.data.token);
        })
        .catch((e)=>{
            console.log(e)
        })
    }

    return(
        <>
        <form>
            <div className="form-bg">
                <div className="container">
                    <div className="row">
                        <div className="col-md-offset-6 col-md-12 col-sm-offset-3 col-sm-6">
                            <div className="form-container">
                                <div className="left-content">
                                    <h3 className="title">The Nailroom </h3>
                                    <h4 className="sub-title">Bling everyday</h4>
                                </div>
                                <div className="right-content">
                                    <h3 className="form-title">Login</h3>
                                    <form className="form-horizontal">
                                        <div className="form-group">
                                        <label>Username / Email</label>
                                            <input type="email" className="form-control" id="Email" onChange={(e)=>{setEmail(e.target.value)}}/>
                                        </div>
                                        <div className="form-group">
                                        <label>Password</label>
                                            <input type="password" className="form-control" id="password" onChange={(e)=>{setPassword(e.target.value)}}/>
                                        </div>
                                        <button className="btn signin" onClick={LoginUser}>Login</button>
                                        <div className="remember-me">
                                            <input type="checkbox" className="checkbox"/>
                                            <span className="check-label">Remember Me</span>
                                        </div>
                                        <a href="" className="forgot">Forgot Password</a>
                                    </form>
                                    <span className="separator">OR</span>
                                    <span className="signup-link">Don't have an account? Sign up <Link to="/register">here</Link></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </form>
        </>
    )
}

export default Login;

