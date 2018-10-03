import axios from 'axios';

export default {
  state: {
    publicKey: 'd71ba7d3df7e6107a6afbb2e485b0c74',
    forecasts: [],
  },
  mutations: {
    saveForecasts(state, payload) {
      state.forecasts = payload;
    },
  },
  actions: {
    getForecastsFromAPI({ commit, state }) {
      axios
        .get(`http://api.openweathermap.org/data/2.5/forecast?q=London,us&APPID=${state.publicKey}`)
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
