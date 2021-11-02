const express = require("express");
const path = require("path");
const Staff = require("../Router/staff");
const Admin = require("../Router/admin");
const Shop = require("../Router/shop");
const Type = require("../Router/type");
const Task = require("../Router/task");
const bodyParser = require("body-parser");
const { CheckCode } = require("../control/user");
const interceptToken = require("../middleware/token");
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(express.static(path.join(__dirname, "../www")));
app.use("/admin", Admin);
app.use("/staff", Staff);
app.all("/", (req, res) => {
  res.send("你好");
});
app.get("/getCode", CheckCode);
//管理员和员工有共同的行为,使用中间间拦截token
app.use(interceptToken);
app.use("/shop", Shop);
app.use("/type", Type);
app.use("/task", Task);
module.exports = app;
