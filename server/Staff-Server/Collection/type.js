module.exports={
    name:'type',
    collection:{
               type:{
                   type:String,
                   required:true,
                   unique:true
               },
               list:{
                   type:Array
               }
        }
}