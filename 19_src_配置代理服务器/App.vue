<template>
  <div>
    <button @click="getStudents">获取学生信息</button>
    <button @click="getCars">获取汽车信息</button>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    name: "App",
    methods:{
      getStudents(){
        console.log('开始跨域')
        axios.get('http://localhost:8899/caibitv/students').then(
          response => {
          console.log('请求成功了',response.data)
        }, error => {
          console.log('请求失败了',error.message)
        })
      },
      getCars(){
        console.log('开始跨域')
        axios.get('http://localhost:8899/atguigu/cars').then(
          response => {
          console.log('请求成功了',response.data)
        }, error => {
          console.log('请求失败了',error.message)
        })
      }
    }
  };
</script>
