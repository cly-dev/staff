const {
  findALLType,
  updateList,
  deleteList,
  deleteType,
} = require("../Dao/TypeDao");
const { msg, logger } = require("../api");
module.exports = {
  //获取类别
  getType: async (req, res) => {
    try {
      msg("DecideRes", res, await findALLType());
    } catch (error) {
      logger.error(error);
      msg("SError", res);
      throw error;
    }
  },
  //增加子类
  createList: async (req, res) => {
    const { typeId } = req.query;
    const { list } = req.body;
    try {
      if (typeId && list) {
        msg("DecideRes", res, await updateList(typeId, list));
      } else {
        msg("PError", res);
      }
    } catch (error) {
      logger.error(error);
      msg("SError", res);
      throw error;
    }
  },
  //删除子类
  deleteList: async (req, res) => {
    const { typeId } = req.query;
    let { list } = req.body;
    try {
      list = JSON.parse(list);
      if (typeId && list) {
        msg("DecideRes", res, await deleteList(typeId, list));
      } else {
        msg("PError", res);
      }
    } catch (error) {
      logger.error(error);
      msg("SError", res);
      throw error;
    }
  },
  //删除父类
  delType: async (req, res) => {
    try {
      const { typeId } = req.query;
      if (typeId) {
        msg("DecideRes", res, await deleteType(typeId));
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
