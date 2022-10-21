<template>
    <div>
        <h1 class="title">你好啊</h1>
        <School></School>
        <hr/>
        <Student></Student>
    </div>
</template>

<script>
    //引入组件，当两个组件有相同的样式时，后引入的会覆盖前面的样式，可以使用scoped来控制作用域，实际上是在div上加了一个标签控制，但在App中我们一般不加scoped，因为App的样式我们更希望所有的组件都使用
    import School from './components/School'
    import Student from './components/Student'
    
    export default {
        name: 'App',
        components:{
            'Student':Student,
            'School':School
        },
    }
</script>

<style scoped>
    .title{
        color:red;
    }
</style>