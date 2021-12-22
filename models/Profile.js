const mongoose=require("mongoose")

const ProfileSchema=new mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    },
   image:{
       type:String
   },
    tel:{
        type:Number
    },
    dateOfCreactionProfile:{
        type:Date,
        default:Date.now()
    },
    
})
module.exports=mongoose.model("Profile",ProfileSchema)