const mongoose=require('mongoose')
const bcrypt=require('bcrypt')
const userschema= new mongoose.Schema({
    username:{
        type:String,
        unique:true
    },
    password:{
        type:String,
        require:true
    }
})
userschema.pre('save',async function(next){
                const user= this;
                if(user.isModified('password')){
                    user.password= await bcrypt.hash(user.password,10)
                }
                next();
})
module.exports=mongoose.model('User',userschema) 