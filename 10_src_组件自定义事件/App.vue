<template>
    <div class="app">
        <h1>{{msg}} 学生姓名是：{{studentName}}</h1> <!-- name的来源可以是data、props、computed -->   
        <!-- 通过父组件给子组件传递函数类型的props实现:子给父传递数据 -->
        <School :getSchoolName='getSchoolName'></School>

        <!-- 给Student的实例对象vc身上绑定了一个caibitv事件 -->
        <!-- 通过父组件给子组件绑定一个自定义事件实现:子给父传递数据 (第一种写法，使用@或v-on) -->
        <!-- <Student v-on:caibitv='getStudentName' @demo="m1"></Student> -->
        <!-- <Student @caibitv.once='getStudentName'></Student> -->

         <!-- 通过父组件给子组件绑定一个自定义事件实现:子给父传递数据 (第二种写法，使用ref和$on，更灵活) -->
        <Student ref='student' @click="show"/>
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
        data(){
            return {
                msg: '你好啊',
                studentName: ''
            }
        },
        methods:{
            getSchoolName(name){
                console.log('App收到了学校名：', name)
            },
            getStudentName(name, ...params){
                console.log('App收到了学生名：', name, params)
                this.studentName = name
            },
            m1(){
               console.log('demo事件被触发了')
            },
            show(){
                alert(123)
            }
        },
        mounted(){
            // 三秒后绑定事件
            /* setTimeout(() => {
                this.$refs.student.$on('caibitv', function(name, ...params){
                    console.log('App收到了学生名：', name, params)
                    console.log(this) // 注意这里的this是Student组件的实例对象，vue设计上是谁触发了这个caibitv事件this就是谁
                    // 匿名函数直接回调，里面的this指向触发事件的VC，用已有的methods作为回调，this就是该组件的实例对象
                    // this.studentName = name
                }) // 绑定自定义事件
            }, 3000) */
            
            // 这时可以考虑写成箭头函数，箭头函数没有自己的this，他就会向外找到mounted()的this，所以这里的this就是App的实例对象
            /* this.$refs.student.$on('caibitv',(name, ...params) => {
                    console.log('App收到了学生名：', name, params)
                    console.log(this)
                    this.studentName = name
            }) */

            this.$refs.student.$on('caibitv', this.getStudentName)


            // this.$refs.student.$once('caibitv', this.getStudentName) // 绑定自定义事件（一次性）
        }
    }
</script>

<style scoped>
    .app{
        background-color: gray;
        padding: 5px;
    }
</style>