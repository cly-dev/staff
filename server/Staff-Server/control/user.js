const msg=require("../api/msg");
const {TokenVerify }=require("../api/JWT/token");
const {insert,findLookUp,UserInserts}=require("../Dao/UserDao");
//登陆
const Login=async(req,res)=>{
    let flay=await (insert(req.body));
    if(flay){
        res.status('200').send(msg("200","添加成功"));
    }else{
        res.status("400").send(msg("400","添加失败"));
    }
}
const UserInsert=async(req,res)=>{
    const{username,userId}=req.body;
    if(!(username && userId)){
        msg(res,false,'请检查参数名');
    }else{
        msg(res,await UserInserts({username,userId}),'添加成功','400');
    }
}
    
// findByAll =async (req,res)=>{
//     let data=await findAll();
    
//     if(data){
//         res.status("200").send(msg('200','查询成功',await data));
//     }else{
//         res.status("400").send(msg('200',"查询失败"));
//     }
// }
const Delete=(req,res)=>{
    console.log(req.query);
    res.status('200').send(msg("200","删除成功"));
}

module.exports={
    UserInsert,
   Login
}