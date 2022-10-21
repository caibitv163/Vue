<template>
  <!-- 组件的结构 -->
  <div>
    <h2>学生姓名：{{ name }}</h2>
    <h2>学生年龄：{{ age }}</h2>
    <button @click="showAge">点我提示年龄</button>
  </div>
</template>

<script>
    //简写
    export default {
        name: 'Student',
        data(){
            return {
                name:'张三',
                age:18
            }
        },
        methods: {
            showAge(){
                alert(this.age)
            }
        },
    }
</script>