// 引入Vue
import Vue from 'vue'
// 引入Vuex
import Vuex from 'vuex'
// 应用Vuex插件
Vue.use(Vuex)

const actions = {} // 准备actions——用于响应组件中的动作
const mutations = {} // 准备mutations——用于操作数据(state)
const state = {} // 准备state——用于存储数据

// 创建并暴露store
export default new Vuex.Store({
  actions,
  mutations,
  state
})