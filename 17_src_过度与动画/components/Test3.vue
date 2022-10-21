<template>
  <div>
    <button @click="isShow = !isShow">显示/隐藏</button>
    <!-- 通过给transition-group元素设置tag属性，指定transition-group渲染为指定的元素，如果不指定tag属性，则默认渲染为span标签 -->
    <transition-group 
      :appear="true"
      name="animate__animated animate__bounce" 
      enter-active-class="animate__swing"
      leave-active-class="animate__fadeOut"
    >
      <h1 v-show="!isShow" key="1">你好啊!</h1>
      <h1 v-show="isShow" key="2">996</h1>
    </transition-group>
  </div>
</template>

<script>
  import 'animate.css'
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

</style>