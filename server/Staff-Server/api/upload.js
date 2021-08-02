const multiparty = require('multiparty');
function upload(req,path,name){
    const form =new multiparty.Form({encoding: 'utf-8',uploadDir:path})
    const promise=new Promise((resolve,reject)=>{
    form.parse(req,(err,fields,files)=>{
        if(!err){
           resolve(files[name]);
        }else{
            reject(err);
        }
    })
})
    return promise;
}
module.exports=upload;