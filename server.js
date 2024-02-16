const express = require("express")
const app = express();
const voiture =require('./routers/voiture')
app.use(express.json())
app.use("/voiture",voiture)

app.listen(5001,()=>{
    console.log("listening or port 5001");
})