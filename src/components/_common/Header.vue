<template>
 <div class="header-box">
     <p class="item-txt">中国核电数字资产安全管理系统 <!-- <img src="../../assets/outdeng.png" alt=""> --> </p>
     <!-- <dates></dates> -->
 </div>
</template>

<script>
  import types from '../../store/global/types'
  import {mapGetters} from 'vuex'
  import Dates from './Dates.vue'
  export default {
    name: 'Header',
    data() {
      return { 
        nowTime: null,
      }
    },
    
    mounted(){
      let vm = this
      // vm.nowTimes()
    },

    methods: {
     // 获取当前时间函数
      timeFormate(timeStamp) {
        let vm = this
          let year = new Date(timeStamp).getFullYear();
          let month =new Date(timeStamp).getMonth() + 1 < 10? "0" + (new Date(timeStamp).getMonth() + 1): new Date(timeStamp).getMonth() + 1;
          let date =new Date(timeStamp).getDate() < 10? "0" + new Date(timeStamp).getDate(): new Date(timeStamp).getDate();
          let hh =new Date(timeStamp).getHours() < 10? "0" + new Date(timeStamp).getHours(): new Date(timeStamp).getHours();
          let mm =new Date(timeStamp).getMinutes() < 10? "0" + new Date(timeStamp).getMinutes(): new Date(timeStamp).getMinutes();
          let ss =new Date(timeStamp).getSeconds() < 10? "0" + new Date(timeStamp).getSeconds(): new Date(timeStamp).getSeconds();
          vm.nowTime = year + "年" + month + "月" + date +"日"+" "+hh+":"+mm +":" + ss
          // console.log(this.nowTime);
        },
    // 定时器函数
        // nowTimes(){
        //   let vm = this
        //   vm.timeFormate(new Date());
        //   this.timer = setInterval(vm.nowTimes,1000);
        // },
    },
    created() {
      const vm = this
    },
    components:{
      Dates: Dates
    },
    beforeDestroy () {
       if(this.timer) {
           clearInterval(this.timer);//在vue实例销毁钱，清除我们的定时器
       }
    }         
  }
</script>

