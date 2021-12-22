const mongoose=require("mongoose")

const PostSchema=new mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    },
   body:{
       type:String
   },
    image:{
        type:String
    },
    dateOfCreactionPost:{
        type:Date,
        default:Date.now()
    },
    
})
module.exports=mongoose.model("Post",PostSchema)