<template>
  <div class="container">
    <Category title="游戏">
      <template scope="caibitv" slot="haha"> <!-- 从插槽定义中获取数据 -->
        {{caibitv.games}}
        <ul>
          <li v-for="(item, index) in caibitv.games" :key="index">{{item}}</li>
        </ul>
        <h4>{{caibitv.msg}}</h4>
      </template>
    </Category>
    <Category title="游戏">
      <template v-slot:haha="{ games }"> <!-- 解构赋值 -->
        <ol>
          <li v-for="(item, index) in games" :key="index">{{item}}</li>
        </ol>
      </template>
    </Category>
    <Category title="游戏">
      <template slot-scope="{ games }" slot="haha"> <!-- scope 和 slot-scope只是新旧API的区别, 这里使用v-slot会报错 说混用了插槽??? 但使用slot就可以正常显示，资料说是v-slot取代slot和slot-scope-->
        <h4 v-for="(item, index) in games" :key="index">{{item}}</h4>
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
