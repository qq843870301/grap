<template>

  <div>
    <div class="weui-msg">
      <div class="weui-msg__icon-area"><i class="weui-icon-warn weui-icon_msg"></i></div>
      <div class="weui-msg__text-area">
        <h2 class="weui-msg__title" v-text="msg">访问的页面不存在</h2>
        <p class="weui-msg__desc">请检查输入的地址是否正确</p>
      </div>
      <div class="weui-msg__opr-area">
        <p class="weui-btn-area">
          <a href="javascript:history.back();" class="weui-btn weui-btn_primary">返回</a>
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
      vm.msg = vm.$route.query.msg || '未知错误'
    },
    components: {}
  }
</script>
