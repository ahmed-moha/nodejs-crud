const mongoose=require("mongoose");

const UserSchema=new mongoose.Schema({
    name:{type:String, required:true},
    phone:{type:Number},
    photo:{type:String, default:"https://craftsnippets.com/articles_images/placeholder/placeholder.jpg"}
},{timestamps:true});



module.exports=mongoose.model("Employees",UserSchema);