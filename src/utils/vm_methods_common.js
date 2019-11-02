import types from '../store/global/types'
import Vue from 'vue'
import store from '../store'
import {getOutLogin, catchAxiosError} from './common'
/**
 * 登出
 */
export const common_loginOut = function () {
  let vm = this
  // getOutLogin()
  vm.$store.dispatch(types.ACTIONS.loginOut)
  
}
export const loginInMain = function(){
  const vm = this
  const url = 'account/current_role'
  vm.$axios.get(url).then(response => {
    if (response.status == 200) {
      let currentRole = response.data
      vm.dataLoading = true
       store.commit(types.MUTATIONS.setLoginData, currentRole)
      setStorageDataAndEncode(constants.LOCAL_STORAGE__CUR_ROLE_ID, role)
      
    }

  }).catch(response => {
  if(response.status == 403){
      vm.dataLoading = false
    }
    catchAxiosError(response, vm)

  })
}


/**
 * 根据角色判断进入不通主页路由
 */
export const common_judgeRoleRoute = function () {
  let vm = this
  // 根据角色不同，跳转对应路由主页
  if (vm.$route.path == '/') {
    let rolePath = ''

    if (vm.$store.getters[types.GETTERS.ROLE_IS.teacher]) {
      rolePath = 'teacher'
    } else if (vm.$store.getters[types.GETTERS.ROLE_IS.student]) {
      rolePath = 'student'
    } else if (vm.$store.getters[types.GETTERS.ROLE_IS.guardian]) {
      vm.$message({
        message: '暂不支持家长访问',
        type: 'warning'
      })
      rolePath = '404'
    } else {
      // 未登录，去往主页登录
      location.href = '/'
    }
    vm.$router.replace({path: '/' + rolePath})
  }

}



/**
 * 获取route对象对应的 full_path
 * @param route
 * @return {string}
 */
export const common_getRouteHref = function (route) {return this.$router.resolve(route).href}

Vue.mixin({
  data(){
    return {
      loadingMathJax: false
    }
  }
})

/**
 * 通知mathjax重新渲染
 */
export const common_refreshMathjax = function (selector) {
  let vm = this
  if ('loadingMathJax' in vm) {
    Vue.set(vm, 'loadingMathJax', true)
  } else {
    vm.loadingMathJax = true
  }

  if ('MathJax' in window) {
    let $el = selector ? vm.$$el.find(selector)[0] : vm.$el
    MathJax.Hub.Config({
      extensions: ['tex2jax.js'],
      jax: ['input/TeX', 'output/PreviewHTML'],
      tex2jax: {
        inlineMath: [['\\[', '\\]']],
        displayMath: [['\\(', '\\)']],
        processEscapes: false
      },
      'HTML-CSS': {availableFonts: ['TeX']}
    })
    MathJax.Hub.Queue(['Typeset', MathJax.Hub, $el, function () {
      // console.log('refresh callback')
      $(vm.$el).removeAttr('mathjax-content').find('[mathjax-content]').removeAttr('mathjax-content')
      // console.log('refreshed')
      vm.loadingMathJax = false
    }])   // 通知mathjax重新渲染
  } else {
    console.error('common_refreshMathjax:MathJax 未初始化')
    $('[mathjax-content]').removeAttr('mathjax-content')
    vm.loadingMathJax = false
  }
}
/** 将text中的html字符转义， 仅转义 < 字符
 * @param  { String } str 需要转义的字符串
 * @returns { String }     转义后的字符串
 */

export const common_updateHtml = function (str = null) {
  this.common_refreshMathjax
  // console.log('2', str)
  let strs = str ? str.replace(/\s+/g, (s) => {
    return ' '
  }) : ''
  // console.log('strs', strs)

  return strs.replace(/\\\[.*?\\\]/g, (a) => {
    let s = a.replace(/</g, '&lt;')
    return s
  })
}
