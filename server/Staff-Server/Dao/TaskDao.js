const TaskDao = require("../Modal/task");
module.exports = {
  //发布任务
  createTask: (data) => {
    return new Promise((resolve, reject) => {
      const task = new TaskDao(data);
      task
        .save()
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
  //删除任务
  deleteTask: (_id) => {
    return new Promise((resolve, reject) => {
      TaskDao.deleteOne({ _id })
        .then((res) => {
          if (res.deletedCount) {
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
  //修改任务
  updateTask: (_id, data) => {
    return new Promise((resolve, reject) => {
      TaskDao.updateOne({ _id }, { $set: data })
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
  //查询所有任务
  findAllTask: (pageNum, pageSize = 8) => {
    return new Promise((resolve, reject) => {
      TaskDao.aggregate([
        {
          $lookup: {
            from: "user",
            localField: "userId",
            foreignField: "userId",
            as: "user",
          },
        },
        {
          $unwind: "$user",
        },
        {
          $project: {
            user: {
              password: 0,
              status: 0,
              token: 0,
            },
          },
        },
      ])
        .skip((pageNum - 1) * pageSize)
        .limit(pageSize)
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
  },
  //查询所有任务条数
  findAllTaskCount: () => {
    return new Promise((resolve, reject) => {
      TaskDao.find()
        .count()
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
  },
  //查询某人的所有待办任务
  findTaskById: (userId, pageNum, pageSize = 8) => {
    return new Promise((resolve, reject) => {
      TaskDao.aggregate([
        {
          $match: {
            userId,
            status: {
              $ne: "1",
            },
          },
        },
        {
          $lookup: {
            from: "admin",
            localField: "adminId",
            foreignField: "adminId",
            as: "admin",
          },
        },
        {
          $unwind: "$admin",
        },
        {
          $project: {
            admin: {
              _id: 0,
              token: 0,
              password: 0,
              status: 0,
              lastModic: 0,
            },
          },
        },
      ])
        .skip(pageSize * (pageNum - 1))
        .limit(pageSize)
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
  },
  //查询默认的所有待办任务条数
  findTaskByIdCount: (userId) => {
    return new Promise((resolve, reject) => {
      TaskDao.find({ userId, status: { $ne: "1" } })
        .count()
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
  },
  //完成任务
  updateFinsh: (_id) => {
    return new Promise((resolve, reject) => {
      TaskDao.updateOne({ _id }, { $set: { status: "1" } })
        .then((res) => {
          console.log(res);
          if (res.nModified) {
            resolve(true);
          } else {
            resolve("已完成");
          }
        })
        .catch((err) => {
          reject(err);
        });
    });
  },
  //获取所有延期任务
  findPostTask: (pageNum, pageSize = 8) => {
    return new Promise((resolve, reject) => {
      TaskDao.find({ status: 3 })
        .skip((pageNum - 1) * pageSize)
        .limit(pageSize)
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
  },
  //获取所有延期任务条数
  findPostTaskCount: () => {
    return new Promise((resolve, reject) => {
      TaskDao.find({ status: 3 })
        .count()
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
  },
  //通过延期任务
  updatePostTask: (_id) => {
    return new Promise((resolve, reject) => {
      TaskDao.updateOne({ _id }, { $set: { status: "3" } })
        .then((res) => {
          if (res.nModified) {
            resolve(true);
          } else {
            resolve("已通过");
          }
        })
        .catch((err) => {
          reject(err);
        });
    });
  },
  //申请延期
  applyPostTask: (_id, num, mask = "无") => {
    return new Promise((resolve, reject) => {
      TaskDao.updateOne({ _id }, { postTime: num, mask, status: "2" })
        .then((res) => {
          if (res.nModified) {
            resolve(true);
          } else {
            resolve("已提交申请");
          }
        })
        .catch((err) => {
          reject(err);
        });
    });
  },
  //删除某人全部的任务
  deleteAllTaskById: (userId) => {
    return new Promise((resolve, reject) => {
      TaskDao.deleteMany({ userId })
        .then((res) => {
          if (res.deletedCount) {
            resolve(true);
          } else {
            resolve("已全部删除");
          }
        })
        .catch((err) => {
          reject(err);
        });
    });
  },
};
