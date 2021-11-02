//对可选参数进行筛选
module.exports = (obj) => {
  for (let key in obj) {
    if (!obj[key]) {
      delete obj[key];
    }
  }
  return obj;
};
