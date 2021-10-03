const {
  AddNotices,
  getAllNotices,
  deleteNotices,
  getAllNoticeCount,
} = require("../Dao/NoticeDao");
const {
  findAllCount,
  AddAdmins,
  findAdminByIds,
  Logins,
  modicAdminInfo,
  modicAdminPassword,
  findAllAdmin,
  modicStatus,
  findStatusById,
  handleResetAdmin,
  handleDeletAdmin,
  updateAvatar,
} = require("../Dao/AdminDao");
const { addTypes } = require("../Dao/TypeDao");
const {
  getAllStates,
  getStaffCount,
  getOrderCounts,
  getOrderCountByMonths,
  getOrderCountEvery,
  getOrderById,
} = require("../Dao/OrderDao");
const {
  getAllApplys,
  getAllCount,
  handlePass,
  handleTurn,
} = require("../Dao/ApplyDao");
const {
  UserInserts,
  findAllStaffs,
  findStaffCount,
  handleStaff,
  findStaffSearch,
  getStaffPsd,
  findStaffSearchCount,
} = require("../Dao/UserDao.js");
const { HasReader } = require("../Dao/NoticeUserDao");
const Time = require("../api/time");
const msg = require("../api/message");
const { formatJudge } = require("../api");
const logger = require("../api/log");
const upload = require("../api/upload");
const fs = require("../api/fs");
const path = require("path");
//登录
const Login = async (req, res) => {
  try {
    const { adminId, password } = req.body;
    if (adminId && password) {
      msg("DecideRes", res, await Logins(adminId, password));
    } else {
      msg("PError", res);
    }
  } catch (error) {
    logger.error("admin/admin" + error);
    msg("SError", res);
    throw error;
  }
};
//增加用户
const UserInsert = async (req, res) => {
  try {
    const { username, userId } = req.body;
    const timer = userId.slice(0, userId.length - 4) * 1;
    const joinTime = Time(timer);
    if (!(username && userId)) {
      msg("PError", res);
    } else {
      msg("DecideRes", res, await UserInserts({ username, userId, joinTime }));
    }
  } catch (error) {
    logger.error(error);
    msg("SError", res);
    throw error;
  }
};
//增加管理员
const AddAdmin = async (req, res) => {
  try {
    console.log(req.body);
    const { adminId, name, position, power } = req.body;
    const timer = adminId.slice(0, adminId.length - 4) * 1;
    const joinTime = Time(timer);
    if (!(adminId && name && position && power)) {
      msg("PError", res);
    } else {
      msg(
        "DecideRes",
        res,
        await AddAdmins({ adminId, name, position, joinTime, power })
      );
    }
  } catch (error) {
    logger.error("admin/admin" + error);
    msg("SError", res);
    throw error;
  }
};
//查询Id
const findAdminById = async (req, res) => {
  try {
    const { adminId } = req.query;
    if (adminId) {
      msg("DecideRes", res, await findAdminByIds(adminId));
    } else {
      msg("PError", res);
    }
  } catch (error) {
    logger.error("admin/admin" + error);
    msg("SError", res);
    throw error;
  }
};
//发布公告
const AddNotice = async (req, res) => {
  try {
    const { adminId } = req.headers;
    const { title, content, file } = req.body;
    if (title && content) {
      msg(
        "DecideRes",
        res,
        await AddNotices({ adminId, title, content, file })
      );
    } else {
      msg("PError", res);
    }
  } catch (error) {
    logger.error("admin/admin" + error);
    msg("SError", res);
    throw error;
  }
};
//添加类别
const addType = async (req, res) => {
  try {
    const { type, list } = req.body;
    if (type && list) {
      msg("DecideRes", res, await addTypes(req.body));
    } else {
      msg("PError", res);
    }
  } catch (error) {
    logger.error("admin/admin" + error);
    msg("SError", res);
    throw error;
  }
};
//查询所有人的请假信息
const getAllApply = async (req, res) => {
  try {
    const { pageNum } = req.query;
    if (pageNum) {
      msg("DecideRes", res, await getAllApplys(pageNum), {
        pageNum,
        pageSize: await getAllCount(),
      });
    } else {
      msg("PError", res);
    }
  } catch (error) {
    logger.error("admin/admin" + error);
    msg("SError", res);
    throw error;
  }
};
//查询所有人的信息
const findAllStaff = async (req, res) => {
  try {
    const { pageNum } = req.query;
    if (pageNum) {
      msg("DecideRes", res, await findAllStaffs(pageNum), {
        pageSize: await findStaffCount(),
        pageNum,
      });
    } else {
      msg("PError", res);
    }
  } catch (error) {
    logger.error("admin/admin" + error);
    msg("SError", res);
    throw error;
  }
};
//停职
const handleSuspend = async (req, res) => {
  try {
    const { userId } = req.query;
    if (userId) {
      msg("DecideRes", res, await handleStaff(userId, -1));
    } else {
      msg("PError", res);
    }
  } catch (error) {
    logger.error("admin/admin" + error);
    msg("SError", res);
    throw error;
  }
};
//解雇
const handleKick = async (req, res) => {
  try {
    const { userId } = req.query;
    if (userId) {
      msg("DecideRes", res, await handleStaff(userId, -2));
    } else {
      msg("PError", res);
    }
  } catch (error) {
    logger.error("admin/admin" + error);
    msg("SError", res);
    throw error;
  }
};
//恢复
const handleRecover = async (req, res) => {
  try {
    const { userId } = req.query;
    if (userId) {
      const data = await getStaffPsd(userId);
      let status = 1;
      if (data[0].password === "123456") {
        status = 0;
      }
      msg("DecideRes", res, await handleStaff(userId, status));
    } else {
      msg("PError", res);
    }
  } catch (error) {
    logger.error("admin/admin" + error);
    msg("SError", res);
    throw error;
  }
};
//获取全部的人的报表信息
const getAllState = async (req, res) => {
  try {
    const { pageNum } = req.query;
    if (pageNum) {
      msg("DecideRes", res, await getAllStates(pageNum), {
        pageNum,
        pageSize: await getStaffCount(),
      });
    } else {
      msg("PError", res);
    }
  } catch (error) {
    logger.error("admin/admin" + error);
    msg("SError", res);
    throw error;
  }
};
//按照年份获取总销售额
const getOrderCount = async (req, res) => {
  try {
    const { year } = req.query;
    if (year) {
      msg("DecideRes", res, await getOrderCounts(year));
    } else {
      msg("PError", res);
    }
  } catch (error) {
    logger.error("admin/admin" + error);
    msg("SError", res);
    throw error;
  }
};
//按照年份月份统计销售额
const getOrderCountByMonth = async (req, res) => {
  try {
    const { year, month } = req.query;
    if (year && month) {
      msg("DecideRes", res, await getOrderCountByMonths(year, month));
    } else {
      msg("PError", res);
    }
  } catch (error) {
    logger.error("admin/admin" + error);
    msg("SError", res);
    throw error;
  }
};
//统计全部人的年度销售额
const getOrderByEvery = async (req, res) => {
  try {
    const { year, pageNum } = req.query;
    if (year && pageNum) {
      msg("DecideRes", res, await getOrderCountEvery(year, pageNum), {
        pageNum,
        pageSize: await getStaffCount(),
      });
    } else {
      msg("PError", res);
    }
  } catch (error) {
    logger.error("admin/admin" + error);
    msg("SError", res);
    throw error;
  }
};
//搜索用户
const findStaffBySearch = async (req, res) => {
  try {
    const { data, pageNum } = req.query;
    if (data && pageNum) {
      msg("DecideRes", res, await findStaffSearch(data, pageNum), {
        pageNum,
        pageSize: await findStaffSearchCount(data),
      });
    } else {
      msg("PError", res);
    }
  } catch (error) {
    logger.error("admin/admin" + error);
    msg("SError", res);
    throw error;
  }
};
//查询所有通知
const getAllNotice = async (req, res) => {
  try {
    const { pageNum } = req.query;
    if (pageNum) {
      msg("DecideRes", res, await getAllNotices(pageNum), {
        pageNum,
        pageSize: await getAllNoticeCount(),
      });
    } else {
      msg("PError", res);
    }
  } catch (error) {
    logger.error("admin/admin" + error);
    msg("SError", res);
    throw error;
  }
};
//删除通知
const deleteNotice = async (req, res) => {
  try {
    const { noticeId } = req.query;
    if (noticeId) {
      msg("DecideRes", res, await deleteNotices(noticeId));
    } else {
      msg("PError", res);
    }
  } catch (error) {
    logger.error("admin/admin" + error);
    msg("SError", res);
    throw error;
  }
};
//根据用户Id获取订单详情
const getOrder = async (req, res) => {
  try {
    const { userId } = req.query;
    if (userId) {
      msg("DecideRes", res, await getOrderById(userId));
    } else {
      msg("PError", res);
    }
  } catch (error) {
    logger.error("admin/admin" + error);
    msg("SError", res);
    throw error;
  }
};
//获取某条通知的全部已读人数
const hasReader = async (req, res) => {
  try {
    const { noticeId } = req.query;
    if (noticeId) {
      msg("DecideRes", res, await HasReader(noticeId));
    } else {
      msg("PError", res);
    }
  } catch (error) {
    logger.error("admin/admin" + error);
    msg("SError", res);
    throw error;
  }
};
//申请通过
const ApplyPass = async (req, res) => {
  try {
    const { noticeId } = req.query;
    if (noticeId) {
      msg("DecideRes", res, await handlePass(noticeId));
    } else {
      msg("PError", res);
    }
  } catch (error) {
    logger.error("admin/admin" + error);
    msg("SError", res);
    throw error;
  }
};
//驳回申请
const ApplyTurn = async (req, res) => {
  try {
    const { noticeId, mark } = req.query;
    if (noticeId && mark) {
      msg("DecideRes", res, await handleTurn(noticeId, mark));
    } else {
      msg("PError", res);
    }
  } catch (error) {
    logger.error("admin/admin" + error);
    msg("SError", res);
    throw error;
  }
};
//修改信息
const handleChangeInfo = async (req, res) => {
  try {
    const { adminId } = req.headers;
    const { name, age, phone, email, sex } = req.query;
    if (name && age && phone && email && sex) {
      msg("DecideRes", res, await modicAdminInfo(adminId, req.query));
    } else {
      msg("PError", res);
    }
  } catch (error) {
    logger.error("admin/admin" + error);
    msg("SError", res);
    throw error;
  }
};
//修改密码
const handleChangePassword = async (req, res) => {
  try {
    const { adminId } = req.headers;
    const { newPsd, oldPsd } = req.query;
    if (newPsd && oldPsd) {
      msg("DecideRes", res, await modicAdminPassword(adminId, oldPsd, newPsd));
    } else {
      msg("PError", res);
    }
  } catch (error) {
    logger.error("admin/admin" + error);
    msg("SError", res);
    throw error;
  }
};
//获取全部管理员的信息
const findAllAminInfo = async (req, res) => {
  try {
    const { pageNum } = req.query;
    if (pageNum) {
      msg("DecideRes", res, await findAllAdmin(pageNum), {
        pageNum,
        pageSize: await findAllCount(),
      });
    } else {
      msg("PError", res);
    }
  } catch (error) {
    logger.error("admin/admin" + error);
    msg("SError", res);
    throw error;
  }
};
//冻结管理员账号
const handleFreezeStatus = async (req, res) => {
  try {
    const { adminId } = req.query;
    if (adminId) {
      msg("DecideRes", res, await modicStatus(adminId, "-1"));
    } else {
      msg("PError", res);
    }
  } catch (error) {
    logger.error("admin/admin" + error);
    msg("SError", res);
    throw error;
  }
};
//改变用户的状态
const handleDeleteStatus = async (req, res) => {
  try {
    const { adminId } = req.query;
    if (adminId) {
      msg("DecideRes", res, await modicStatus(adminId, "-2"));
    } else {
      msg("PError", res);
    }
  } catch (error) {
    logger.error("admin/admin" + error);
    msg("SError", res);
    throw error;
  }
};
//恢复账号
const handleRecoverStatus = async (req, res) => {
  try {
    const { adminId } = req.query;
    if (adminId) {
      const password = await findStatusById(adminId);
      let status = "1";
      if (password === "123456") {
        status = "0";
      }
      msg("DecideRes", res, await modicStatus(adminId, status));
    } else {
      msg("PError", res);
    }
  } catch (error) {
    logger.error("admin/admin" + error);
    msg("SError", res);
    throw error;
  }
};
//重置账号
const handleReset = async (req, res) => {
  try {
    const { adminId } = req.query;
    if (adminId) {
      msg("DecideRes", res, await handleResetAdmin(adminId));
    } else {
      msg("PError", res);
    }
  } catch (error) {
    logger.error("admin/admin" + error);
    msg("SError", res);
    throw error;
  }
};
//删除账号
const handleDelet = async (req, res) => {
  try {
    const { adminId } = req.headers;
    msg("DecideRes", res, await handleDeletAdmin(adminId));
  } catch (error) {
    logger.error("admin/admin" + error);
    msg("SError", res);
    throw error;
  }
};
//上传文件
const uploadFile = async (req, res) => {
  try {
    //获取用户Id
    const { adminId } = req.headers;
    //判断参数
    const { file } = req.body;
    if (file) {
      //文件操作
      const fl = new fs();
      //设置路径
      const src = path.resolve(
        __dirname,
        "../www",
        "file",
        "admin",
        "notice",
        `${adminId}`
      );
      //上传文件
      const filePath = await upload(req, await fl.init(src), "file");
      if (filePath) {
        //生成新名称
        const newName =
          "/" +
          filePath[0].originalFilename.split(".")[0] +
          path.extname(filePath[0].originalFilename);
        //重命名
        if (await file.handleReName(filePath[0].path, src + newName)) {
          //文件夹的路径
          let fileDown = path.join(
            "/",
            "file",
            "admin",
            "notice",
            adminId,
            newName
          );
          msg("Success", res, fileDown);
        } else {
          throw new Error("文件上传失败");
        }
      }
    } else {
      msg("PError", res);
    }
  } catch (error) {
    logger.error("admin/admin" + error);
    msg("SError", res);
    throw error;
  }
};
//修改头像
const changeAvatar = async (req, res) => {
  try {
    //获取管理员的Id
    const { adminId } = req.headers;
    //文件操作
    const file = new fs();
    //设置文件
    const imgDir = path.resolve(
      __dirname,
      "../www",
      "images",
      "admin",
      adminId
    );
    const imgPath = await upload(req, await file.init(imgDir), "head");
    const format = path.extname(imgPath[0].originalFilename);
    //判断文件格式
    if (!formatJudge("img", format)) {
      msg("FError", res, "该文件不是图片,请检查格式");
      return;
    }
    //判断上传成功
    if (imgPath) {
      //生成新名称
      const newName =
        "/" + "head-" + imgPath[0].originalFilename.split(".")[0] + format;
      if (await file.handleReName(imgPath[0].path, imgDir + newName)) {
        //文件夹的路径
        let fileDown = path.join("/", "images", "admin", adminId, newName);
        //判断是否上传成功
        if (await updateAvatar(adminId, fileDown)) {
          msg("Success", res, fileDown);
        }
      } else {
        throw new Error("图片上传失败");
      }
    }
  } catch (error) {
    logger.error("admin/admin" + error);
    msg("SError", res, "请更新头像");
    throw error;
  }
};
//删除对应的文件
const deleteFile = async (req, res) => {
  try {
    const { filePath } = req.query;
    if (filePath) {
      const file = new fs();
      if (
        await file.handleDeleteFile(
          path.join(__dirname, "../", "www", filePath)
        )
      ) {
        msg("Success", res);
      }
    } else {
      msg("PError", res);
    }
  } catch (error) {
    msg("SError", res);
    throw error;
  }
};

module.exports = {
  AddNotice,
  AddAdmin,
  findAdminById,
  Login,
  addType,
  getAllApply,
  UserInsert,
  findAllStaff,
  handleSuspend,
  handleKick,
  getAllState,
  getOrderCount,
  getOrderCountByMonth,
  getOrderByEvery,
  findStaffBySearch,
  getAllNotice,
  deleteNotice,
  getOrder,
  handleRecover,
  hasReader,
  ApplyPass,
  ApplyTurn,
  handleChangeInfo,
  handleChangePassword,
  findAllAminInfo,
  handleFreezeStatus,
  handleDeleteStatus,
  handleRecoverStatus,
  handleReset,
  handleDelet,
  uploadFile,
  deleteFile,
  changeAvatar,
};
