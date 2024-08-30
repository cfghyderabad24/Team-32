// import React, { useState } from 'react'
// import { set, useForm } from 'react-hook-form'
// import { FaEyeSlash } from "react-icons/fa"; import { FaRegEye } from "react-icons/fa";
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import { Link } from 'react-router-dom';
// function Register() {
//   let { register, handleSubmit, formState: { errors }, watch } = useForm()
//   let [errorrr, seterrors] = useState("")
//   let navigate = useNavigate()
//   let savefarmerdetails = (data) => {

//     localStorage.setItem("farmerdata", JSON.stringify(data))
//     console.log(data)
//   }
//   let clicknav = () => {
//     navigate("/register")
//   }
//   const [showpassword, setshowpassword] = useState(false)
//   let showpass = () => {
//     setshowpassword(!showpassword)
//   }

//   const UserForm = () => {
//     const [formData, setFormData] = useState({
//       name: '',
//       email: '',
//     });

//     const handleChange = (e) => {
//       const { name, value } = e.target;
//       setFormData((prevData) => ({ ...prevData, [name]: value }));
//     };

//     const savefarmerdetails = (e) => {
//       e.preventDefault();
//       if (navigator.onLine) {
//         sendFormData(formData);
//       } else {
//         saveFormDataOffline(formData);
//       }
//     };

//     const sendFormData = async (data) => {
//       try {
//         // Replace with your actual API endpoint
//         await fetch('/api/submit', {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json',
//           },
//           body: JSON.stringify(data),
//         });
//         console.log('Data sent successfully');
//       } catch (error) {
//         console.error('Error sending data:', error);
//         saveFormDataOffline(data);
//       }
//     };

//     const saveFormDataOffline = (data) => {
//       const offlineData = JSON.parse(localStorage.getItem('offlineData')) || [];
//       offlineData.push(data);
//       localStorage.setItem('offlineData', JSON.stringify(offlineData));
//       console.log('Data saved locally');
//     };

//     const handleOnline = () => {
//       const offlineData = JSON.parse(localStorage.getItem('offlineData')) || [];
//       if (offlineData.length > 0) {
//         offlineData.forEach((data) => {
//           sendFormData(data);
//         });
//         localStorage.removeItem('offlineData');
//       }
//     };

//     useEffect(() => {
//       window.addEventListener('online', handleOnline);
//       return () => {
//         window.removeEventListener('online', handleOnline);
//       };
//     }, []);

//     const password = watch("password")
//     return (
//       <div>
//         <h2 className='text-center display-3 text-success'>Registration Page</h2>
//         {errorrr?.length !== 0 && <p className='text-danger fw-bold text-center fs-2'>{errorrr}</p>}
//         <div className="row">
//           <div className="col-11 col-sm-8 col-md-6 mx-auto">
//             <form onSubmit={handleSubmit(savefarmerdetails)}>
//               <label htmlFor="farmername" className='mt-3' >Name of the Farmer</label>
//               <input type="text" name="farmername" id="farmername" placeholder='Enter Farmer name' className='form-control mt-1' {...register("farmername", { required: "*Farmername is required" })} />
//               {
//                 errors.farmername && <h6 className='text-danger'>{errors.farmername.message}</h6>
//               }

//               <label htmlFor="aadar" className='mt-3' >Aadar-card Number</label>
//               <input type="text" name="number" id="aadar" placeholder='Enter aadar-number' className='form-control mt-1' {...register("aadar", {
//                 required: "Aadar is required", pattern: {
//                   value: /^[0-9]{12}$/,
//                   message: "*Valid aadar number is required"
//                 }
//               })} />
//               {
//                 errors.aadar && <h6 className='text-danger'>{errors.aadar.message}</h6>
//               }
//               <label htmlFor="contactno" className='mt-3' >Contact number</label>
//               <input type="text" name="number" id="contactno" placeholder='Enter mobile-number' className='form-control mt-1' {...register("contactno", {
//                 required: "contactno is required", pattern: {
//                   value: /^[0-9]{10}$/,
//                   message: "*Valid contactno is required"
//                 }
//               })} />
//               {
//                 errors.contactno && <h6 className='text-danger'>{errors.contactno.message}</h6>
//               }
//               <label htmlFor="pincode" className='mt-3' >Pincode</label>
//               <input type="text" name="number" id="pincode" placeholder='Enter pincode' className='form-control mt-1' {...register("pincode", {
//                 required: "Pincode is required", pattern: {
//                   value: /^[0-9]{6}$/,
//                   message: "*Valid pincode is required"
//                 }
//               })} />
//               {
//                 errors.pincode && <h6 className='text-danger'>{errors.pincode.message}</h6>
//               }
//               <label htmlFor="areaPloughed" className='mt-3' >Total Area</label>
//               <input type="text" name="areaPloughed" id="areaPloughed" placeholder='Enter area(in acres)' className='form-control mt-1' {...register("areaPloughed", { required: "*area is required" })} />
//               {
//                 errors.areaPloughed && <h6 className='text-danger'>{errors.areaPloughed.message}</h6>
//               }
//               <label htmlFor="season" className='mt-3' >Select season</label>
//               <select id="season"
//                 className="form-control"
//               >
//                 <option value="" disabled>Select a season</option>
//                 <option value="Rabi">Rabi</option>
//                 <option value="Kharib">Kharib</option>
//               </select>
//               <label htmlFor="cropGrown" className='mt-3' >Name of the Crop grown</label>
//               <input type="text" name="cropGrown" id="cropGrown" placeholder='Enter Farmer name' className='form-control mt-1' {...register("cropGrown", { required: "*cropGrown is required" })} />
//               {
//                 errors.cropGrown && <h6 className='text-danger'>{errors.cropGrown.message}</h6>
//               }
//               <label htmlFor="seedsUsed" className='mt-3' >Select seedsUsed</label>
//               <select id="seedsUsed"
//                 className="form-control"
//               >
//                 <option value="" disabled>Select</option>
//                 <option value="Own">Own</option>
//                 <option value="IFTR">IFTR</option>
//                 <option value="purchasedOutside">Purchased from outside</option>
//               </select>
//               <label htmlFor="date" className='mt-3' >Date of seed sown</label>
//               <input type="date" name="date" id="date" className='form-control mt-1' {...register("date", { required: "*datesown is required" })} />
//               {
//                 errors.date && <h6 className='text-danger'>{errors.date.message}</h6>
//               }
//               <label htmlFor="transplanting" className='mt-3' >Select type of Transplanting</label>
//               <select id="transplanting"
//                 className="form-control">
//                 <option value="" disabled>Select</option>
//                 <option value="machine">Machine</option>
//                 <option value="manual">Manual</option>
//               </select>
//               <label htmlFor="irrigationMethod" className='mt-3' >Select type of Irrigation Method</label>
//               <select id="irrigationMethod"
//                 className="form-control">
//                 <option value="" disabled>Select</option>
//                 <option value="borewell">Borewell</option>
//                 <option value="well">Well</option>
//                 <option value="river">River</option>
//                 <option value="dripirrigation">Drip Irrigation</option>
//               </select>
//               <label htmlFor="transplanting" className='mt-3' >Select type of Transplanting</label>
//               <select id="transplanting"
//                 className="form-control">
//                 <option value="" disabled>Select</option>
//                 <option value="machine">Machine</option>
//                 <option value="manual">Manual</option>
//               </select>
//               <label htmlFor="date" className='mt-3' >Date of seed sown</label>
//               <input type="date" name="date" id="date" className='form-control mt-1' {...register("date", { required: "*datesown is required" })} />
//               {
//                 errors.date && <h6 className='text-danger'>{errors.date.message}</h6>
//               }
//               <label htmlFor="date" className='mt-3' >Date of harvesting</label>
//               <input type="date" name="date" id="date" className='form-control mt-1' {...register("date", { required: "*datesown is required" })} />
//               {
//                 errors.date && <h6 className='text-danger'>{errors.date.message}</h6>
//               }
//               <label htmlFor="yield" className='mt-3' >Total Area</label>
//               <input type="text" name="yield" id="yield" placeholder='Enter yield' className='form-control mt-1' {...register("yield", { required: "*yield is required" })} />
//               {
//                 errors.yield && <h6 className='text-danger'>{errors.yield.message}</h6>
//               }
//               <button className='btn btn-success mt-4 form-control' >Submit</button>
//             </form>
//             <div className='text-center'>
//               <h6>Dont have an account?</h6>
//               <Link onClick={clicknav} >Register here</Link>
//             </div>
//           </div>
//         </div>
//       </div>



//     )
//   }

//   export default Register
import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { FaEyeSlash, FaRegEye } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';
 // Assuming there's a CSS file for styles

function Register() {
  let { register, handleSubmit, formState: { errors }, watch } = useForm();
  let [errorrr, seterrors] = useState("");
  let navigate = useNavigate();
  const [showpassword, setshowpassword] = useState(false);

  let showpass = () => {
    setshowpassword(!showpassword);
  };

  const savefarmerdetails = (data) => {
    if (navigator.onLine) {
      sendFormData(data);
    } else {
      saveFormDataOffline(data);
    }
  };

  const sendFormData = async (data) => {
    try {
      // Replace with your actual API endpoint
      await axios.post('/api/submit', data);
      console.log('Data sent successfully');
    } catch (error) {
      console.error('Error sending data:', error);
      saveFormDataOffline(data);
    }
  };

  const saveFormDataOffline = (data) => {
    const offlineData = JSON.parse(localStorage.getItem('offlineData')) || [];
    offlineData.push(data);
    localStorage.setItem('offlineData', JSON.stringify(offlineData));
    console.log('Data saved locally');
  };

  const handleOnline = () => {
    const offlineData = JSON.parse(localStorage.getItem('offlineData')) || [];
    if (offlineData.length > 0) {
      offlineData.forEach((data) => {
        sendFormData(data);
      });
      localStorage.removeItem('offlineData');
      console.log("in offline")
    }
  };

  useEffect(() => {
    window.addEventListener('online', handleOnline);
    return () => {
      window.removeEventListener('online', handleOnline);
    };
  }, []);

  const password = watch("password");
  
  return (
    <div>
      <h2 className='text-center display-3 text-success'>Fill the details</h2>
      {errorrr?.length !== 0 && <p className='text-danger fw-bold text-center fs-2'>{errorrr}</p>}
      <div className="row">
        <div className="col-11 col-sm-8 col-md-6 mx-auto">
          <form onSubmit={handleSubmit(savefarmerdetails)}>
            <label htmlFor="farmername" className='mt-3'>Name of the Farmer</label>
            <input type="text" id="farmername" placeholder='Enter Farmer name' className='form-control mt-1' {...register("farmername", { required: "*Farmername is required" })} />
            {errors.farmername && <h6 className='text-danger'>{errors.farmername.message}</h6>}

            <label htmlFor="aadar" className='mt-3'>Aadar-card Number</label>
            <input type="text" id="aadar" placeholder='Enter aadar-number' className='form-control mt-1' {...register("aadar", {
              required: "Aadar is required", pattern: {
                value: /^[0-9]{12}$/,
                message: "*Valid aadar number is required"
              }
            })} />
            {errors.aadar && <h6 className='text-danger'>{errors.aadar.message}</h6>}

            <label htmlFor="contactno" className='mt-3'>Contact number</label>
            <input type="text" id="contactno" placeholder='Enter mobile-number' className='form-control mt-1' {...register("contactno", {
              required: "contactno is required", pattern: {
                value: /^[0-9]{10}$/,
                message: "*Valid contactno is required"
              }
            })} />
            {errors.contactno && <h6 className='text-danger'>{errors.contactno.message}</h6>}

            <label htmlFor="pincode" className='mt-3'>Pincode</label>
            <input type="text" id="pincode" placeholder='Enter pincode' className='form-control mt-1' {...register("pincode", {
              required: "Pincode is required", pattern: {
                value: /^[0-9]{6}$/,
                message: "*Valid pincode is required"
              }
            })} />
            {errors.pincode && <h6 className='text-danger'>{errors.pincode.message}</h6>}

            <label htmlFor="areaPloughed" className='mt-3'>Total Area</label>
            <input type="text" id="areaPloughed" placeholder='Enter area(in acres)' className='form-control mt-1' {...register("areaPloughed", { required: "*area is required" })} />
            {errors.areaPloughed && <h6 className='text-danger'>{errors.areaPloughed.message}</h6>}

            <label htmlFor="season" className='mt-3'>Select season</label>
            <select id="season" className="form-control" {...register("season", { required: "*Season is required" })}>
              <option value="" disabled>Select a season</option>
              <option value="Rabi">Rabi</option>
              <option value="Kharib">Kharib</option>
            </select>
            {errors.season && <h6 className='text-danger'>{errors.season.message}</h6>}

            <label htmlFor="cropGrown" className='mt-3'>Name of the Crop grown</label>
            <input type="text" id="cropGrown" placeholder='Enter crop name' className='form-control mt-1' {...register("cropGrown", { required: "*cropGrown is required" })} />
            {errors.cropGrown && <h6 className='text-danger'>{errors.cropGrown.message}</h6>}

            <label htmlFor="seedsUsed" className='mt-3'>Select seedsUsed</label>
            <select id="seedsUsed" className="form-control" {...register("seedsUsed", { required: "*Seeds used is required" })}>
              <option value="" disabled>Select</option>
              <option value="Own">Own</option>
              <option value="IFTR">IFTR</option>
              <option value="purchasedOutside">Purchased from outside</option>
            </select>
            {errors.seedsUsed && <h6 className='text-danger'>{errors.seedsUsed.message}</h6>}

            <label htmlFor="dateSown" className='mt-3'>Date of seed sown</label>
            <input type="date" id="dateSown" className='form-control mt-1' {...register("dateSown", { required: "*Date sown is required" })} />
            {errors.dateSown && <h6 className='text-danger'>{errors.dateSown.message}</h6>}

            <label htmlFor="transplanting" className='mt-3'>Select type of Transplanting</label>
            <select id="transplanting" className="form-control" {...register("transplanting", { required: "*Transplanting type is required" })}>
              <option value="" disabled>Select</option>
              <option value="machine">Machine</option>
              <option value="manual">Manual</option>
            </select>
            {errors.transplanting && <h6 className='text-danger'>{errors.transplanting.message}</h6>}

            <label htmlFor="irrigationMethod" className='mt-3'>Select type of Irrigation Method</label>
            <select id="irrigationMethod" className="form-control" {...register("irrigationMethod", { required: "*Irrigation method is required" })}>
              <option value="" disabled>Select</option>
              <option value="borewell">Borewell</option>
              <option value="well">Well</option>
              <option value="river">River</option>
              <option value="dripirrigation">Drip Irrigation</option>
            </select>
            {errors.irrigationMethod && <h6 className='text-danger'>{errors.irrigationMethod.message}</h6>}

            <label htmlFor="dateHarvesting" className='mt-3'>Date of harvesting</label>
            <input type="date" id="dateHarvesting" className='form-control mt-1' {...register("dateHarvesting", { required: "*Date harvesting is required" })} />
            {errors.dateHarvesting && <h6 className='text-danger'>{errors.dateHarvesting.message}</h6>}

            <label htmlFor="yield" className='mt-3'>Yield</label>
            <input type="text" id="yield" placeholder='Enter yield' className='form-control mt-1' {...register("yield", { required: "*Yield is required" })} />
            {errors.yield && <h6 className='text-danger'>{errors.yield.message}</h6>}

            <button className='btn btn-success mt-4 form-control'>Submit</button>
          </form>
          <div className='text-center'>
            <h6>Dont have an account?</h6>
            <Link to="/register">Register here</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;

