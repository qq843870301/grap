<template>
  <div v-if="xmlCurrentId" style="height: 100%;" v-loading="boxLoading" element-loading-text="图表加载中">
     <!-- -->
    <!-- <div style="position:fixed; right:0; top:0px;width: 120px; height: 120px; line-height:120px; text-align:center; background: #000; color:#fff; font-size:15px; border:solid 1px blue" @click="isClickAttack">属性攻击</div> -->
    <iframe ref="showIframe" id="showIframeBox" @load="getXmlData" frameborder=0 width="100%"  name="showHere" height="100%" scrolling="no" border="0" src="../../../static/webapp/infoShow.html"></iframe>
  </div>
</template>
<script>
  import {common_getRouteHref} from '../../utils/vm_methods_common'
  import {catchAxiosError} from '../../utils/common'
  import types from '../../store/global/types'
  import {AUTH_API_BASE_URL} from '../../utils/constants'
  import {mapGetters} from 'vuex'
  const attackDatas = {"ot01_ld":0,"ot02_ld":0,"ot03_ld":0,"ot04_ld":0,"ot05_ld":0,"pu01_ld":0,"pu02_ld":0,"pu03_ld":0,"pu04_ld":0,"pu05_ld":0,"su01_ld":0,"su02_ld":0,"su03_ld":0,"su04_ld":0,"su05_ld":0,"su06_ld":0,"xu01_ld":0,"xu02_ld":0,"xu03_ld":0,"xu04_ld":0,"esdba01_ld":0,"esdba02_ld":0,"esdba03_ld":0,"esdba04_ld":0,"esdba05_ld":0,"esfup1101_ld":0,"esfup1102_ld":0,"esfup1001_ld":0,"osm01_ld":0,"as62001_ld":0,"as62002_ld":0,"as62003_ld":0,"as62004_ld":0,"aa101_close":0,"aa101_open":0,"ap101_stop":0,"ap101_start":0
  }
  export default {
    name: 'loginHome',
    data(){
      return {
        boxLoading: true,
        data:'这是区域展示页面',
        graphsDatas: null,
        bodyHeight:800,
        xmlListDatas:null,
        xmlTargetDataId:null, //供显示的图库信息ID
        allAttackDatas:attackDatas,
        clearTime:null,
        infoFromCome:this.$route.query.onFrom, //来源
        typeModel:this.$route.query.addType, //查看模板类型
        userName:this.$route.query.un,//用户信息
        hasChangePerm:this.$route.query.has_change_perm, //是否有编辑权限
      }
    },
    props:['xmlCurrentId'],
    computed: {
      ...mapGetters({
          Gx_NameMap: types.GETTERS.getNameMap
      })
    },
    
    mounted(){
      let vm = this
      vm.$watch('xmlCurrentId', ()=>{
        vm.boxLoading = true
        let iframe = vm.$refs.showIframe
         vm.getXmlData()
         iframe.contentWindow.location.reload(true)
         
      })
    },
    created(){
      let vm = this
      vm.getWindowOffsetHeight()
    },
    methods:{
      common_getRouteHref,
      catchAxiosError,
      getWindowOffsetHeight(){
        let vm = this
        vm.bodyHeight = window.innerHeight - 100
      },

      // isClickAttack(){
      //   let vm = this
      //   let url = '/mx_graph/execution_operation'
      //   let params = vm.$_.map(vm.allAttackDatas, (val, key)=>{return val})
      //   vm.$axios.post(url, params).then(response=>{
      //     if(response.status == 200){
      //       vm.$message.success('发送成功')
      //     }
      //   }).catch(response => {
      //     console.log(response)
      //   })
      // },
      
      //获取信息传给iframe
      getXmlData(){
        let vm = this
        let domain ='http://' + location.host
        let url = null
       if(vm.typeModel != 'undefined' && vm.typeModel == 'PRIMITIVE'){ //图元模板信息详情
        url = '/mx_graph/mx_primitive/' + vm.xmlCurrentId +　'/'
       }else{
        url = '/mx/' + vm.xmlCurrentId +　'/'
       }
       // console.log(vm.xmlCurrentId, 'ddd')
        vm.boxLoading = true
        vm.$axios.get(url).then(response=>{
          if(response.status == 200){
            if(response.data.detail != undefined){
              vm.$message.error(response.data.detail)
              return
            }
              let iframe = vm.$refs.showIframe
              vm.graphsDatas = response.data
              let xmlData = response.data 
              let dataObject = {... xmlData, 'attacks': vm.allAttackDatas, 'onFrom': vm.infoFromCome, 'creator': vm.userName, 'addType': vm.typeModel, 'has_change_perm':vm.hasChangePerm}
              vm.$emit('currentid', xmlData.id)
              iframe.contentWindow.postMessage(dataObject, domain);

              if(xmlData){
                iframe.setAttribute('height', '100%')
                if (iframe) {
                  let iframeWin = iframe.contentWindow || iframe.contentDocument.parentWindow;
                 if (iframeWin.document.body) {
                  vm.clearTime = setTimeout(function(){
                      let fHeight = iframeWin.document.getElementsByTagName('svg')[0].height.baseVal.value
                      let fWidth = iframeWin.document.getElementsByTagName('svg')[0].width.baseVal.value
                      iframe.setAttribute('height', fHeight)
                      iframe.setAttribute('width', fWidth)
                    },500)
                  }
                }

              }
              vm.boxLoading = false
          }else{
            vm.$message.error('图表信息有误。')
          }
        })
        
      },

      

    },
    destroyed(){
      let vm = this
      clearTimeout(vm.clearTime)
    },
   
  }
</script>

<style>
  .el-loading-mask{
    background-color: transparent;
  }
</style>