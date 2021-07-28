const UserDao =require("../Modal/user.js");
// const promisefy=require("../schema/promise");
//增加用户
function UserInserts(user){
    const promise=new Promise((resolve,reject)=>{
     try{
            const data=new UserDao(user)
            data.save().then(res=>{
            resolve(true);
        })}catch(err){
            console.log(err);
            resolve(false)
        }
    })
    return promise;
}
//登陆校验
function Login(){
    const promise=new Promise((resolve,reject)=>{
        try{
            UserDao.find({},{_id:0,__v:0}).populate('name').exec().then(res=>{
                resolve(res);
           })}catch(err){
               resolve(false)
           }
       })
       return promise;
   }

//更新操作-updateOne:更新一条 updateMany:更新多条
// findByIdAndUpdate，这种比较有指定性，就是根据_id
function Update(){
    UserDao.updateOne({"_id":"60fb83b2796de2f5c8171309"},{$set:{age:25}}).then(res=>{
        console.log(res);
    })
}
//删除操作 --deleteOne:删除一条 deleteMany:删除多条
// 　Model.findByIdAndRemove(id, [options], [callback]) --通过id　　　　　　
// 　Model.findOneAndRemove(conditions, [options], [callback])
function detele(){
    UserDao.deleteOne({"_id":"60b07bec76b7262a58bc24b2"}).then(res=>{
        console.log(res);
    })
}
//insert插入数据 
function insertData(){
    UserDao.insertMany({username:'拉拉阿拉',password:"11111",age:20}).then(res=>{
        console.log(res);
    },err=>{
        console.log(err);
    })
}
//关联查询
function findLookUp(){
    const promise=new Promise((resolve,reject)=>{
        try{
              UserDao.aggregate([{
                $group:{
                    '_id':'$name',
                    'total':{$sum:1}
                }
            }]).then(res=>{
                    resolve(res);
           })}catch(err){
               resolve(false)
           }
       })
       return promise;

  
}
// UserDao.findByAll('张三',(err,doc)=>{
//     console.log(doc);
// })
module.exports={
    UserInserts,
    Update,
    detele,
    insertData,
    findLookUp
}
