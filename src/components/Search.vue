<template>
  <section class="jumbotron">
    <h3 class="jumbotron-heading">Search Github Users</h3>
    <div>
      <input type="text" placeholder="enter the name you search" v-model="keyWord"/>&nbsp;
      <button @click="searchUsers">Search</button>
    </div>
  </section>
</template>

<script>
  export default {
    name: "Search",
    data() {
      return {
        keyWord: ''
      }
    },
    methods: {
      searchUsers() {
        console.log(this)
        // 发送请求前，通知List组件更新状态
        this.$bus.$emit('updateListData', {isFirst: false, isLoading: true, errMsg: '', users: []})
        // 模板字符串
        this.$http.get(`https://api.github.com/search/users?q=${this.keyWord}`).then(
          response => {
            console.log('请求成功了')
            // 请求成功后更新List的数据
            this.$bus.$emit('updateListData', { isLoading: false, errMsg: '', users: response.data.items})
          },
          error => {
            // 请求失败后更新List的数据
            this.$bus.$emit('updateListData', { isLoading: false, errMsg: error.message, users: []})
          }
        )
      }
    }
  }
</script>

<style>

</style>