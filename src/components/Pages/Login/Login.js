import { TextField } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import loginImg from '../../Assets/Images/signup.png'
import './Login.css'
const Login = () => {
    const handleLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email,password)
        form.reset();
    }
    return (
        <div>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <img src={loginImg} className="w-100 img-fluid" alt="" />
                    </div>
                    <div className="col-lg-6 justify-content-center">
                        <div className='login-form'>
                            <h4 className='text-center py-5'>Login Form</h4>
                            <form onSubmit={handleLogin}>
                                <div className='px-4'>
                                    <TextField label="Write Email Address" name='email' type="email" variant="standard" className='w-100 email-field my-3' />
                                </div>
                                <div className='px-4'>
                                    <TextField label="Write Password" name='password' type="password" variant="standard" className='w-100 email-field my-3' />
                                </div>
                                <div className='text-center'>
                                    <button type='submit' className='login-btn my-5'>Login</button>
                                </div>
                                <div className='d-flex justify-content-center align-items-center py-4 my-4'>
                                    <div>
                                        <h6 className='m-0'>Don’t have an account?</h6>
                                    </div>
                                    <div className='signup-here'>
                                        <Link to={'/signup'}>SIGNUP HERE</Link>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;