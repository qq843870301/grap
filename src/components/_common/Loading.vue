<template>
   <p class="page-infinite-loading">
    <mt-spinner type="fading-circle" :size="20" color="#00c3a3"></mt-spinner><br>加载中...
  </p>
</template>
<style lang="scss">
  .page-infinite-loading{
    display: block;
    padding:0.3rem 0;
    text-align:center;
    span{
      padding-bottom:0.3rem;
      display:inline-block;
    }
  }
</style>

<script>
  import Vue from 'vue'
  export default{
    name: 'loading',
  }
</script>
