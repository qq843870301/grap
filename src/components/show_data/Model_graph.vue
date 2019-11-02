<template>
	<div class="graph-body-bg graph-body-no-big">
		<header-info :listStyle="true"/>
		<div class="graph-content-box">
			<p style="text-align: right; padding:0 0 12px;">
				<el-select style="width:13%" size="small" v-model="selectValueKey" clearable placeholder="请选择">
			    <el-option
			      v-for="item in selectOptions"
			      :key="item.value"
			      :label="item.label"
			      :value="item.value">
			    </el-option>
			  </el-select>
				<el-input
				  :disabled="selectValueKey == 'all'"
				  placeholder="请输入内容"
				  v-model="searchCellVal"
				  size="small"
				  style="width:30%"
				  clearable>
				</el-input>
			</p>
			<table class="model-table-list">
				<thead>
					<tr>
						<th width="20%">实例名称</th>
						<th width="20%">属性名称</th>
						<th width="20%">属性值</th>
						<th width="20%">更新日期</th>
						<th width="20%">操作</th>
					</tr>
				</thead>
				<tbody>
					<tr v-if="!$_.isEmpty(xmlListDatas)" v-for="items in xmlListDatas">
						<td>{{getFilterTxtXml(items.name)}}</td>
						<td class="colspanTd" colspan="4">
							<table>
								<template v-for="(cellVal, index) in items.xml_object">
									<tr v-for="(val, keys) in cellVal" v-if="getXmlNewObject(keys)" :class="{'cell-style-bg':index%2 == 0 && items.xml_object.length > 1}">
										<td width="25%">{{filterStringTxt(keys)}}</td>
										<td width="25%">{{val}}</td>
										<td width="25%">{{formatUnixtimestamp(items.update_time)}}</td>
										<td width="25%" :rowspan="getRowSpan(cellVal,keys)" v-if="getRowSpan(cellVal,keys) > 0">
											<router-link tag="a" class="graphSeeBtn" target="_blank" :to="{path: '/modelInfo/' + items.modelTypeId, query:{'onFrom':infoFromCome, 'un':userName, 'has_change_perm':hasChangePerm, 'addType':'PRIMITIVE'}}">查看实例</router-link>
								      	<template v-if="infoFromCome == 'manager' && hasChangePerm == 'True'">
									      	<!-- 单图元，在当前位置编辑 -->
									        <el-button type="text" @click="editCell(cellVal, items.name, items.xml_object)" size="small">编辑属性</el-button>
									        <!-- 多图元 属性时 去编辑 编辑-->
									        <!-- <el-button v-if="items.xml_object.length > 1" type="text" @click="editorFun(scope.row)" size="small">编辑属性</el-button> -->
								        </template>
										</td>
									</tr>
								</template>
							</table>
						</td>
					</tr>
					<tr v-if="$_.isEmpty(xmlListDatas)">
						<td colspan="5">
							<div class="dem-no-Data"><img src="../../assets/nodata.png" width="85" height="85" alt=""><br>暂无数据！</div>
						</td>
					</tr>
				</tbody>
			</table>
			
			  <Page ref="pagination"></Page>
			  <!-- 图元编辑 begin -->
			  <el-dialog title="图元属性编辑" :visible.sync="showDialogEdit" width="35%" :show-close="false">
				  <div class="editGraphDiaContent">
				  	<el-form>
				  		<el-form-item label="" :label-width="formLabelWidth">
				  			<el-col :span="4">
						     <span v-text="'实例名称'"></span>
						    </el-col>
						    <el-col :span="0.5">：</el-col>
						    <el-col :span="19">
						      <el-input size="small" style="width:100%" v-model="modelName"></el-input>
						    </el-col>
					    </el-form-item>

					    <el-form-item v-for="(cellLabel, index) in cellLabelDatas" :key="index" label="" v-if="['id', 'modelTypeId',
					    'mxCell', 'modelTypeLaberId'].indexOf(cellLabel.name) == -1" :label-width="formLabelWidth">
					      	<el-col :span="4">
							     <span v-if="cellLabel.name == 'label'">标注</span>
							     <el-input size="small" style="width:100%" v-else v-model="cellLabelDatas[index].name"></el-input>
							    </el-col>
							    <el-col :span="0.5">：</el-col>
							    <el-col :span="19">
							    	<el-row :gutter="4">
								    	<el-col :span="cellLabel.name != 'label'?20:24"><el-input size="small" :style="{width:'100%'}" v-model="cellLabelDatas[index].value "></el-input></el-col>
								    	<el-col :span="4" v-if="cellLabel.name != 'label'"><el-button @click.prevent="removeDomain(index)" icon="el-icon-delete" size="small">删除</el-button></el-col>
								    </el-row>
							    </el-col>
					    </el-form-item>

					    <el-form-item label=" " v-if="isAddKey" :label-width="formLabelWidth">
					    	<el-input size="small" style="width:79.6%; padding-right:8px;" v-model="addKey"></el-input><el-button @click.prevent="addPrames" icon="el-icon-edit" size="small">添加属性名</el-button>
					    </el-form-item>

					    <el-form-item label=" " v-if="isAddBtn" :label-width="formLabelWidth">
					    	<el-button size="small" type="primary" @click="isAddKey = true, isAddBtn = false">添加属性</el-button>
					    </el-form-item>

					  </el-form>
				  </div>
				  <div slot="footer" class="dialog-footer" style="text-align: center">
				  	<el-button type="info" size="small" @click="showDialogEdit = false">取 消</el-button>
				    <el-button type="primary" size="small" @click="isOkEdit">保 存</el-button>
				  </div>
				</el-dialog>

				<!-- 图元所有图表列表 begin -->
			  <el-dialog title="图元应用图表更新选择" :visible.sync="graphShowDialog" :show-close="false">
				 	<div class="graphShowContent">
				 		<div class="modelCellsList graphListUl">
				 			<div style="padding-bottom:15px"><el-checkbox v-model="checkedGraphModel">更新实例模板</el-checkbox></div>
				 			<el-checkbox-group v-model="checkedXmlData">
						    <el-checkbox v-for="(cellGraph, index) in cellInGraphListData" :label="cellGraph.id" :key="index">
						    	{{getFilterTxtXml(cellGraph.name)}} 
						    	<router-link tag="a" class="graphSeeBtn" target="_blank" :to="{path: '/info/' + cellGraph.id, query:{'onFrom':infoFromCome, 'un':userName,'has_change_perm':hasChangePerm, 'addType': 'GRAPH'}}">查看图</router-link>
						    </el-checkbox>
						    <!-- <span class="span_name" v-html="getFilterTxtXml(cellGraph.name)"></span> -->
						  </el-checkbox-group>
		        </div>
				 	</div>
				  <div slot="footer" class="dialog-footer">
				  	<el-button type="info" size="small" @click="graphShowDialog = false">取 消</el-button>
				    <el-button type="primary" size="small" @click="isUpdateSave()">更 新</el-button>
				  </div>
				</el-dialog>
		</div>
	</div>
</template>
<script>
	import HeaderInfo from '../_common/Header_info.vue'
	import Page from '../_common/Pagination.vue'
	import {formatUnixtimestamp} from '../../utils/common'
	export default{
		name:'list',
		data(){
			return {
				xmlListDatas:null,
				xmlTargetDataId:null,
				infoFromCome:this.$route.query.onFrom, //来源
				userName:this.$route.query.un, //用户信息
        typeModel:this.$route.query.addType, //用户信息
        hasChangePerm:this.$route.query.has_change_perm, //是否有编辑权限
				showDialogEdit: false,
				editFormData: {},
				editBeforeData:null,
        formLabelWidth: '0px',
        cellLabelDatas: null,
        cellInGraphListData:null, //实例模板所在的图表列表
        graphShowDialog:false,
        checkedXmlData: [],
        isIndeterminate: true,
        modelName:null,
        checkedGraphModel:true,
        isAddKey:false, //添加属性KEY 区域
        isAddBtn:true, //添加属性按钮
        addKey:null,
        searchCellVal:null,
        selectValueKey:'all',
        selectOptions:[
         {
         	value:'all',
         	label:'全部'
         },
         {
         	value:'name',
         	label:'实例名称'
         },
         {
         	value:'group_name',
         	label:'模板组名'
         },
         {
         	value:'property_name',
         	label:'属性key'
         },
         {
         	value:'property_value',
         	label:'属性value'
         },
        ],
        
			}
		},
		computed: {
      pagination() {
        let vm = this
        if (!vm.$refs.pagination) {
          return {}
        }
        let {currentPage, pageSize} = vm.$refs.pagination
        return {currentPage, pageSize}
      },
    },
		created(){
			let vm = this
			// console.log(vm.hasChangePerm, 'hasChangePerm')
		},
		mounted(){
			let vm = this
			vm.getXmlListDatas()
			// 监测分页操作
      vm.$watch('pagination', function () {
        vm.getXmlListDatas()
      }, {deep: true})
      vm.$watch('searchCellVal', function(){
      	vm.getXmlListDatas()
      }, {deep: true})

      vm.$watch('selectValueKey', function(val){
      	if(val == 'all'){
      		vm.getXmlListDatas()
      	}
      })

		},
		methods:{
			formatUnixtimestamp,
			 // handleCheckedCitiesChange(value) {
    //     let checkedCount = value.length;
    //     this.isIndeterminate = checkedCount > 0 && checkedCount < this.cities.length;
    //   },
      
      getRowSpan(datas, curKey){
				let vm = this
				let keysData = vm.$_.keys(datas) //对象 key 的长度
				keysData.splice(keysData.indexOf('@modelTypeId'), 1)
				keysData.splice(keysData.indexOf('@id'), 1)
				keysData.splice(keysData.indexOf('@modelTypeLaberId'), 1)
				keysData.splice(keysData.indexOf('@label'), 1)
				keysData.splice(keysData.indexOf('mxCell'), 1)
				// console.log(keysData, datas, 'datas')
			  let oneName = keysData[0]
				if(oneName == curKey){
					return keysData.length
				}else{
					return ''
				}
			},
			getFilterStrings(data){
				let text = data.replace(/&gt;/g, '>').replace(/&lt;/g, '<').replace(/&quot;/g, '"').replace(/\n/g, '').replace(/&amp;/g, '&').replace(/&#10;/g, '</br>')
				return text
			},
			//编辑图元
			editCell(rowData, modelName, xmlObjectData){
				let vm = this
				vm.editBeforeData = xmlObjectData?xmlObjectData:null //所有的属性数据
				vm.showDialogEdit = true
				vm.modelName = modelName
				// console.log(rowData, 'rowData')
				vm.cellLabelDatas = vm.$_.map(rowData, (val, key)=>{
						return {'name': vm.filterStringTxt(key), 'value': val}	
				})

				// console.log(vm.cellLabelDatas, 'cellLabelDatas')

			},
			getBeginDataAll(datas){
      	let vm = this
      	vm.$_.forEach(vm.editBeforeData, (items, index)=>{
      	 if(items['@modelTypeLaberId'] == datas['@modelTypeLaberId']){
      	 	vm.editBeforeData[index] = datas
      	 }
      	})
      	return vm.editBeforeData
      },
			//确认编辑
			isOkEdit(){
				let vm = this
			  let url = '/mx_graph/mx_primitive/get_all_used_graph/'
			  vm.editFormData = {} //每次清空历史数据
			  vm.$_.forEach(vm.cellLabelDatas, (val, index)=>{
			  	if(val.name != null && val.name != 'mxCell'){
			  	  vm.$set(vm.editFormData, '@'+val.name, val.value)	
			  	}else if(val.name == 'mxCell'){
			  		vm.$set(vm.editFormData, val.name, val.value)	
			  	}
			  	
			  })
			  let params = {
			  	modelTypeId: vm.editFormData['@modelTypeId']
			  }
			  vm.$axios.get(url, {params}).then(response=>{
			  	if(response.status == 200){
			  		vm.cellInGraphListData = response.data
			  		if(vm.$_.isEmpty(vm.cellInGraphListData)){
			  			console.log('dad')
			  			vm.isAxiosUpdate(0)
			  		}else{
			  			vm.graphShowDialog = true //显示关联图表
			  		}
			  	}
			  }).catch(response=>{
			  	vm.$message.error('获取应用图元图表数据失败！')
			  })	
			},
			goGraphInfo(graph_id){
				let vm = this
				if(vm.infoFromCome == 'manager'){
      	  this.$router.push({path: '/info/' + graph_id, query:{'onFrom':vm.infoFromCome,'un':vm.userName, 'addType':vm.typeModel}})	
      	}else{
      		this.$router.push({path: '/info/' + graph_id, query:{'onFrom':'list'}})	
      	}
			},
			//保存
			isUpdateSave(){
				let vm = this
				let showTxt = null
				if(vm.checkedXmlData.length>0&&vm.checkedGraphModel == true){
					showTxt = '是否更新实例模板信息，同时更新选中的图表中模板元素信息?'
				}else if(vm.checkedXmlData.length>0&&vm.checkedGraphModel == false){
					showTxt = '是否只更新选择的图表包含的实例模板信息?'
				}else if(vm.checkedXmlData.length == 0 && vm.checkedGraphModel == true){
					showTxt = '是否只更实例模板信息?'
				}else if(vm.checkedXmlData.length == 0 && vm.checkedGraphModel == false){
					vm.$message.warning('请选择要更新的内容！')
					return
				}
				this.$confirm(showTxt, '提示', {
					cancelButtonText: '不 更 新',
          confirmButtonText: '更 新',
          type: 'warning',
          showClose:false
        }).then(() => {
        	if(vm.checkedXmlData.length>0&&vm.checkedGraphModel == true){//更新历史图表 时的  确认更新操作
        		vm.isAxiosUpdate(1)
        	}else if(vm.checkedXmlData.length>0&&vm.checkedGraphModel == false){ //更新图表不更新模板
        		vm.isAxiosUpdate(2)	
        	}else if(vm.checkedXmlData.length == 0 && vm.checkedGraphModel == true){ //不更新图表，只更新模板
        		vm.isAxiosUpdate(0)
        	}
        }).catch(() => {
        		vm.graphShowDialog = false
						vm.showDialogEdit = false	
        })
        
			},
			isAxiosUpdate(types){
				let vm = this
				let url = '/mx_graph/mx_primitive/update_primitive_objects/'
				if(vm.userName == undefined){
					vm.$message.warning('缺失用户认证信息，无操作权限！')
					return
				}
				let getNewEditData = vm.getBeginDataAll(vm.editFormData)
				let params = {
					update_graph: types,
					modelTypeId: vm.editFormData['@modelTypeId'],
					object: getNewEditData,//[vm.editFormData],
					graph_ids: vm.checkedXmlData,
					creator: vm.userName,
					name: vm.modeName
				}
				vm.$axios.post(url, params).then(response => {
					if(response.status == 200){
						if(response.data.detail != undefined){
							vm.$message.error(response.data.detail[0])
							return
						}
						vm.$message.success('实例模板更新成功！')
						vm.graphShowDialog = false
						vm.showDialogEdit = false	
						vm.getXmlListDatas() //更新数据
					}
				}).catch(response =>{
					console.log('实例模板更新失败！')
					vm.graphShowDialog = false
					vm.showDialogEdit = false
				})
			},
			filterStringTxt(val){
				let vm = this
				let splitData = val.split('@')
				if(splitData.length > 1){
				  return splitData[1]
				}else{
					return splitData[0]
				}
				
			},
			//图表名称过滤 '.xml'
			getFilterTxtXml(val){
				// console.log(val, 'ddvar')
				if(val == undefined) {return}
				if(val.indexOf('.xml') != -1 ){
				  return this.$_.replace(val, '.xml', '')	
				}else{
					return val
				}
			  
			},
			getIdToName(id){
				let vm = this
				if(id == 19){
					return '江苏核电'
				}
			},
			getXmlNewObject(cellDatas){
				let vm = this
				if(['modelTypeId','id','modelTypeLaberId','label','mxCell'].indexOf(vm.filterStringTxt(cellDatas)) != -1){
   				return false
				}else{
					return true
				}
			},
			//获取电厂图表数据
			getXmlListDatas(){
        let vm = this
        let url = null
        if(vm.selectValueKey == 'all'){
        	url = `/mx_graph/mx_primitive/`
        }else{
        	url = `/mx_graph/mx_primitive/?${vm.selectValueKey}=${vm.searchCellVal}`
        }
        
        let  params = {
        	'page': vm.pagination.currentPage,
        }
        vm.$axios.get(url,{params}).then(response=>{
          if(response.status == 200){
            vm.xmlListDatas = response.data.results
            // console.log(vm.xmlListDatas, 'response')
            vm.$refs.pagination.$emit('pageLoad',response.data)
          }
        }).catch(response=>{
          console.log(response, 'res')
          vm.$message.error('实例模板信息有误。')
        })
      },

      editorFun(row){
      	let vm = this
      	let currentId = row.modelTypeId
      	window.open('http://' + window.location.host +  '/static/webapp/index.html?currentId=' + currentId +　'&onFrom=' + vm.infoFromCome + '&un=' + vm.userName + '&has_change_perm=' + vm.hasChangePerm + '&addType=' + vm.typeModel)
      	// this.$router.push({path: '/editor/', query:{'currentId':currentId, 'onFrom':'list'}})
      },
      addPrames(){
      	let vm = this
      	let cellLength = vm.cellLabelDatas.length
      	let cellData = {'name': vm.addKey, 'value': ''}
      	vm.$set(vm.cellLabelDatas, cellLength, cellData) //更新编辑数据 
      	vm.isAddKey = false
      	vm.addKey = null
      	vm.isAddBtn = true
      },
      removeDomain(num) {
      	let vm = this
        let val = vm.cellLabelDatas[num].name
        if (val !== undefined) {
        	vm.cellLabelDatas.splice(num, 1)
        }
      },
		},
		components:{
      HeaderInfo:HeaderInfo,
      Page:Page,
    },
	}
</script>
<style lang='scss'>
	// .table-header-style{
	// 	th{
	// 		line-height: 30px;
	// 		padding:6px 0;
	// 		background: #080f1e;
	// 		color:#fff;
	// 	}
	// }
	// .table-row-class-name{
	// 	&.hover-row{
	// 		background: #fff;
	// 			td{
	// 				background: #fff;
	// 				color:#000;
	// 			}
	// 	}
	// 	td{
	// 		background: #ecf5fb;
	// 		color:#000;
	// 	}
	// }
	// .el-table td, .el-table th{
	// 	padding:6px 0;
	// }
	
</style>