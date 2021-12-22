const mongoose=require("mongoose")

const UserSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        unique:true,
        required:true
    },
    password:{
        type:String
    },
    role:{
        type:String,
        required:true,
        enum:["admin","user"],
        default:"user",
    },
    posts:[{
        type:mongoose.Schema.Types.ObjectId,
        ref: "Post"
    }],
    dateOfCreaction:{
        type:Date,
        default:Date.now()
    },
    
})
module.exports=mongoose.model("User",UserSchema)


