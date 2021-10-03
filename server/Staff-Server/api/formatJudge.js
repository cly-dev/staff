//判断格式
const Format = {
  img: [".png", ".jpg", ".jpeg", ".gif"],
};
module.exports = (file, format) => {
  if (Format[file].includes(format)) {
    return true;
  }
  return false;
};
