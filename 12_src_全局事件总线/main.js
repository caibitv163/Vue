//引入Vue
import Vue  from 'vue'; 
//引入App
import App from './App.vue';
//关闭Vue的生产提示
Vue.config.productionTip = false;

// window.x = {a: 1, b: 2} 不推荐
// Vue.prototype.x = {a: 1, b: 2} //推荐
// console.log(Vue.prototype) // $on、$emit、$off都在Vue的原型对象上

// 下面这样写不是很好
/* const Demo = Vue.extend({})
const d = new Demo()
Vue.prototype.x = d */

//创建vm
const vm = new Vue({
    render: h => h(App),
    beforeCreate(){
        Vue.prototype.$bus = this //安装全局事件总线
    }
}).$mount('#app');

// Vue.prototype.x = vm // 这样会报错，因为前面已将App组件整个放在页面上了,再赋值就晚了