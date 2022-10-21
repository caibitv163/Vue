<template>
    <div>
        <h1>{{msg}}</h1>
        <h2>学生名称：{{name}}</h2>
        <h2>学生性别：{{sex}}</h2>
        <h2>学生年龄：{{myAge + 1}}</h2> <!-- 因为传过来的是字符串记得转换格式 -->
        <button @click="updateAge">尝试修改收到的年龄</button>
    </div>
</template>

<script>
export default {
    name: "Student",
    data(){
        console.log(this)
        return {
            msg: '我是你好朋友',
            myAge:this.age
        }
    },
    methods:{
        updateAge(){
            this.myAge++ //这里修改了属性值，但会报错，官方说尽量避免修改属性值，如果一定要改，可以采用data中的属性接收值，然后在methods中修改，可以发现props的优先级高于data
        }
    },
    // props:['name','sex','age'] //简单声明接收,不要瞎声明，不然会是Undefined，对于key、ref这些已经被使用了
    
     //接收的同时对数据进行类型限制，这个似乎只是提示作用
    /* props:{ 
        name:String,
        age:Number,
        sex:String
    } */

    //接收的同时对数据进行类型限制+默认值的指定+必要性的限制
    props:{
        name:{
            type:String, //name的类型是字符串
            required:true //name是必要的
        },
        age:{
            type:Number,
            default:18, //age的默认值是18
        },
        sex:{
            type:String,
            required:true
        }
    }
}
</script>