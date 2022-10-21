<template>
  <li>
    <label>
      <input
        type="checkbox"
        :checked="todo.completed"
        @change="handleCheck(todo.id)"
      />
      <!-- 在学习props时，我们强调不修改props传过来的值，但对于对象来说修改里面的属性，vue是检测不到的，除非地址改变了，类似引用数据类型和基本数据类型） -->
      <!-- 如下代码也能实现功能，但不太推荐，因为有点违反原则，因为修改了props -->
      <!-- <input type="checkbox" v-model='todo.completed'/>
      <input type="checkbox" v-model='a'/> -->
      <span v-show="!todo.isEdit">{{ todo.title }}</span>
      <input 
        type="text" 
        v-show="todo.isEdit" 
        :value="todo.title" 
        @blur="handleBlur(todo,$event)"
        ref='inputTitle'
      />
    </label>
    <button class="btn btn-danger" @click="handleDelete(todo.id)">删除</button>
    <button class="btn btn-edit" v-show="!todo.isEdit" @click="handleEdit(todo)">编辑</button>
  </li>
</template>

<script>
import pubsub from 'pubsub-js'
export default {
  name: "MyItem",
  //声明接收todo对象
  props: ["todo",'a'],
  methods: {
    //勾选or取消勾选
    handleCheck(id) {
      // 通知App组件将对应的todo对象的completed属性取反
      this.$bus.$emit("checkTodo", id)
    },
    //删除
    handleDelete(id){
      if(confirm('确定删除吗？')){
        // this.$bus.$emit("deleteTodo", id)
        pubsub.publish('deleteTodo',id)
      }      
    },
    //编辑
    handleEdit(todo){
      if(todo.hasOwnProperty.call('isEdit')){
        this.isEdit = true
      }else{
        this.$set(todo,'isEdit',true)
      }
      // this.$refs.inputTitle.focus() //注意：vue在解析模板时是在整个回调执行完后再解析，这时输入框获取焦点，但页面还没输入框，vue这样的原因主要是防止多次修改多次解析模板

      //可以采用定时器的方式，定时器是异步的，不受vue管理，如果不给后面的200就是定时器的立即到点，也可以解决这个问题
      /* setTimeout(()=>{
        this.$refs.inputTitle.focus()
      },200) */

      //$nextTick指定的回调会在dom节点更新后执行
      this.$nextTick(function(){
        this.$refs.inputTitle.focus()
      })
    },
    //失去焦点回调（真正执行修改逻辑）
    handleBlur(todo,e){
      todo.isEdit = false
      if(!e.target.value.trim()) return alert('输入不能为空！')
      this.$bus.$emit("updateTodo", todo.id,e.target.value)
    }
  },
};
</script>

<style scoped>
  /*item*/
  li {
    list-style: none;
    height: 36px;
    line-height: 36px;
    padding: 0 5px;
    border-bottom: 1px solid #ddd;
  }

  li label {
    float: left;
    cursor: pointer;
  }

  li label li input {
    vertical-align: middle;
    margin-right: 6px;
    position: relative;
    top: -1px;
  }

  li button {
    float: right;
    display: none;
    margin-top: 3px;
  }

  li:before {
    content: initial;
  }

  li:last-child {
    border-bottom: none;
  }

  li:hover {
    background-color: #ddd;
  }

  li:hover button {
    display: block;
  }
</style>
