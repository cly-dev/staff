const {
  createShop,
  deleteShop,
  updateShop,
  findShop,
  searchShop,
  addShopNum,
  findShopCount,
  searchShopCount,
  searchShopByType,
  findShopByIdDetail,
} = require("../Dao/ShopDao");
const { msg, logger } = require("../api");
module.exports = {
  //添加商品
  addShop: async (req, res) => {
    try {
      const { userId } = req.headers;
      const { Sname, num, price, type, mask } = req.body;
      if (Sname && num && price && type) {
        msg(
          "DecideRes",
          res,
          await createShop({ userId, Sname, num, price, type, mask })
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
  //删除商品
  delShop: async (req, res) => {
    try {
      const { _id } = req.query;
      if (_id) {
        msg("DecideRes", res, await deleteShop(_id));
      } else {
        msg("PError", res);
      }
    } catch (error) {
      logger.error(error);
      msg("SError", res);
      throw error;
    }
  },
  //修改商品
  changeShop: async (req, res) => {
    try {
      const { _id } = req.query;
      if (_id && JSON.stringify(req.body) !== "{}") {
        msg("DecideRes", res, await updateShop(_id, req.body));
      } else {
        msg("PError", res);
      }
    } catch (error) {
      logger.error(error);
      msg("SError", res);
      throw error;
    }
  },
  //查询所有商品
  findAllShop: async (req, res) => {
    try {
      const { pageNum, pageSize } = req.query;
      if (pageNum) {
        msg(
          "DecideRes",
          res,
          await findShop(pageNum, pageSize && pageSize * 1),
          {
            pageNum,
            pageSize: await findShopCount(),
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
  //模糊查询
  seaShop: async (req, res) => {
    try {
      const { pageNum, pageSize, result } = req.query;
      if (pageNum && result) {
        msg(
          "DecideRes",
          res,
          await searchShop(result, pageNum, pageSize && pageSize * 1),
          {
            pageNum,
            pageSize: await searchShopCount(result),
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
  //增加商品数量
  addNum: async (req, res) => {
    try {
      const { _id } = req.query;
      const { num } = req.body;
      if (_id && num) {
        msg("DecideRes", res, await addShopNum(_id, num));
      } else {
        msg("PError", res);
      }
    } catch (error) {
      logger.error(error);
      msg("SError", res);
      throw error;
    }
  },
  //根据类别对商品进行筛选
  searchByType: async (req, res) => {
    try {
      const { type } = req.query;
      if (type) {
        msg("DecideRes", res, await searchShopByType(type));
      } else {
        msg("PError", res);
      }
    } catch (error) {
      logger.error(error);
      msg("SError", res);
      throw error;
    }
  },
  //根据Id获取商品详情
  findByIdDetail: async (req, res) => {
    try {
      const { _id } = req.query;
      if (_id) {
        msg("DecideRes", res, await findShopByIdDetail(_id));
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
