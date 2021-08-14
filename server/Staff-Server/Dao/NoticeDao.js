const NoticeDao=require("../Modal/notice");
const {findAll}=require("./UserDao");
const {addNotices,deleteNoticeUser}=require("./NoticeUserDao");
//添加公告
function AddNotices(data){
    const promise=new Promise((resolve,reject)=>{
            const Notice=new NoticeDao(data);
            Notice.save().then(async res=>{
                if(res){
                    const noticeId=res._id;
                    const list=await findAll();
                    list.forEach(value=>{
                        addNotices({noticeId,userId:value.userId}).then(result=>{
                            resolve(res);
                        })
                    })
                }else{
                    resolve(false);
                }
            }).catch(err=>{
                reject(err);
            })
        })
    return promise;
}
//获取通知详情
// function getNotices(userId,pageNum){
//     const promise=new Promise((resolve,reject)=>{
//             NoticeDao.aggregate([
//             {
//                 $match:{
//                     userId
//                 }
//             },{
//                 $lookup:{
//                     from:'admin',
//                     localField:'adminId',
//                     foreignField:'adminId',
//                     as:'resource'
//                 }
//             },{
//                 $project:{
//                     resource:{
//                         lastModic:0,
//                         password:0,
//                         power:0,
//                         token:0,
//                         status:0,
//                         _id:0,
//                         __v:0
//                     }
//                 }
//             }
//             ]).sort({'status':-1}).skip(5 * (pageNum - 1)).limit(5).then(res=>{
//                 console.log(res)
//                 if(res[0]){
//                     res[0].resource=res[0].resource[0];
//                     resolve(res);
//                 }else{
//                     resolve("获取失败");
//                 }
//             }).catch(err=>{
//                 reject(err);
//             })
//     })
//     return promise;
// }
//按照日查看通知
function getNoticeByDates(userId,date,pageNum){
    return new Promise((resolve,reject)=>{
        const reg=new RegExp(date,'i');
        NoticeDao.aggregate([
            {
                $match:{
                    userId,
                    createTime:{
                        $regex:reg
                    }
                }
            },{
                $lookup:{
                    from:'admin',
                    localField:'adminId',
                    foreignField:'adminId',
                    as:'resource'
                }
            },{
                $project:{
                    resource:{
                        lastModic:0,
                        password:0,
                        power:0,
                        token:0,
                        status:0,
                        _id:0,
                        __v:0
                    }
                }
            }
        ]).sort({status:-1}).skip(5 * (pageNum-1)).limit(5).then(res=>{
            console.log(res);
            if(res[0]){
                resolve(res)
            }else{
                resolve("没有记录");
            }
        }).catch(err=>{
            reject(err);
        })
    })
}
//按照日期查看通知总数
function getNoticeByDateCount(date){
    return new Promise((resolve,reject)=>{
        const reg=new RegExp(date,'i');
        NoticeDao.find({createTime:{$regex:reg}}).count().then(res=>{
                console.log(res);
                resolve(res)
        }).catch(err=>{
            reject(err);
        })
    })
}
//获取用户的通知总数
function getNoticesCount(userId){
    const promise=new Promise((resolve,reject)=>{
            NoticeDao.find().count().then(res=>{
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
//点击读取通知
// function ReadNotices(Id){
//     const promise=new Promise((resolve,reject)=>{
//             NoticeDao.findOne({_id:Id}).then(res=>{
//                 console.log(res);
//                 if(res.status>0){
//                     resolve('不能重复读取');
//                 }else{
//                     return  NoticeDao.updateOne({_id:Id},{$set:{status:1}})
//                 }
//             }).then(res=>{
//                 if(res.nModified){
//                     resolve(true);
//                 }else{
//                     resolve('已经读取');
//                 }
//             }).catch(err=>{
//                 reject(err);
//             })
//     })
//     return promise;
// }
//置顶通知
// function TopNotices(Id){
//     const promise=new Promise((resolve,reject)=>{
//         NoticeDao.findOne({_id:Id}).then(res=>{
//             console.log(res);
//             if(res.status===2){
//                 resolve('不能重复置顶');
//             }else{
//                 return NoticeDao.updateOne({status:2},{$set:{status:1}})
//             }
//         }).then(res=>{
//             if(res.nModified){
//                 return  NoticeDao.updateOne({_id:Id},{$set:{status:2}})
//             }else{
//                 resolve('已置顶');
//             }
//         }).then(res=>{
//                 console.log(res);
//                 if(res.nModified){
//                     resolve(true);
//                 }else{
//                     resolve(false);
//                 }
//             }).catch(err=>{
//                 reject(err);
//             })
//     })
//     return promise;
// }
//查看所有通知
function getAllNotices(pageNum){
    return new Promise(async(resolve,reject)=>{
        NoticeDao.find().sort({"createTime":-1}).skip(8 * (pageNum - 1)).limit(8).then( res=>{
            resolve(res);
        }).catch(err=>{
            reject(err);
        })
    })
}
//获取所有条数
function getAllNoticeCount(){
    return new Promise((resolve,reject)=>{
        NoticeDao.find().count().then(res=>{
            resolve(res);
        }).catch(err=>{
            reject(err);
        })
    })
}
//删除通知
function deleteNotices(id){
    return new Promise((resolve,reject)=>{
        const p1=NoticeDao.deleteOne({_id:id});
        Promise.all([p1,deleteNoticeUser(id)]).then(res=>{
            console.log(res);
            resolve(true);
        }).catch(err=>{
            reject(err);
        })
    })
}

module.exports={
    AddNotices,
    // getNotices,
    getNoticesCount,
    getNoticeByDates,
    getNoticeByDateCount,
    getAllNotices,
    deleteNotices,
    getAllNoticeCount,
}

