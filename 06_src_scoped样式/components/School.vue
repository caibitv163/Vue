<template>
  <div class="demo">
    <h2 class="title">学校名称：{{ name }}</h2>
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
  }
};
</script>

<style scoped>/* 作用域 */
  .demo{
    background-color: skyblue;
  }
</style>