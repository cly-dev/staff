const fs = require("fs");
//自定义文件操作
class Fs {
  // eslint-disable-next-line no-useless-constructor
  constructor() {}
  //初始化
  async init(path) {
    //创建文件
    await this.decideDir(path);
    return path;
  }
  //判断文件夹是否存在
  decideDir(path) {
    return new Promise((resolve, reject) => {
      try {
        //判断文件是否存在
        fs.access(path, async (err) => {
          if (err) {
            //不存在,则创建文件
            this.handleMkDir(path)
              .then((res) => {
                resolve(true);
              })
              .catch((err) => {
                reject(err);
              });
          } else {
            resolve(true);
          }
        });
      } catch (error) {
        throw error;
      }
    });
  }
  //创建文件夹
  handleMkDir(path) {
    return new Promise((resolve, reject) => {
      fs.mkdir(path, (err) => {
        if (err) {
          reject(err);
          throw err;
        } else {
          resolve(true);
        }
      });
    });
  }
  //对文件修改名字
  handleReName(oldName, newName) {
    return new Promise((resolve, reject) => {
      fs.rename(oldName, newName, (err) => {
        if (err) {
          reject(err);
        } else {
          resolve(true);
        }
      });
    });
  }
  //删除文件夹
  handleDeleteDir(path) {
    return new Promise((resolve, reject) => {
      fs.rmdir(path, (err) => {
        if (err) {
          reject(err);
        } else {
          resolve(true);
        }
      });
    });
  }
  //删除文件
  handleDeleteFile(path) {
    return new Promise((resolve, reject) => {
      fs.unlink(path, (err) => {
        if (err) {
          reject(err);
        } else {
          resolve(true);
        }
      });
    });
  }
}
module.exports = Fs;
