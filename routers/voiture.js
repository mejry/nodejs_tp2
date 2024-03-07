const express= require("express")
const router=express.Router()
const user=require('../models/user')







const voiture=[{id:1,name:"clio"},{id:2,name:"megane"},{id:3,name:"range"}]

router.get("/all",(req,res)=>{
    res.json(voiture)
})

router.get("/:id",(req,res)=>{
    const voitureId = parseInt(req.params.id);
    const Voiture = voiture.find(elem=>elem.id ===voitureId)
    res.json(Voiture)
})
router.get("/addvoiture",(req,res)=>{
    const newv ={id:4,name:"Golf-7"}
    voiture.push(newv)
    res.status(201).send(voiture)
})
router.get("/update/:id",(req,res)=>{
    const voitureId = parseInt(req.params.id);
    voiture.map(elem=>{
       if (elem.id === voitureId )
     {  
        voiture[elem.id-1]={...elem , name : "BMW"}
        }
    } )
           return res.send(voiture)
       
        
    })
router.get("/delete/:id",(req,res)=>{
    const voitureId = parseInt(req.params.id);
    const Voiture = voiture.find(elem=>elem.id ===voitureId)
        if(Voiture){
        const result=     voiture.filter(elem=>{
                 return elem.id !== Voiture.id;
            })
            res.send(result)
           
        }
        else{
            return res.send("voiture not existe")
        }
    
})


module.exports=router; 