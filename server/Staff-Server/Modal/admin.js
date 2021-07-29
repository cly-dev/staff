const mongoose=require("../api/mongodb");
const {name,collection}=require("../Collection/admin");
const AdminSchema=new mongoose.Schema(collection);
module.exports=mongoose.model(name,AdminSchema,name);