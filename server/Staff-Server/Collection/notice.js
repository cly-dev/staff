module.exports = {
  name: "notice",
  collection: {
    //管理员id
    adminId: {
      type: String,
      required: true,
    },
    //标题
    title: {
      type: String,
      required: true,
    },
    //内容
    content: {
      type: String,
      default: "",
    },
    //时间
    createTime: {
      type: String,
      default: `${new Date().getFullYear()}年-${
        new Date().getMonth() + 1
      }月-${new Date().getDate()}日`,
    },
    file: {
      type: String,
      default: "",
    },
    lastModic: {
      type: Date,
      default: Date.now(),
    },
  },
};
