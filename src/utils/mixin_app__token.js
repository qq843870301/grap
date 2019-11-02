import {setAxiosToken, updateRoles, getNameDatas} from './common'
import types from '../store/global/types'

export default {
  beforeCreate(){
    // 获取token
    let vm = this
    let token = vm.$store.getters[types.GETTERS.token] || ''
    // console.log(token, 'token')
    if(token){
      setAxiosToken(token)
    }
    // getNameDatas(vm)

    // 更新角色信息
    // updateRoles(vm.router, vm.$store)
  },
}
