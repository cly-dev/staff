const NoticeDao=require("../Modal/notice");
//保存公告
function AddNotices(data){
    const promise=new Promise((resolve,reject)=>{
            const Notice=new NoticeDao(data);
            Notice.save().then(res=>{
                if(res){
                    resolve(true);
                }else{
                    resolve(false);
                }
            }).catch(err=>{
                reject(err);
            })
        })
    return promise;
}
//获取公告详情
function getNotices(userId,pageNum){
    const promise=new Promise((resolve,reject)=>{
            NoticeDao.aggregate([
            {
                $match:{
                    userId
                }
            },{
                $lookup:{
                    from:'admin',
                    localField:'adminId',
                    foreignField:'adminId',
                    as:'resource'
                }
            },{
                $project:{__v:0,'resource._id':0,'resource.adminId':0}
            }
            ]).skip(4 * (pageNum - 1)).limit(4).sort({'status':1}).then(res=>{
                if(res){
                    res[0].resource=res[0].resource[0];
                    resolve(res);
                }else{
                    resolve("获取失败");
                }
            }).catch(err=>{
                reject(err);
            })
    })
    return promise;
}
//获取用户的公告总数
function getNoticesCount(userId){
    const promise=new Promise((resolve,reject)=>{
            NoticeDao.find({userId}).count().then(res=>{
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
//点击读取公告
function ReadNotices(Id){
    const promise=new Promise((resolve,reject)=>{
            NoticeDao.findOne({_id:Id}).then(res=>{
                if(res.status==='2'){
                    resolve('不能重复读取');
                }else{
                    return  NoticeDao.updateOne({_id:Id},{$set:{status:'1'}})
                }
            }).then(res=>{
                if(res.nModified){
                    resolve(true);
                }else{
                    resolve('已经读取');
                }
            }).catch(err=>{
                reject(err);
            })
    })
    return promise;
}
//置顶公告
function TopNotices(Id){
    const promise=new Promise((resolve,reject)=>{
        NoticeDao.findOne({_id:Id}).then(res=>{
            if(res.status==='2'){
                resolve('不能重复置顶');
            }else{
                return NoticeDao.updateOne({status:'2'},{$set:{status:'1'}})
            }
        }).then(res=>{
            if(res.nModified){
                return  NoticeDao.updateOne({_id:Id},{$set:{status:'2'}})
            }else{
                resolve('已置顶');
            }
        }).then(res=>{
                console.log(res);
                if(res.nModified){
                    resolve(true);
                }else{
                    resolve(false);
                }
            }).catch(err=>{
                reject(err);
            })
    })
    return promise;
}

module.exports={
    AddNotices,
    getNotices,
    getNoticesCount,
    ReadNotices,
    TopNotices
}

