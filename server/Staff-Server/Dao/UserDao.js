const UserDao =require("../Modal/user.js");
const {TokenSign,TokenVerify}=require("../api/JWT/token.js");
//增加用户
function UserInserts(user){
    const promise=new Promise((resolve,reject)=>{
            const data=new UserDao(user)
            data.save().then(res=>{
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
//登陆校验
function Logins(userId,password){
    const promise=new Promise((resolve,reject)=>{
            UserDao.find({userId,password},{_id:0,__v:0,password:0}).then(res=>{
                const [data]=res;
                if(data){
                    if(!(TokenVerify(data.token))){
                        const token=TokenSign({userId,username:data.username});
                        UserDao.updateOne({userId},{$set:{token}},(err)=>{
                           if(err){
                            reject(err);
                           }
                        })
                        data.token=token;
                    }
                    resolve(data);
                }else{
                    resolve(false);
                }
            }).catch(err=>{
           reject(err);
        })
       return promise;
   })
}
// UserDao.findByAll('张三',(err,doc)=>{
//     console.log(doc);
// })
module.exports={
    UserInserts,
    Logins
}
