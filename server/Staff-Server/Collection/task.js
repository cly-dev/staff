module.exports = {
  name: "task",
  collection: {
    //标题
    title: {
      type: String,
      required: true,
    },
    //开始时间
    tartTime: {
      type: String,
      default: "",
    },
    //结束时间
    endTime: {
      type: String,
      default: "",
    },
    //内容
    content: {
      type: String,
      default: "",
    },
    //最后一次修改时间
    lastModic: {
      type: Date,
      default: Date.now(),
    },
    //执行人
    userId: {
      type: String,
      ref: "user",
    },
    //发布人
    adminId: {
      type: String,
      ref: "admin",
    },
    //状态 0-未完成 1-完成 2-延期申请,3-审核通过 4-审核未通过
    status: {
      type: String,
      default: "0",
    },

    //延期天数
    postTime: {
      type: Number,
      default: 0,
    },
    //延期理由
    mask: {
      type: String,
      default: "",
    },
  },
};
