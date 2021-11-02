module.exports = {
  name: "shop",
  collection: {
    //商品名
    Sname: {
      type: String,
      required: true,
    },
    //商品类别
    type: {
      type: Array,
      default: [],
    },
    //库存
    num: {
      type: Number,
      default: 0,
    },
    //备注
    mask: {
      type: String,
      default: "",
    },
    //单价
    price: {
      type: Number,
      default: 1,
    },
    //最后一次修改时间
    lastModic: {
      type: Date,
      default: Date.now(),
    },
    //操作人
    userId: {
      type: String,
      ref: "user",
      require: true,
    },
  },
};
