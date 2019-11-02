<template>
 <div class="header-info-top" :class="{'header-list-top':listStyle}">
   <p class="txt">江苏核电数字资产安全管理系统  <span class="top-button-all">
    <a :href="managerUrl" v-if="infoFromCome == 'manager'" target="_blank" class="go-other-button"><el-button size="mini">进入资产后端管理系统</el-button></a>
    <router-link v-if="infoFromCome!='parentInfo' && typeModel != 'PRIMITIVE' && !isAllTreePage" :to="{path:'/list',query:{'onFrom':infoFromCome, 'un': userName, 'has_change_perm':hasChangePerm, 'addType': typeModel}}" class="go-on-seeMore"><el-button size="mini">进入列表</el-button></router-link>
   <router-link v-if="typeModel == 'PRIMITIVE' && infoFromCome == 'manager' && !isAllTreePage" :to="{path:'/model',query:{'onFrom':infoFromCome, 'un': userName, 'has_change_perm':hasChangePerm, 'addType': typeModel}}" class="go-on-seeMore"><el-button size="mini">进入列表</el-button></router-link>
   <slot></slot>
   </span></p>
   
   <!-- <dates></dates> -->
 </div>
</template>

<script>
  import types from '../../store/global/types'
  import {mapGetters} from 'vuex'
  import Dates from './Dates.vue'
  import {COMMON_MANAGER_URL} from '../../utils/constants'
  export default {
    name: 'Header',
    data() {
      return { 
        nowTime: null,
        currentUrl:null,
        targetId: null, //this.$route.params.id, 
        isAllTreePath:this.$route.path, //来源部目录树
        isAllTreePage:false,
        infoFromCome:this.$route.query.onFrom, //来源
        userName:this.$route.query.un, //用户信息
        typeModel:this.$route.query.addType, //用户信息
        hasChangePerm:this.$route.query.has_change_perm, //是否有编辑权限
        userPromissions:null, //用户的权限
        managerUrl:COMMON_MANAGER_URL,
      }
    },
    props:['listStyle', 'currentId'],
    
    mounted(){
      let vm = this
      // vm.nowTimes()
      // console.log(vm.currentId, 'currentId')
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
      if(vm.isAllTreePath == '/allTree'){
        vm.isAllTreePage = true
      }
      vm.$on('currentid', function(msg){
        vm.targetId = msg
        console.log(msg, 'dd')
      })
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

