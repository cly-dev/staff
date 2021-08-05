module.exports={
    name:'order',
    collection:{
                //用户Id
                userId:{
                    type:String,
                    require:true
                },
                //商品名称
                name:{
                       type: String,
                       required:true,
                    },
                //类别
                type:{
                    type:Array,
                    required:true,
                },
                //时间
                createTime:{
                    type:String
                },
                //数量
                num:{ 
                      type:Number,
                    },
                //价格
                price:{
                    type:Number,
                    default:'0',
                },
                //备注
                mark:{
                    type:String,
                    default:''
                },
               
        }
}