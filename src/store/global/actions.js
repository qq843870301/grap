import  types from './types'

let actions = {}
export default actions

actions[types.ACTIONS.fetchHeatChinaRealData] = ({state, commit, getters}, chartsObj) => {
          let chinaMapdatas = getters[types.GETTERS.getNameMap]
          let chinaMapCoord =  getters[types.GETTERS.geoCoordMap]
          let sessionDatas = getters[types.GETTERS.sessionData]
          let arr = []
          let len = chinaMapdatas.length
          while (len--) {
            let geoCoord = chinaMapCoord[chinaMapdatas[len].name]
            if (geoCoord) {
              arr.push({
                name: chinaMapdatas[len].name,
                value: geoCoord.concat(chinaMapdatas[len].value)
              })
            }
          }
          let lightData = arr.sort((a, b) => {
            return b.value - a.value
          }).slice(0 + sessionDatas.showCount, sessionDatas.showCityNumber + sessionDatas.showCount)
          if (sessionDatas.isLoading) {
            chartsObj.hideLoading()
            commit(types.MUTATIONS.closeLoading, false)
          }
          chartsObj.setOption({
            series: [
              {
                name: '恶意外链',
                data: arr
              },
              {
                name: '恶意攻击',
                data: lightData
              }
            ]
          })
          commit(types.MUTATIONS.closeLoading)
}
