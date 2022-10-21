<template>
    <div class="app">
        <h1>{{msg}}</h1>
        <JJJ/> 
        <HHH/>
    </div>
</template>

<script>
    import School from './components/School'
    import Student from './components/Student'
    
    export default {
        name: 'App',
        components:{
            'HHH':Student,
            'JJJ':School
        },
        data(){
            return {
                msg: '你好啊'
            }
        }
    }
</script>

<style scoped>
    .app{
        background-color: gray;
        padding: 5px;
    }
</style>