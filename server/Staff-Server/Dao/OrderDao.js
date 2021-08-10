const OrderDao=require("../Modal/order");
//插入订单
function addOrders(OrderInfo){
    return new Promise((resolve,reject)=>{
    const Order=new OrderDao(OrderInfo);
        Order.save().then(res=>{
            if(res){
                resolve(res)
            }else{
                resolve(false);
            }
        }).catch(err=>{
            reject(err);
        })
    })
}
//修改订单
function modicOrders(OrderInfo){
    return new Promise((resolve,reject)=>{
        const {id,name,type,createTime,num,price,mark}=OrderInfo;
        OrderDao.updateOne({_id:id},{$set:{name,type,createTime,num,price,mark}}).then(res=>{
            if(res.nModified){
                resolve(true);
            }else{
                resolve('请修改订单')
            }
        }).catch(err=>{
            reject(err);
        })
    })
}
//删除订单
function deleteOrders(_id){
    return new Promise((resolve,reject)=>{
        OrderDao.findOne({_id}).then(res=>{
            if(res){
                return OrderDao.deleteOne({_id});        
            }else{
                resolve('已删除');     
            }
        }).then(res=>{
            if(res.deletedCount){
                resolve(true);
            }else{
                new Error("错误");
            }
        }).catch(err=>{
            reject(err);
        })
    })
}
//分页获取订单
function getOrderByPageNums(userId,pageNum){
    return new Promise((resolve,reject)=>{
        OrderDao.find({userId}).skip(8 * (pageNum - 1)).limit(8).sort({'createTime':-1}).then(res=>{
            if(res){
                resolve(res);
            }else{
                resolve(false);
            }
        }).catch(err=>{
            reject(err);
        })
    })
}
//获取订单总数
function getOrderCount(userId){
    return new Promise((resolve,reject)=>{
        OrderDao.find({userId}).count().then(res=>{
                resolve(res);
        }).catch(err=>{
            reject(err);
        })
    })
}
//分页获取查询结果
function getSearchByPageNums(userId,pageNum,data){
    return new Promise((resolve,reject)=>{
    let regexp1=new RegExp(data,'i');
    var regexp2 = RegExp("^"+data + "$","i")
    OrderDao.find({userId,$or:[{name:{$regex:regexp1}},{name:{$regex:regexp2}}]}).skip(8 * (pageNum - 1)).limit(8).then(res=>{
        if(res[0]){
            resolve(res);
        }else{
            resolve('查无结果');
        }
    }).catch(err=>{
        reject(err);
    })
    })
}
//获取查询结果的总条数
function getSearchCount(userId,data){
    return new Promise((resolve,reject)=>{
        let regexp1=new RegExp(data,'i');
        var regexp2 = RegExp("^"+data + "$","i")
        OrderDao.find({userId,$or:[{name:{$regex:regexp1}},{name:{$regex:regexp2}}]}).count().then(res=>{
            resolve(res);
        }).catch(err=>{
            reject(err);
        })
    })
}
//获取订单详情
function getOrderDetails(_id){
    return new Promise((resolve,reject)=>{
        OrderDao.findOne({_id},{__v:0}).then(res=>{
            if(res){
                resolve(res);
            }else{
                resolve("没有该订单的信息");
            }
        }).catch(err=>{
            reject(err);
        })
    })
}
//获取报表信息
function getStates(userId){
    return new Promise((resolve,reject)=>{
        OrderDao.aggregate([
            {
                $match:{
                    userId
                }
            },{
                $group:{
                    _id:'$createTime',
                    orderTotal:{
                        $sum:1
                    },
                    orderMax:{
                        $max:'$price'
                    },
                    orderSum:{
                        $sum:'$price'
                    },
                    orderAvg:{
                        $avg:'$price'
                    }
                }
            }
        ]).then(res=>{
            if(res){
                resolve(res[0]);
            }else{
                resolve('查询失败');
            }
        }).catch(err=>{
            reject(err);
        })
    })
}
//按照年份进行查询
function getStateByAges(age,userId){
    const reg=new RegExp(age,'i');
    return new Promise((resolve,reject)=>{
        OrderDao.aggregate([{
            $match:{
                userId,
                createTime:{
                    $regex:reg
                }
            }
            },{
            $group:{
                _id:'$userId',
                orderTotal:{
                    $sum:1
                },
                orderMax:{
                    $max:'$price'
                },
                orderSum:{
                    $sum:'$price'
                },
                orderAvg:{
                    $avg:'$price'
                }
            }
        }
        ]).then(res=>{
            resolve(res);
        }).catch(err=>{
            reject(err);
        })
    })
}
//获取所有人的报表信息
function getAllStates(pageNum){
    return new Promise((resolve,reject)=>{
        OrderDao.aggregate([
            {
                $group:{
                    _id:'$userId',
                    orderTotal:{
                        $sum:1
                    },
                    orderMax:{
                        $max:'$price'
                    },
                    orderSum:{
                        $sum:'$price'
                    },
                    orderAvg:{
                        $avg:'$price'
                    }
                }
            },{
                $lookup:{
                    from:'user',
                    localField:'_id',
                    foreignField:'userId',
                    as:'user'
                }
            },{
                $project:{
                    user:{
                        password:0,
                        token:0,
                        lastModic:0
                    }
                }
            }
        ]).skip(8* (pageNum-1)).limit(8).then(res=>{
            resolve(res);
        }).catch(err=>{
            reject(err);
        })
    })
}
//获取所有人的条数
function getStaffCount(){
    return new Promise((resolve,reject)=>{
    OrderDao.distinct("userId").then(res=>{
        resolve(res[0] * 1);
    }).catch(err=>{
        reject(err);
    })
    })

}
//按照年份统计销售额总数
function getOrderCounts(year){
    return new Promise((resolve,reject)=>{
        const reg=new RegExp(year,'i');
        OrderDao.aggregate([
            {
                $match:{
                    createTime:{
                        $regex:reg
                    }
                }
            },{
                $group:{
                    _id:null,
                    Count:{
                        $sum:'$price'
                    }
                }
            },
            {
                $project:{
                    Count:1,
                    _id:0
                }
            }
        ]).then(res=>{
            resolve(res[0]);
        }).catch(err=>{
            reject(err);
        })
    })
}
//按照年份月份统计销售额
function getOrderCountByMonths(year,month){
    return new Promise((resolve,reject)=>{
        const mon=month>10?month:'0'+month;
        const reg1=new RegExp(year+'-'+mon+'-','i');
        OrderDao.aggregate([{
            $match:{
                createTime:{
                    $regex:reg1
                },
                
            }
        },{
            $group:{
                _id:null,
                Count:{
                    $sum:'$price'
                }
            }
        },
        {
            $project:{
                Count:1,
                _id:0
            }
        }]).then(res=>{
            resolve(res[0]);
        }).catch(err=>{
            reject(err);
        })
    })
}
module.exports={
    addOrders,
    modicOrders,
    deleteOrders,
    getOrderByPageNums,
    getSearchByPageNums,
    getOrderDetails,
    getStates,
    getOrderCount,
    getSearchCount,
    getStateByAges,
    getAllStates,
    getStaffCount,
    getOrderCounts,
    getOrderCountByMonths
}