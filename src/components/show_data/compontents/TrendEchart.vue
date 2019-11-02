<template>
	<div class="ovh">
	  <div class="datas-info-charts-two" >
	    <div ref="chartsOne" style="width:100%; height: 238px;"></div>
	  </div>
	</div>
</template>
<script>
	// import * as echarts from "echarts";
	// import {RadialGauge}  from '../../../../static/js/gauge.min.js'
	export default {
    name: 'infoEchartsData',
    data(){
      return {
      }
    },
    props:['chartsDatas'],
    mounted(){
      let vm = this
      vm.showInfoEchart()

    },
    created(){
      let vm = this
     // console.log(vm.chartsDatas, 'chartsDatas')
    },
    methods:{
     
      showInfoEchart(){
	        let vm = this
	        let chartsDom = echarts.init(vm.$refs.chartsOne)
	        let colors = ['#51d267', '#1c7dfa', '#fff', '#09203f']
	        let option = {
					    title: {
					        // text: '堆叠区域图'
					    },
					    tooltip : {
					        trigger: 'item',
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
					        left: '10%',
					        right: '5%',
					        bottom: '5%',
					        top:'5%',
					        containLabel: false
					    },
					    xAxis : [
					        {
					            type : 'category',
					            boundaryGap : false,
					            axisLabel:{
					            	color:'#fff',
					            },
					            nameTextStyle:{
					            	color:'#fff',
					            	fontSize:12
					            },
					            axisLine:{
					            	lineStyle:{
					            		color:colors[3],
					            		width:1
					            	}
					            },
					            data : ['周一','周二','周三','周四','周五','周六','周日']
					        }
					    ],
					    yAxis : [
					        {
					            type : 'value',
					            // splitNumber:3,
					            axisLine: {
					            	show: false,
					            	symbolSize:[10, 15],
	                        lineStyle: {
	                            color: colors[2],
	                            width:1,
	                        }
	                    },

	                    axisLabel : {
	                       interval:2
	                    },//去掉刻度
	                    splitLine:{   
	                       //去掉背景水平网格线
					                show:false  
					            },  
	                    splitLine:{
	                      lineStyle:{
	                        color:colors[3]
	                      },
	                    },
					        }
					    ],
					    series : [
					        {
					            name:'搜索引擎',
					            type:'line',
					            label: {
					                normal: {
					                    show: false,
					                    position: 'top'
					                }
					            },
					            itemStyle:{
					            	normal:{
					            		lineStyle:{
					            			width:1,
					            			color:colors[1]
					            		},
					            	},
					            },
					            areaStyle: {
					            	normal: {
					            	color:{
					            		type: 'linear',
											    x: 0,
											    y: 0,
											    x2: 0,
											    y2: 1,
											    colorStops: [{
											        offset: 0, color: '#5dcaee' // 0% 处的颜色
											    }, {
											        offset: 1, color: 'transparent' // 100% 处的颜色
											    }],
											    globalCoord: false // 缺省为 false
					            	}
					            }},
					            data: vm.chartsDatas
					        }
					    ]
					};
	        chartsDom.setOption(option)
	      }
	      
    },
    components:{
    },
  }
</script>