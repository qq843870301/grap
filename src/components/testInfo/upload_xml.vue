<template>
  <div style="width:800; text-align: center; padding-top:120px; margin: 0 auto;">
    <!-- class="graph-body-bg" -->
        <!-- :auto-upload="false" -->
      <template>
        <el-upload
          class="upload-demo editor-upload-demo"
          drag
          :action="API_BASE_URL + '/mx_graph/xml_graph_display'"
          :on-before="beforeUpload"
          :on-success="successUpload"
          accept=".xml"
          multiple>
          <i class="el-icon-upload"></i>
          <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
          <div class="el-upload__tip" slot="tip">只能上传xml文件，且不超过500kb</div>
        </el-upload>
      </template>
     
  </div>
</template>
<script>
  import * as echarts from "echarts";
  import {common_getRouteHref} from '../../utils/vm_methods_common'
  import {catchAxiosError, setStorageDataAndEncode} from '../../utils/common'
  import types from '../../store/global/types'
  import {API_BASE_URL} from '../../utils/constants'
  import {mapGetters} from 'vuex'
  import HeaderInfo from '../_common/Header_info.vue'
  import showIframe from './Show_ifram.vue'

  export default {
    name: 'loginHome',
    data(){
       Object.assign(this, {
          API_BASE_URL,
        })
      return {
        bodyHeight:null,
        isUpload:true,
        fileList: [],
        uploadXmlData:null,
        boxLoading:false,
      }
    },

    mounted(){
      let vm = this
    },
    created(){
      let vm = this
       
    },
    methods:{
      setStorageDataAndEncode,
      common_getRouteHref,
      catchAxiosError,

      // 加载xml文档
       loadXML (xmlFile) {
          var xmlDoc;
          if (window.ActiveXObject) {
              xmlDoc = new ActiveXObject('Microsoft.XMLDOM');//IE浏览器
              xmlDoc.async = false;
              xmlDoc.load(xmlFile);
          }
          else if (navigator.userAgent.indexOf("Firefox")>0) { 
          //火狐浏览器
              xmlDoc = document.implementation.createDocument('', '', null);
              xmlDoc.load(xmlFile);
          }
          else{ //谷歌浏览器
            var xmlhttp = new window.XMLHttpRequest();
              xmlhttp.open("GET", xmlFile,false);
              xmlhttp.send(null);
              console.log(xmlhttp, xmlFile, 'xmlFile')
              if(xmlhttp.readyState == 4){
               xmlDoc = xmlhttp.responseText;
              } 
          }
          return xmlDoc;
      },

        // 首先对xml对象进行判断
      checkXMLDocObj (xmlFile) {
          var xmlDoc = this.loadXML(xmlFile);
          if (xmlDoc == null) {
              alert('您的浏览器不支持xml文件读取,于是本页面禁止您的操作,推荐使用IE5.0以上可以解决此问题!');
          }
          return xmlDoc;
      },

      beforeUpload(file, fileList){
        let vm = this
        // let xmlDdata = vm.checkXMLDocObj(file.url)
        let datas = {
          'name': file.name,
          'url': file.url
        }
        vm.fileList.push(datas)
      },

      successUpload(response, file, fileList){
        let vm = this
        vm.uploadXmlData = vm.$_.trim(response.replace(/\n/g, '').replace(/\\/g, ''))
        vm.isUpload = false
        vm.setStorageDataAndEncode('xmlDatas', {'xml': vm.uploadXmlData})
        window.location.href= 'http://' + window.location.host +  '/static/webapp/testinfo.html'
      },

 
    },
    components:{
      HeaderInfo:HeaderInfo,
      showIframe:showIframe,
    },
     beforeDestroy () {
       // if(this.timer) {
       //     clearInterval(this.timer);//在vue实例销毁钱，清除我们的定时器
       // }
    }
  }

</script>
<style lang='scss'>
  @import '../../sass/animation.scss'
</style>

<style lang="css" scoped="scoped">
 body, html{
    height:100%;
  }
    .geDiagramContainer{
      border:none;
      height: 100%;
    }
    .nodeUlStyle{
      padding:0;
    }
    .nodeUlStyle li{
        border-bottom: solid 1px #d3cfcf;
        overflow: hidden;
        padding:6px 8px;
    }
    .nodeUlStyle li:last-child{
      border-bottom: none;
    }
    .nodeUlStyle li span{
      float:left;
      line-height: 25px;
      font-size:14px;
      color:#fff;
    }
    .nodeUlStyle li span:first-child{
      width:25%;
      max-width:200px;
    }
    .nodeUlStyle li span:nth-child(2){
      padding-left:5px;
      width:71%;
      max-width:450px;
    }

    .attactButStyle{
      background: #f4f4f5;
      border:none;
      padding:5px 10px;
      /*height: 20px;*/
      line-height: 1;
      border-radius: 3px;
      margin:0 0 0 10px;
    }
    .closeBtn{
      display: inline-block;
      position: absolute;
      right:8px;
      top:8px;
      width:12px;
      height: 12px;
      /*background: url('images/close.png') no-repeat center center;*/
      z-index:6;
    }
  </style>

</style>

