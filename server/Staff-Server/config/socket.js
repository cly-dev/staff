const app = require("./express");
const http = require("http");
const io = require("socket.io");
const { findAdminById } = require("../Dao/AdminDao");
const server = http.createServer(app);
const socket = io(server, { cors: true });
let onlineCount = 0;
let onlineUsers = {};
let onlineAdmin = {};
socket.on("connection", (client) => {
  try {
    //员工登录事件
    client.on("login", (data) => {
      if (!onlineUsers.hasOwnProperty(data)) {
        onlineUsers[data] = client.id;
        onlineCount++;
        client.to(onlineUsers[data]).emit("message", "您已上线");
      } else {
        onlineUsers[data] = client.id;
      }
    });
    //管理员登录
    client.on("adminLogin", (data) => {
      if (Object.keys(onlineAdmin).length === 0) {
        onlineAdmin[data] = client.id;
        onlineCount++;
      } else {
        for (let key in onlineUsers) {
          if (data !== key || onlineAdmin[data] !== client.id) {
            onlineAdmin[data] = client.id;
          }
          if (data !== key) {
            client.to(onlineAdmin[data]).emit("message", "您已上线");
          }
        }
      }
    });
    //员工添加申请
    client.on("apply", (data) => {
      for (let key in onlineAdmin) {
        client
          .to(onlineAdmin[key])
          .emit("message", "您有一条新的申请,请尽快处理");
        client.to(onlineAdmin[key]).emit("handleApply", data);
      }
    });
    //管理员发布通知
    client.on("notice", async (data) => {
      const result = await findAdminById(data.adminId);
      for (let key in onlineUsers) {
        socket.to(onlineUsers[key]).emit("message", "有一条新通知");
        socket.to(onlineUsers[key]).emit("handleNotice", {
          ...data,
          name: result.name,
          position: result.position,
          status: 0,
        });
      }
    });
    //管理员审核
    client.on("audit", async (data) => {
      if (onlineUsers[data.userId]) {
        client.to(onlineUsers[data.userId]).emit("message", data.message);
        client.to(onlineUsers[data.userId]).emit("handleTurn", data);
      }
    });
    //员工退出登录
    client.on("loginOut", (data) => {
      if (onlineUsers[data]) {
        delete onlineUsers[data];
        onlineCount--;
      }
    });
    //管理员退出登陆
    client.on("adminLogOut", (data) => {
      if (onlineAdmin[data]) {
        delete onlineAdmin[data];
        onlineCount--;
      }
    });
    //管理员发布任务
    client.on("pubPost", (list, data) => {
      for (let key in list) {
        if (onlineUsers[list[key]]) {
          client
            .to(onlineUsers[list[key]])
            .emit("message", "您有一个新的待办任务,请尽快完成");
          client.to(onlineUsers[list[key]]).emit("subPost", data);
        }
      }
    });
    //管理员收到任务延期申请
    client.on("applyPost", (data) => {
      client
        .to(onlineAdmin[data["adminId"]])
        .emit("message", "您有一条任务延期申请,请尽快处理");
      client.to(onlineAdmin[data["adminId"]]).emit("receivePost", data);
      // client.to(onlineAdmin[key]);
    });
    //管理员审核任务延期申请
    client.on("postAudit", (data) => {
      if (onlineUsers[data.userId]) {
        client.to(onlineUsers[data.userId]).emit("message", data.message);
        client.to(onlineUsers[data.userId]).emit("postTurn", data);
      }
    });
    //员工完成任务
    client.on("finshTask", (data) => {
      client
        .to(onlineAdmin[data.adminId])
        .emit("message", `${data.username}完成任务,请查阅`);
      client.to(onlineAdmin[data.adminId]).emit("finshTurn", data);
    });
  } catch (err) {
    throw err;
  }
});
module.exports = server;
