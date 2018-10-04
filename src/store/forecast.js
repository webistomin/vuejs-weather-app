import axios from 'axios';

export default {
  state: {
    publicKey: '08dfd1c2ed554573bd99d2026ae852cf',
    forecasts: [],
  },
  mutations: {
    saveForecasts(state, payload) {
      state.forecasts = payload;
    },
  },
  actions: {
    getForecastsFromAPI({ commit, state, rootState }) {
      // const countryCode = rootState.searchCity.selectedCountry.toLowerCase();
      axios
        .get(`https://api.weatherbit.io/v2.0/forecast/daily?city=${rootState.searchCity.searchQuery},${rootState.searchCity.selectedCountry}&key=${state.publicKey}`)
        .then((response) => {
          commit('saveForecasts', response.data);
        });
    },
  },
  getters: {
    getForecasts(state) {
      return state.forecasts;
    },
  },
};
