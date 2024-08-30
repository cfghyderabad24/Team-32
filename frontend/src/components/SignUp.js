import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaEyeSlash, FaRegEye } from "react-icons/fa";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function SignUp() {
    const [errors, setErrors] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors: formErrors }, watch } = useForm();

    const saveUserDetails = (data) => {
        console.log("signup data:", data);
        try{
        axios.post('http://127.0.0.1:5000/api/user/register', data)
            .then((res) => {
                if (res.status === 200) {
                    setErrors('');
                    navigate("/");
                } else {
                    setErrors(res.data.message);
                }
            })
            .catch((error) => {
                if (error.response) {
                    setErrors(error.response.data.message);
                } else if (error.request) {
                    setErrors("Network error: Request made but no response received");
                } else {
                    setErrors("Error in request: " + error.message);
                }
            });
            console.log("User logged in successfully")
        }
        catch (error) {
                // Code to handle the error
                console.error('An error occurred:', error);
              }
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div>
            <h2 className='text-center display-3 text-success'>SignUp Page</h2>
            <div className="row">
                <div className="col-11 col-sm-8 col-md-6 mx-auto">
                    <form onSubmit={handleSubmit(saveUserDetails)}>
                        <label htmlFor="name" className='mt-3'>Name</label>
                        <input type="text" id="name" {...register("name", {
                            required: "Name is required"
                        })} className='form-control mt-1' placeholder='Enter name' />
                        {formErrors.name && <h6 className='text-danger'>{formErrors.name.message}</h6>}

                        <label htmlFor="email" className='mt-3'>Email</label>
                        <input type="email" id="email" {...register("email", {
                            required: "Email is required",
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message: "Invalid email address"
                            }
                        })} className='form-control mt-1' placeholder='Enter email' />
                        {formErrors.email && <h6 className='text-danger'>{formErrors.email.message}</h6>}

                        <label htmlFor="password" className='mt-3'>Create Password</label>
                        <div className="input-group">
                            <input type={showPassword ? "text" : "password"} id="password" {...register("password", {
                                required: "Password is required",
                                pattern: {
                                    value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\w\d]).{8,}$/,
                                    message: "Password must contain at least one symbol, one uppercase letter, one lowercase letter, and be at least 8 characters long"
                                }
                            })} className='form-control mt-1' placeholder='Enter password' />
                            <span className="input-group-text" onClick={togglePasswordVisibility}>
                                {showPassword ? <FaRegEye /> : <FaEyeSlash />}
                            </span>
                        </div>
                        {formErrors.password && <h6 className='text-danger'>{formErrors.password.message}</h6>}

                        <button className='btn btn-success mt-4 form-control' type="submit">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default SignUp;
