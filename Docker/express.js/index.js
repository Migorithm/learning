const express = require("express");

const app = express();

app.get('/',(req,res)=>{ 
    res.send("Hello world!");

})



app.listen(8884,()=>{
    console.log("Listening on port 8884");

})