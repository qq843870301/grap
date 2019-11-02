<template>
  <div>
    <page_header v-if="$route.meta.global_header"></page_header>
    <!-- <breadcrumb base="学业-用户管理中心" v-if="$route.meta.breadcrumb"/> -->
    <div id="content">
      <router-view/>
    </div>
    <!--<page_footer v-if="$route.meta.global_footer"/>-->
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'
  import page_header from './_common/Header.vue'
  import page_footer from './_common/Footer.vue'
  import Breadcrumb from './_common/Breadcrumb.vue'
  import mixin_token from '../utils/mixin_app__token'

  export default {
    name: 'user_pageMain',
    data() {
      return {
      }
    },
    methods: {
      getUserInfo(){
        let vm = this
        let url = '/cnpo_user/user/' + vm.userName + '/'
        vm.$axios.get(url).then(response=>{
          if(response.status == 200){
            vm.userPromissions = response.data
            console.log(vm.userPromissions, 'userPromissions')
            if(vm.userPromissions != undefined){
              vm.$message.error(vm.userPromissions[0])
            }else{
              vm.$emit('userInfoData', vm.userPromissions)
               // vm.$store.commit(types.MUTATIONS.getUserInfo, vm.userPromissions)
            }
          }
        })
      },
    },

    mounted(){
      const vm = this
    },
    created() {
      let vm = this
      vm.getUserInfo() //获取用户信息
    },
    mixins: [mixin_token],
    components: {
      page_header,
      page_footer,
      Breadcrumb
    },
  }
</script>

<style scoped>
</style>
