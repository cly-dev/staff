const mongoose = require("mongoose");
module.exports = {
  name: "noticeUser",
  collection: {
    //公告Id
    noticeId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "notice",
    },
    //用户Id
    userId: {
      type: String,
      required: true,
      ref: "user",
    },
    //状态
    status: {
      type: Number,
      default: 0,
    },
  },
};
