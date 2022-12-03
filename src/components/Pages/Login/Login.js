import { TextField } from '@mui/material';
import React from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import loginImg from '../../Assets/Images/signup.png'
import './Login.css'
const Login = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();
    const handleLogin = (data) => {
        console.log(data)
        fetch(' https://test.nexisltd.com/login', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                toast.success('Login Successfully')
                localStorage.setItem('token', data.access_token)
                navigate('/attendence')
            })
    }
    return (
        <div>
            <div className="container">
                <div className="row align-items-center justify-content-between">
                    <div className="col-lg-6">
                        <img src={loginImg} className="w-100 img-fluid" alt="" />
                    </div>
                    <div className="col-lg-4 justify-content-center ">
                        <div className='login-form'>
                            <h4 className='text-center py-5'>Login Form</h4>

                            <form onSubmit={handleSubmit(handleLogin)}>
                                <div className='px-4'>
                                    <TextField {...register("email")} label="Write Email Address" type="email" variant="standard" className='w-100 email-field my-3' />
                                </div>
                                <div className='px-4'>
                                    <TextField {...register("password", { required: true, minLength: { value: 8 } })} label="Write Password" type="password" variant="standard" className='w-100 email-field my-3' />
                                    {errors.password && <span className='text-danger'>Password must be at-least 8 characters. </span>}

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