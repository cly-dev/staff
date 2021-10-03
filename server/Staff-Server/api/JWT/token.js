const fs = require("fs");
const jwt = require("jsonwebtoken");
const publicKey = fs.readFileSync("./api/JWT/key/id_rsa_public.pub", "utf-8");
const pravateKey = fs.readFileSync("./api/JWT/key/id_rsa_private", "utf-8");
function TokenSign(user) {
  //加密
  return jwt.sign(user, pravateKey, { expiresIn: "7days", algorithm: "RS256" });
}
function TokenVerify(token) {
  //解密
  return jwt.verify(token, publicKey, { algorithm: "RS256" }, (err, data) => {
    if (err) {
      return false;
    } else {
      return data;
    }
  });
}
module.exports = {
  TokenSign,
  TokenVerify,
};
