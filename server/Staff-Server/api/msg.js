module.exports=(res,result,msg,code='400',obj={})=>{
    let data;
    if(result){
        data=result===true?null:result; 
        res.status('200').send({code:'200',msg:'成功',data,...obj});
    }else{
        if(result!==null){
            res.status(code).send({code,msg,data:null});
        }else{
            res.status('500').send({code:'500',msg:"网络繁忙,请稍后再试",data:null});
        }
    }
}