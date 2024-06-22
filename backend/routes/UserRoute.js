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
            email:req.body.email,
            
        }).then(res.json({success:true}) )

    } catch(err){
        console.log(err);
        res.json({success:false});


    }


    
});

router.post("/login", async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        const { email, password } = req.body;

        // Find user by email
        let user = await User.findOne({ email });

        // Check if user exists
        if (!user) {
            return res.status(400).json({ errors: "User not found" });
        }
        const pwdComapare=await bcrypt.compare(req.body.password,user.password )

        // Check if password matches--hashed password with entered password
        if (!pwdComapare) {
            return res.status(400).json({ errors: "Incorrect password" });
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
        return res.json({ success: true ,authToken: authToken});

    } catch (err) {
        console.error(err);
        res.json({success: false});
    }
});
module.exports = router;