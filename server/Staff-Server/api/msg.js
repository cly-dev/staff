module.exports=(res,result,msg,code='400',obj={})=>{
    const data=null;
    if(result){
        if(typeof result !=='boolean'){
            data=result;
        }
        res.status('200').send({code:'200',msg:'成功',data,...obj});
    }else{
        res.status(code).send({code,msg,data:null});
    }
}