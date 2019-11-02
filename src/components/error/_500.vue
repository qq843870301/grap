<template>
  <div class="user_container white_bg" style="height:100%;">
    <div class=" weui-msg sd_page_error">
      <div class="weui-msg__icon-area">
        <img src="../../assets/images/500.png" class="img_404"/>
        <div class="introduce_404">
          <!--<h1 class="msg_404">404 ERROR</h1>-->
          <span>网络出错了，程序员哥哥正在奋力抢救ing...</span>
          <!--按钮操作-->
          <div class="weui-msg__opr-area">
            <p class="weui-btn-area">
              <a class="iconfont sd_wrong_page_home">首页</a>
              <a href="javascript:history.go(-1);" class="iconfont sd_wrong_page_back">返回</a>
            </p>
          </div>
        </div>

      </div>
    </div>

  </div>
</template>
<script>
  export default{
    name: 'page_500',
    data () {
      return {
        msg: ''
      }
    },
    created () {
      let vm = this
      vm.msg = vm.$route.query.msg || '未知错误'
    },
    components: {}
  }
</script>
