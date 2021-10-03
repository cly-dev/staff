const TypeDao = require("../Modal/type");
//添加类别
function addTypes(TypeInfo) {
  return new Promise((resolve, reject) => {
    const { type, list } = TypeInfo;
    let str = list.slice(1, list.length - 1);
    let arr = str.split(",");
    console.log(arr);
    TypeDao.findOne({ type })
      .then((res) => {
        if (res) {
          console.log(res.list.filter((value) => arr.indexOf(value) === 1));
          let arr1 = arr.concat(res.list).filter(function (v, i, arr) {
            return arr.indexOf(v) === arr.lastIndexOf(v);
          });
          TypeDao.updateOne(
            { type },
            { $push: { list: { $each: arr1 } } }
          ).then((res) => {
            if (res.nModified) {
              resolve(true);
            } else {
              resolve("该类别已存在");
            }
          });
        } else {
          const Type = new TypeDao({ type });
          Type.save()
            .then((res) => {
              if (res) {
                return TypeDao.updateOne(
                  { type },
                  { $push: { list: { $each: arr } } }
                );
              } else {
                new Error("添加失败");
              }
            })
            .then((res) => {
              if (res.nModified) {
                resolve(true);
              } else {
                resolve("添加失败");
              }
            });
        }
      })
      .catch((err) => {
        reject(err);
      });
  });
}
//查询所有类别
function findAllTypes() {
  return new Promise((resolve, reject) => {
    TypeDao.find({}, { type: 1, _id: 1 })
      .then((res) => {
        if (res[0]) {
          resolve(res);
        } else {
          resolve("查询失败");
        }
      })
      .catch((err) => {
        reject(err);
      });
  });
}
//查询子类别
function findAllLists(_id) {
  return new Promise((resolve, reject) => {
    TypeDao.findOne({ _id }, { list: 1 })
      .then((res) => {
        if (res) {
          resolve(res);
        } else {
          resolve("查询失败");
        }
      })
      .catch((err) => {
        reject(err);
      });
  });
}
//查询所有类别+子类别
function findALLType() {
  return new Promise((resolve, reject) => {
    TypeDao.find()
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  });
}
//删除父类别
function deleteType(_id) {
  return new Promise((resolve, reject) => {
    TypeDao.deleteOne({ _id })
      .then((res) => {
        if (res.deletedCount) {
          resolve(true);
        } else {
          resolve("删除失败");
        }
      })
      .catch((err) => {
        reject(err);
      });
  });
}
//增加子类别
function updateList(_id, list) {
  return new Promise((resolve, reject) => {
    TypeDao.findOne({ _id, list: { $elemMatch: { $eq: list } } })
      .then((res) => {
        console.log(res);
        if (res) {
          resolve("该子类已存在");
        } else {
          return TypeDao.updateOne({ _id }, { $push: { list } });
        }
      })
      .then((res) => {
        if (res.nModified) {
          resolve(true);
        } else {
          resolve("请更新");
        }
      })
      .catch((err) => {
        reject(err);
      });

    TypeDao.updateOne({ _id }, { $push: { arr: list } }).then((res) => {});
  });
}
//批量删除子类
function deleteList(_id, list) {
  return new Promise((resolve, reject) => {
    TypeDao.updateOne({ _id }, { $pullAll: { list } })
      .then((res) => {
        console.log(res);
        if (res.nModified) {
          resolve(true);
        } else {
          resolve("删除失败");
        }
      })
      .catch((err) => {
        reject(err);
      });
  });
}
module.exports = {
  addTypes,
  findAllLists,
  findAllTypes,
  findALLType,
  deleteType,
  updateList,
  deleteList,
};
