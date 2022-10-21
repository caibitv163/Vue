<template>
  <div class="todo-header">
    <input
      type="text"
      placeholder="请输入你的任务名称，按回车键确认"
      v-model="title"
      @keyup.enter="add"
    />
  </div>
</template>

<script>
//引入nanoid
import { nanoid } from "nanoid";

export default {
  name: "MyHeader",
  data() {
    return {
      title: "",
    };
  },
  methods: {
    /* add(event){
            console.log(event.target.value);
        } */
    add() {
      //注意前端，字符串string直接转换成Boolean类型时，除了空字符串为false外，其余都是true；  
      //校验数据
      if (!this.title.trim()) return alert("输入不能为空");
      //将用户的输入包装成一个todo对象 nanoid()生成一个唯一的id,是uuid的变种 精简版
      const todoObj = { id: nanoid(), title: this.title, completed: false };
      //通知App组件去添加一个todo对象
      this.$emit("addTodo", todoObj); //🔴触发addTodo事件
      //清空输入框
      this.title = "";
    },
  },
};
</script>

<style scoped>
/*header*/
.todo-header input {
  width: 560px;
  height: 28px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 4px 7px;
}

.todo-header input:focus {
  outline: none;
  border-color: rgba(82, 168, 236, 0.8);
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075),
    0 0 8px rgba(82, 168, 236, 0.6);
}
</style>
