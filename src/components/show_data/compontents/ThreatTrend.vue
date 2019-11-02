<template>
	<div>
	  <div ref="threat_trend_map" style="width:100% ;height: 314px"></div>
	</div>
</template>
<script>
  import * as echarts from "echarts";
  export default {
    name: 'home',
    data(){
    	return {
        
    	}
    },
    mounted(){
      let vm = this
      vm.showThreatTrendMap()
    },
    created(){
    	let vm = this
      
    },
    methods:{
      showThreatTrendMap(){
        let vm = this
        let elEchartsDom = echarts.init(vm.$refs.threat_trend_map)
        let optionData = null

        let colors = ['#51d267', '#1c7dfa', '#ffffff', '#09203f']

        optionData = {
            color: colors,

            tooltip: {
                trigger: 'none',
                axisPointer: {
                    type: 'cross',
                    label: {
                        backgroundColor: '#5dcaee'
                    },
                    crossStyle:{
                      color:colors[2]
                    },

                },
                textStyle:{
                  color:colors[3]
                },
                
                backgroundColor:colors[2],
            },
            axisPointer: {
                link: {xAxisIndex: 'all'},
                label: {
                    backgroundColor: '#777'
                }
            },
            legend: {
                // data:['2015 降水量', '2016 降水量']
            },
            // grid: {
            //     top: 70,
            //     bottom: 50
            // },
            xAxis: [
                {
                    type: 'category',
                    axisTick: {
                        alignWithLabel: true
                    },
                    axisLine: {
                        onZero: false,
                        lineStyle: {
                            color: colors[1],
                        }
                    },
                    axisPointer: {
                        label: {
                            formatter: function (params) {
                                return  params.value + (params.seriesData.length ? '：' + params.seriesData[0].data : '');
                            }
                        }
                    },

                    data: ["堆栈溢出", "释放后重用", "命令注入", "跨站请求", "拒绝服务", "设计问题"]
                },
                {
                    type: 'category',
                    axisTick: {
                        alignWithLabel: true
                    },
                    axisLine: {
                        onZero: false,
                        lineStyle: {
                            color: colors[0]
                        }
                    },
                    axisPointer: {
                        label: {
                            formatter: function (params) {
                                return  params.value
                                    + (params.seriesData.length ? '：' + params.seriesData[0].data : '');
                            }
                        }
                    },
                    data: ["堆栈溢出", "释放后重用", "命令注入", "跨站请求", "拒绝服务", "设计问题"]
                }
            ],
            yAxis: [
                {
                    type: 'value',
                    axisLine: {
                        onZero: false,
                        lineStyle: {
                            color: colors[2],
                            opacity:0,
                        }
                    },
                   
                    axisLabel:{
                      color:colors[3]
                    },
                    splitLine:{
                      lineStyle:{
                        color:colors[3]
                      },
                    },
                }

            ],
            series: [
                {
                    name:'2015 降水量',
                    type:'line',
                    xAxisIndex: 1,
                    smooth: true,
                    data: [1, 2, 4, 5, 11, 9]
                },
                {
                    name:'2016 降水量',
                    type:'line',
                    smooth: true,
                    data: [1, 2, 4, 5, 11, 9]
                }
            ]
        };


        elEchartsDom.setOption(optionData)
      },
    },
    
  }
</script>