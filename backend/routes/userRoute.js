const express = require("express");
const router = express.Router();
const User = require("../models/user");
const bcrypt = require("bcrypt");
const jwt= require("jsonwebtoken")


const secrateKey=process.env.JWT_SECRET_KEY

//Register user api
router.post("/registor", async (req, res) => {
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
      return res.status(400).json({
        status: false,
        message: "All fields are required",
      });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser)
      return res.status(400).json({
        status: false,
        message: "Email already exist",
      });

    const hashPassword = await bcrypt.hash(password, 10);

    const newUser = new User({ name, email, password: hashPassword });
    await newUser.save();

    return res.status(201).json({
      status: true,
      message: "user created successfully!",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      status: false,
      message: "internal server error",
    });
  }
});


// login user api
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    if ( !email || !password) {
      return res.status(400).json({
        status: false,
        message: "All fields are required",
      });
    }

    const user= await User.findOne({email});

    if(!user || !(await bcrypt.compare(password,user.password))){
      return res.status(400).json({status:false,message:"Invalid credential"});
    }

    const token=jwt.sign({id:user._id,email:user.email},secrateKey,{expiresIn:"10h"})

    return res.status(201).json({
      status: true,
      message: "Login successfully!",token:token})
  }
   catch (error) {
    console.log(error);
    res.status(500).json({
      status: false,
      message: "internal server error",
    });
  }
});




module.exports = router;
