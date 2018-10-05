export default {
  state: {
    favoriteCountries: [],
  },
  mutations: {
    addToFavoriteList(state, payload) {
      state.favoriteCountries.push(payload);
    },
  },
  actions: {

  },
  getters: {
    getFavoriteCountries(state) {
      return state.favoriteCountries;
    },
  },
};
