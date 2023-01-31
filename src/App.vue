<template>
  <div class="container">
    <Category title="游戏" #default="{ games }">
        <ol>
          <li v-for="(item, index) in games" :key="index">{{item}}</li>
        </ol>
    </Category>
  </div>
</template>

<script>
  import Category from './components/Category'
  export default {
    name: "App",
    components: {
      Category
    }
  };
</script>

<style>
  .container, .foot {
    display: flex;
    justify-content: space-around;/* 主轴对齐方式 */
  }
  video {
    width: 100%;
  }
  h4 {
    text-align: center;
  }
</style>
