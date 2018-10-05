export default {
  state: {
    favoriteCities: [],
  },
  mutations: {
    addToFavoriteList(state, payload) {
      state.favoriteCities.push(payload);
      localStorage.setItem('favoriteCities', JSON.stringify(state.favoriteCities));
    },
    deleteFromFavoriteList(state, payload) {
      state.favoriteCities.splice(payload, 1);
      localStorage.setItem('favoriteCities', JSON.stringify(state.favoriteCities));
    },
    loadCitiesFromLocalStorage(state) {
      state.favoriteCities = JSON.parse(localStorage.getItem('favoriteCities')) || [];
    },
  },
  actions: {

  },
  getters: {
    getFavoriteCities(state) {
      return state.favoriteCities;
    },
  },
};
