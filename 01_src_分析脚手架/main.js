/*
  该文件是整个项目的入口文件
*/
//引入Vue
import Vue from 'vue'
//引入App组件，它是所有组件的父组件
import App from './App.vue'
//关闭vue的生产提示
Vue.config.productionTip = false

function Extend(){
  
}

//创建Vue实例对象---vm
new Vue({
  el: '#app',
  //下面这行代码一会解析，完成了这个功能：将App组件放入容器中
  render: h => h(App),
  // render: createElement => createElement('h1', 'Hello World'),
  /* render(createElement) {
    return createElement('h1', 'Hello World')
  } */

  // template: '<h1>Hello World</h1>',
  // components: {App}
})/* .$mount('#app') */