export default {
  //Lägger till payloaden/datan i arrayen patrols och skriver ut det i konsolen
  appendPatrol: (state, patrol) => {
    console.log("Added ", patrol);
    console.log("state before ", state.patrols);
    state.patrols.push(patrol);
    console.log("state after ", state.patrols);
  }
};
