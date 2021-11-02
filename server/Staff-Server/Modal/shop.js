const mongoose = require("../api/mongodb");
const { name, collection } = require("../Collection/shop");
const ShopSchema = new mongoose.Schema(collection);
module.exports = mongoose.model(name, ShopSchema, name);
