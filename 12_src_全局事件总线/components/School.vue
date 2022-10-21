<template>
  <div class="school">
    <h2>学校名称：{{ name }}</h2>
    <h2>学校地址：{{ address }}</h2>
  </div>
</template>

<script>
export default {
  name: "School",
  data() {
    return {
      name: "北京大学yyds",
      address: "北京市朝阳区",
    };
  },
  mounted(){
    // console.log('School', window.x)
    // console.log('School', this)
    this.$bus.$on('hello',data => {
      console.log('我是School组件，收到了数据', data)
    })
  },
  beforeDestroy(){
    this.$bus.$off('hello')
  }
};
</script>

<style scoped>/* 作用域 */
  .school{
    background-color: skyblue;
    padding: 5px;
  }
</style>