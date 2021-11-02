const { msg, Token } = require("../api");
module.exports = (req, res, next) => {
  const { token } = req.headers;
  if (token) {
    const data = Token.TokenVerify(token);
    if (data) {
      if (data.status < 0) {
        msg("FError", res, "该用户状态异常,无法进行操作");
      } else {
        for (let key in data) {
          req.headers[key] = data[key];
        }
        //token通过放行
        next();
      }
    } else {
      //token过期提醒
      msg("TError", res);
    }
  } else {
    //无token提示
    msg("FError", res, "请检查是否携带token");
  }
};
