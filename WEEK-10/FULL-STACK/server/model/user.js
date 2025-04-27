const mongoose=require('mongoose')
const collection=new mongoose.schema({
    name:String,
    number:Number
})
model.exports=mongoose.model("User",collection);