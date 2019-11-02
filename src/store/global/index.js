import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import getters from './getters'
import mutations from './mutations'
import * as constants from '../../utils/constants'
import { getDefaultSession } from './common.js'
import { getStorageDataAndDecode } from '../../utils/common'
Vue.use(Vuex)

export default function () {

  let session = getStorageDataAndDecode(constants.LOCAL_STORAGE__SESSION) || getDefaultSession()

	const state = {
	  session
	}
  return {
    state,
    mutations,
    actions,
    getters
    
  }
}
