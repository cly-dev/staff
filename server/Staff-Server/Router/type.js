const express = require("express");
const { getType, createList, deleteList, delType } = require("../control/type");
const Type = express.Router();
Type.get("/getType", getType);
Type.put("/createList", createList);
Type.put("/deleteList", deleteList);
Type.delete("/deleteType", delType);
module.exports = Type;
