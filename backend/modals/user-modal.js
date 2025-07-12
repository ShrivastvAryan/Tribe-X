require("dotenv").config();
const mongoose=require('mongoose');
const token=require('jsonwebtoken');

//signup schema

const UserSchema=new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    bio:{
        type:String,
        default:"",
        required:true
    },
    location:{
        type:String,
        default:"",
        required:true
    },
    interest:{
        type:String,
        required:true
    }
})

//integrating the bycrypt here

UserSchema.pre('save',async function(next){
    if(!isModified('password')){
        return next();
    }

    try{
        const salt=await bcrypt.genSalt(10);
        this.password=await bcrypt.hash(this.password,salt);
        next()
    }
    catch(err){
        next(err)
    }
})


// ✅ Method to compare passwords (for login)
UserSchema.methods.comparePassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
};



const User=mongoose.model('User',UserSchema);

module.exports=User;