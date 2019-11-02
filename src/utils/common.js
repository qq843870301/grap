import Vue from 'vue'
import * as constants from './constants'
import {ROLE_NAME_SMANAGER, IS_ENV_DEV, AUTH_API_BASE_URL} from './constants'
import entry from './entry.js'
import _ from 'lodash'
import * as axios from 'axios'
import {sync} from 'vuex-router-sync'
import vueFilter from 'vue-filter'
import types from '../store/types'
import API_V1_URLS from './api_url.js'
import Bus from './bus.js';
import store from '../store'

/**
 * 格式化秒数为
 * @param seconds
 */
export const parseSecondToTime = function (seconds, unitSec = '秒', unitMiu = '分', unitHour = '小时') {
  let res
  let sec = seconds % 60
  res = '' + sec + unitSec
  if (sec > 0) {
    res = sec + unitSec
  }
  if (seconds >= 60) {
    let miu = Math.floor(seconds % (60 * 60) / 60)
    if (miu > 0) {
      res = miu + unitMiu
    }
  }
  if (seconds >= 60 * 60) {
    let hour = Math.floor(seconds / 60 * 60)
    if (hour > 0) {
      res = hour + unitHour
    }
  }
  return res
}



export const formatUnixtimestamp = function (unixtimestamp) {

  var unixtimestamp = new Date(unixtimestamp);
  var year = unixtimestamp.getFullYear();
  var month = "0" + (unixtimestamp.getMonth() + 1);
  var date = "0" + unixtimestamp.getDate();
  var hour = "0" + unixtimestamp.getHours();
  var minute = "0" + unixtimestamp.getMinutes();
  var second = "0" + unixtimestamp.getSeconds();
  return year + "-" + month.substring(month.length - 2, month.length) + "-" + date.substring(date.length - 2, date.length);
    + " " + hour.substring(hour.length - 2, hour.length) + ":"
    + minute.substring(minute.length - 2, minute.length) + ":"
    + second.substring(second.length - 2, second.length);
}


/**
 * 删除obj value为空字符串的key 并返回
 * @param obj
 * @return {*}
 */
export const getObjEmptyStrRemoved = function (obj) {
  if (_.isEmpty(obj)) {
    return obj
  }
  return _.pickBy(obj, item => item !== '')
}
/**
 * axios请求失败通用处理逻辑
 * @param response axios response
 * @param vm 当前vm实例
 */
export const catchAxiosError = function (response, vm) {
  if (response == null || vm == null) {
    console.error('catchAxiosError:response or vm is null!')
    return
  }
  if (vm._isDestroyed) {
    // debug && console.error('页面已destroy，异常:', response)
    return
  }
  console.log(response, vm)
  if (!response.response) {

    vm.$message.error(response.detail)
    console.error('获取信息失败，请稍后再试…', response.detail)
  } else {
    let errorResponse = response.response
    let errorData = errorResponse.data.detail || {detail: ''}
    let errorDetail = errorData.data.detail || '获取信息失败，请稍后再试…'
    // console.log(response, 're')
    // The request was made, but the server responded with a status code
    // that falls out of the range of 2xx
    // console.log(errorResponse.data)
    // console.log(errorResponse.status)
    // console.log(errorResponse.headers)
    console.error('获取信息失败，请稍后再试…', errorResponse.detail)
    switch (errorResponse.status) {
      case constants.HTTP_STATUS_TOKEN_INVALID:

        // 检查是否token过期
        let isTokenError = ['Refresh has expired.', 'Error decoding signature.'].indexOf(errorDetail) != -1
        // 包含detail字段的信息都清除登录状态回首页
        if (!_.isEmpty(errorDetail)) {
          vm.$store.dispatch(types.ACTIONS.loginOut)
          vm.$confirm(isTokenError ? '登录已过期，是否转向登录页面' : '账户信息异常，是否转向登录页面', '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning'
          }).then(() => {
            window.location.href = entry.app + '#'
          })
          break
        }
      default:
        // vm.$message.error('获取信息失败，请稍后再试…')
        vm.$message.error(errorDetail)
    }
  }
}


/**
 * app初始化，注入一些插件，vue原型属性和方法
 */
export function appInitInject(store, router) {
  // 同步route实例到vuex
  sync(store, router) // done.
  // 注入原型工具类方法
  Vue.prototype.$axios = axios
  Vue.prototype.$_ = _
  Vue.prototype.$$ = window.jQuery || window.$
  Vue.prototype.$api = API_V1_URLS.API_V1_URLS
  Vue.prototype.$bus = Bus


  axios.defaults.baseURL = constants.API_BASE_URL
  axios.defaults.headers.post['Content-Type'] = 'application/json'
  axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
  Vue.mixin({
    mounted() {
      this.$$el = $(this.$el)
    }
  })

  // 首页已登录 进入主页
  // 注册一个全局自定义指令 `v-focus`
  Vue.directive('focus', {
    // 当被绑定的元素插入到 DOM 中时……
    inserted: function (el) {
      // 聚焦元素
      el.focus()
    }
  })

  // 首页已登录 进入主页
}




export function getTimeStr(value) {
  return Math.floor(value / 60) + '分' + (value % 60) + '秒'
}

export function cloneDeep(data) {
  return JSON.parse(JSON.stringify(data));
}

export function registerFilters() {
  Vue.use(vueFilter)
  Vue.filter('sd_percent', getPercent)
  Vue.filter('sd_tail_zero_clear', getTailZeroClear)
  Vue.filter('time', getTimeStr)
  Vue.filter('num', getNumber)
  Vue.filter('jsonPretty', (data) => JSON.stringify(data, '', 2))
  Vue.filter('log', (data) => {
    console.log(JSON.parse(JSON.stringify(data)))
    return ''
  })
  Vue.filter('linkify', linkify)
  Vue.filter('linkifyImg', linkifyImg)
  Vue.filter('logError', (data) => {
    console.error(JSON.parse(JSON.stringify(data)))
    return ''
  })
}

/**
 * 通过序号获取ABCD选项 1+ => A+
 * @param sort
 * @return {string}
 */
export const getOptionBySort = function (sort) {
  return String.fromCharCode('A'.charCodeAt(0) + (sort - 1))
}
/**
 * 小数转百分数 0.233=>23
 * @param decimal 小数 0.11212
 * @param toFixed 百分数小数位（默认没有小数位）（小数位为0，默认不显示） 1=>23.1
 * @return (0.110,1)=>11 (0.2323,2)=>23.23
 */
export const getPercent = function (decimal, toFixed) {
  return getTailZeroClear(decimal * 100, toFixed)
}
/**
 * 小数转整数
 * @param decimal 小数 11.212
 * @param Math.trunc 截尾取整
 * @return (12.99)=>12 (23.23)=>23
 */
export const getNumber = function (num) {
  num = Math.trunc(num)
  return num
}
/**
 * 小数去零
 * @param
 * @param
 * @return
 */
export const getTailZeroClear = function (decimal, toFixed) {
  toFixed = toFixed || 0
  decimal = (decimal || 0).toFixed(toFixed)
  return Number(decimal).toString() || 0
}

/**
 * (2,2)=>02,(2,3)=>002
 * @param num
 * @param bits
 */
function fixed2NbitNumber(num, bits) {
  let numStr = String(num)
  let dur = bits - numStr.length
  if (dur > 0) {
    numStr = Array(dur + 1).join('0') + numStr
  }
  return numStr
}

/**
 * (60)=>00:01:00
 * (3661)=>01:01:01
 * @param totalSeconds 秒数
 * @return {string}
 */
export const getClockStr = function (totalSeconds) {
  let seconds = Math.floor(totalSeconds % 60)
  let minutes = Math.floor((totalSeconds / 60) % 60)
  let hour = Math.floor(totalSeconds / (60 * 60))
  return [fixed2NbitNumber(hour, 2), fixed2NbitNumber(minutes, 2), fixed2NbitNumber(seconds, 2)].join(':')
}


/**
 * 设置 token
 */
export function setAxiosToken(token) {
  // 测试用，过期token
  // token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IjhhMTA2ZWM0NWMyZWM4ZTMwMTVjMmVjOTNiODMwMDAwIiwidXNlcl9pZCI6MTUsImVtYWlsIjpudWxsLCJleHAiOjExOTU1MzA1MTF9.ZXkFDEOtm4XDZMo7RuzHVmb89MJj_vpCZ9jCvVuQH-M'
  axios.defaults.headers.common['Authorization'] = getAuthorizationTokenHeaderValue(token)
}

export function getAuthorizationTokenHeaderValue(token) {
  return 'JWT ' + token
}

const CHN_NUM_CHAR = ['一', '二', '三', '四', '五', '六', '七', '八', '九', '十', '十一', '十二', '十三', '十四',
  '十五', '十六', '十七', '十八', '十九', '二十']

/**
 * 获取汉字数字 [0,1,2,3]=>['一', '二', '三', '四']
 * @return num 0+
 */
export function formatChineseNum(num) {
  return CHN_NUM_CHAR[num]
}

/**
 * base64 编码
 * @param str
 * @return {string}
 */
export function b64EncodeUnicode(str) {
  return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, function (match, p1) {
    return String.fromCharCode('0x' + p1)
  }))
}

/**
 * base64 解码
 * @param str
 * @return {string}
 */
export function b64DecodeUnicode(str) {
  return decodeURIComponent(atob(str).split('').map(function (c) {
    return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2)
  }).join(''))
}

export function dataURItoBlob(base64Data) {
  let byteString
  if (base64Data.split(',')[0].indexOf('base64') >= 0)
    byteString = atob(base64Data.split(',')[1])
  else
    byteString = unescape(base64Data.split(',')[1])
  let mimeString = base64Data.split(',')[0].split(':')[1].split(';')[0]
  let ia = new Uint8Array(byteString.length)
  for (let i = 0; i < byteString.length; i++) {
    ia[i] = byteString.charCodeAt(i)
  }
  return new Blob([ia], {type: mimeString})
}

/**
 * 存储 storage 数据，并base64 编码
 */
export function setStorageDataAndEncode(key, value) {
  let json = JSON.stringify(value)
  localStorage.setItem(key, b64EncodeUnicode(json))
}

/**
 * 获取 storage 数据，并base64 解码
 * @return Object
 */
export function getStorageDataAndDecode(key, value) {
  let json = localStorage.getItem(key)
  if (json != null) {
    try {
      let jsonDecode = b64DecodeUnicode(json)
      return JSON.parse(jsonDecode)
    } catch (e) {
    }
  }
  return null
}

/**
 *
 * @param choices
 * <pre>
 *    [choice:{iscorrect}]
 * </pre>
 *
 * @return A,B,C
 */
export function getRightChoicesSortStr(choices) {
  return (choices || []).reduce((sorts, choice, index) => {
    (choice.iscorrect == 1 || choice.correct == 1) && sorts.push(getOptionBySort(index + 1))
    return sorts
  }, []).sort().join(',')
}

/**
 *
 * @param selected choices
 * <pre>
 *    [choice:{iscorrect}]
 * </pre>
 *
 * @return  A, B,C
 */
export function getUserOptionsStr(user_answer, choices) {
  user_answer = user_answer || []
  choices = choices || []
  // console.log(user_answer, choices);
  return choices.map((choice, index) => user_answer.includes(choice.id) ? index : -1)
    .filter(index => index != -1).map(index => getOptionBySort(index + 1)).sort().join(',')
}

/**
 * 锚点到某个dom 依赖全局 jquery
 */
export function goToDomElement(dom) {
  $('html, body').animate({
    scrollTop: ($(dom).offset().top - 100) + 'px'
  }, 'fast')
}

/**
 * 检查是否有权限访问当前路由 通过 meta.limitRoles 判断
 * @param router
 * @param store
 */
export function checkedPrivilageRoute4UserRole(router, store) {
  router.beforeEach((to, from, next) => {
    // console.log('beforeRouteEnter:', to, from)
    let limitRoles = _.reduce(to.matched, (limitRoles, route) => (limitRoles.concat(route.meta.limitRoles || [])), [])
    if (_.isEmpty(limitRoles)) {
      next()
    } else {
      let role = store.getters[types.GETTERS.role]
      let userRole = (role || {})['userRole']
      // 当前角色信息为空时，回到首页
      if (_.isEmpty(role) || _.isEmpty(userRole)) {
        console.error('当前角色信息异常 ', limitRoles, '回到主页')
        window.location.href = entry.app
      }
      if (limitRoles.indexOf(userRole) != -1) {
        next()
      } else if (userRole == 'SMANAGER') {
        window.location.href = entry.app_smanager_management
      } else {
        console.error('缺少权限访问路由 ', limitRoles, '回到主页')
        window.location.href = entry.app
      }
    }
  })
}

export const getMatchedRouteTitle = function (matchedRoute) {
  const metaTitle = matchedRoute.meta.title
  const vm = matchedRoute.instances.default
  // console.log({vm, instances: matchedRoute.instances})
  if (vm == null) {
    return metaTitle
  }
  // console.log({vm, $options: vm.$options})
  const title = vm.$options.title
  return _.isFunction(title) ? title.call(vm) : (title || metaTitle )
}

/**
 * 设置页面 title，通过路由 vm.title 或者 $route.meta.title 读取当前路由组件的title
 * @param vm
 */
export function setRouteTitle(route) {
  const titles = route.matched.map(item => getMatchedRouteTitle(item)).filter(title => !_.isEmpty(title))
  // console.log(titles)
  if (!_.isEmpty(titles)) {
    document.title = titles.slice(-1)
  }
}

export const watchAndSetRouteTitle = function () {
  const _setRouteTitle = _.debounce(setRouteTitle, 100)
  Vue.mixin({
    mounted() {
      const vm = this
      vm.$route && _setRouteTitle(vm.$route)
    },
  })
}
export const linkify = function (text) {
  var urlRegex = /(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig;
  return text.replace(urlRegex, function (url) {
    return '<a href="' + url + '" target="_blank"><img src="' + url + '"/></a>';
  });
}
export const linkifyImg = function (text) {
  var urlRegex = /(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig;
  return text.replace(urlRegex, function (url) {
    return '<img src="' + url + '"/>';
  });
}
export const copyData = function (data) {
  return JSON.parse(JSON.stringify(data))
}


/*contenteditable元素只能输入文本内容实例页面*/
export const getOnlyString = function () {
  let vm = this
  vm.$$('[contenteditable]').each(function () {
    // 干掉IE http之类地址自动加链接
    try {
      document.execCommand("AutoUrlDetect", false, false);
    } catch (e) {
    }
    $(this).on('paste', function (e) {
      e.preventDefault();
      let text = null;
      if (window.clipboardData && clipboardData.setData) {
        // IE
        text = window.clipboardData.getData('text');
      } else {
        text = (e.originalEvent || e).clipboardData.getData('text/plain') || prompt('在这里输入文本');
      }
      if (document.body.createTextRange) {
        if (document.selection) {
          textRange = document.selection.createRange();
        } else if (window.getSelection) {
          sel = window.getSelection();
          let range = sel.getRangeAt(0);
          // 创建临时元素，使得TextRange可以移动到正确的位置
          let tempEl = document.createElement("span");
          tempEl.innerHTML = "&#FEFF;";
          range.deleteContents();
          range.insertNode(tempEl);
          textRange = document.body.createTextRange();
          textRange.moveToElementText(tempEl);
          tempEl.parentNode.removeChild(tempEl);
        }
        textRange.text = text;
        textRange.collapse(false);
        textRange.select();
      } else {
        // Chrome之类浏览器
        document.execCommand("insertText", false, text);
      }
    });
    // 去除Crtl+b/Ctrl+i/Ctrl+u等快捷键
    $(this).on('keydown', function (e) {
      // e.metaKey for mac
      if (e.ctrlKey || e.metaKey) {
        switch (e.keyCode) {
          case 66: //ctrl+B or ctrl+b
          case 98:
          case 73: //ctrl+I or ctrl+i
          case 105:
          case 85: //ctrl+U or ctrl+u
          case 117: {
            e.preventDefault();
            break;
          }
        }
      }
    });
  })
}
/*清除字符串中空格，与反斜线 + ‘，’ "\,"*/
export const clearTrim = function (str, is_global) {
  let result = str.replace(/(^\s+)|(\s+$)|(^\\,)/g, "");
  if (is_global.toLowerCase() == "g") {
    result = result.replace(/(\s)|(\\\,)/g, "");
  }
  return result
}
export const removeEmpty = function (obj) {
  return _(obj).omitBy(_.isEmpty).value()
}

/**
 * 路由点位参数传
 * @param args
 * @function
 //两种调用方式
 let test2="我是<name>，今年<age>了";
 test2.format(<name:"loogn",age:22>);
 * @return "我是loogn，今年22了"
 */
String.prototype.format = function (args) {
  let result = this;
  if (arguments.length > 0) {
    if (arguments.length == 1 && typeof (args) == "object") {
      for (let key in args) {
        if (args[key] != undefined) {
          let reg = new RegExp("(<" + key + ">)", "g");
          result = result.replace(reg, args[key]);
        }
      }
    }
  }
  else {
    for (let i = 0; i < arguments.length; i++) {
      if (arguments[i] != undefined) {
        //let reg = new RegExp("({[" + i + "]})", "g");//这个在索引大于9时会有问题
        let reg = new RegExp("(<)" + i + "(>)", "g");
        result = result.replace(reg, arguments[i]);
      }
    }
  }
  // console.log(result);
  return result;
}


//报错导出方法
export function base64File(s) {
  return window.btoa(unescape(encodeURIComponent(s)));
}

export function formateFile(s, c) {
  return s.replace(/{(\w+)}/g,
    function (m, p) {
      return c[p];
    });
}


/**
* [getNameDatas 获取电厂数据集]
* @return {[type]} [description]
*/
export function getNameDatas(vm){
  let url = '/mx_graph/electric_station/'
  let listData = ''
  return new Promise((resolve, reject) => {
    axios.get(url).then(res=>{
      if(res.status == 200){
        // listData = res.data
        resolve(res.data)
          //地图json 数据 存入 vuex 管理
        // store.commit(types.MUTATIONS.chinaMapData, listData)
      }
    }).catch(res=>{
      console.log(res, 'res 电厂')
      // vm.$message.error(response.response.data.detail)
      // vm.$message.error('电厂数据集获取有误 ')
    })
  })
 
}
 
