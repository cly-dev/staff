function message(code,msg,data=null,obj={}){
    return {
        code,
        msg,
        data,
        ...obj
    }
}
//策略对象
const Strategies={
    //token失效
    "TError":function(res,msg='登录失效'){
            res.status('200').send(message('300',msg));
    },
    //参数不足
    "PError":function(res,msg='请检查参数'){
            res.status('200').send(message('400',msg));
    },
    //系统出错
    "SError":function(res,msg='网络繁忙,请稍后再试'){
            res.status('200').send(message('500',msg));
    },
    //查询结果出错
    "FError":function(res,msg){
            res.status('200').send(message('500',msg));
    },
    //成功
    'Success':function(res,data=null,obj={},msg){
            res.status('200').send(message('200',msg='成功',data,obj));
    },
    //判断结果
    'DecideRes':function(res,result,obj={}){
        console.log("我执行了");
        let data;
        if(typeof result==='string'){
            this.FError(res,result);
        }else{
            data=result===true?null:result; 
            this.Success(res,data,obj);
        }
    }
}
//执行策略对象
function calculateBonus(level,res,msg,data="",obj={}){
    Strategies[level](res,msg,data,obj);
}
module.exports =calculateBonus
