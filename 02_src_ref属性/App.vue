<template>
    <div>
        <h1 v-text='msg' ref="title"></h1>
        <button ref='btn' @click='showDOM'>点我输出上方的DOM元素</button>
        <School ref="sch"/><!-- 这里的ref就会拿到School组件的实例对象 -->
        <School id="sch"/>
    </div>
</template>

<script>
    //引入School组件
    import School from './components/School.vue';
    export default {
        name: 'App',
        components:{
            'School': School,
        },
        data(){
            return {
                msg: 'Hello Vue!'
            }
        },
        methods:{
            showDOM(){
                console.log(this.$refs);
                console.log(this.$refs.title);
                console.log(this.$refs.btn);
                console.log(this.$refs.sch);
                console.log(document.getElementById('sch'));
            }
        }

    }
</script>