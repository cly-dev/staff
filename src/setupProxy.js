//配置代理
const proxy = require("http-proxy-middleware");
module.exports = function (app) {
  app.use(
    //遇到api就会代理该配置
    proxy("/api", {
      //代理的地址
      target: "http://localhost:3030",
      //控制服务器收到的请求头中Host的值
      changeOrigin: true,
      //重写路径
      pathRewrite: { "^/api": "" },
    })
  );
};
