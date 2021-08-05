const ApplyDao=require("../Modal/apply");
//保存申请信息
function addApplys(applyInfo){
    return new Promise((resolve,reject)=>{
    const apply=new ApplyDao(applyInfo);
    apply.save().then(res=>{
        if(res){
            resolve(res);
        }else{
            new Error("插入失败");
        }
        }).catch(err=>{
            reject(err);
        })
    })
}
//删除申请信息
function delApplys(_id){
    return new Promise((resolve,reject)=>{
        ApplyDao.deleteOne({_id}).then(res=>{
            if(res.deletedCount){
                resolve(true);
            }else{
                resolve("已删除");
            }
        }).catch(err=>{
            reject(err);
        })
    })
}
//分页获取自己的申请信息
function getApplyByPageNums(userId,pageNum){
    return new Promise((resolve,reject)=>{
        ApplyDao.find({userId},{__v:0}).skip(6 * (pageNum -1)).limit(6).then(res=>{
            resolve(res);
        }).catch(err=>{
            reject(err);
        })
    })
}
//获取自己的申请信息总条数
function getApplyCount(userId){
    return new Promise((resolve,reject)=>{
        ApplyDao.find({userId}).count().then(res=>{
            resolve(res);
        }).catch(err=>{
            reject(err);
        })
    })
}
//申请信息操作
function handleApply(id,status){
    return new Promise((resolve,reject)=>{
        ApplyDao.updateOne({_id:id},{$set:{status}}).then(res=>{
            if(res.nModified){
                resolve(true);
            }else{
                resolve("重复操作");
            }
        }).catch(err=>{
            reject(err);
        })
    })
}
//获取申请详情信息
function getApplyDetails(_id){
    return new Promise((resolve,reject)=>{
        ApplyDao.aggregate([
            {
                $lookup:{
                    from:'user',
                    localField:'userId',
                    foreignField:'userId',
                    as:'resource'
                }
            },{
                $project:{
                    __v:0,
                }
            }
        ]).then(res=>{
            resolve(res);
        }).catch(err=>{
            reject(err);
        })
    })
}
//获取全部人的申请信息
function getAllApplys(pageNum){
    return new Promise((resolve,reject)=>{
        ApplyDao.aggregate([
            {
                $match:{
                    status:'1',
                }
            }
            ,{
                $group:{
                    _id:'$userId',
                    Total:{
                        $sum:1
                    }
                }
            },
            {
                $lookup:{
                    from:'user',
                    localField:'_id',
                    foreignField:'userId',
                    as:'staff'
                }
            },{
                $project:{
                    staff:{
                        'username':1,
                        'joinTime':1,
                    }
                   
                }
            }
        ]).sort({time:1}).skip(8 * (pageNum - 1)).limit(8).then(res=>{
            if(res){
                resolve(res);
            }else{
                new Error("错误");
            }
        }).catch(err=>{
            reject(err);
        })
    })
}
//获取条数
function getAllCount(){
    return new Promise((resolve,reject)=>{
        ApplyDao.distinct('userId').count().then(res=>{
            resolve(res);
        }).catch(err=>{
            reject(err);
        })
    })
}

module.exports={
    addApplys,
    getApplyByPageNums,
    delApplys,
    getApplyCount,
    handleApply,
    getApplyDetails,
    getAllApplys,
    getAllCount
}