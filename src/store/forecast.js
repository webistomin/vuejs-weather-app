import axios from 'axios';

export default {
  state: {
    publicKey: '08dfd1c2ed554573bd99d2026ae852cf',
    forecasts: [],
    averageTemperature: 0,
    loading: false,
    addedToFavorite: false,
    error: '',
    lat: '',
    lon: '',
  },
  mutations: {
    updateAnimationState(state, payload) {
      state.addedToFavorite = payload;
    },
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
    saveLongitude(state, payload) {
      state.lon = payload;
    },
    saveLatitude(state, payload) {
      state.lat = payload;
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
        })
        .catch(() => {
          commit('updateLoadingState', false);
          commit('setErrorMessage', 'This city does not exist 😆');
          // throw error;
        });
    },
    getForecastsFromAPIByLatAndLon({ commit, state }) {
      let resultTemperature = 0;
      commit('setErrorMessage', '');
      commit('updateLoadingState', true);
      axios
        .get(`https://api.weatherbit.io/v2.0/forecast/daily?lat=${state.lat}&lon=${state.lon}&key=${state.publicKey}`)
        .then((response) => {
          commit('saveForecasts', response.data);
          for (let i = 0; i < response.data.data.length; i += 1) {
            resultTemperature += response.data.data[i].temp;
          }
          commit('saveTemperature', Math.ceil(resultTemperature / response.data.data.length));
          commit('updateLoadingState', false);
          commit('saveSelectedCountry', response.data.country_code);
          commit('saveSearchQuery', response.data.city_name);
        })
        .catch(() => {
          commit('updateLoadingState', false);
          commit('setErrorMessage', 'This city does not exist 😆');
          // throw error;
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
    getAnimationState(state) {
      return state.addedToFavorite;
    },
  },
};
