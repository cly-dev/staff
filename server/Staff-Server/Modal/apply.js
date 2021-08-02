const mongoose=require("../api/mongodb");
const {name,collection}=require("../Collection/apply");
const ApplySchema=new mongoose.Schema(collection);
module.exports=mongoose.model(name,ApplySchema,name);