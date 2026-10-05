import mongoose from "mongoose";


const userSchema=new mongoose.Schema({
  Email:{
    type:String,
    required:true
  },
   Password:{
    type:String,
    required:true
  },
})

const User=mongoose.model("User",userSchema)
export default User