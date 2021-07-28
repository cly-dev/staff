const {name,collection}=require("../Collection/user");
const mongoose=require("../api/mongodb");
const UserSchema=new mongoose.Schema(collection);
module.exports=mongoose.model(name,UserSchema,name);
