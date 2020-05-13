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
  },
  mutations: {},
  actions:{}
}