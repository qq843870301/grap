<template>
  <div style="background: #fff; height: 100%; min-width:1200px; margin: 0 auto;">
    <!-- class="graph-body-bg" -->
     <header-info :listStyle="false">
       <a v-if="infoFromCome == 'manager' && hasChangePerm == 'True'" :href="currentUrl" target="_blank" class="go-on-seeMore"><el-button size="mini">修改图表</el-button></a>  
     </header-info>
     
     <div class="graph-container-info">
       <div class="graph-content-frame" v-if="infoFromCome != 'parentInfo'">
         <div class="graph-name-title">
           <i class="el-icon-menu"></i>
          <span slot="title">树结构图</span>
         </div>
         <el-tabs type="border-card" v-model="activeName">
            <el-tab-pane :name="!isAllTreePage?'first':'second'" label="总目录树">
              <el-input
                placeholder="输入关键字进行过滤"
                size="small "
                v-model="filterAllText" class="garph-input-text">
              </el-input>
              <!-- <div class="loadingDiv" v-if="$_.isEmpty(treeDatas)" v-loading="dataLoading"
                element-loading-text="数据加载中"
                element-loading-spinner="el-icon-loading"></div> -->
                <!-- v-if="!$_.isEmpty(treeDatas)" -->
                <!-- {{treeDatas|log}} -->
              <el-tree
                v-loading="dataLoading"
                element-loading-text="数据加载中"
                element-loading-spinner="el-icon-loading"
                class="graph-filter-tree"
                :data="allTreesDatas"
                :props="defaultAllProps"
                default-expand-all
                :filter-node-method="filterNode"
                :render-content="renderContent"
                ref="tree3">
              </span>
              </el-tree>
            </el-tab-pane>
            <el-tab-pane v-if="!isAllTreePage" name="second" label="资产目录树">
              <el-input
                placeholder="输入关键字进行过滤"
                size="small "
                v-model="filterText" class="garph-input-text">
              </el-input>
              <!-- <div class="loadingDiv" v-if="$_.isEmpty(treeDatas)" v-loading="dataLoading"
                element-loading-text="数据加载中"
                element-loading-spinner="el-icon-loading"></div> -->
                <!-- v-if="!$_.isEmpty(treeDatas)" -->
                <!-- {{treeDatas|log}} -->
              <el-tree
                v-loading="dataLoading"
                element-loading-text="数据加载中"
                element-loading-spinner="el-icon-loading"
                class="graph-filter-tree"
                :data="treeDatas"
                :props="defaultProps"
                default-expand-all
                :filter-node-method="filterNode"
                :render-content="renderContent"
                ref="tree2">
              </span>
              </el-tree>
            </el-tab-pane>
         </el-tabs>
         
       </div>
       <div class="graph-content graph-content-body" style="padding:0; background: #fff;">
        <ShowGraphDom :xmlCurrentId="curXmlId?curXmlId:xmlTargetDataId"></ShowGraphDom>
       </div>
     </div>
     <!-- 绑定子图 begin -->
     <el-dialog title="绑定子图" width="40%" :visible.sync="isBangChildVisible">
      <ul class="nodeUlStyle child-node-ul">
        <li><a @click="urlFn()" class="child-see-a" target="_blank">添加</a></li>
        <li v-for="childXml in childXmlDatas">
          <span>{{childXml.name}}</span>
          <router-link class="child-see-a" target="_blank" :to="{path: '/info/' + childXml.id, query:{'onFrom':infoFromCome, 'un':userName, 'addType':typeModel}}">查看</router-link>
          <a class="child-see-a" @click="addRelation(childXml, currentXmlNodeData)">绑定</a>
          <!-- <a class="child-see-a" @click="deleteRelation(childXml)">解绑</a> -->
        </li>
      </ul>
    </el-dialog>
     
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
        activeName:'second',
        dataLoading:true,
        targetId: this.$route.params.id, //电厂, 图表 id
        infoFromCome:this.$route.query.onFrom, //来源
        userName:this.$route.query.un, //用户信息
        typeModel:this.$route.query.addType, //用户信息
        hasChangePerm:this.$route.query.has_change_perm, //是否有编辑权限
        isAllTreePath:this.$route.path, //来源部目录树
        isAllTreePage:false,
        bodyHeight:null,
        chartsData:[
         [6,60, 1, 34, 20, 30, 60],
         [6,30, 2, 3, 25, 40, 45],
         [6,90, 8, 43, 35, 40, 75]
        ],
        chartDatasFour:[6,44, 2, 38, 20, 43, 23],

        titleName:['全局风险态势', '办公室分区', '测试区' ],

        resDatas:null,
        globalRiskSituation:null, //全局风险态势
        officePartition:null, //办公室分区
        testAreaData:null, //测试区域
        nums:null,
        addNum:null,
        currentUrl:null,
        xmlTargetDataId:null,
        curXmlId:null,
        filterText: '',
        filterAllText:'',
        treeDatas: [],
        defaultProps: {
          children: 'children',
          label: 'label'
        },
        defaultAllProps: {
          children: 'children',
          label: 'label'
        },
        _intervalRefresh:null, 
        isBangChildVisible:false, 
        childXmlDatas:null, //获取子可绑定的图集
        currentXmlNodeData:null, //当前节点图表数据
        allTreesDatas:[], //总目录树结构
      }
    },

    mounted(){
      let vm = this
     // vm.getNum()
     // vm.getAllDatas()

     // this.timer = setInterval(()=>{
     //    vm.getNum()
     //    vm.getAllDatas()
     //  },10000);
    },
    created(){
      let vm = this
      if(vm.isAllTreePath == '/allTree'){
        vm.isAllTreePage = true
      }
      if(vm.infoFromCome == 'map'){ //首页访问入口 
        vm.getXmlListDatas()
      }else if (vm.infoFromCome == 'list' || vm.infoFromCome == 'manager' || vm.infoFromCome == 'parentInfo' || vm.isAllTreePage){
        vm.xmlTargetDataId = vm.targetId
        vm.currentUrl = 'http://' + window.location.host +  '/static/webapp/index.html?currentId=' + vm.xmlTargetDataId + '&un=' + vm.userName + '&addType=' + vm.typeModel + '&has_change_perm=' + vm.hasChangePerm + '&onFrom=' + vm.infoFromCome
        // clearInterval(vm._intervalRefresh)
        vm._intervalRefresh = null
        // vm._intervalRefresh = setInterval(()=>{
          vm.getAllTreesDatas()
          vm.getTreeNodeData()
        // }, 5000) //试卷信息定时刷新  
      }
    },
    watch: {
      filterText(val) {
        this.$refs.tree2.filter(val);
      },
      filterAllText(val){
       this.$refs.tree3.filter(val); 
      }
    },
    methods:{
      common_getRouteHref,
      catchAxiosError,
      getXmlListDatas(){
        let vm = this
        let url = '/mx/'
        vm.dataLoading = true
        vm.$axios.get(url).then(response=>{
          if(response.status == 200){
            vm.xmlListDatas = response.data.results
            let infoId = vm.$_.filter(vm.xmlListDatas, item=>{return item.electric_station_id == vm.targetId})
            // console.log(infoId, 'infoId')
            vm.xmlTargetDataId = !vm.$_.isEmpty(infoId) ? infoId[0].id : vm.targetId

            vm.currentUrl = 'http://' + window.location.host +  '/static/webapp/index.html?currentId=' + vm.xmlTargetDataId +　'&onFrom=' + vm.infoFromCome + '&un=' + vm.userName

            // clearInterval(vm._intervalRefresh)
            vm._intervalRefresh = null
            // vm._intervalRefresh = setInterval(()=>{
              vm.getTreeNodeData()
            // }, 10000) //信息定时刷新  
          }
        }).catch(response =>{
          console.log(response, 'res')
          vm.$message.error('xml 列表信息有误。')
        })
      },

      
      /**
       * [getTreeStructures 树结构递归数据函数]
       * @param  {[type]} datas [数据]
       * @return {[type]}       [description]
       */
      getTreeStructures(datas){
       let node = []
        for (let i in datas.attribute_res) {
            let node_child = datas.attribute_res[i];
            let newNode = {};
            newNode.attribute_id = i
            newNode.id = node_child.id;
            if(node_child.name ==  node_child.attribute_name){
              newNode.label = node_child.name
            }else{
              newNode.label = node_child.name + '【' + node_child.attribute_name + '】';  
            }
            
            newNode.children = this.getTreeStructures(node_child);
            node.push(newNode);
        }
        return node;
      },
      /**
       * [getallTreeStructures 树结构递归数据函数]
       * @param  {[type]} datas [数据]
       * @return {[type]}       [description]
       */
      getAllTreeStructures(datas){
       let node = []
        for (let i in datas.tree_res) {
            let node_child = datas.tree_res[i];
            let newNode = {};
            newNode.id = node_child.id;
            newNode.label = node_child.name;
            newNode.isAllTree = true
            // if(node_child.name ==  node_child.name){
            //   newNode.label = node_child.name
            // }else{
            //   newNode.label = node_child.name + '【' + node_child.attribute_name + '】';  
            // }
            
            newNode.children = this.getAllTreeStructures(node_child);
            node.push(newNode);
        }
        // console.log(node, 'node')
        return node;
      },
      /**
       * [getTreeNodeData 树结构数据请求]
       * @return {[type]} [description]
       */
      getTreeNodeData(){
        let vm = this
        let url = 'mx/graph_tree_structure'
        let params = {
          graph_id: vm.xmlTargetDataId
        }
        vm.$axios.get(url, {params}).then(response=>{
          if(response.status == 200){
            let tree_Datas = response.data
            let first_child_name = tree_Datas.name.split('.')[0]
            let tree_Data = {
              id: tree_Datas.id,
              label: first_child_name,
              children: []
            }
            tree_Data.children = vm.getTreeStructures(tree_Datas)
            if(!vm.$_.isEmpty(tree_Data.children) && !vm.$_.isEqual(vm.treeDatas[0], tree_Data)){
              vm.treeDatas = [tree_Data]
            }else{
              vm.treeDatas = []
            }
            vm.dataLoading = false
          }
        }).catch(response=>{
        })
      },

      getCurrentNodeData(data, node){
        let vm = this
        // console.log(data, 'data')
        if(data.id == null){
          vm.$message.error('暂无资产信息！')
          return
        }else{
          vm.curXmlId = data.id
        }
        
        // vm.$router.push({path: '/info/' + data.id, query:{'onFrom':'list'}})
      },
      filterNode(value, data) {
        if (!value) return true;
        return data.label.indexOf(value) !== -1;
      },
      
      getAllDatas(){
        let vm = this
        let url = "stats/"
        vm.$axios.get(url).then(response =>{
          if(response.status == 200){
            vm.resDatas = response.data 
            vm.$set(vm.resDatas, response.data)
          }
        }).catch(response=>{
        })
      },

      getNum(){
        let vm = this
        let url = 'history/'
         vm.$axios.get(url).then(response =>{
          if(response.status == 200){
            vm.nums = response.data
            if(vm.nums){
              vm.addNum = vm.$_.sum(vm.$_.map(vm.nums, list=>{return list.count}))
              // console.log(vm.addNum, 'va')
              vm.getJingGaoFengBu()
            }
          }
        }).catch(response=>{
        })
      },

      getJingGaoFengBu(){
        let vm = this
        let showEchartDom = echarts.init(vm.$refs.jinggaofenbu)

        let countData = vm.$_.map(vm.nums, item=>{
          return item.count
        })
        let xData = vm.$_.map(vm.nums, item=>{
          return item.tag
        })
        let options = {
              tooltip: {
                  trigger: 'axis',
                  axisPointer: {
                      type: 'cross',
                      label: {
                          backgroundColor: '#5dcaee'
                      },
                      textStyle:{
                        color: '#51d267'
                      }
                  }
              },
               grid: {
                  left: '15%',
                  right: '5%',
                  bottom: '18%',
                  top:'5%',
                  containLabel: false
              },
              // toolbox: {
              //     feature: {
              //         dataView: {show: true, readOnly: false},
              //         magicType: {show: true, type: ['line', 'bar']},
              //         restore: {show: true},
              //         saveAsImage: {show: true}
              //     }
              // },
              // legend: {
              //     data:['危急','类型二','类型三', '类型四', '类型五']
              // },
              xAxis: [
                  {
                      type: 'category',
                      data:xData,
                      axisPointer: {
                          type: 'shadow'
                      },
                      axisLine:{
                        lineStyle:{
                          color:'#fff',
                          width:1
                        }
                      },
                  }
              ],
              yAxis: [
                  {
                      type: 'value',
                      name: '数量',
                      min: 0,
                      max: 3000,
                      interval:1000,
                      axisLabel: {
                          formatter: '{value}'
                      },
                      splitLine:{
                        lineStyle:{
                          color:'#09203f'
                        },
                      },

                      axisLine: {
                        show: false,
                          lineStyle: {
                              color: '#fff',
                              width:1,
                          }
                      },
                  }
              ],
              series: [
                  {
                      name:'数量',
                      type:'bar',
                      barWidth:20,
                       markLine:{
                        lineStyle:{
                          color:'#5dcaee'
                        }
                      },
                      itemStyle:{
                        normal: {
                            color: new echarts.graphic.LinearGradient(
                                0, 0, 0, 1,
                                [
                                    {offset: 0, color: '#83bff6'},
                                    {offset: 0.5, color: '#188df0'},
                                    {offset: 1, color: '#188df0'}
                                ]
                            )
                        },
                        emphasis: {
                            color: new echarts.graphic.LinearGradient(
                                0, 0, 0, 1,
                                [
                                    {offset: 0, color: '#2378f7'},
                                    {offset: 0.7, color: '#2378f7'},
                                    {offset: 1, color: '#83bff6'}
                                ]
                            )
                        }
                      },
                      data:countData
                  },
                 
              ]
          };
          showEchartDom.setOption(options)
      },

      /**
       * [getXmlGraphChildData description]
       * @param  {[type]} nodeData [description]
       * @return {[type]}          [description]
       */
      getXmlGraphChildData(nodeData){
        let vm = this
        let url = '/mx/get_valid_subgraph?graph_id=' + vm.xmlTargetDataId //+ '&attribute_id=' + nodeData.id
        vm.$axios.get(url).then(response=>{
          if(response.status = 200){
            if(response.data.details != undefined){
              vm.$message.error(response.data.details)
            }else{
              vm.childXmlDatas = response.data  
            }
            
          }
        })
      },
      urlFn(){
        let vm = this
        window.open('http://' + window.location.host +  '/static/webapp/index.html?currentId=' + vm.currentXmlNodeData.id + '&cellId=null' + '&onFrom=' + vm.infoFromCome + '&un=' + vm.userName + '&addType=' + vm.typeModel)
      },
      /**
       * [addRelation 绑定事件]
       * @param {[type]} nodeData       [当前子图节点数据]
       * @param {[type]} parentNodeData [树父结点数据]
       */
      addRelation(nodeData, parentNodeData ){
        let vm = this
        let url = '/mx/bind_subgraph'
        var params = {
          graph_id: parentNodeData.id, 
          // attribute_id: '',
          subordinate_id: nodeData.id,
          attribute_name : nodeData.name,
          creator: vm.userName
        }
        vm.$axios.post(url, params).then(response=>{
          if(response.status == 200){
            if(response.data.details != undefined){
              vm.$message.error(response.data.details[0])
            }else{
              vm.$message.success('绑定成功')
              vm.getTreeNodeData()
              vm.isBangChildVisible = false  
            }
            
          }
        })

      },
      /**
       * [deleteRelation 解绑定事件 ]
       * @param  {[type]} datas [description]
       * @return {[type]}       [description]
       */
      deleteRelation(node, datas){
        let vm = this
        let url = '/mx/unbind_subgraph'
        let parentNode = node.parent.data
        console.log(parentNode, datas)
        var params = {
            "graph_id": parentNode.id,
            "attribute_id": datas.attribute_id != datas.id? datas.attribute_id:null,
            "subordinate_id": datas.id,
            "creator": vm.userName
        }
        vm.$axios.post(url, params).then(response=>{
          if(response.status == 200){
            if(response.data.details != undefined){
              vm.$message.error(response.data.details[0])
            }else{
              vm.$message.success('解绑成功！')
              vm.getTreeNodeData()
            }
          }
        })
      },
      /**
       * [appendData 树绑定子图事件]
       * @param  {[type]} data [当前节点树数据]
       * @return {[type]}      [description]
       */
      appendData(data) {
        let vm = this
        vm.currentXmlNodeData = data
        vm.getXmlGraphChildData(data)
        vm.isBangChildVisible = true
        // console.log(data, 'data')
      },

      renderContent(h, { node, data, store }) {
        let vm = this
        if(vm.hasChangePerm == 'True' && vm.infoFromCome =='manager'){
          if(node.level == 1){
            if(data.isAllTree == undefined){
              return (
                <span class="custom-tree-node">
                  <span>{node.label}</span>
                  <span style="padding-left:15px">
                    <el-button size="mini" type="text" on-click={ () => this.getCurrentNodeData(data) }>查看</el-button>
                    <el-button size="mini" type="text" on-click={ () => this.appendData(data) }>绑定子图</el-button>
                  </span>
                </span>);
            }else{
              return (
                <span class="custom-tree-node">
                  <span>{node.label}</span>
                  <span style="padding-left:15px">
                    <el-button size="mini" type="text" on-click={ () => this.getCurrentNodeData(data) }>查看</el-button>
                  </span>
                </span>);
            }
              
           }else{
            if(data.isAllTree == undefined){
              return (
              <span class="custom-tree-node">
                <span>{node.label}</span>
                <span style="padding-left:15px">
                  <el-button size="mini" type="text" on-click={ () => this.getCurrentNodeData(data) }>查看</el-button>
                  <el-button size="mini" type="text" on-click={ () => this.appendData(data) }>绑定子图</el-button>
                  <el-button size="mini" type="text" on-click={ () => this.deleteRelation(node, data) }>解绑</el-button>
                </span>
              </span>);
            }else{
              return (
                <span class="custom-tree-node">
                  <span>{node.label}</span>
                  <span style="padding-left:15px">
                    <el-button size="mini" type="text" on-click={ () => this.getCurrentNodeData(data) }>查看</el-button>
                  </span>
                </span>);
            }
           }
        }else{
           if(node.level == 1){
              return (
              <span class="custom-tree-node">
                <span>{node.label}</span>
                <span style="padding-left:15px">
                  <el-button size="mini" type="text" on-click={ () => this.getCurrentNodeData(data) }>查看</el-button>
                </span>
              </span>);
           }else{
              return (
              <span class="custom-tree-node">
                <span>{node.label}</span>
                <span style="padding-left:15px">
                  <el-button size="mini" type="text" on-click={ () => this.getCurrentNodeData(data) }>查看</el-button>
                </span>
              </span>);
           }
        }
      },

      getAllTreesDatas(){
        let vm = this
        let url = '/mx_graph/graph_tree/all_graph_tree/'
        vm.$axios.get(url).then(response=>{
          if(response.status == 200){
            let all_tree_datas = response.data
            let first_child_name = all_tree_datas.name.split('.')[0]
            let tree_Data = {
              id: all_tree_datas.id,
              label: first_child_name,
              isAllTree: true,
              children: []
            }
            tree_Data.children = vm.getAllTreeStructures(all_tree_datas)
            vm.xmlTargetDataId = all_tree_datas.id
            if(!vm.$_.isEmpty(tree_Data.children) && !vm.$_.isEqual(vm.allTreesDatas[0], tree_Data)){
              vm.allTreesDatas = [tree_Data]
            }else{
              vm.allTreesDatas = []
            }
            vm.dataLoading = false
          }
        })
      },

 
    },

    components:{
      Dates:Dates,
      ShowInfoEchart:ShowInfoEchart,
      TrendEchart:TrendEchart,
      ShowGraphDom:Show_graph_dom,
      HeaderInfo:HeaderInfo,
    },
    destroyed() {
      clearInterval(this._intervalRefresh)
      this._intervalRefresh = null
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

