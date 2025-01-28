const mongoose = require('mongoose')


const user = new mongoose.Schema({
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
        required:true,
        unique:true
    },
    roles:{
        type:[String],
        default:['user','admin']
    },
    profile:{
        firstname:{
            type:String
        },
        lastname:{
            type:String
        },
        age:{
            type:Number
        }
    },
    lastlogin:{
        type:Date
    },
},
{
    timestamps:true
}) 

const User = mongoose.model('User',user)
module.exports=User