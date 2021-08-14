const mongoose=require("../api/mongodb");
const {name,collection}=require("../Collection/noticeUser");
const noticeUSerSchema=new mongoose.Schema(collection);
module.exports=mongoose.model(name,noticeUSerSchema,name);