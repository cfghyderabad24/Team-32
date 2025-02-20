import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { FaEyeSlash } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa";
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
function LoginFarmer() {
    let {register,handleSubmit,formState:{errors},watch}=useForm()
    let navigate=useNavigate();
    const [showpassword,setshowpassword]=useState(false)
    let showpass=()=>{
        setshowpassword(!showpassword)
    }
    let [error,setloginerr]=useState("")
    let [userloginstatus,setuserloginstatus]=useState(false)
    const handlesubmituser=(data)=>{
        console.log(data)
        navigate('./registering')
        axios.post('http://localhost:3500/api/login',data)
        .then((res)=>{
            if(res.data.message==="successlogin"){
                //navigate to userprofile
                navigate('/registering')
                // console.log(userloginstatus)
                 setuserloginstatus(true)
                console.log(userloginstatus)
             
                console.log(res.data.token)
                localStorage.setItem("token",res.data.token)
            }
            else{
                setloginerr(res.data.message)
            }
        })
        .catch((err)=>
       { 
        setloginerr(err)
        console.log(err)
        }
        )
    }
     
    
  
   // console.log(errors)
    const password=watch("password")
    return (
        <div>
            <h1 className='text-center display-3 text-success'>Volunteer Login Page</h1>
            <div className="row">
                <div className="col-11 col-sm-8 col-md-6 mx-auto">
            <form onSubmit={handleSubmit(handlesubmituser)}>
                <label htmlFor="email" className='mt-3' >Email-id</label>
               <input type="text" name="email" id="email" placeholder="Enter Volunteer's email-id" className='form-control mt-1' {...register("email",{required:"*Email-id is required",pattern: { 
                value:'@gmail.com',
                message: "*Valid email is required"
               }})}/>
               {
                errors.email && <h6 className='text-danger'>{errors.email.message}</h6>
               }

            <label htmlFor="password" className='mt-3' >Enter your Password</label>
            <div className="input-group">
               <input type={showpassword?"text":"password"} name="password" id="password" placeholder='Enter password' className='form-control mt-1' {...register("password",{required:"*password is required",
                pattern: { 
                value:/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\w\d]).{8,}$/,
                message: "Password must contain at least one symbol, one uppercase letter, one lowercase letter, and be at least 8 characters long"
               }})}/>
               <span className="input-group-text"onClick={showpass}>{showpassword? <FaRegEye />: <FaEyeSlash />}</span>
            </div>
               {
                errors.password && <h6 className='text-danger'>{errors.password.message}</h6>
               }
                <button className='btn btn-success form-control mt-4 mb-4' type="submit">Login</button>
               
               </form>
               </div>
               </div>

        </div>
    )

}
export default LoginFarmer
