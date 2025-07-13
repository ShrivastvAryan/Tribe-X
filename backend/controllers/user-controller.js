const User=require('../modals/user-modal');
const bcrypt = require('bcryptjs');

// Function to handle user registration

const register=async(req,res)=>{
    try {
        console.log(req.body)

        const{username,email,password,bio,location,interest}=req.body;

        const userExist=await User.findOne({email});
        if (userExist) {
         return res.status(400).json({ message: "User already exists" });
         }

        const userCreated=await User.create({
            username
            ,email
            ,password
            ,bio
            ,location
            ,interest})

            const token= await userCreated.generateToken();
        res.status(201).json({message:"User created successfully",token,user:userCreated});
        console.log("User created successfully",userCreated);
    } catch (error) {
        res.status(500).json({message:"Internal server error",error:error.message});
    }
}

// Function to handle user login
const login=async(req,res)=>{
    try {
        const{email,password}=req.body;

        if(!email || !password){
            return res.status(400).json({message:"Email and password are required"});
        }

        const user=await User.findOne({email})
        if(!user){
            return res.status(404).json({message:"Invalid email"});
        }

        const isPasswordMatch = await bcrypt.compare(password, user.password);
        if (!isPasswordMatch) {
            return res.status(401).json({ message: "Invalid password" });
        }

        const token = await user.generateToken();
        res.status(200).json({message:"Login successful",token,user});
        console.log("User logged in successfully",user);

    } catch (error) {
        res.status(500).json({message:"Internal server error",error:error.message});
        
    }
}

module.exports={register,login};