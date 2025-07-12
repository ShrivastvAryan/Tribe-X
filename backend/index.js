require("dotenv").config(); 
const PORT=5000;
const express=require('express');
const app=express();
const cors=require('cors'); 

app.use(cors());
app.use(express.json());

app.get('/',(req,res)=>{
    res.send('Express app is running!');
})

app.listen(PORT,(error)=>{
    if(!error){
        console.log(`Server is running on port ${PORT}`);
    }
    else{
        console.log("Error occurred, server can't start", error);
    }
})