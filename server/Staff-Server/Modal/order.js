const mongoose=require("../api/mongodb");
const {name,collection}=require("../Collection/order");
const OrderSchema=new mongoose.Schema(collection);
module.exports=mongoose.model(name,OrderSchema,name);