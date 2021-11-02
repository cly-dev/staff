const express = require("express");
const Staff = express.Router();
const {
  getMarkById,
  getEmailCode,
  getStaffIdByEmail,
  getNoticeByDate,
  Login,
  getNotice,
  ReadNotice,
  TopNotice,
  ModicInfo,
  ModicPassword,
  ModicImg,
  addOrder,
  modicOrder,
  deleteOrder,
  getOrderByPageNum,
  getSearchByPageNum,
  getOrderDetail,
  getState,
  findAllList,
  findAllType,
  addApply,
  delApply,
  getApplyByPageNum,
  handleRepeal,
  handleRef,
  handleDel,
  getStateByage,
  loginOut,
} = require("../control/user");
const interceptToken = require("../middleware/token");
Staff.use("/handleDelete", handleDel);
Staff.use("/getEmailCode", getEmailCode);
Staff.use("/getStaffIdByEmail", getStaffIdByEmail);
Staff.post("/login", Login);
//拦截
Staff.use(interceptToken);
Staff.get("/getNotices", getNotice);
Staff.get("/readNotice", ReadNotice);
Staff.get("/topNotice", TopNotice);
Staff.put("/modicInfo", ModicInfo);
Staff.put("/modicPassword", ModicPassword);
Staff.post("/modicImg", ModicImg);
Staff.post("/addOrder", addOrder);
Staff.put("/modicOrder", modicOrder);
Staff.delete("/deleteOrder", deleteOrder);
Staff.get("/getOrderByPageNum", getOrderByPageNum);
Staff.get("/getSearchByPageNum", getSearchByPageNum);
Staff.get("/getOrderDetail", getOrderDetail);
Staff.get("/getState", getState);
Staff.get("/findAllType", findAllType);
Staff.get("/findAllList", findAllList);
Staff.post("/addApply", addApply);
Staff.delete("/delApply", delApply);
Staff.get("/getApplyByPageNum", getApplyByPageNum);
Staff.get("/handleRepeal", handleRepeal);
Staff.get("/handleRef", handleRef);
Staff.get("/getStateByage", getStateByage);
Staff.get("/getNoticeByDate", getNoticeByDate);
Staff.get("/getMarkById", getMarkById);
Staff.get("/loginOut", loginOut);
module.exports = Staff;
