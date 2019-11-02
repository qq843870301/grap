<template>
  <div id="app">
    <router-view/>
  </div>
</template>
<style lang="scss">
  @import 'sass/_common.scss';
</style>
<style lang="css">
  @import 'element_ui_theme/theme/index.css'
</style>

<script>
  import Vue from 'vue'
  import ElementUI from 'element-ui'

  Vue.use(ElementUI)

  export default {
    name: 'app'
  }
</script>
