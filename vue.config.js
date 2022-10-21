const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,//设置为true，表示Vue CLI会自动将依赖的包进行编译，而不是使用第三方包的版本
  lintOnSave:false,//关闭语法检查
  pages: {
    index: {
      // page 的入口
      entry: 'src/main.js'
    }
  },
  devServer: {
    port: 8899, // 此处修改你想要的端口号
    // 方式一：代理
    // proxy: 'http://localhost:5000' //开启代理服务器
    // 方式二：配置代理
    proxy: {
      '/caibitv': {
        target: 'http://localhost:5000',
        pathRewrite: {'^/caibitv':''}, //重写路径,因为转发请求时会带上/caibitv,而服务器没有
        ws: true, // 用于支持websocket，默认true
        changeOrigin: true // 默认为true，用于控制请求头中的host值，true为与被代理的服务器相同，false则是自身的
      },
      '/atguigu': {
        target: 'http://localhost:5001',
        pathRewrite: {'^/atguigu':''}, //重写路径,因为转发请求时会带上/caibitv,而服务器没有
        ws: true, // 用于支持websocket，默认true
        changeOrigin: true // 默认为true，用于控制请求头中的host值，true为与被代理的服务器相同，false则是自身的
      }
    }
  }
})
