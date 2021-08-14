const NoticeUserDao=require("../Modal/noticeUser");
//插入通知
function addNotices(data){
    return new Promise((resolve,reject)=>{
        const Notice=new NoticeUserDao(data);
        Notice.save().then(res=>{
            if(res){
                resolve(res);
            }else{
                resolve("插入失败");
            }
        }).catch(err=>{
            reject(err);
        })
    })
}
//读取通知
function changeStatus(_id){
    return new Promise((resolve,reject)=>{
        NoticeUserDao.findOne({_id}).then(res=>{
            if(res.status>0){
                resolve("已读取")
            }else{
                return NoticeUserDao.updateOne({_id},{$set:{status:1}})
            }
        }).then(res=>{
            if(res.nModified){
                resolve(true);
            }else{
                resolve("已更新");
            }
        }).catch(err=>{
            reject(err);
        })
    })
}
//置顶
function TopStatus(_id){
    return new Promise((resolve,reject)=>{
        NoticeUserDao.updateMany({status:2},{$set:{status:1}}).then(res=>{
                return NoticeUserDao.updateOne({_id},{$set:{status:2}})
        }).then(res=>{
            if(res.nModified){
                resolve(true);
            }else{
                resolve("已置顶");
            }
        }).catch(err=>{
            reject(err);
        })
    })
}
//查看某人的全部通知
function findNoiceById(userId,pageNum){
    return new Promise((resolve,reject)=>{
        NoticeUserDao.aggregate([
            {
                $match:{
                    userId
                }
            },{
                $lookup:{
                    from:'notice',
                    localField:'noticeId',
                    foreignField:'_id',
                    as:'notice'
                }
            },{
                $unwind:'$notice',
            },{
                $lookup:{
                    from:'admin',
                    localField:'notice.adminId',
                    foreignField:'adminId',
                    as:'admin',
                }
            },{
                $unwind:'$admin'
            },
            {
                $project:{
                    admin:{
                        power:0,
                        password:0,
                        status:0,
                        token:0,
                        lastModic:0,
                        _id:0
                    },
                    notice:{
                        _id:0,
                        status:0
                    }

                }
            },{
                $sort:{
                    status:-1
                }
            }
        ]).skip(5 * (pageNum-1)).limit(5).then(res=>{            
            resolve(res);
        }).catch(err=>{
            reject(err);
        })
    })

}
//按照日期查看公告
function getNoticeByDays(userId,data,pageNum){
    return new Promise((resolve,reject)=>{
        const reg=new RegExp(data,'i');
        console.log(reg);
        NoticeUserDao.aggregate([
            {
                $match:{
                    userId
                }
            },
            {
                $lookup:{
                    from:'notice',
                    localField:'noticeId',
                    foreignField:'_id',
                    as:'notice'
                }
            },
            {
                $unwind:'$notice'
            },
            {
                $match:{
                    'notice.createTime':{
                        $regex:reg
                    }
                }
            },{
                $unwind:'$notice',
            },{
                $lookup:{
                    from:'admin',
                    localField:'notice.adminId',
                    foreignField:'adminId',
                    as:'admin',
                }
            },{
                $unwind:'$admin'
            },
            {
                $project:{
                    admin:{
                        power:0,
                        password:0,
                        status:0,
                        token:0,
                        lastModic:0,
                        _id:0
                    },
                    notice:{
                        _id:0,
                        status:0
                    }

                }
            },{
                $sort:{
                    status:-1
                }
            }
        ]).skip(5 * (pageNum - 1)).limit(5).then(res=>{
            resolve(res);
        }).catch(err=>{
            reject(err);
        })
    })
}
//统计所有已读取的人
function HasReader(noticeId){
    return new Promise((resolve,reject)=>{
        NoticeUserDao.find({noticeId,status:{$gt:0}}).count().then(res=>{
            resolve(res);
        }).catch(err=>{
            reject(err);
        })
    })
}
//删除通知
function deleteNoticeUser(noticeId){
    return new Promise((resolve,reject)=>{
        NoticeUserDao.deleteMany({noticeId}).then(res=>{
            if(res.deletedCount){
                resolve(true);
            }else{
                resolve("已删除");
            }
        })
    })
}

module.exports={
    addNotices,
    changeStatus,
    TopStatus,
    findNoiceById,
    getNoticeByDays,
    HasReader,
    deleteNoticeUser
}