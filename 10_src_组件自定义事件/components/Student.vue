<template>
  <div class="student">
    <h2>学生名称：{{ name }}</h2>
    <h2>学生性别：{{ sex }}</h2>
    <h2>当前求和为：{{number}}</h2>
    <button @click="add">点我number++</button>
    <button @click="sendStudentName">把学生名给App</button>
    <button @click="unbind">解绑caibitv事件</button>
    <button @click="death">销毁当前Student组件的实例(vC)</button>
  </div>
</template>

<script>
export default {
  name: "Student",
  data() {
    return {
      name: "张三",
      sex: "男",
      number: 0
    }
  },
  methods:{
    add(){
      console.log('add回调被调用了')
      this.number++
    },
    sendStudentName(){
      // 触发Student组件实例身上的caibitv事件
      this.$emit('caibitv', this.name, 666, 777, 888)
      // this.$emit('demo')
      this.$emit('click')
    },
    unbind(){
      this.$off('caibitv') // 解绑一个自定义事件
      // this.$off(['caibitv', 'demo']) // 解绑多个自定义事件
      // this.$off() // 解绑所有自定义事件
    },
    death(){
      this.$destroy() // 销毁当前Student组件的实例(vC)，销毁后所有Student实例的自定义事件全都不奏效，但我这里有问题，视频中老师的add方法销毁后可以被调用，但我这里却不行，似乎是vue版本问题 目前我使用的是2.7.8版本
    }
  }
};
</script>

<style lang='less' scoped>
  .student{
    background-color: pink;
    padding: 5px;
    margin-top: 30px;
  }
</style>