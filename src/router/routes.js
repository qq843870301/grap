/*error page*/
import _routes from '@/components/error/_routes.vue'
import _error from '@/components/error/_error.vue'
import _500 from '@/components/error/_500.vue'
import _no_page from '@/components/error/_no_page.vue'

/*登录*/
import Home from '@/components/show_data/Home.vue' //登录综合页面
import PageList from '@/components/show_data/List.vue' //列表页面
import PageModelList from '@/components/show_data/Model_graph.vue' //列表页面
import PageInfo from '@/components/show_data/Info.vue' //详情页面
import PageTreeInfo from '@/components/show_data/Info.vue' //总目录树详情页面
import ModelInfo from '@/components/show_data/Model_info.vue' //模板查看详情页面

import Editor from '@/components/show_data/New_editor.vue' //详情页面
import graphInfo from '@/components/show_data/Graph_info.vue' //详情页面
import uploadXml from '@/components/testInfo/upload_xml.vue' //上传xml 回显


export default [
  {
    path: '/',
    name: 'Main',
    component: Home,
    meta:{
       global_header: true,
        global_footer: true,
        title: '主页'
    },
    children: [
      {path: '/', redirect: {path: 'home'}},
      {
        path:'home',
        name:'home',
        meta: {
          title: '首页',
          global_header: true,
          global_footer: true
        },
        component: Home,
      },
    ],
  },
  {
    path:'/editor',
    name:'editor',
    meta: {
      title: '编辑页面',
      global_header: true,
      global_footer: true
    },
    component: Editor,
  },
  {
    path:'/list',
    name:'list',
    meta: {
      title: '列表页面',
      global_header: true,
      global_footer: true
    },
    component: PageList,
  },
  {
    path:'/model',
    name:'model',
    meta: {
      title: '模板列表页面',
      global_header: true,
      global_footer: true
    },
    component: PageModelList,
  },
  
  {
    path:'/info/:id',
    name:'info',
    meta: {
      title: '详情页面',
      global_header: true,
      global_footer: true
    },
    component: PageInfo,
  },

  {
    path:'/modelInfo/:id',
    name:'modelInfo',
    meta: {
      title: '模板详情页面',
      global_header: true,
      global_footer: true
    },
    component: ModelInfo,
  },
  {
    path:'/allTree',
    name:'allTree',
    meta: {
      title: '总目录树详情页面',
      global_header: true,
      global_footer: true
    },
    component: PageTreeInfo,
  },

  {
    path:'/upload',
    name:'uploadXml',
    meta: {
      title: '上传xml',
      global_header: true,
      global_footer: true
    },
    component: uploadXml,
  },

  



  {
    path: '/route',
    name: 'route',
    component: _routes,
    desc: '路由表'
  },
  {path: '/_error', component: _error, desc: '_error'},
  {path: '/_500', component: _500, desc: '_500'},
  {path: '*', component: _no_page, desc: '_404'}// 404 此路由一定要是最后一条
]
