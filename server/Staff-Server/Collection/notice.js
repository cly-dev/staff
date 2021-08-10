module.exports={
    name:'notice',
    collection:{
                //用户id
                userId:{
                      type:String,
                      required:true,
                },
                //管理员id
                adminId:{
                       type: String,
                       required:true,
                    },
                title:{
                    type:String,
                    required:true,
                },
              //内容
                content:{ 
                      type: String,
                      default:''
                    },
                //时间
                createTime:{
                      type:String,
                      default:`${new Date().getFullYear()}年-${new Date().getMonth() + 1 }月-${new Date().getDate()}日`,
                },
                //通知类型
                status:{
                        type:Number,
                        default:0
                },
                lastModic:{
                        type:Date,
                        default:Date.now()
                }
        }
}