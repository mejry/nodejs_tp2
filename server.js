const express = require("express")
const mongoose = require('mongoose')
const dotenv =require('dotenv')
dotenv.config()
const app = express();
const  auth=require('./routers/auth')
const post=require('./routers/post')
const voiture =require('./routers/voiture')
app.use(express.json())
app.use("/voiture",voiture)
let MONGODB_URI=process.env.MONGODB_URI
const PORT=process.env.PORT || 5000
app.use('/auth',auth)
app.use('/post',post)
mongoose.connect(MONGODB_URI).then(()=>{
    console.log('connected to MongoDB');
app.listen(PORT,()=>{
    console.log(`server listenin on ${PORT}`);
})
})
.catch((err)=>{
    console.error('error connecting to mongodb',err)
})

