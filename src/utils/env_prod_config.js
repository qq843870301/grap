/**
 * 生产版本 多环境配置
 */
import {IS_ENV_PROD} from './constants'

// 正式版
export const ENV_PROD_PROFILE_PROD = 'prod'
// 测试版
export const ENV_PROD_PROFILE_TEST = 'test'
//开发版
export const ENV_PROD_PROFILE_DEV = 'dev'



export const ENV_PROD_PROFILE = process.env.ENV_PROD_PROFILE
export const version = process.env.ENV_PROD_PROFILE

export const PROD_CONFIGS = {
  [ENV_PROD_PROFILE_PROD]: {
    // 版本名
    name: '正式版',
    // api
    managerURL: 'http://soc.122.204.161.218.xip.io:9023/manager/',
    apiBaseUrl: 'http://soc.122.204.161.218.xip.io:9023/',
  },
 
  [ENV_PROD_PROFILE_TEST]: {
    name: '测试版',
    managerURL: 'http://soc.122.204.161.218.xip.io:9023/manager/',
    apiBaseUrl: 'http://soc.122.204.161.218.xip.io:9023/', //http://soc.122.204.161.218.xip.io:9023/
  },
  [ENV_PROD_PROFILE_DEV]: {
    name: '开发版',
    managerURL: 'http://192.168.33.12:8011/manager/',
    apiBaseUrl: 'http://192.168.33.12:8011/',
  },
}[ENV_PROD_PROFILE]


if (IS_ENV_PROD && !PROD_CONFIGS) {
  throw `未知的生产版本 ${ENV_PROD_PROFILE}`
}
