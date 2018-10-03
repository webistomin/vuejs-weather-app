import Vue from 'vue';
import Vuex from 'vuex';
import searchCity from './searchCity';
import forecast from './forecast';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  getters: {},
  modules: {
    searchCity,
    forecast,
  },
});
