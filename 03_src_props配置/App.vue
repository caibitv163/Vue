<template>
    <div>
        <Student name='李四' sex='女' :age='18'/><!-- 数据绑定的形式控制引号里的是表达式，而不是字符串 -->
        <!-- <Student name='王五' sex='男' age='59'/> -->
        <hr/>
    </div>
</template>

<script>
    //引入Student组件
    import Student from './components/Student'
    export default {
        name: 'App',
        components:{
            'Student':Student,
        },
    }
</script>