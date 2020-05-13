// import Vue from 'vue';
import ads from '../mock/fullAds'

export default {
  namespaced: true,
  state: {
      ads: ads,
  },
  getters: {
    ads: ({ads}) => (ads),
    promoAds: ({ads})=> ads.filter(ad=>ad.promo),
    myAds: ({ads}) => (ads),
    // adById: ({state}) => (adId) => state.find(ad=> ad.id===adId),
    adById (state) {
      return adId => {
        return state.ads.find(ad => ad.id === adId)
      }
    }
  },
  mutations: {
    ADD_ADS(state, payload){
      state.ads.push(payload)
      // Vue.set(state.ads, newAd)
    }
  },
  actions:{
    createAd ({commit}, payload){
      payload.id=Math.random()
      commit('ADD_ADS', payload)
    }
  }
}