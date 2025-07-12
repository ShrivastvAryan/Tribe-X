require("dotenv").config();
const mongoose = require('mongoose');

const contactSchema=new mongoose.Schema({
    id:{
        type:Number
    },
    contact_name:{
        type:String,
        required:true
    },
    contact_email:{
        type:String,
        required:true
    },
    contact_subject:{
        type:String,
        required:true
    },
    contact_message:{
        type:String,
        required:true
    }
})

const Contact=mongoose.model('Contact',contactSchema);

module.exports=Contact;