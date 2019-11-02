<template>
  <!-- 面包屑导航——位置信息 -->
  <div class="user_container white_bg">
    <div class="iconfont sd_position">
      <router-link tag="span" to="/">{{base}}</router-link> &nbsp;/&nbsp;
      <a @click="goToLink(bread)" v-for="(bread,index) in breadcrumb" :key="bread.route.path">
        {{getName(bread.name)}}{{(index==breadcrumb.length-1)?'':'&nbsp;/&nbsp;'}}
      </a>
    </div>
  </div>
</template>
<style>
</style>
<script>
  export default {
    name: 'Breadcrumb',
    props: {
      base: {default: '', type: String}
    },
    data() {
      return {}
    },
    methods:{
      goToLink(curPath){
          const vm = this

        if(curPath.route.path=="/user/school/classMain/:schoolId/:schoolName"){
          vm.$router.replace({path:'/user/school/classMain/' + vm.$route.params.schoolId + '/' + vm.$route.params.schoolName})
        }else if(curPath.route.path=="/user/school/classMain/:schoolId/:schoolName/classDetail/:classId/:className"){
          vm.$router.replace({path:'/user/school/classMain/' + vm.$route.params.schoolId + '/' + vm.$route.params.schoolName+ '/classDetail/' +vm.$route.params.classId + '/' + vm.$route.params.className})

        }else if(curPath.route.path=="/user/school/teacher/:schoolId/:schoolName"){
          vm.$router.replace({path:'/user/school/teacher/' + vm.$route.params.schoolId + '/' + vm.$route.params.schoolName})
        }else if(curPath.route.path=="/user/school/bulkLoad/:schoolId/:schoolName"){
          vm.$router.replace({path:'/user/school/bulkLoad/' + vm.$route.params.schoolId + '/' + vm.$route.params.schoolName})
        }else{
          vm.$router.replace(curPath.route)
        }
      },
      getName(nam){
          const vm = this
        if(nam =="班级详情" ){
              return vm.$route.params.className
        }else  if(nam =="班级列表"||nam =="老师管理" ){
          return vm.$route.params.schoolName
        } else{
            return nam
        }
  }
    },
    computed: {
      breadcrumb() {
        let vm = this

        let breadcrumb = vm.$route.matched
          .filter(route => !!(route.meta.breadcrumb || {}).name)
          .map(route => {
            if (route.meta && route.meta.breadcrumb) {
              return {
                route,
                ...route.meta.breadcrumb
              }
            }
          }).filter(bread => !!bread)

        return breadcrumb
      }
    },
  }
</script>
