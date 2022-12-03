import { TextField } from '@mui/material';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaArrowRight } from "react-icons/fa";
import { Link } from 'react-router-dom';
import signupImg from '../../../Assets/Images/signup.png'
import './SignUp.css'
const SignUp = () => {
    const [next, setNext] = useState(0);
    const { register, handleSubmit } = useForm();
    const onSubmitSignUp = (data) => {
        console.log(data);
    };
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <img src={signupImg} className="w-100 img-fluid" alt="" />
                    </div>
                    <div className="col-lg-6">
                        <div className='login-form'>
                            <h4 className='text-center py-5'>Sign Up </h4>
                            <form onSubmit={handleSubmit(onSubmitSignUp)}>

                                {
                                    next === 0 &&
                                    <>
                                        <div className='px-4'>
                                            <TextField {...register("firstname")} label="Write First Name" type="text" variant="standard" className='w-100 email-field my-3' />
                                        </div>
                                        <div className='px-4'>
                                            <TextField {...register("lastname")} label="Write Last Name" type="text" variant="standard" className='w-100 email-field my-3' />
                                        </div>
                                    </>
                                }
                                {
                                    next === 1 &&
                                    <>
                                        <div className='px-4'>
                                            <TextField {...register("number")} label="Write Your Number" type="number" variant="standard" className='w-100 email-field my-3' />
                                        </div>
                                        <div className='px-4'>
                                            <TextField {...register("email")} label="Write Your Email" type="email" variant="standard" className='w-100 email-field my-3' />
                                        </div>
                                    </>
                                }
                                {
                                    next === 2 &&
                                    <>
                                        <div className='px-4'>
                                            <TextField {...register("password")} label="Write Your Password" type="password" variant="standard" className='w-100 email-field my-3' />
                                        </div>
                                    </>
                                }
                                <div className='text-center'>
                                    {
                                        next === 2 && 
                                        <>
                                            <div className='text-center d-flex px-5 align-items-center justify-content-between'>
                                                <div>
                                                    {
                                                        next > 0 && <button className='back-btn' onClick={() => setNext(next - 1)}>Back</button>
                                                    }
                                                </div>
                                                <div>
                                                    {
                                                    <button type='submit' className='login-btn my-5'>SignUp</button>
                                                    }
                                                </div>
                                            </div>
                                        </>
                                    }
                                </div>
                            </form>
                            {
                                next === 2 ? <></>:
                                <>
                                    <div className='text-center d-flex px-5 align-items-center justify-content-between'>
                                        <div>
                                            {
                                                next > 0 && <button className='back-btn' onClick={() => setNext(next - 1)}>Back</button>
                                            }
                                        </div>
                                        <div>
                                            {
                                                next >= 0 && next<=2 && <button className='next-btn my-5' onClick={() => setNext(next + 1)}>Next Step <FaArrowRight /></button>
                                            }
                                        </div>
                                    </div>
                                </>
                            }
                            <div className='d-flex justify-content-center align-items-center py-4 my-4'>
                                <div>
                                    <h6 className='m-0'>Already have an account? </h6>
                                </div>
                                <div className='signup-here'>
                                    <Link to={'/login'}>LOGIN HERE</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;