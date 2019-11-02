import types from './types'
import store from 'store'
import * as constants from '../../utils/constants'
import { getDefaultSession } from './common.js'
import { setAxiosToken, setStorageDataAndEncode } from '../../utils/common'

function saveSession (session) {
  setStorageDataAndEncode(constants.LOCAL_STORAGE__SESSION, session)
}


export default {
	[types.MUTATIONS.closeLoading] (state, closeLoading) {
      state.session.isLoading = closeLoading
      saveSession(state.session)
  },
  [types.MUTATIONS.openLoading] (state, openLoading) {
      state.session.isLoading = openLoading
      saveSession(state.session)
  },

  [types.MUTATIONS.chinaMapData] (state, chinaMapData) {
      console.log(chinaMapData, 'getr chinaMapData')
      state.session.chinaMap = chinaMapData
      saveSession(state.session)
  },

  [types.MUTATIONS.getUserInfo] (state, userData) {
      state.session.user = userData
      saveSession(state.session)
  },

  [types.MUTATIONS.addCount] (state) {
      state.session.showCount ++
	    // test
	    if (state.session.showCount >= 70) {
	      state.session.showCount = 1
	    }
      saveSession(state.session)
  },

}