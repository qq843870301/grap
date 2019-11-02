/**
 * 入口多环境配置
 * Created by hao.wang on 2017/3/29.
 */
let dev = {
  app: '/',
  // app_bigdata_user: '/index_bigdata_user.html',
}

let prod = {
  app: '/',
  // app_bigdata_user: '/index_bigdata_user.html',
}

export  default (process.env.NODE_ENV === 'production' && process.env.RENAME_ENTRY_ROUTE) ? prod : dev
