import React, { useState } from 'react'
import { set, useForm } from 'react-hook-form'
import { FaEyeSlash } from "react-icons/fa";import { FaRegEye } from "react-icons/fa";
import axios from 'axios';
import {  useNavigate } from 'react-router-dom';
function SignUp() {
    let [errorrr,seterrors]=useState("")
    let navigate=useNavigate()
    let {register,handleSubmit,formState:{errors},watch}=useForm()
    let saveuserdetails=(data)=>{
        axios.post('/register',data)
        .then((res)=>{
            if(res.status===201){
                seterrors("")
                navigate("/login")
            }
            else{
                    seterrors(res.data.message)
                }
            
            })
            .catch((errorobj)=>{
               console.log(errorobj)
                //(4xx,5xx)
                if(errorobj.response){
                    
                        seterrors(errorobj.message)
                }//network error(request is there no response)
                else if(errorobj.request){
                   
                    seterrors(errorobj.message)
                }
                //syntax errors
                else{
                    seterrors(errorobj.message)
                }
     })
    }
      const [showpassword,setshowpassword]=useState(false)
    const [showrepassword,setshowrepassword]=useState(false)
    let showrepass=()=>{
        setshowrepassword(!showrepassword)
    }

    let showpass=()=>{
        setshowpassword(!showpassword)
    }
   // console.log(errors)
    const password=watch("password")
   
   

    return (
        <div> 
            <h2 className='text-center display-3 text-success'>SignUp Page</h2>
            <div className="row">
                <div className="col-11 col-sm-8 col-md-6 mx-auto">
            <form onSubmit={handleSubmit(saveuserdetails)}>
               <label htmlFor="number" className='mt-3' >Mobile Number</label>
               <input type="text" name="number" id="number" placeholder='Enter mobile-number' className='form-control mt-1' {...register("number",{required:"mobile number is required",pattern:{
                value: /^[0-9]{10}$/,
                message:"*Valid number is required"
               }})} />
                {
                errors.number && <h6 className='text-danger'>{errors.number.message}</h6>
               }

       {/* 
       //password */}

            <label htmlFor="password" className='mt-3' >Create Password</label>
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





            <label htmlFor="repassword" className='mt-3' >Re-enter password</label>
            <div className="input-group">
               <input type={showrepassword?"text":"password"}  name="repassword" id="repassword" placeholder='Enter repassword' className='form-control mt-1' {...register("repassword",{required:"Please reenter your password",
                validate:
                value=> value===password || "Passwords donot match"
               })}/>
               <span className="input-group-text" onClick={showrepass}>{showrepassword? <FaRegEye />: <FaEyeSlash />}</span>
               </div>
               {
                errors.repassword && <h6 className='text-danger'>{errors.repassword.message}</h6>
               }


               <button className='btn btn-success mt-4 form-control' >Submit</button>
            </form>
            </div>
            </div>
        </div>
    )
}

export default SignUp
