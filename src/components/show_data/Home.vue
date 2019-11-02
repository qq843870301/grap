<template>
	<div class="graph-body-bg">
      <page_header v-if="$route.meta.global_header"></page_header>
      <div class="graph-content">
          <div class="graph-content-one">
              <div class="graph-side-left">
                   <div class="graph-box-content left-top-up">
                      <div class="graph-title">Sun Solaris漏洞（按年份）
                      <i class="items items_1"></i>
                      <i class="items items_2"> </i>
                      <i class="items items_3"> </i>
                      <i class="items items_4"> </i></div>
                      <div class="latest-list-data height-val-small" >
                          <div ref="showEcharDomCountry"  style="width:100%; height: 204px;"></div>
                          <el-button type="text" class="see-data-more-list" icon="el-icon-d-arrow-right">更多</el-button>
                      </div>
                  </div>

                   <div class="graph-box-content margin-top-val">
                      <div class="graph-title">Ingres漏洞（按年份） 
                        <i class="items items_1"></i>
                      <i class="items items_2"> </i>
                      <i class="items items_3"> </i>
                      <i class="items items_4"> </i></div>
                      <div class="latest-list-data height-val-small">
                          <div ref="showEcharDom"  style="width:100%; height: 204px;"></div>
                          <el-button type="text" class="see-data-more-list" icon="el-icon-d-arrow-right">更多</el-button>
                      </div>
                  </div>
              </div>
              <div class="graph-side-middle">
                  <div class="graph-box-content " style="height: 505px;">
                      <div class="graph-title middle-title">全国分布图 <i class="items items_1"></i>
                      <i class="items items_2"> </i>
                      <i class="items items_3"> </i>
                      <i class="items items_4"> </i></div>
                      <div id="graph-all-map" class="latest-list-data height-val-middle">
                        <china_map></china_map>
                      </div>
                  </div>
              </div>
              <div class="graph-side-right">
                   <div class="graph-box-content  left-top-up">
                      <div class="graph-title">WinCCl软件漏洞（按年份） <i class="items items_1"></i>
                      <i class="items items_2"> </i>
                      <i class="items items_3"> </i>
                      <i class="items items_4"> </i></div>
                      <div class="latest-list-data height-val-small">
                         <div style="width:100%; height: 204px;" ref="threaten"></div>
                          
                          <el-button type="text" class="see-data-more-list" icon="el-icon-d-arrow-right">更多</el-button>
                      </div>
                  </div>

                   <div class="graph-box-content margin-top-val">
                      <div class="graph-title">STEP7 (按类型) 
                        <i class="items items_1"></i>
                      <i class="items items_2"> </i>
                      <i class="items items_3"> </i>
                      <i class="items items_4"> </i></div>
                      <div class="latest-list-data height-val-small">
                        <div ref="showEcharDomStep7"  style="width:100%; height: 204px;"></div>
                          <!-- <ul class="denger-from-ad">
                            <li v-for="form in dengerListData">
                              <span>{{form.form_name}}</span>
                              <span class="iconfont graph-icon-usa"></span>
                              <span>{{form.countryName}}</span>
                            </li>
                          </ul> -->
                          <!-- <img src="../../assets/img4.png" min-max="95%"   alt=""> -->
                          <el-button type="text" class="see-data-more-list" icon="el-icon-d-arrow-right">更多</el-button>
                      </div>
                  </div>
              </div>
          </div>
          <div class="graph-content-two">
               <div class="graph-box-content graph-box-lfl">
                      <div class="graph-title">S7系列PLC漏洞（按类型） <i class="items items_1"></i>
                      <i class="items items_2"> </i>
                      <i class="items items_3"> </i>
                      <i class="items items_4"> </i></div>
                      <div class="latest-list-data height-val">
                          <threat_trend></threat_trend>
                      </div>
                  </div>

                   <div class="graph-box-content graph-box-lfr">
                      <div class="graph-title">WinCC软件漏洞 （按类型）
                        <i class="items items_1"></i>
                      <i class="items items_2"> </i>
                      <i class="items items_3"> </i>
                      <i class="items items_4"> </i></div>
                      <div class="latest-list-data height-val" >
                          <warning_list></warning_list>
                      </div>
                  </div>
          </div>
      </div>
	</div>
</template>

<script>
  import * as echarts from "echarts";
  import page_header from '../_common/Header.vue'
  import warning_list from './compontents/WarningContent.vue'
  import threat_trend from './compontents/ThreatTrend.vue'
  import china_map from './compontents/ChinaMap.vue'
  
  export default {
    name: 'home',
    data(){
    	return {
        bodyHeight:null,
        percentVal:80,

        dengerListData: [{
          form_name:'源IP',
          country: '美国',
          countryName: '美国',
          
        },{
          form_name:'源IP',
          country: '美国',
          countryName: '美国',
          
        },{
          form_name:'源IP',
          country: '美国',
          countryName: '美国',
          
        },{
          form_name:'源IP',
          country: '美国',
          countryName: '美国',
          
        },{
          form_name:'源IP',
          country: '美国',
          countryName: '美国',
          
        },]
    	}
    },
    mounted(){
        let vm = this
        vm.getThreatenEcharts()

        vm.getJingGaoFengBu()

        vm.getCountryTop()

        vm.getChartStep()
    },
    created(){
    	let vm = this
        vm.getCurrentWindowHeight()
    },
    methods:{
    	getCurrentWindowHeight(){
            this.bodyHeight = $(window).height()
        },

      getThreatenEcharts(){
        let vm = this
        let showEchartsDom = echarts.init(vm.$refs.threaten)
        let options = {
            tooltip: {
                  trigger: 'axis',
                  axisPointer: {
                      type: 'cross',
                      label: {
                          backgroundColor: '#5dcaee'
                      },
                  },
                  textStyle:{
                    color: '#51d267'
                  }
              },
            // legend: {
            //     data: ['2011年', '2012年']
            // },
             grid: {
                  left: '15%',
                  right: '10%',
                  bottom: '10%',
                  top:'15%',
                  containLabel: false
              },
            xAxis: {
                type: 'value',
                axisPointer: {
                    type: 'shadow'
                },
                splitLine:{
                  lineStyle:{
                    color:'#09203f'
                  },
                },
                axisLine:{
                  lineStyle:{
                    color:'#fff',
                    width:1
                  }
                },
                boundaryGap: [0, 0.01]
            },
            yAxis: {
                 type: 'category',
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
                data: ['2016-2017','2015','2014','2013','2012', '2010-2011']
            },
            series: [
                {
                    name: '2018年',
                    type: 'bar',
                    barWidth:15,
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
                    data: [3, 6, 11, 17, 19, 4]
                },
            ]
        }
        showEchartsDom.setOption(options)
      },

      getJingGaoFengBu(){
        let vm = this
        let showEchartDom = echarts.init(vm.$refs.showEcharDom)
        let options = {
              tooltip: {
                  trigger: 'axis',
                  axisPointer: {
                      type: 'cross',
                      label: {
                          backgroundColor: '#5dcaee'
                      },
                  },
                  textStyle:{
                    color: '#51d267'
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
                      data: ['2007','2008','2014'],
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
                      max: 10,
                      interval:2,
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
                      data: [5, 3, 1]
                  },
                 
              ]
          };
          showEchartDom.setOption(options)
      },

      getCountryTop(){
        let vm = this
        let showEchartCountryDom = echarts.init(vm.$refs.showEcharDomStep7)
        let options = {
              tooltip: {
                  trigger: 'axis',
                  axisPointer: {
                      type: 'cross',
                      label: {
                          backgroundColor: '#5dcaee'
                      },
                  },
                  textStyle:{
                    color: '#51d267'
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
                      data: ['字典暴力破解','中间人攻击','设计错误','命令注入'],
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
                      max: 10,
                      interval:2,
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
                                    {offset: 0, color: '#FF4B4B'},
                                    {offset: 0.5, color: '#FF7878'},
                                    {offset: 1, color: '#188df0'}
                                ]
                            )
                        },
                        emphasis: {
                            color: new echarts.graphic.LinearGradient(
                                0, 0, 0, 1,
                                [
                                    {offset: 0, color: '#FFE24F'},
                                    {offset: 0.7, color: '#2378f7'},
                                    {offset: 1, color: '#83bff6'}
                                ]
                            )
                        }
                      },
                      data: [2, 1, 2, 1]
                  },
                 
              ]
          };
          showEchartCountryDom.setOption(options)
      },

      getChartStep(){
        let vm = this
        let showEchartCountryDom = echarts.init(vm.$refs.showEcharDomCountry)
        let options = {
              tooltip: {
                  trigger: 'axis',
                  axisPointer: {
                      type: 'cross',
                      label: {
                          backgroundColor: '#5dcaee'
                      },
                  },
                  textStyle:{
                    color: '#51d267'
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
                      data: ['2013-2016','2009-2012','2005-2008','2001-2004'],
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
                      max: 180,
                      interval:20,
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
                                    {offset: 0, color: '#FF4B4B'},
                                    {offset: 0.5, color: '#FF7878'},
                                    {offset: 1, color: '#188df0'}
                                ]
                            )
                        },
                        emphasis: {
                            color: new echarts.graphic.LinearGradient(
                                0, 0, 0, 1,
                                [
                                    {offset: 0, color: '#FFE24F'},
                                    {offset: 0.7, color: '#2378f7'},
                                    {offset: 1, color: '#83bff6'}
                                ]
                            )
                        }
                      },
                      data: [72, 104,155, 68]
                  },
                 
              ]
          };
          showEchartCountryDom.setOption(options)
      },
      
    },

    components: {
      page_header,
      warning_list,
      threat_trend,
      china_map,
    },
  }
</script>


