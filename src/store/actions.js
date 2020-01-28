export default {
  addPatrol: ({ commit }, payload) => {
    commit("appendPatrol", payload);
  }
};
