
import {PROD_CONFIGS} from './env_prod_config'

// localStorge 数据存储keys
export const LOCAL_STORAGE__SESSION = '_absdcddsadfs'
export const LOCAL_STORAGE__CUR_ROLE_ID = '_absdcddsadfz'
export const LOCAL_STORAGE__PAPER_DATA = '_sakdjflaskjfk222l'
export const LOCAL_STORAGE__BASE_API = 'base_api'

/**
 * 是否是生产环境
 * @type {boolean}
 */
export const IS_ENV_PROD = process.env.NODE_ENV === 'production'

/**
 * 是否是开发环境
 * @type {boolean}
 */
export const IS_ENV_DEV = process.env.NODE_ENV === 'development'

export const API_BASE_URL_DEV  = 'api'

export const API_BASE_URL_DEV_TEST = 'http://soc.122.204.161.218.xip.io:9023/'

// 获取对应环境 api url
function getApiBaseUrl() {
  return process.env.API_BASE_URL || (
      IS_ENV_PROD ? PROD_CONFIGS.apiBaseUrl + API_BASE_URL_DEV : (
        // 开发模式优先从localStorage中取
        localStorage.getItem(LOCAL_STORAGE__BASE_API) || API_BASE_URL_DEV_TEST + API_BASE_URL_DEV
      ))
}

//后台资源管理地址配置
export const 	COMMON_MANAGER_URL =  IS_ENV_PROD ? PROD_CONFIGS.managerURL : 'http://soc.122.204.161.218.xip.io:9023/manager/'

// console.log(getApiBaseUrl(), '1233434')
// 优先从启动参数中获取 api uri
export const API_BASE_URL = getApiBaseUrl()

//跳转认证中心地址配置
export const AUTH_API_BASE_URL = IS_ENV_PROD ? PROD_CONFIGS.apiBaseUrl : 'http://soc.122.204.161.218.xip.io:9023/manager/'

export const AUTH_CLIENT_ID = IS_ENV_PROD ? PROD_CONFIGS.clientId : '2AM6D9dG7kbygWmAC8aDmH'
// export const AUTH_CLIENT_ID = IS_ENV_PROD ? PROD_CONFIGS.clientId : 'cvtLTmmtU7CXtJTjJg4i3c'
// api 用户状态异常 http状态码
export const HTTP_STATUS_TOKEN_INVALID = 403

// 角色名
export const ROLE_NAME_TEACHER = 'TEACHER'
export const ROLE_NAME_STUDENT = 'STUDENT'
export const ROLE_NAME_GUARDIAN = 'GUARDIAN'
export const ROLE_NAME_SMANAGER = 'SMANAGER'

// vuex 状态组件
export const STORE__GLOBAL = 'global'
export const STORE__STUDENT = 'student'
export const STORE__TEACHER = 'teacher'
export const STORE__SMANAGER = 'smanager'

// export const STORE__STUDY_DIAGNOSE_STUDENT__DO_DIAGNOSE = 'study_diagnose/student/do_diagnose'






