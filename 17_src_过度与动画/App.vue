<template>
  <div id="root">
    <MyTest></MyTest>
    <MyTest2/>
    <MyTest3/>
  </div>
</template>

<script>
  import MyTest from "./components/Test";
  import MyTest2 from "./components/Test2";
  import MyTest3 from "./components/Test3";

  export default {
    name: "App",
    components: { MyTest, MyTest2, MyTest3 }
  }
</script>
