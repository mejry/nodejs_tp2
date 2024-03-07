const express= require("express")
const router=express.Router()
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')
const user=require('../models/user')

router.post('/register',async (req,res)=>{
    try {
        const {username,password}=req.body;
        const User = new user({username:username,password:password});
        await User.save();
        res.status(201).send('User registered successfully');
    } catch (error) {
        console.log(error);
        res.status(400).send(error.message)
    }
})

router.post('/login',async (req,res)=>{
    try {
     const {username,password}=req.body;
     const user = await user.findOne({username: username});
     if(!user){
         return res.status(404).send('user not found')
     }
     const isPasswordMatch =await bcrypt.compare(password,user.password);
   if(!isPasswordMatch){
     return res.status(401).send('invalid password')
   }
    const token = jwt.sign({_id:user._id},process.env.JWT_SECRET);
    res.send({token:token})
    } catch (error) {
     res.status(400).send(err.message)
    }
 });
 
 module.exports = router;
