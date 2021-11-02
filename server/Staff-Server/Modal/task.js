const mongoose = require("../api/mongodb");
const { name, collection } = require("../Collection/task");
const TaskSchema = new mongoose.Schema(collection);
module.exports = mongoose.model(name, TaskSchema, name);
