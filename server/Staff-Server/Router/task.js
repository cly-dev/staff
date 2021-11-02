const express = require("express");
const Task = express.Router();
const {
  addTask,
  delTask,
  changeTask,
  findAll,
  findById,
  finshTask,
  applyPost,
  findPost,
  passPost,
  delAllTaskById,
} = require("../control/task");
Task.post("/addTask", addTask);
Task.delete("/delTask", delTask);
Task.put("/changeTask", changeTask);
Task.get("/findById", findById);
Task.get("/findAll", findAll);
Task.put("/finshTask", finshTask);
Task.put("/applyPost", applyPost);
Task.get("/findPost", findPost);
Task.put("/passPost", passPost);
Task.delete("/delAllTaskById", delAllTaskById);
module.exports = Task;
