export default {
  state: {
    selectedCountry: 'RU',
    searchQuery: 'Moscow',
  },
  mutations: {
    saveSelectedCountry(state, payload) {
      state.selectedCountry = payload;
    },
    saveSearchQuery(state, payload) {
      state.searchQuery = payload;
    },
  },
  actions: {},
  getters: {
    getSelectedCountry(state) {
      return state.selectedCountry;
    },
    getSearchQuery(state) {
      return state.searchQuery;
    },
  },
};
