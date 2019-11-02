const namespace = 'global/'

export default {
  GETTERS: {
    geoCoordMap : namespace + 'geoCoordMap',
    getNameMap: namespace + 'getNameMap',
    sessionData: namespace + 'sessionData',
    user:namespace + 'user',
  },
  ACTIONS: {
    fetchHeatChinaRealData: namespace + 'fetchHeatChinaRealData',
  },
  MUTATIONS: {
    getUserInfo: namespace + 'getUserInfo',
    openLoading: namespace + 'openLoading',
    closeLoading: namespace + 'closeLoading',
    addCount: namespace + 'addCount',
    chinaMapData: namespace +　'chinaMapData',
  }
}
