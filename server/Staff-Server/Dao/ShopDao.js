const ShopDao = require("../Modal/shop");
module.exports = {
  //增加商品
  createShop: (data) => {
    return new Promise((resolve, reject) => {
      const Shop = new ShopDao(data);
      Shop.save()
        .then((res) => {
          if (res) {
            resolve(true);
          } else {
            resolve("添加失败");
          }
        })
        .catch((err) => {
          reject(err);
        });
    });
  },
  //删除商品
  deleteShop: (_id) => {
    return new Promise((resolve, reject) => {
      ShopDao.deleteOne({ _id })
        .then((res) => {
          if (res.deleteCount) {
            resolve(true);
          } else {
            resolve("该条目不存在");
          }
        })
        .catch((err) => {
          reject(err);
        });
    });
  },
  //修改商品
  updateShop: (_id, data) => {
    return new Promise((resolve, reject) => {
      ShopDao.updateOne({ _id }, { $set: data })
        .then((res) => {
          if (res.nModified) {
            resolve(true);
          } else {
            resolve("请更新数据");
          }
        })
        .catch((err) => {
          reject(err);
        });
    });
  },
  //查询所有商品
  findShop: (pageNum, pageSize = 8) => {
    return new Promise((resolve, reject) => {
      ShopDao.find()
        .skip((pageNum - 1) * pageSize)
        .limit(pageSize)
        .sort({ num: 1 })
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
  },
  //查询所有商品的条数
  findShopCount: () => {
    return new Promise((resolve, reject) => {
      ShopDao.find()
        .count()
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
  },
  //模糊查询商品
  searchShop: (result, pageNum, pageSize = 8) => {
    return new Promise((resolve, reject) => {
      const reg = new RegExp(result);
      console.log(reg);
      //模糊查询
      ShopDao.find({ Sname: reg })
        .skip((pageNum - 1) * pageSize)
        .limit(pageSize)
        .sort({ num: 1 })
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
  },
  //模糊查询商品的条数
  searchShopCount: (result) => {
    return new Promise((resolve, reject) => {
      const reg = new RegExp(result);
      ShopDao.find({ Sname: reg })
        .count()
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
  },
  //增加商品数量
  addShopNum: (_id, num) => {
    return new Promise((resolve, reject) => {
      ShopDao.updateOne({ _id }, { $inc: { num } })
        .then((res) => {
          if (res.nModified) {
            resolve(true);
          } else {
            resolve("增加失败");
          }
        })
        .catch((err) => {
          reject(err);
        });
    });
  },
  //按照类别对商品进行筛选
  searchShopByType: (type) => {
    return new Promise((resolve, reject) => {
      const reg = new RegExp(type);
      ShopDao.find({ type: reg })
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
  },
  //根据Id获取商品详情
  findShopByIdDetail: (_id) => {
    return new Promise((resolve, reject) => {
      ShopDao.findById(_id)
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
  },
};
