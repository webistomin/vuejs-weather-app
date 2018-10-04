import axios from 'axios';

export default {
  state: {
    publicKey: '08dfd1c2ed554573bd99d2026ae852cf',
    forecasts: [],
    averageTemperature: 0,
  },
  mutations: {
    saveForecasts(state, payload) {
      state.forecasts = payload;
    },
    saveTemperature(state, payload) {
      state.averageTemperature = payload;
    },
  },
  actions: {
    getForecastsFromAPI({ commit, state, rootState }) {
      let resultTemperature = 0;
      axios
        .get(`https://api.weatherbit.io/v2.0/forecast/daily?city=${rootState.searchCity.searchQuery},${rootState.searchCity.selectedCountry}&key=${state.publicKey}`)
        .then((response) => {
          commit('saveForecasts', response.data);
          for (let i = 0; i < response.data.data.length; i += 1) {
            resultTemperature += response.data.data[i].temp;
          }
          commit('saveTemperature', Math.ceil(resultTemperature / response.data.data.length));
        });
    },
  },
  getters: {
    getForecasts(state) {
      return state.forecasts;
    },
    getAverageTemperature(state) {
      return state.averageTemperature;
    },
  },
};
