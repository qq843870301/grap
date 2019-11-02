<template>
     <p class="item-txt-time"><!-- 1 天 7天 14 天 30天 --> {{nowTime}}</p>
</template>

<script>
  export default {
    name: 'Header',
    data() {
      return {
        nowTime: null,
      }
    },
    
    mounted(){
      let vm = this
      this.timer = setInterval(function(){
        vm.nowTime = vm.currentTime()
      },1000)
      
    },

    methods: {
        currentTime(){
          var d=new Date(),str='';
          str+=d.getFullYear()+'年';
          str+=d.getMonth() + 1+'月';
          str+=d.getDate()+'日';
          str+=d.getHours()+':';
          str+=d.getMinutes()+':';
          str+= d.getSeconds()+'';
          return str;
        },
    },
    created() {
      const vm = this
    },
    beforeDestroy () {
       if(this.timer) {
           clearInterval(this.timer);//在vue实例销毁钱，清除我们的定时器
       }
    }         
  }
</script>

