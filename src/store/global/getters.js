import types from './types'
import * as constants from '../../utils/constants'
import * as _ from 'lodash'

let getters = {}
export default getters

getters[types.GETTERS.sessionData] = state => {
  return state.session
}

getters[types.GETTERS.geoCoordMap] = state => {
  return state.session.geoCoordMap
}


getters[types.GETTERS.getNameMap] = state => {
  return state.session.chinaMap
}

getters[types.GETTERS.user] = state => {
  return state.session.user
}

