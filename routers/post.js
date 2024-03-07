const express=require('express')
const router=express.Router()
const post=require("../models/post")

router.post('/add',async(req,res)=>{
    try {
   
       const new_post= new post({
        title:req.body.title,
        content:req.body.content,
        author:req.userId
       })
       await new_post.save()
       res.status(200).json("post added with success")
    } catch (error) {
        console.log(error);
        res.status(400).json("failed to add post")
        
    }
})


module.exports=router
