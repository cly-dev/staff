module.exports = {
  name: "admin",
  collection: {
    //管理员id
    adminId: {
      type: String,
      required: true,
      unique: true,
    },
    //姓名
    name: {
      type: String,
      required: true,
    },
    //密码
    password: {
      type: String,
      default: "123456",
    },
    //职位
    position: {
      type: String,
      default: "",
    },
    //权限
    power: {
      type: String,
      default: "0",
    },
    //状态
    status: {
      type: String,
      default: "0",
    },
    //token
    token: {
      type: String,
      default: "",
    },
    //头像
    imgPath: {
      type: String,
      default: "/images/user.jpg",
    },
    //修改信息
    lastModic: {
      type: Date,
      default: Date.now(),
    },
    //联系方式
    phone: {
      type: Number,
      default: 0,
    },
    //邮箱
    email: {
      type: String,
      default: "",
    },
    //入职时间
    joinTime: {
      type: String,
      default: "",
    },

    //性别
    sex: {
      type: String,
      default: "男",
    },
    //年龄
    age: {
      type: Number,
      default: 18,
    },
  },
};
