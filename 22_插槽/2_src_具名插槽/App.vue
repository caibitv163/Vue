<template>
  <div class="container">
    <Category title="美食">
      <img slot="center" src="https://pic2.zhimg.com/v2-6fa6ec4d24d1dd691a14bc791fbd3927_1440w.jpg?source=172ae18b" alt=""/>
      <a slot="footer" href="https://www.baidu.com">百度一下</a>
    </Category>

    <Category title="游戏">
      <ul slot="center">
        <li v-for="(item, index) in games" :key="index">{{item}}</li>
      </ul>
      <div class="foot" slot="footer">
        <a href="https://www.baidu.com">单机游戏</a>
        <a href="https://www.baidu.com">网络游戏</a>
      </div>
    </Category>

    <Category title="电影">
      <video slot="center" src="https://stream7.iqilu.com/10339/upload_transcode/202002/09/20200209105011F0zPoYzHry.mp4" controls/>
      <template v-slot:footer>
        <div class="foot">
          <a href="https://www.baidu.com">经典</a>
          <a href="https://www.baidu.com">热门</a>
          <a href="https://www.baidu.com">推荐</a>
        </div>
        <h4>欢迎前来观影</h4>
      </template>
    </Category>
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
