const TypeDao=require("../Modal/type");
//添加类别
function addTypes(TypeInfo){
    return new Promise((resolve,reject)=>{
    const {type,list}=TypeInfo;
    let str=list.slice(1,list.length - 1);
    let arr=str.split(',');
    console.log(arr);
    TypeDao.findOne({type}).then(res=>{
        if(res){
            console.log(res.list.filter(value=>arr.indexOf(value)===1));
           let arr1=arr.concat(res.list).filter(function(v, i, arr) {
                return arr.indexOf(v) === arr.lastIndexOf(v);
            })
            TypeDao.updateOne({type},{$push:{list:{$each:arr1}}}).then(res=>{
                if(res.nModified){
                    resolve(true);
                }else{
                    resolve("重复")
                }
            })
            }else{
            const Type=new TypeDao({type});
            Type.save().then(res=>{
                if(res){
                    return TypeDao.updateOne({type},{$push:{list:{$each:arr}}})
                }else{
                    new Error('添加失败');
                }
            }).then(res=>{
                if(res.nModified){
                    resolve(true);
                }else{
                    resolve("添加失败");
                }
            });
        }
    }).catch(err=>{
        reject(err);
    })
})
}
//查询所有类别
function findAllTypes(){
    return new Promise((resolve,reject)=>{
        TypeDao.find({},{type:1,_id:1}).then(res=>{
            if(res[0]){
                resolve(res)
            }else{
                resolve("查询失败")
            }
        }).catch(err=>{
            reject(err);
        })
    })
}
//查询子类别
function findAllLists(_id){
    return new Promise((resolve,reject)=>{
        TypeDao.findOne({_id},{list:1}).then(res=>{
            if(res){
                resolve(res);
            }else{
                resolve("查询失败");
            }
        }).catch(err=>{
            reject(err);
        })
    })
}
module.exports={
    addTypes,
    findAllLists,
    findAllTypes
}