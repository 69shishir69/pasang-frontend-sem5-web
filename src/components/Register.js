import {useState} from "react";
import axios from 'axios';
import React  from 'react';
import {Link} from "react-router-dom";
import "../components/css/login.css"

const Register =()=>{
    const [username, setUsername] = useState('');
   
    const [password, setPassword] = useState('');
    const [age, setAge] = useState('');
   
    const [firstname, setFname] = useState('');
    const [lastname, setLname] = useState('');
    const [email, setEmail] = useState('');
   
    const [message, setMessage] = useState('');

    const registerUser =(e)=>{
        e.preventDefault();
        const dataReg={
            Firstname: firstname,
            Lastname: lastname,
            Username: username, 
            Password: password,
            Age: age,
            Email: email,

        }
        axios.post("http://localhost:90/customer/insert", dataReg)
        .then((response)=>{
            if(response.data.msg == "user registered"){
                setMessage("User Registered Successfully");
            }else{
                setMessage("Registration failed")
            }

            console.log(response.data.msg);
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
                    <div className="left-content-register">
                        <h3 className="title">The Nailroom</h3>
                        <h4 className="sub-title">Bling everyday </h4>
                    </div>
                    <div className="right-content">
                        <h3 className="form-title">Register</h3>
                        <form className="form-horizontal">
                            <div className="form-group">
                            <label for="Fname" className="form-label">First Name</label>
                                <input type="text" className="form-control" id="Fname" onChange={(e)=>{setFname(e.target.value)}} />
                            <label for="Lname" className="form-label">Last Name</label>
                                <input type="text" className="form-control" id="Lname" onChange={(e)=>{setLname(e.target.value)}} />
                            <label for="username" className="form-label">Username</label>
                                <input type="text" className="form-control" id="username" onChange={(e)=>{setUsername(e.target.value)}} />
                            <label>Email</label>
                                <input type="email" className="form-control" id="Email" onChange={(e)=>{setEmail(e.target.value)}}/>
                            <label for="Age" className="form-label">Age</label>
                                <input type="number" className="form-control" id="Age" onChange={(e)=>{setAge(e.target.value)}} />
                            </div>

                            <div className="form-group">
                            <label>Password</label>
                                <input type="password" className="form-control" onChange={(e)=>{setPassword(e.target.value)}}/>
                            </div>
                            <button className="btn signin" onClick={registerUser}>Register</button>
                            <div className="remember-me">
                                <input type="checkbox" className="checkbox"/>
                                <span className="check-label">I agree to all the Terms And Conditions</span>
                            </div>
                            <a href="" className="forgot">Forgot Password</a>
                        </form>
                        <span className="separator">OR</span>
                        <span className="signup-link">Have an Account? Login <Link to="/login">here</Link></span>
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
export default Register;
