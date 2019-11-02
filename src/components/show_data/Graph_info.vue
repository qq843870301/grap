<template>
  <div  v-loading="boxLoading" element-loading-text="图表加载中" >
    <div style="position:fixed; right:0; top:0px;width: 120px; height: 120px; line-height:120px; text-align:center; background: #000; color:#fff; font-size:15px; border:solid 1px blue" @click="isClickAttack">属性攻击</div>
    <iframe ref="showIframe" @load="getXmlData" frameborder=0 width="100%" :height="bodyHeight + 'px'" name="showHere" scrolling=auto src="../../../static/webapp/testinfo.html"></iframe>
  </div>
</template>
<script>
  import {common_getRouteHref} from '../../utils/vm_methods_common'
  import {catchAxiosError} from '../../utils/common'
  import types from '../../store/global/types'
  import {AUTH_API_BASE_URL} from '../../utils/constants'
  import {mapGetters} from 'vuex'
  const attackDatas = {"ot01_ld":0,"ot02_ld":0,"ot03_ld":0,"ot04_ld":0,"ot05_ld":0,"pu01_ld":0,"pu02_ld":0,"pu03_ld":0,"pu04_ld":0,"pu05_ld":0,"su01_ld":0,"su02_ld":0,"su03_ld":0,"su04_ld":0,"su05_ld":0,"su06_ld":0,"xu01_ld":0,"xu02_ld":0,"xu03_ld":0,"xu04_ld":0,"esdba01_ld":0,"esdba02_ld":0,"esdba03_ld":0,"esdba04_ld":0,"esdba05_ld":0,"esfup1101_ld":0,"esfup1102_ld":0,"esfup1001_ld":0,"osm01_ld":0,"as62001_ld":0,"as62002_ld":0,"as62003_ld":0,"as62004_ld":0,"aa101_close":0,"aa101_open":0,"ap101_stop":0,"ap101_start":1
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
        targetId: this.$route.params.id, //电厂id
        xmlTargetDataId:null, //供显示的图库信息ID
        allAttackDatas:attackDatas,
      }
    },
    computed: {
      ...mapGetters({
          Gx_NameMap: types.GETTERS.getNameMap
      })
    },
    
    mounted(){
      let vm = this
      // vm.getXmlData()
      
      // window.onload = function(){
      //   vm.getXmlData()
      // }
    },
    created(){
      let vm = this
      vm.getWindowOffsetHeight()
      vm.getXmlListDatas()
    },
    methods:{
      common_getRouteHref,
      catchAxiosError,
      getWindowOffsetHeight(){
        let vm = this
        vm.bodyHeight = window.innerHeight - 100
      },

      isClickAttack(){
        let vm = this
        let url = '/mx_graph/execution_operation'
        let params = vm.$_.map(vm.allAttackDatas, (val, key)=>{return val})
        vm.$axios.post(url, params).then(response=>{
          if(response.status == 200){
            vm.$message.success('发送成功')
          }
        }).catch(response => {
          console.log(response)
        })
      },
      getXmlListDatas(){
        let vm = this
        let url = '/mx/'
        vm.$axios.get(url).then(response=>{
          if(response.status == 200){
            vm.xmlListDatas = response.data
            let infoId = vm.$_.filter(vm.xmlListDatas, item=>{return item.electric_station_id == vm.targetId})[0].id
            vm.xmlTargetDataId = infoId != null ? infoId : vm.xmlListDatas[0].id
          }
        }).catch(response=>{
          console.log(response, 'res')
          vm.$message.error('xml 列表信息有误。')
        })
      },
      //获取信息传给iframe
      getXmlData(){
        let vm = this
        let domain ='http://' + location.host //'http://localhost:801'
        let iframe = vm.$refs.showIframe
        if (iframe) {
          var iframeWin = iframe.contentWindow || iframe.contentDocument.parentWindow;
        if (iframeWin.document.body) {
            iframe.height = iframeWin.document.documentElement.scrollHeight || iframeWin.document.body.scrollHeight;
          }
        }
        // vm.xmlTargetDataId
        // let xmlTargetDataId = 'eb10a321-eac1-4997-899e-86fb5833c519'
        let url = '/mx/' + vm.xmlTargetDataId +　'/'
        vm.$axios.get(url).then(response=>{
          if(response.status == 200){
              vm.graphsDatas = response.data
              let xmlData = response.data.xml //vm.$_.split(response.data.xml, "'")[1]
              iframe.contentWindow.postMessage(xmlData, domain);
              iframe.contentWindow.vm
              vm.boxLoading = false
          }else{
            vm.$message.error('图表信息有误。')
          }
        })
        
      },

    },
   
  }
</script>

<style>
  .el-loading-mask{
    background-color: transparent;
  }
</style>