<template>
  <div class="todo-footer" v-show="total">
    <label>
      <!-- <input type="checkbox" :checked='isAll' @change='checkAll'/> -->
      <input type="checkbox" v-model="isAll"/>
    </label>
    <span> <span>已完成{{doneTotal}}</span> / 全部{{total}} </span>
    <button class="btn btn-danger" @click="clearAll">清除已完成任务</button>
  </div>
</template>

<script>
export default {
  name: "MyFooter",
  props: ["todos"],
  computed:{
    total(){
      return this.todos.length;
    },
    doneTotal(){
      // return this.todos.filter(todo => todo.completed).length;
      // 使用reduce 条件统计,第一个是一个函数(数组长度是几就调用几次,pre:上一次的值;current:当前的值,遍历的todo),第二个参数是如果做统计就是初始值;最后一次的pre的值就作为reduce的返回值 3
      return this.todos.reduce((pre,current)=>{
        // console.log('@',pre,current) // 0 1 2
        //记得把值返回，不然除了第一次，其他的都是undefined
        return pre + (current.completed ? 1 : 0)
      },0)
      //简写
      // return this.todos.reduce((pre,current) => pre + (current.completed ? 1 : 0) ,0)
    },
    /* isAll(){
      return this.doneTotal === this.total && this.total > 0;
    } */
    // isAll改写成下面的方式，v-modal绑定
    isAll:{
      get(){
        return this.doneTotal === this.total && this.total > 0;
      },
      set(done){
        // this.checkAllTodo(done)
        this.$emit('checkAllTodo',done) //🔴触发checkAllTodo事件
      }
    }
  },
  methods:{
    /* checkAll(e){
      this.checkAllTodo(e.target.checked)
    }, */
    clearAll(){
      // this.clearAllTodo()
      this.$emit('clearAllTodo') //🔴触发clearAllTodo事件
    }
  }
};
</script>

<style scoped>
/*footer*/
.todo-footer {
  height: 40px;
  line-height: 40px;
  padding-left: 6px;
  margin-top: 5px;
}

.todo-footer label {
  display: inline-block;
  margin-right: 20px;
  cursor: pointer;
}

.todo-footer label input {
  position: relative;
  top: -1px;
  vertical-align: middle;
  margin-right: 5px;
}

.todo-footer button {
  float: right;
  margin-top: 5px;
}
</style>
