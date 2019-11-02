<template>
	<div>
		<table class="graph-table-style">
        <tr>
          <th width="20%">关注点</th>
          <th width="20%">时间</th>
          <th width="30%">关注内容</th>
          <th width="30%">概述</th>
        </tr>
        <tr v-for="(list, index) in contentListData">
          <td v-text="list.about"></td>
          <td class="last-child-td"  v-text="list.time"></td>
          <td v-text="list.contents"></td>
          <td class="last-child-td" v-text="list.overview"></td>
        </tr>
      </table>
      <el-button type="text" class="see-data-more-list" icon="el-icon-d-arrow-right">更多</el-button>
	</div>
</template>
<script>
  export default {
    name: 'home',
    data(){
    	return {
        contentListData: [{
          about:'设计问题',
          time: '2018-05-03',
          contents: '设计问题产生的问题',
          overview: '设计问题产生的问题 10 个',
        }, {
          about:'跨站请求',
          time: '2019-02-07',
          contents: '跨站请求问题',
          overview: '跨站请求问题 反馈 7 个'
        }, {
          about:'拒绝服务',
          time: '2019-03-03',
          contents: '拒绝服务',
          overview: '拒绝服务 5',
        }, {
          about:'命令注入',
          time: '2016-05-03',
          contents: '命令注入',
          overview: '命令注入 23'
        },{
          about:'逻辑错误',
          time: '2016-05-03',
          contents: '逻辑错误',
          overview: '逻辑错误 4'
        },{
          about:'缓冲区溢出/内存越界',
          time: '2016-05-03',
          contents: '缓冲区溢出/内存越界',
          overview: '缓冲区溢出/内存越界 11'
        }]
    	}
    },
    mounted(){
        let vm = this
    },
    created(){
    	let vm = this

    },
    methods:{

    },
    
  }
</script>