const express = require("express");
const {
  handleChangeInfo,
  uploadFile,
  handleChangePassword,
  findAllAminInfo,
  handleRecover,
  getOrder,
  deleteNotice,
  getAllNotice,
  findStaffBySearch,
  getOrderCountByMonth,
  getOrderCount,
  AddNotice,
  AddAdmin,
  findAdminById,
  Login,
  addType,
  getAllApply,
  UserInsert,
  findAllStaff,
  handleSuspend,
  handleKick,
  getAllState,
  getOrderByEvery,
  hasReader,
  ApplyPass,
  ApplyTurn,
  handleFreezeStatus,
  handleDeleteStatus,
  handleRecoverStatus,
  handleReset,
  handleDelet,
  deleteFile,
  changeAvatar,
} = require("../control/admin");
const interceptToken = require("../middleware/token");
const Admin = express.Router();
Admin.post("/login", Login);
//识别token进行拦截
Admin.use(interceptToken);
Admin.post("/addStaff", UserInsert);
Admin.post("/addNotice", AddNotice);
Admin.post("/addAdmin", AddAdmin);
Admin.get("/findAdminById", findAdminById);
Admin.post("/addType", addType);
Admin.get("/getAllApply", getAllApply);
Admin.get("/findAllStaff", findAllStaff);
Admin.get("/handleSuspend", handleSuspend);
Admin.get("/handleKick", handleKick);
Admin.get("/getAllState", getAllState);
Admin.get("/getOrderCount", getOrderCount);
Admin.get("/getOrderCountByMonth", getOrderCountByMonth);
Admin.get("/getOrderByEvery", getOrderByEvery);
Admin.get("/findStaffBySearch", findStaffBySearch);
Admin.get("/getAllNotice", getAllNotice);
Admin.delete("/deleteNotice", deleteNotice);
Admin.get("/getOrderById", getOrder);
Admin.get("/handleRecover", handleRecover);
Admin.get("/hasReader", hasReader);
Admin.put("/applyPass", ApplyPass);
Admin.put("/applyTurn", ApplyTurn);
Admin.put("/handleChangeInfo", handleChangeInfo);
Admin.put("/handleChangePassword", handleChangePassword);
Admin.get("/findAllAminInfo", findAllAminInfo);
Admin.put("/handleFreezeStatus", handleFreezeStatus);
Admin.put("/handleDeleteStatus", handleDeleteStatus);
Admin.put("/handleRecoverStatus", handleRecoverStatus);
Admin.put("/handleReset", handleReset);
Admin.delete("/handleDelet", handleDelet);
Admin.post("/uploadFile", uploadFile);
Admin.delete("/deleteFile", deleteFile);
Admin.post("/changeAvatar", changeAvatar);
module.exports = Admin;
