const AdminDao=require("../Modal/admin");
const {TokenVerify,TokenSign}=require("../api/JWT/token");
//增加管理员
function AddAdmins(data){
    const promise =new Promise((resolve,reject)=>{
            const Admin=new AdminDao(data);
            Admin.save().then(res=>{
                if(res){
                    resolve(true);
                }else{
                    resolve(false);
                }
            }).catch(err=>{
                reject(err)
            })
    })
    return promise;
}
//查询Id是否重复
function findAdminByIds(adminId){
    const promise=new Promise((resolve,reject)=>{
            AdminDao.findOne({adminId}).then(res=>{
                if(res){
                    resolve(true);
                }else{
                    resolve('该Id已存在');
                }
            }).catch(err=>{
                reject(err);
            })
    })
    return promise;
}
//登录
function Logins(adminId,password){
    const promise=new Promise((resolve,reject)=>{
        AdminDao.findOne({adminId,password},{_id:0,__v:0,password:0}).then(res=>{
            if(res){
                if(!TokenVerify(res.token)){
                    const token=TokenSign({adminId,name:res.name});
                    res.token=token;
                    AdminDao.updateOne({adminId},{$set:{token}},(err,res)=>{
                        if(err){
                            reject(err);
                        }
                    });   
                }
                resolve(res);
            }else{
                resolve('账号或密码错误');
            }
        }).catch(err=>{
            reject(err);
        })
    })
    return promise;
}
//根据管理员Id查找信息系
function findAdminById(adminId){
    return new Promise((resolve,reject)=>{
        AdminDao.findOne({adminId},{name:1,position:1}).then(res=>{
            resolve(res);
        }).catch(err=>{
            reject(err);
        })
    })
}
module.exports={
    AddAdmins,
    findAdminByIds,
    Logins,
    findAdminById
}
