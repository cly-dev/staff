const express = require("express");
const path = require("path");
const Staff = require("../Router/staff");
const Admin = require("../Router/admin");
const bodyParser = require("body-parser");
const { CheckCode } = require("../control/user");
const {
  getType,
  createList,
  deleteList,
  delType,
} = require("../control/public");
const { Token, msg } = require("../api");
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
app.get("/getType", getType);
//管理员和员工有共同的行为,使用中间间拦截token
app.use((req, res, next) => {
  const { token } = req.headers;
  if (token) {
    if (Token.TokenVerify(token)) {
      //token通过放行
      next();
    } else {
      //token过期
      msg("TError", res);
    }
  } else {
    //无token提示
    msg("FError", res, "请检查是否携带token");
  }
});
app.put("/createList", createList);
app.put("/deleteList", deleteList);
app.delete("/deleteType", delType);
module.exports = app;
