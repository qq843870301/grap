<template>

  <div class="white_bg" style="height:100%">
    <div class="sd_content sd_page_error weui-msg">
      <img src="../../assets/images/error.png" width="900" height="350"  alt="">
      <div class="weui-msg__text-area">
        <h2 class="weui-msg__title" v-text="msg"></h2>
        <p class="weui-msg__desc">请检查输入的地址是否正确</p>
      </div>
      <div class="weui-msg__opr-area">
        <p class="weui-btn-area">
          <a href="/" class="iconfont sd_wrong_page_home">首页</a>
          <a href="javascript:history.go(-1)" class="iconfont sd_wrong_page_back">返回</a>
        </p>
      </div>
      <!--<div class="weui-msg__extra-area">
        <div class="weui-footer">
          <p class="weui-footer__links">
            <a href="javascript:void(0);" class="weui-footer__link">底部链接文本</a>
          </p>
          <p class="weui-footer__text">Copyright © 2008-2016 weui.io</p>
        </div>
      </div>-->
    </div>

  </div>
</template>
<style>
</style>
<script>
  export default{
    name: 'page_404',
    data () {
      return {
        msg: ''
      }
    },
    created () {
      let vm = this
      vm.msg = vm.$route.query.detail || '未知错误'
    },
    components: {}
  }
</script>
