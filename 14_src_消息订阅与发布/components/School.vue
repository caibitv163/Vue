<template>
  <div class="school">
    <h2>学校名称：{{ name }}</h2>
    <h2>学校地址：{{ address }}</h2>
  </div>
</template>

<script>
import pubsub from 'pubsub-js'// 这里的pubsub是一个对象

export default {
  name: "School",
  data() {
    return {
      name: "北京大学yyds",
      address: "北京市朝阳区",
    };
  },
  methods:{
    demo(msgName, data){
      console.log("有人发布了hello消息，hello消息的回调执行了", msgName, data, this)
    }
  },
  mounted(){
    /* this.$bus.$on('hello',data => {
      console.log('我是School组件，收到了数据', data)
    }) */
    // 这里的回调可以接收两个参数，第一个是消息名，第二个是消息内容，这个订阅会返回一个id之后取消订阅用
    /* this.pubId = pubsub.subscribe('hello', (msgName, data) =>{
      console.log(this) // 因为使用的是第三方库，没有将匿名函数写程箭头函数的形式，这里的this就是undefined，写成箭头函数的话就是当前组件实例对象
      // console.log("有人发布了hello消息，hello消息的回调执行了", msgName, data)
    }) */
    this.pubId = pubsub.subscribe('hello', this.demo)
  },
  beforeDestroy(){
    // this.$bus.$off('hello')
    pubsub.unsubscribe(this.pubId)
  }
};
</script>

<style scoped>/* 作用域 */
  .school{
    background-color: skyblue;
    padding: 5px;
  }
</style>