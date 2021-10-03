const AdminDao = require("../Modal/admin");
const { TokenVerify, TokenSign } = require("../api/JWT/token");
//增加管理员
function AddAdmins(data) {
  const promise = new Promise((resolve, reject) => {
    const Admin = new AdminDao(data);
    Admin.save()
      .then((res) => {
        if (res) {
          resolve(true);
        } else {
          resolve(false);
        }
      })
      .catch((err) => {
        reject(err);
      });
  });
  return promise;
}
//查询Id是否重复
function findAdminByIds(adminId) {
  const promise = new Promise((resolve, reject) => {
    AdminDao.findOne({ adminId })
      .then((res) => {
        if (res) {
          resolve(true);
        } else {
          resolve("该Id已存在");
        }
      })
      .catch((err) => {
        reject(err);
      });
  });
  return promise;
}
//登录
function Logins(adminId, password) {
  const promise = new Promise((resolve, reject) => {
    AdminDao.findOne({ adminId, password }, { _id: 0, __v: 0, password: 0 })
      .then((res) => {
        if (res) {
          if (!TokenVerify(res.token)) {
            const token = TokenSign({ adminId, name: res.name });
            res.token = token;
            AdminDao.updateOne({ adminId }, { $set: { token } }, (err, res) => {
              if (err) {
                reject(err);
              }
            });
          }
          resolve(res);
        } else {
          resolve("账号或密码错误");
        }
      })
      .catch((err) => {
        reject(err);
      });
  });
  return promise;
}
//根据管理员Id查找信息
function findAdminById(adminId) {
  return new Promise((resolve, reject) => {
    AdminDao.findOne({ adminId }, { name: 1, position: 1 })
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  });
}
//修改管理员信息
function modicAdminInfo(adminId, data) {
  return new Promise((resolve, reject) => {
    AdminDao.updateOne({ adminId }, { $set: data })
      .then((res) => {
        if (res.nModified) {
          return AdminDao.findOne({ adminId }, { password: 0, token: 0 });
        } else {
          resolve("请修改信息");
        }
      })
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  });
}
//修改管理员密码
function modicAdminPassword(adminId, oldPsd, newPsd) {
  return new Promise((resolve, reject) => {
    AdminDao.findOne({ adminId })
      .then((res) => {
        if (res.password === oldPsd) {
          if (res.password === "123456") {
            return AdminDao.updateOne(
              { adminId },
              { password: newPsd, status: "1" }
            );
          }
          return AdminDao.updateOne(
            { adminId },
            { $set: { password: newPsd } }
          );
        } else {
          resolve("旧密码错误");
        }
      })
      .then((res) => {
        if (res.nModified) {
          resolve(true);
        } else {
          resolve("新密码不能和旧密码一致");
        }
      })
      .catch((err) => {
        reject(err);
      });
  });
}
//修改管理员头像
function updateAvatar(adminId, imgPath) {
  return new Promise((resolve, reject) => {
    AdminDao.updateOne({ adminId }, { $set: { imgPath } })
      .then((res) => {
        console.log(res);
        if (res.nModified) {
          resolve(true);
        } else {
          reject(new Error("请更新头像"));
        }
      })
      .catch((err) => {
        reject(err);
      });
  });
}
//获取全部管理员信息
function findAllAdmin(pageNum) {
  return new Promise((resolve, reject) => {
    AdminDao.find({ $or: [{ power: "0" }, { power: "1" }] })
      .skip((pageNum - 1) * 8)
      .limit(8)
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  });
}
//获取全部管理员条数
function findAllCount() {
  return new Promise((resolve, reject) => {
    AdminDao.find({ $or: [{ power: "0" }, { power: "1" }] })
      .count()
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  });
}
//改变管理员的权限
function modicPower(adminId, power) {
  return new Promise((resolve, reject) => {
    AdminDao.updateOne({ adminId }, { power })
      .then((res) => {
        if (res.nModified) {
          resolve(true);
        } else {
          resolve("未修改");
        }
      })
      .catch((err) => {
        reject(false);
      });
  });
}
//改变管理员的状态
function modicStatus(adminId, status) {
  return new Promise((resolve, reject) => {
    AdminDao.updateOne({ adminId }, { status })
      .then((res) => {
        if (res.nModified) {
          resolve(true);
        } else {
          resolve("未修改");
        }
      })
      .catch((err) => {
        reject(err);
      });
  });
}
//根据adminId查找用户状态
function findStatusById(adminId) {
  return new Promise((resolve, reject) => {
    AdminDao.findOne({ adminId }, { password: 1 })
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  });
}
//重置账号
function handleResetAdmin(adminId) {
  return new Promise((resolve, reject) => {
    AdminDao.updateOne({ adminId }, { $set: { status: 0, password: "123456" } })
      .then((res) => {
        if (res.nModified) {
          resolve(true);
        } else {
          resolve("已为初识状态");
        }
      })
      .catch((err) => {
        reject(err);
      });
  });
}
//删除账号
function handleDeletAdmin(adminId) {
  return new Promise((resolve, reject) => {
    AdminDao.deleteOne({ adminId })
      .then((res) => {
        if (res.deletedCount) {
          resolve(true);
        } else {
          resolve("已删除");
        }
      })
      .catch((err) => {
        reject(err);
      });
  });
}

module.exports = {
  AddAdmins,
  findAdminByIds,
  Logins,
  findAdminById,
  modicAdminInfo,
  modicAdminPassword,
  findAllAdmin,
  modicPower,
  modicStatus,
  findAllCount,
  findStatusById,
  handleResetAdmin,
  handleDeletAdmin,
  updateAvatar,
};
