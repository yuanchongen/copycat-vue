import Vue from './src/index'

var app = new Vue({
    el: '#app',
    // comments:true,
    beforeCreate(){
        console.log('%cbeforeCreate -------', 'color:red');
        return 2222
    },
    created(){

    },
    beforeMount(){

    },
    mounted(){ //挂载元素，获取到DOM节点
        console.log('%cmounted -------', 'color:red');
       setTimeout(()=>{
            // console.log('%cchange -------', 'color:red');
            // console.log('%cthis : ', 'color:#53DCFB', this);
           this.message = 'hello Msg change';
//                console.log('this.count='+this.count)
       }, 1000)
    },
    beforeUpdate(){

    },
    updated(){ //挂载元素，获取到DOM节点
    },
    beforeDestroy(){

    },
    destroyed(){

   },
    data:function () {
         return  {
             count:0,
             message: 'Hello!'
         }
    },
//        data: {
//            count:0,
//            message: 'Hello Vue!'
//        }
})
