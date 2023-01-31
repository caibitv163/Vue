<template>
  <div class="container">
    <Category title="美食">
      <img src="https://pic2.zhimg.com/v2-6fa6ec4d24d1dd691a14bc791fbd3927_1440w.jpg?source=172ae18b" alt=""/>
    </Category>

    <Category title="游戏">
      <ul>
        <li v-for="(item, index) in games" :key="index">{{item}}</li>
      </ul>
    </Category>

    <Category title="电影">
      <video src="https://stream7.iqilu.com/10339/upload_transcode/202002/09/20200209105011F0zPoYzHry.mp4" controls/>
    </Category>

    <Category title="默认" />
  </div>
</template>

<script>
  import Category from './components/Category'
  export default {
    name: "App",
    components: {
      Category
    },
    data () {
      return {
        foods:['火锅','烧烤','烤鱼'],
        games:['王者荣耀','英雄联盟','绝地求生'],
        films:['复仇者联盟','钢铁侠','蜘蛛侠']
      }
    }
  };
</script>

<style>
  .container {
    display: flex;
    justify-content: space-around;/* 主轴对齐方式 */
  }
  video {
    width: 100%;
  }
</style>
