const mongoose=require("../api/mongodb");
const {name,collection}=require("../Collection/type");
const TypeSchema=new mongoose.Schema(collection);
module.exports=mongoose.model(name,TypeSchema,name);