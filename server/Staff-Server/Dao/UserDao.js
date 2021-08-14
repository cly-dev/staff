const UserDao =require("../Modal/user.js");
const {TokenSign,TokenVerify}=require("../api/JWT/token.js");
//增加用户
function UserInserts(user){
    const promise=new Promise((resolve,reject)=>{
            const data=new UserDao(user)
            data.save().then(res=>{
                if(res){
                    resolve(res);
                }else{
                    resolve(false);
                }
            }).catch(err=>{
                reject(err);
            })
    })
    return promise;
}
//登陆校验
function Logins(userId,password){
    return new Promise((resolve,reject)=>{
            UserDao.find({userId,password},{_id:0,__v:0,password:0}).then(res=>{
                const [data]=res;
                console.log(data);
                if(data){
                    if(!(TokenVerify(data.token))){
                        const token=TokenSign({userId,username:data.username,status:data.status});
                        UserDao.updateOne({userId},{$set:{token}},(err)=>{
                           if(err){
                            reject(err);
                           }
                        })
                        data.token=token;
                    }
                    resolve(data);
                }else{
                    resolve('账号或密码错误');
                }
            }).catch(err=>{
           reject(err);
        })
   })
}
//用户修改密码
function ModicPasswords(userId,oldPsd,newPsd){
    const promise=new Promise((resolve,reject)=>{
    UserDao.findOne({userId}).then(res=>{
        if(res){
            if(oldPsd===res.password){
                return UserDao.updateOne({userId},{$set:{password:newPsd}})
            }else{
                resolve('旧密码错误');
            }
            if(res.password==='123456'){
                UserDao.updateOne({userId},{$set:{status:'1'}},(err,res)=>{
                    if(err){
                        reject(err);
                    }
                })
            }
        }
    }).then(res=>{
        if(res.nModified){
            resolve(true);
        }else{
            resolve('旧密码和新密码不能一致');
        }
    }).catch(err=>{
        reject(err);
    })
    })
    return promise;
}
//用户修改信息
function ModicInfos(userId,User){
    return new Promise((resolve, reject) => {
        const {username,phone,email,sex,address,age}=User;
        UserDao.updateOne({userId},{username,phone,email,sex,address,age}).then(res=>{
            if(res.nModified){
                return UserDao.findOne({userId},{_id:0,password:0,__v:0});
            }else{
                resolve('请更新信息');
            }
        }).then(res=>{
            resolve(res);
        }).catch(err=>{
            reject(err);
        })   
    });
}
//用户修改头像
function ModicImgs(userId,path){
    return new Promise((resolve,reject)=>{
    UserDao.updateOne({userId},{$set:{imgPath:path}}).then(res=>{
            if(res.nModified){
                resolve(path);
            }else{
                reject(new Error("错误"));
            }
        }).catch(err=>{
            reject(err);
        })
    })
}
//删除用户
function deleStaff(userId){
    return new Promise((resolve,reject)=>{
        UserDao.deleteOne({userId}).then(res=>{
            if(res.deletedCount){
                resolve(true);
            }else{
                resolve("已删除");
            }
        })
    })
}
//查询用户Id是否合法
function findStaffById(userId){
    return new Promise((resolve,reject)=>{
        UserDao.findOne({userId}).then(res=>{
            if(res){
                resolve(true);
            }else{
                resolve(false);
            }
        }).catch(err=>{
            reject(err);
        })
    })
}
//查询所有用户
function findAllStaffs(pageNum){
    return new Promise((resolve,reject)=>{
        UserDao.find({},{__v:0,password:0,token:0}).skip((pageNum -1) * 8).limit(8).then(res=>{
            if(res[0]){
                resolve(res);
            }else{
                new Error("错误");
            }
        }).catch(err=>{
            reject(err);
        })
    })
}
//查询所有用户的条数
function findStaffCount(){
    return new Promise((resolve,reject)=>{
        UserDao.find().count().then(res=>{
            resolve(res);
        }).catch(err=>{
            reject(err);
        })
    })
}
//设置用户状态
function handleStaff(userId,status,mark=null){
    return new Promise((resolve,reject)=>{
        UserDao.updateOne({userId},{$set:{status}},(err,res)=>{
            if(err){
                reject(err);
            }else{
                if(res.nModified){
                    resolve(true);
                }else{
                    resolve("重复操作");
                }
            }
        })

    })
}
//搜索用户
function findStaffSearch(data,pageNum){
    return new Promise((resolve,reject)=>{
        const reg=new RegExp(data,'i');
        UserDao.find(
            {
                    $or:[
                        {
                            userId:data
                        },{
                            userId:{
                                $regex:reg
                            }
                        },{
                            username:{
                                $regex:reg
                            }
                        }
                    ]
            },{token:0,password:0,lastModic:0}).skip(7 * (pageNum-1)).limit(7).then(res=>{
            resolve(res);
        }).catch(err=>{
            reject(err);
        }) 
    })
}
//搜索用户的条数
function findStaffSearchCount(data){
    return new Promise((resolve,reject)=>{
        const reg=new RegExp(data,'i');
        UserDao.find(
            {
                    $or:[
                        {
                            userId:data
                        },{
                            userId:{
                                $regex:reg
                            }
                        },{
                            username:{
                                $regex:reg
                            }
                        }
                    ]
            },{token:0,password:0,lastModic:0}).count().then(res=>{
            resolve(res);
        }).catch(err=>{
            reject(err);
        }) 
    })
}
//查找所有用户
function findAll(){
    return new Promise((resolve,reject)=>{
        UserDao.find({},{userId:1}).then(res=>{
            resolve(res);
        }).catch(err=>{
            reject(err);
        })
    })
}
//统计所有用户
function getStaffCount(){
    return new Promise((resolve,reject)=>{
        UserDao.find().count().then(res=>{
            resolve(res);
        }).catch(err=>{
            reject(err);
        })
    })
}
//查询用户的密码
function getStaffPsd(userId){
    return new Promise((resolve,reject)=>{
        UserDao.find({userId},{password:1}).then(res=>{
            resolve(res);
        }).catch(err=>{
            reject(err);
        })
    })
}

module.exports={
    UserInserts,
    Logins,
    ModicPasswords,
    ModicInfos,
    ModicImgs,
    findStaffById,
    findAllStaffs,
    handleStaff,
    deleStaff,
    findStaffCount,
    findStaffSearch,
    findAll,
    getStaffCount,
    getStaffPsd,
    findStaffSearchCount
}
