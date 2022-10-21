<template>
  <div>
    <h2>学校名称：{{ name | mySlice}}</h2>
    <h2>学校地址：{{ address }}</h2>
    <button @click="test">点击测试一下hello方法</button>
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
  methods: {
    test() {
      this.hello();
    }
  },
};
</script>