const {
  createTask,
  deleteTask,
  updateTask,
  findAllTask,
  findAllTaskCount,
  findTaskById,
  findTaskByIdCount,
  updateFinsh,
  findPostTask,
  findPostTaskCount,
  updatePostTask,
  applyPostTask,
  deleteAllTaskById,
} = require("../Dao/TaskDao");
const { msg, parameter, logger } = require("../api");
module.exports = {
  //增加任务
  addTask: async (req, res) => {
    try {
      const { adminId } = req.headers;
      const { userId, title, tartTime, endTime, content } = req.body;
      console.log(req.body);
      if (userId && title && tartTime && endTime && content) {
        msg(
          "DecideRes",
          res,
          await createTask({
            adminId,
            userId,
            title,
            tartTime,
            endTime,
            content,
          })
        );
      } else {
        msg("PError", res);
      }
    } catch (error) {
      logger.error(error);
      msg("SError", res);
      throw error;
    }
  },
  //删除任务
  delTask: async (req, res) => {
    try {
      const { _id } = req.query;
      if (_id) {
        msg("DecideRes", res, await deleteTask(_id));
      } else {
        msg("PError", res);
      }
    } catch (error) {
      logger.error(error);
      msg("SError", res);
      throw error;
    }
  },
  //修改任务
  changeTask: async (req, res) => {
    try {
      const { _id } = req.query;
      const { title, userId, endTime, tartTime, content } = req.body;
      const obj = { title, userId, endTime, tartTime, content };
      if (_id) {
        msg("DecideRes", res, await updateTask(_id, parameter(obj)));
      } else {
        msg("PError", res);
      }
    } catch (error) {
      logger.error(error);
      msg("SError", res);
      throw error;
    }
  },
  //查询所有任务
  findAll: async (req, res) => {
    try {
      const { pageNum, pageSize } = req.query;
      if (pageNum) {
        msg(
          "DecideRes",
          res,
          await findAllTask(pageNum, pageSize && pageSize * 1),
          {
            pageNum,
            pageSize: await findAllTaskCount(),
          }
        );
      } else {
        msg("PError", res);
      }
    } catch (error) {
      logger.error(error);
      msg("SError", res);
      throw error;
    }
  },
  //查询某人的所有任务
  findById: async (req, res) => {
    try {
      const { userId } = req.headers;
      const { pageNum, pageSize } = req.query;
      if (pageNum) {
        msg(
          "DecideRes",
          res,
          await findTaskById(userId, pageNum, pageSize && parseInt(pageSize)),
          { pageNum, pageSize: await findTaskByIdCount(userId) }
        );
      } else {
        msg("PError", res);
      }
    } catch (error) {
      logger.error(error);
      msg("SError", res);
      throw error;
    }
  },
  //点击完成任务
  finshTask: async (req, res) => {
    try {
      const { _id } = req.query;
      if (_id) {
        msg("DecideRes", res, await updateFinsh(_id));
      } else {
        msg("PError", res);
      }
    } catch (error) {
      logger.error(error);
      msg("SError", res);
      throw error;
    }
  },
  //申请延期
  applyPost: async (req, res) => {
    try {
      const { _id } = req.query;
      const { num, mask } = req.body;
      if (_id && num) {
        if (parseInt(num) < 0 && typeof parseInt(num) != "number") {
          msg("TypeError", res);
          return;
        }
        msg("DecideRes", res, await applyPostTask(_id, num, mask && mask));
      } else {
        msg("PError", res);
      }
    } catch (error) {
      logger.error(error);
      msg("SError", res);
      throw error;
    }
  },
  //获取所有的延期申请
  findPost: async (req, res) => {
    try {
      const { pageNum, pageSize } = req.query;
      if (pageNum) {
        msg(
          "DecideRes",
          res,
          await findPostTask(pageNum, pageSize && pageSize * 1),
          { pageNum, pageSize: await findPostTaskCount() }
        );
      } else {
        msg("PError", res);
      }
    } catch (error) {
      logger.error(error);
      msg("SError", res);
      throw error;
    }
  },
  //点击通过延期申请
  passPost: async (req, res) => {
    try {
      const { _id } = req.query;
      if (_id) {
        msg("DecideRes", res, await updatePostTask(_id));
      } else {
        msg("PError", res);
      }
    } catch (error) {
      logger.error(error);
      msg("SError", res);
      throw error;
    }
  },
  //删除某人全部的任务
  delAllTaskById: async (req, res) => {
    try {
      const { userId } = req.query;
      if (userId) {
        msg("DecideRes", res, await deleteAllTaskById(userId));
      } else {
        msg("PError", res);
      }
    } catch (error) {
      logger.error(error);
      msg("SError", res);
      throw error;
    }
  },
};
