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
				  size="small"
				  placeholder="请输入内容"
				  v-model="searchCellVal"
				  style="width:30%;"
				  clearable>
				</el-input>
			</p>
			 <el-table
			    :data="xmlListDatas"
			    border
			    header-row-class-name="table-header-style"
			    row-class-name="table-row-class-name"
			    class="graph-table-box"
			    style="width: 100%"
			    >
			    <el-table-column type="expand">
			      <template slot-scope="props" >
			      	<div v-if="!$_.isEmpty(props.row.primitive_object)">
			      		<table class="table_object">
			      			<thead>
			      				<tr>
			      					<th width="20%">实例名</th>
			      					<th width="30%">属性名</th>
			      					<th width="30%">属性值</th>
			      					<th width="20%">操作</th>
			      				</tr>
			      			</thead>
			      			<tbody>
			      				<template v-for="prim_obj in {__:getFilterRepeatData(props.row)}">
				      				<tr v-for="(obj, index) in prim_obj" :key="index">
				      					<td>{{obj.name}}</td>
				      					<td :colspan="obj.xml_object.length > 1?3:2" class="parent-table-td">
				      						<table width="100%" class="graph-cell-table" :class="{'table_object_border':obj.xml_object.length > 1}">
				      							<tbody>
				      								<template v-for="(cellVal, index) in obj.xml_object">
					      								<tr v-for="(val, keys) in cellVal" v-if="getXmlNewObject(keys)" :class="{'cell-style-bg':index%2 == 0 && obj.xml_object.length > 1}">
					      									<td width="37.5%">{{filterStringTxt(keys)}}</td>
					      									<td width="37.6%"><em v-if="!$_.isEmpty(val)">{{val}}</em><em v-else>--</em></td>
					      									<td :rowspan="getRowSpan(cellVal, keys)" v-if="getRowSpan(cellVal,keys) > 0 && obj.xml_object.length > 1">
					      										<router-link tag="a" class="graphSeeBtn" target="_blank" :to="{path: '/modelInfo/' + cellVal.modelTypeId, query:{'onFrom':infoFromCome, 'un':userName,'has_change_perm':hasChangePerm,'addType':'PRIMITIVE'}}">查看实例</router-link>
					      										<el-button v-if="infoFromCome == 'manager' && hasChangePerm == 'True'" @click="editCell(cellVal, obj.name, obj)" type="text" size="small">编辑实例</el-button>
					      									</td>
					      								</tr>
				      								</template>
				      							</tbody>
				      						</table>
				      					</td>
				      					<td v-if="obj.xml_object.length == 1">
					      					<router-link v-if="obj.isCommon == undefined" tag="a" class="graphSeeBtn" target="_blank" :to="{path: '/modelInfo/' + obj.modelTypeId, query:{'onFrom':infoFromCome, 'un':userName,'has_change_perm':hasChangePerm,'addType':'PRIMITIVE'}}">查看实例</router-link>
							        		<template v-if="infoFromCome == 'manager' && hasChangePerm == 'True'">
								        		<!-- <el-button @click="editorFun(obj, 'PRIMITIVE')" v-if=" obj.num > 0"  type="text" size="small">编辑实例</el-button> -->
								        		<el-button @click="editCell(obj.xml_object[0], obj.name, obj)" type="text" size="small">编辑实例</el-button>
								        	</template>
				      					</td>
				      				</tr>
				      			</template>
			      			</tbody>
			      		</table>
			      	</div>
			      	<div v-else class="dem-no-Data">
			      	  <img src="../../assets/nodata.png" width="85" height="85" alt=""><br>暂实例模板数据！
			      	</div>
			      </template>
			    </el-table-column>
			    <el-table-column
			      label="名称"
			      >
			      <template slot-scope="scope">
			      	<span v-text="getFilterTxtXml(scope.row.name)"></span>
			      </template>
			    </el-table-column>
			    <el-table-column
			      label="所属电厂"
			      >
			      <template slot-scope="scope">
			      	<span>{{getIdToName(scope.row.electric_station_id)}}</span>
			      </template>
			    </el-table-column>
			     <el-table-column
			      label="更新日期"
			      >
			      <template slot-scope="scope">
			      	<span>{{formatUnixtimestamp(scope.row.update_time)}}</span>
			      </template>
			    </el-table-column>
			    <el-table-column
			      fixed="right"
			      label="操作"
			      width="150">
			      <template slot-scope="scope">
			      	<router-link tag="a" class="graphSeeBtn" target="_blank" :to="{path: '/info/' + scope.row.id, query:{'onFrom':infoFromCome,'un':userName, 'has_change_perm':hasChangePerm, 'addType':typeModel}}">查看图</router-link>
			        <el-button v-if="infoFromCome == 'manager' && hasChangePerm == 'True'" type="text" @click="editorFun(scope.row, 'GRAPH')" size="small">编辑图</el-button>
			      </template>
			    </el-table-column>
			  </el-table>
			  <Page ref="pagination"></Page>
			  <!-- 实例编辑 begin -->
			  <el-dialog title="实例属性编辑" :visible.sync="showDialogEdit" width="35%" :show-close="false">
				  <div class="editGraphDiaContent">
				  	<el-form>
				  		<el-form-item label="" :label-width="formLabelWidth">
				  			<el-col :span="4">
						     <span v-text="'实例名称'"></span>
						    </el-col>
						    <el-col :span="0.5">：</el-col>
						    <el-col :span="19">
						      <el-input size="small" v-model="modelName"></el-input>
						    </el-col>
					    </el-form-item>
					    <el-form-item v-for="(cellLabel, index) in cellLabelDatas" :key="index" label="" v-if="['id', 'modelTypeId',
					    'mxCell', 'modelTypeLaberId'].indexOf(cellLabel.name) == -1" :label-width="formLabelWidth">
					      	<el-col :span="4">
							     <span v-if="cellLabel.name == 'label'">标注</span>
							     <el-input size="small" :disabled="cellLabel.name == '设备ID'" v-else v-model="cellLabelDatas[index].name"></el-input>
							    </el-col>
							    <el-col :span="0.5">：</el-col>
							    <el-col :span="19">
							      <el-row :gutter="4">
								    	<el-col :span="cellLabel.name != 'label'&&cellLabel.name != '设备ID'?20:24"><el-input size="small" :style="{width:'100%'}" v-model="cellLabelDatas[index].value" :disabled="cellLabel.name == '设备ID'"></el-input></el-col>
								    	<el-col :span="4" v-if="cellLabel.name != 'label' && cellLabel.name != '设备ID'"><el-button @click.prevent="removeDomain(index)" icon="el-icon-delete" size="small">删除</el-button></el-col>
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
				  	<el-button type="info" size="small" @click="showDialogEdit=false">取 消</el-button>
				    <el-button type="primary" size="small" @click="isOkEdit">保 存</el-button>
				  </div>
				</el-dialog>

				<!-- 实例所有图表列表 begin -->
			  <el-dialog title="实例应用图表更新选择" :visible.sync="graphShowDialog" :show-close="false">
				 	<div class="graphShowContent">
				 		<div style="padding-bottom:15px"><el-checkbox v-model="checkedGraphModel">更新实例模板</el-checkbox></div>
				 		<el-checkbox-group v-model="checkedXmlData">
						    <el-checkbox v-for="(cellGraph, index) in cellInGraphListData" :label="cellGraph.id" :key="index">
						    	{{getFilterTxtXml(cellGraph.name)}} 
						    	<router-link tag="a" class="graphSeeBtn" target="_blank" :to="{path: '/info/' + cellGraph.id, query:{'onFrom':infoFromCome, 'un':userName,'has_change_perm':hasChangePerm, 'addType':'GRAPH'}}">查看图</router-link>
						    </el-checkbox>
						    <!-- <span class="span_name" v-html="getFilterTxtXml(cellGraph.name)"></span> -->
						  </el-checkbox-group>
				 	</div>
				  <div slot="footer" class="dialog-footer">
				  	<el-button type="info" size="small" @click="graphShowDialog=false">关 闭</el-button>
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
        editGraphId:null, 
        cellLabelDatas:null,
        cellInGraphListData:null, //实例模板所在的图表列表
        graphShowDialog:false,
        modelName:null,
        checkedXmlData:[],
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
         	label:'名称'
         },
         {
         	value:'object_name',
         	label:'实例名称'
         },
         {
         	value:'electric_station_name',
         	label:'电厂名称'
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
			getXmlNewObject(cellLabel){
				let vm = this
				if(['modelTypeId','id','modelTypeLaberId','label','mxCell'].indexOf(vm.filterStringTxt(cellLabel)) != -1){
   				return false
				}else{
					return true
				}
			},
			getRowSpan(datas, curKey){
				let vm = this
				let keysData = vm.$_.keys(datas) //对象 key 的长度
				if(keysData.indexOf('@modelTypeId')!=-1 && keysData.indexOf('@modelTypeLaberId')!=-1){
				  keysData.splice(keysData.indexOf('@modelTypeId'), 1)
					keysData.splice(keysData.indexOf('@modelTypeLaberId'), 1)	
				}
				keysData.splice(keysData.indexOf('@id'), 1)
				keysData.splice(keysData.indexOf('@label'), 1)
				keysData.splice(keysData.indexOf('mxCell'), 1)
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
			//编辑实例
			editCell(rowData, modelName, xmlObjectData){
				let vm = this
				vm.editBeforeData = xmlObjectData.xml_object?xmlObjectData.xml_object:null //所有的属性数据
				vm.showDialogEdit = true
				vm.modelName = modelName
				vm.editGraphId = xmlObjectData.graph_id

				vm.cellLabelDatas = vm.$_.map(rowData, (val, key)=>{
						return {'name': vm.filterStringTxt(key), 'value': val}	
				})

				console.log(vm.editBeforeData, 'editBeforeData')
				// vm.editFormData = rowData
				// vm.cellLabelDatas = rowData
			},
			//确认编辑
			isOkEdit(){
				let vm = this
			  let url = '/mx_graph/mx_primitive/get_all_used_graph/' //获取所有
			  vm.editFormData = {} //每次清空历史数据
			  vm.$_.forEach(vm.cellLabelDatas, (val, index)=>{
			  	if(val.name != null && val.name != 'mxCell'){
			  	  vm.$set(vm.editFormData, '@'+val.name, val.value)	
			  	}else if(val.name == 'mxCell'){
			  		vm.$set(vm.editFormData, val.name, val.value)	
			  	}
			  })
			  if(vm.editFormData['@modelTypeId']!=undefined){ //图表 模板实例修改
				  let params = {
				  	modelTypeId:vm.editFormData['@modelTypeId']
				  }
					 vm.$axios.get(url, {params}).then(response=>{
					  	if(response.status == 200){
					  		if(response.data.detail != undefined){
					  			vm.$message.error(response.data.detail[0])
					  		}
					  		vm.cellInGraphListData = response.data
					  		if(vm.cellInGraphListData.length > 0){
					  			vm.graphShowDialog = true //显示关联图表
					  		}
					  	}
					  }).catch(response=>{
					  	vm.$message.error('获取应用实例图表数据失败！')
					  })
			  }else{
			  	vm.isAxiosUpdate(2)
			  }

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
        	}else if(vm.checkedXmlData.length>0&&vm.checkedGraphModel == false){ //是否只更新选择的图表包含的实例模板信息
        		vm.isAxiosUpdate(2)	
        	}else if(vm.checkedXmlData.length == 0 && vm.checkedGraphModel == true){
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
					...vm.editFormData['@modelTypeId']!=undefined?{modelTypeId: vm.editFormData['@modelTypeId']}:{}, //普通实例更新没有 modelTypeId
					object: getNewEditData, //[vm.editFormData],
					graph_id: vm.editGraphId==null?vm.checkedXmlData:vm.editGraphId,
					creator: vm.userName,
					name: vm.modeName
				}

				vm.$axios.post(url, params).then(response => {
					if(response.status == 200){
						if(response.data.detail != undefined){
							vm.$message.error(response.data.detail[0])		
						}else{
							vm.$message.success('实例模板更新成功！')
						}
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
				if(val.indexOf('.xml') != -1){
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
			//获取电厂图表数据
			getXmlListDatas(){
        let vm = this
        let url = null
        if(vm.selectValueKey == 'all'){
          url = '/mx/'	
        }else {
        	url = `/mx/?${vm.selectValueKey}=${vm.searchCellVal}`
        }
        let params = {
        	'page': vm.pagination.currentPage
        }
        vm.$axios.get(url,{params}).then(response=>{
          if(response.status == 200){
            vm.xmlListDatas = response.data.results 
            //变更 数据结构
            vm.xmlListDatas.forEach(items=>{
            	if(vm.$_.isEmpty(items.primitive_object) && !vm.$_.isEmpty(items.xml_object)){
            		items.xml_object.forEach(childItems => {
            			let objectData = {}
            			objectData.graph_id = items.id
            			objectData.isCommon = true
            		  objectData.name = childItems['@label']?childItems['@label']:'--'
	            		objectData.modelTypeId = childItems['@id']
	            		objectData.xml_object = []
	            		objectData.xml_object.push(childItems)
	            		items.primitive_object.push(objectData)	
            		})
            		
            	}else if(vm.$_.isEmpty(items.primitive_object) && vm.$_.isEmpty(items.xml_object)){
            		items.primitive_object = []
            	}
            })
            vm.$refs.pagination.$emit('pageLoad',response.data)
          }
        }).catch(response=>{
          console.log(response, 'res')
          vm.$message.error('xml 列表信息有误。')
        })
      },

      getFilterRepeatData(data){ //过滤重复的 modelTypeId
      	let vm = this
      	let arrData = []
      	let replace 
      	vm.$_.forEach(data.primitive_object, (item, index)=>{
      		item.num = 0
      		if(arrData.length-1 >= 0){
      		   if(item.modelTypeId != arrData[arrData.length-1].modelTypeId){
		      			arrData.push(item)
		      		}else if(item.modelTypeId != null && item.modelTypeId == arrData[arrData.length-1].modelTypeId){
		      		  ++arrData[arrData.length-1].num
		      		}
      		}else{
      			arrData = [item]
      		}
      	})

      	// console.log(arrData, 'arrData')
      	return arrData
      },

      getBeginDataAll(datas){
      	let vm = this
      	if(vm.editBeforeData['@modelTypeId'] != undefined){
	      	vm.$_.forEach(vm.editBeforeData, (items, index)=>{
	      	 if(items['@modelTypeLaberId'] == datas['@modelTypeLaberId']){
	      	 	vm.editBeforeData[index] = datas
	      	 }
	      	})
	      	return vm.editBeforeData
      	}else{ //普通实例更新 数据
      		let newDatas = {}
      		vm.$_.forEach(vm.xmlListDatas, (items, index) =>{
      			if(items.id === vm.editGraphId){
      				newDatas = items.xml_object
      				vm.$_.forEach(newDatas, (items_xml, index_xml)=>{
      					if(items_xml['@id'] ===  datas['@id']){
      						newDatas[index_xml] = datas
		      			}
      				})
      			}
      		})
      		return newDatas
      	}
      },

      // seeClickFun(row){
      // 	let vm = this
      // 	let currentId = row.id
      // 	if(vm.infoFromCome == 'manager'){
      // 	  this.$router.push({path: '/info/' + currentId, query:{'onFrom':vm.infoFromCome}})	
      // 	}else{
      // 		this.$router.push({path: '/info/' + currentId, query:{'onFrom':'list'}})	
      // 	}
      	
      // },

      editorFun(row, addType){
      	let vm = this
      	let currentId = null
      	if(addType == 'PRIMITIVE'){
      		currentId = row.modelTypeId
      		window.open('http://' + window.location.host +  '/static/webapp/index.html?currentId=' + currentId +　'&onFrom=' + vm.infoFromCome + '&un=' + vm.userName + '&addType=' + addType)
      	}else{
      		currentId = row.id
      		window.open('http://' + window.location.host +  '/static/webapp/index.html?currentId=' + currentId +　'&onFrom=' + vm.infoFromCome + '&un=' + vm.userName + '&addType=' + addType)
      	}
      	
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
<!-- <style lang='scss'>

	
</style> -->