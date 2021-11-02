const express = require("express");
//商品管理模块
const Shop = express.Router();
const {
  delShop,
  changeShop,
  findAllShop,
  seaShop,
  addNum,
  addShop,
  searchByType,
  findByIdDetail,
} = require("../control/shop");
Shop.post("/addShop", addShop);
Shop.delete("/delShop", delShop);
Shop.put("/changeShop", changeShop);
Shop.get("/findAllShop", findAllShop);
Shop.get("/seaShop", seaShop);
Shop.put("/addNum", addNum);
Shop.get("/searchByType", searchByType);
Shop.get("/findByIdDetail", findByIdDetail);
module.exports = Shop;
