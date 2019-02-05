import Vue from "vue";
import Vuex from "vuex";
import pathify from "vuex-pathify";
import ValidationEngine from "./vuex-validation-module";

Vue.use(Vuex);

let store = new Vuex.Store({
  plugins: [pathify.plugin],
  state: {
    greeting: ""
  },
  getters: {
    greetingErrors: (state, getters) => {
      const errors = [];
      let vState = getters["validations/vState"];
      if (!vState) return errors;
      if (!vState.greeting.$dirty) return errors;
      if (!vState.greeting.required) errors.push("Greeting is required.");
      if (!vState.greeting.minLength)
        errors.push("Minimum length is 20 characters.");
      return errors;
    }
  },
  mutations: {
    updateGreeting(state, greeting) {
      state.greeting = greeting;
    },
    SET_GREETING(state, greeting) {
      state.greeting = greeting;
    }
  },
  actions: {}
});

store.registerModule("validations", ValidationEngine(store));

export default store;
