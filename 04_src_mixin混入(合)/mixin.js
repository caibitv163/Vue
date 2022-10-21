// 分别暴露
export const mixin = {
    methods: {
        showName(){
            alert(this.name)               
        }
    },
    mounted() {
        console.log("挂载完成")
    },
}
export const mixin2 = {
    data() {
        return {
            x:100,
            y:200
        }
    },
}

// 默认暴露
// export default mixin