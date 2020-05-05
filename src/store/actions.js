export default {
  //Skickar vidare payloaden till appendPatrol (mutations.js)
  addPatrol: ({ commit }, payload) => {
    commit("appendPatrol", payload);
  }
};
