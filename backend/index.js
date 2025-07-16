require("dotenv").config(); 
const PORT=5000;
const express=require('express');
const app=express();
const cors=require('cors'); 
const connectDB=require('./db');
const contactRouter = require('./router/contact-router');
const errorMiddleware = require('./validators/error-middleware');
const userRouter = require('./router/user-router');
const {Server}=require('socket.io')
const http = require('http');

app.use(cors());
app.use(express.json());



const server = http.createServer(app);

const io=new Server(server,{
    cors:{
    origin:'http://localhost:5173',
    methods:["GET",'POST'],
    credentials:true,
}
});

io.on('connection',(socket)=>{ //this is circuit formation

    console.log('User Connected')
    console.log("Id",socket.id)

    socket.on('message',(data)=>{
        console.log(data);
    })

    socket.on('disconnect',()=>{
        console.log("User disconnected",socket.id)
    })

})

app.get('/',(req,res)=>{
    res.send('Express app is running!');
})

app.use('/api', contactRouter);
app.use('/api/auth', userRouter);

connectDB().then(()=>{

    server.listen(PORT,(error)=>{ //will use server.listen here
    if(!error){
        console.log(`Server is running on port ${PORT}`);
    }
    else{
        console.log("Error occurred, server can't start", error);
    }

})
})
