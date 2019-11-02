<template>
  <div style="height: 100%;" v-loading="boxLoading" element-loading-text="图表加载中">
    <iframe ref="showIframe" id="showIframeBox" @load="getXmlData" frameborder=0 width="100%"  name="showHere" height="100%" scrolling="no" border="0" src="../../../static/webapp/testinfo.html"></iframe>
  </div>
</template>
<script>
  import * as echarts from "echarts";
  import {common_getRouteHref} from '../../utils/vm_methods_common'
  import {catchAxiosError} from '../../utils/common'
  import types from '../../store/global/types'
  import {API_BASE_URL} from '../../utils/constants'
  import {mapGetters} from 'vuex'
  export default {
    name: 'loginHome',
    data(){
       Object.assign(this, {
          API_BASE_URL,
        })
      return {
        bodyHeight:null,
        isUpload:true,
        boxLoading:false,
        timer:null,
      }
    },

    mounted(){
      let vm = this
    },
    created(){
      let vm = this
    },
    props:['xmlData'],
    methods:{
      getXmlData(){
        let vm = this
          let iframe = vm.$refs.showIframe
          let domain ='http://' + location.host
          let data = {
          	'xml': vm.xmlData
          }
          iframe.contentWindow.postMessage(data, domain);
          iframe.setAttribute('height', '100%')
          vm.boxLoading = true
          // console.log(vm.xmlData, 'xmlData')
          if (iframe) {
            let iframeWin = iframe.contentWindow || iframe.contentDocument.parentWindow;
            if (iframeWin.document.body) {
              vm.time = setTimeout(function(){
                let fHeight = iframeWin.document.getElementsByTagName('svg')[0].height.baseVal.value
                let fWidth = iframeWin.document.getElementsByTagName('svg')[0].width.baseVal.value
                iframe.setAttribute('height', fHeight)
                iframe.setAttribute('width', fWidth)
              },1000)
              vm.boxLoading = false
            }

          }

      },

 
    },
    beforeDestroy () {
       if(this.timer) {
           clearInterval(this.timer);//在vue实例销毁钱，清除我们的定时器
       }
    }
  }

</script>