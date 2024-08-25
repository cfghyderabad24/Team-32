const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose'); 
const router = express.Router();
const User= require('../models/userModel');
const { body, validationResult } = require('express-validator')
const bcrypt = require('bcryptjs')
const jwt=require('jsonwebtoken')
const jwtSecret= "qqqqqqqqqqqqkkkkkkkksddddddddfgghjjjjj"

router.post("/register",

async (req, res) => {
    const userExists=await User.findOne({email:req.body.email});
    if(userExists) {
        return res.status(200).send({message: "User already exists", success:false});
    }
    const errors= validationResult(req);
    if(!errors.isEmpty()) {
         return res.status(400).json({errors:errors.array()});
    }
    // salt is randomly generated string
    const salt= await bcrypt.genSalt(10);
    //hash with salt
    let secPassword=await bcrypt.hash(req.body.password,salt)

    try{

        await User.create({

            name: req.body.name,
            password: secPassword,
            salt : salt,
            email:req.body.email,
            
        }).then(res.json({success:true}) )

    } catch(err){
        console.log(err);
        res.json({success:false});


    }


    
});

router.post("/login", async (req, res) => {
    const errors = validationResult(req);
    console.log("Request received for Login")
    if (!errors.isEmpty()) {
        console.log("Found Errors")
        return res.status(400).json({ errors: errors.array() });
    }
    else{
        console.log("No error found")
    }

    try {
        console.log(req.body)
        const email= req.body.contact;
        const password=req.body.password;
        console.log(email)

        // Find user by email
        let user = await User.findOne({ email });
        console.log(user)

        // Check if user exists
        if (!user) {
            return res.status(400).json({ errors: "User not found" });
        }
        const salt= user.salt
        //hash with salt
        let secPassword=await bcrypt.hash(req.body.password,salt)
        console.log(secPassword)
        const Password_val = String(secPassword)
        if( Password_val == secPassword){
            pwdCompare =true
        }
        else{
            pwdCompare = false
        }

        // Check if password matches--hashed password with entered password
        if (!pwdCompare) {
            console.log('Password wrong')
            return res.status(400).json({ errors: "Incorrect password" });
        }
        else{
            console.log("Password is Correct")
        }
        const data=
        {
            user:{
                id:user.id,
            }
        }
        //Genertae authorization token every time a user logins

        const authToken=jwt.sign(data,jwtSecret, {

    
        expiresIn:"1d"
        })
        // If credentials are valid, return success
        return res.status(200).json({ success: true ,authToken: authToken});

    } catch (err) {
        console.error(err);
        res.json({success: false});
    }
});
module.exports = router;