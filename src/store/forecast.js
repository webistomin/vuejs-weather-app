import axios from 'axios';

export default {
  state: {
    publicKey: '08dfd1c2ed554573bd99d2026ae852cf',
    forecasts: [],
    averageTemperature: 0,
    loading: false,
    error: '',
  },
  mutations: {
    saveForecasts(state, payload) {
      state.forecasts = payload;
    },
    saveTemperature(state, payload) {
      state.averageTemperature = payload;
    },
    updateLoadingState(state, payload) {
      state.loading = payload;
    },
    setErrorMessage(state, payload) {
      state.error = payload;
    },
  },
  actions: {
    getForecastsFromAPI({ commit, state, rootState }) {
      let resultTemperature = 0;
      commit('setErrorMessage', '');
      commit('updateLoadingState', true);
      axios
        .get(`https://api.weatherbit.io/v2.0/forecast/daily?city=${rootState.searchCity.searchQuery},${rootState.searchCity.selectedCountry}&key=${state.publicKey}`)
        .then((response) => {
          commit('saveForecasts', response.data);
          for (let i = 0; i < response.data.data.length; i += 1) {
            resultTemperature += response.data.data[i].temp;
          }
          commit('saveTemperature', Math.ceil(resultTemperature / response.data.data.length));
          commit('updateLoadingState', false);
        }).catch((error) => {
          commit('updateLoadingState', false);
          commit('setErrorMessage', error.message);
          throw error;
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
    getLoadingState(state) {
      return state.loading;
    },
    getErrorMessage(state) {
      return state.error;
    },
  },
};
