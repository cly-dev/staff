# mongoose

## 1、自定义修饰符

说明:在schema建立表结构时,可以使用自定义修饰符,对数据进行修饰,让数据更加规范

使用:

```
const UserSchema=new Schema({
    name: { 
    		type: String,
            //自定义修饰符
    		trim:true,
    		//params就是数据
    		set(params){
    			return params;
    		}
    },
  })
```

