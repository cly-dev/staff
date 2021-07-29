const mongoose=require("../api/mongodb");
const {name,collection}=require("../Collection/notice");
const NoticeSchema=new mongoose.Schema(collection);
module.exports=mongoose.model(name,NoticeSchema,name);