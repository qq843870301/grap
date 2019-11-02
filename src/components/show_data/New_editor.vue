<template>
  <div>
    <iframe ref="edutirIframe" frameborder=0 width="100%" :height="bodyHeight + 'px'" name="showHere" scrolling=auto src="../../../static/webapp/index.html"></iframe>
  </div>
</template>
<script>
  export default{
    name:'editor',
    data(){
      return {
        bodyHeight:800,
        currentId: this.$route.query.currentId,
      }
    },
    methods:{
      getWindowOffsetHeight(){
        let vm = this
        vm.bodyHeight = window.innerHeight 
      },
      
    },
    created(){
      let vm = this
      vm.getWindowOffsetHeight()
      console.log(vm.currentId, 'v')
    }

  }
</script>