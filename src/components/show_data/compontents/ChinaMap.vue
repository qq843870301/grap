<template>
 <div ref="china_map" style="width:100%; height:500px;"></div>
</template>

<script>
	import types from '../../../store/global/types'
	import {common_getRouteHref} from '../../../utils/vm_methods_common'
	import {getNameDatas} from '../../../utils/common'
	// import jsonData from '../../../utils/map/heatChinaRealData.json'
	import {mapGetters} from 'vuex'
  // 主模块
  import * as echarts from "echarts";
  // 散点图
  import 'echarts/lib/chart/scatter.js'
  // 散点图放大
  import 'echarts/lib/chart/effectScatter.js'
  // 地图
  import 'echarts/lib/chart/map.js'
  // 图例
  import 'echarts/lib/component/legend.js'
  // 提示框
  import 'echarts/lib/component/tooltip.js'
  // 地图geo
  import 'echarts/lib/component/geo.js'
  // 中国地图
  import 'echarts/map/js/china.js'
  
  export default {
    name: 'index',
    data(){
    	return {
    		mapDatas: null,//jsonData,
    		showCityNumber: 5,
		    showCount: 0,
		    isLoading: true, 
    	}
    },
    computed: {
      ...mapGetters({
        Gx_getcoordMap: types.GETTERS.geoCoordMap
      })
    },
    mounted () {
    	let vm = this
    	//初始化地图DOM 
    	let chinaMap = echarts.init(vm.$refs.china_map)
	   	 
	    vm.getNameDatas().then(res=>{
    		vm.mapDatas = res
    		if(!vm.$_.isEmpty(vm.mapDatas)){
    		  vm.showEcharts(chinaMap)	
    		}
    	})

	    //地图点击 事件
	    chinaMap.on('click',(params)=>{
	    		let vm = this 
	    		let targetID
	    		console.log(params.data, 'targetID = params.data')
	    		if(params.data){
	    		  targetID = params.data.id	
	    		  if(targetID == 19){
		    		  this.$router.push({path: '/info/' + targetID, query:{'onFrom':'map', 'addType':'GRAPH'}})	
		    		}else{
		    			vm.$message.warning('暂无相关图表资料')
		    		}
	    		}else{
	    			return
	    		}
	    		
	    		// let Data = vm.$_.filter(vm.Gx_NameMap, item=>{return item.name == name})
	    		// 解除临时 启用 数据
	    		// let idData = vm.$_.filter(vm.Gx_NameMap, item=>{return item.name == name})[0].id
	    		// 临时用 设置 数据
	    		// console.log(vm.Gx_getcoordMap, 'Gx_getcoordMap')
	    		
	    		
	    });

    },
    created(){
    	let vm = this

    },
    methods:{
    	getNameDatas,
    	// echarts 图表渲染
    	showEcharts(dom){
	    	let vm = this
	    	let chinaMap = dom
	      let showLoadingDefault = {
	        text: '加载中...',
	        color: '#23531',
	        textColor: '#fff',
	        // 地图背景色
	        maskColor: '#272D3A',
	        zlevel: 0
	      }
	      let arr = []
        let len = vm.mapDatas.length
		// vm.showCityNumber = vm.mapDatas.length
		
		for (let i = 0; i < vm.mapDatas.length; i++) {
			arr.push({
				name: vm.mapDatas[i].name,
				value:[vm.mapDatas[i].x,vm.mapDatas[i].y],
				id:vm.mapDatas[i].id
			})
		}
        // while (len--) {
        //   let gitCurrentName = vm.Gx_getcoordMap[vm.mapDatas[len].name]
        //   // console.log(gitCurrentName, 'gitCurrentName')
        //   if (gitCurrentName) {
        //     arr.push({
        //       name: vm.mapDatas[len].name,
        //       value: gitCurrentName.val, 
        //       id: gitCurrentName.id
        //     })
        //   }
        // }
        let lightData = arr.sort((a, b) => {
          return b.value - a.value
        })//.slice(0 + vm.showCount, vm.showCityNumber + vm.showCount)
		console.log(vm.Gx_getcoordMap)
		
	      let optionData = {
	        // backgroundColor: '#272D3A',
	        // 标题
	        // title: {
	        // text: '全国分布图',
	        //   left: 'center',
	        //   textStyle: {
	        //     color: '#fff'
	        //   }
	        // },
	        // 地图上圆点的提示
	        tooltip: {
	          trigger: 'item',
			  formatter:  '{b0}: {c0}<br />{b1}: {c1}'
			//   function (params) {
				  
	        //     return params.name //+ ' : ' + params.value[2]
	        //   }
	        },
	        // 图例按钮 点击可选择哪些不显示
	        // legend: {
	        //   orient: 'vertical',
	        //   right:'12',
	        //   bottom:'15%',
	        //   data: ['恶意外链', '恶意攻击'],
	        //   textStyle: {
	        //     color: '#fff',
	        //     fontSize:'14',
	        //   }
	        // },
	        // 地理坐标系组件
	        geo: {
	          map: 'china',
	          label: {
	            // true会显示城市名
	            emphasis: {
	              show: false
	            }
	          },
	          itemStyle: {
	            // 地图背景色
	            normal: {
	              areaColor: '#074b7f',
	              borderColor: '#3085b5'
	            },
	            // 悬浮时
	            emphasis: {
	              areaColor: '#12557f'
	            }
	          }
	        },
	        // 系列列表
	        series: [
	          {
	            name: '恶意外链',
	            // 表的类型 这里是散点
	            type: 'scatter',
	            // 使用地理坐标系，通过 geoIndex 指定相应的地理坐标系组件
	            coordinateSystem: 'geo',
	            data:arr,
	            // 标记的大小
	            symbolSize: 8,
	            // 鼠标悬浮的时候在圆点上显示数值
	            label: {
	              normal: {
	                show: false
	              },
	              emphasis: {
	                show: false
	              }
	            },
	            itemStyle: {
	              normal: {
	                color: '#ffe400'
	              },
	              // 鼠标悬浮的时候圆点样式变化
	              emphasis: {
	                borderColor: '#fff',
	                borderWidth: 1
	              }
	            }
	          },
	          {
	            name: '恶意攻击',
	            // 表的类型 这里是散点
	            type: 'effectScatter',
	            // 使用地理坐标系，通过 geoIndex 指定相应的地理坐标系组件
	            coordinateSystem: 'geo',
	            data: lightData,
	            // 标记的大小
	            symbolSize: 8,
	            showEffectOn: 'render',
	            rippleEffect: {
	              brushType: 'stroke'
	            },
	            hoverAnimation: true,
	            label: {
	              normal: {
	                show: false
	              }
	            },
	            itemStyle: {
	              normal: {
	                color: '#e60012',
	                shadowBlur: 10,
	                shadowColor: '#333'
				  },
	            },
	            zlevel: 1
	          }
	        ]
	      }
	      
	      chinaMap.setOption(optionData)
	      chinaMap.showLoading(showLoadingDefault)
	      if (vm.isLoading) {
          chinaMap.hideLoading()
          vm.isLoading = false
        }
	      // vm.$store.commit(types.MUTATIONS.openLoading, true)
	      // vm.$store.dispatch(types.ACTIONS.fetchHeatChinaRealData, chinaMap)
	    },


    },

    
  }
</script>
