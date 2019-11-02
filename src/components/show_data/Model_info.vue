<template>
  <div style="background: #fff; height: 100%; min-width:1200px; margin: 0 auto;">
    <!-- class="graph-body-bg" -->
     <header-info :listStyle="false">
       <a v-if="infoFromCome == 'manager' && hasChangePerm == 'True'" :href="currentUrl" target="_blank" class="go-on-seeMore"><el-button size="mini">修改图元</el-button></a>  
     </header-info>
     
     <div class="graph-container-info">
       <div class="graph-content" style="padding:0; background: #fff; width:800px; margin:0 auto">
        <ShowGraphDom :xmlCurrentId="curXmlId?curXmlId:xmlTargetDataId"></ShowGraphDom>
       </div>
     </div>
     
  </div>
</template>
<script>
  import * as echarts from "echarts";
  import {common_getRouteHref} from '../../utils/vm_methods_common'
  import {catchAxiosError} from '../../utils/common'
  import types from '../../store/global/types'
  import {API_BASE_URL} from '../../utils/constants'
  import {mapGetters} from 'vuex'
  
  import Show_graph_dom from './Show_graph.vue'
  import ShowInfoEchart from './compontents/InfoEchartsData.vue'
  import TrendEchart from './compontents/TrendEchart.vue'
  import Dates from '../_common/Dates.vue'
  import HeaderInfo from '../_common/Header_info.vue'

  export default {
    name: 'loginHome',
    data(){
       Object.assign(this, {
          API_BASE_URL,
        })
      return {
        dataLoading:true,
        targetId: this.$route.params.id, //电厂id
        infoFromCome:this.$route.query.onFrom, //来源
        userName:this.$route.query.un, //用户信息
        typeModel:this.$route.query.addType,//模式类型  图元模板 PRIMITIVE 图表 GRAPH
        hasChangePerm:this.$route.query.has_change_perm, //是否有编辑权限
        bodyHeight:null,
        currentUrl:null,
        xmlTargetDataId:null,
        curXmlId:null,
       
      }
    },

    mounted(){
      let vm = this
    },
    created(){
      let vm = this
      vm.xmlTargetDataId = vm.targetId
      if (vm.infoFromCome == 'manager'){
        vm.currentUrl = 'http://' + window.location.host +  '/static/webapp/index.html?currentId=' + vm.xmlTargetDataId +　'&onFrom=' + vm.infoFromCome + '&un=' + vm.userName + '&has_change_perm=' + vm.hasChangePerm + '&addType=' + vm.typeModel
      }
    },
    methods:{
      common_getRouteHref,
      catchAxiosError,
    },

    components:{
      ShowInfoEchart:ShowInfoEchart,
      TrendEchart:TrendEchart,
      ShowGraphDom:Show_graph_dom,
      HeaderInfo:HeaderInfo,
    },
  }

</script>
<style lang='scss'>
  @import '../../sass/animation.scss'
</style>

<style lang="css" scoped="scoped">
 body{
  background-color: #fff;
 }
  .mod_info1 {
    float: left;
    margin:20px 0 0 10px;
    height:180px;
    width:45%;
    position:relative
  }
.mod-txt{
  color:#fff;
  line-height: 180px;
  text-align: center;
  font-size: 30px; 
  text-shadow: 0px 0px 35px #00c0ff;
}
.mod_info1__logoall {
  height:100%;
  width:100%;
  position:absolute;
  top:0;
  right:0
}
.mod_info1__logo1 {
  background:url(../../assets/per.png) no-repeat center center;
}
.mod_info1__logo2 {
  background:url(../../assets/per2.png) no-repeat center center;
}

</style>

