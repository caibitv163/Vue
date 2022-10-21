<template>
  <div>
    <button @click="isShow = !isShow">显示/隐藏</button>
    <!-- 通过给transition-group元素设置tag属性，指定transition-group渲染为指定的元素，如果不指定tag属性，则默认渲染为span标签 -->
    <transition-group name="hello" :appear="true">
      <h1 v-show="!isShow" key="1">你好啊!</h1>
      <h1 v-show="isShow" key="2">996</h1>
    </transition-group>
  </div>
</template>

<script>
  export default {
    name: "MyTest2",
    data() {
      return {
        isShow: true
      };
    }
  }
</script>

<style scoped>
  h1{
    background-color: orange;
    /* transition: 1s linear; linear表示匀速 过渡写在本身上，谁做动画给谁加 */
  }
  /* 进入的起点, 离开的终点 */
  .hello-enter, .hello-leave-to{
    transform: translateX(-100%);
  }
  .hello-enter-active, .hello-leave-active{
    transition: 1s linear;
  }
  /* 进入的终点, 离开的起点 */
  .hello-enter-to, .hello-leave{
    transform: translateX(0px);
  }

</style>