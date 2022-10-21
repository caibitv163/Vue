<template>
  <div class="container">
    <Serach/>
    <List/>
  </div>
</template>

<script>
  // import './assets/css/bootstrap.css' // 此时bootstrap.css中引用了不存在的资源（字体），直接这样引入，vue会严格检查，所以推荐在public/index.html中加入css链接标签，来引入外部的css或者less
  import Serach from './components/Search'
  import List from './components/List'
  export default {
    name: "App",
    components: {
      Serach,
      List
    }
  };
</script>
