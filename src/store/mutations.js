export default {
  appendPatrol: (state, patrol) => {
    console.log("Added ", patrol);
    console.log("state before ", state.patrols);
    state.patrols.push(patrol);
    console.log("state after ", state.patrols);
  }
};
