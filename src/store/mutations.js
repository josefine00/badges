export default {
  //Lägger till payloaden/datan i arrayen patrols och skriver ut det i konsolen
  appendPatrol: (state, patrol) => {
    console.log("Added ", patrol);
    state.patrols.push(patrol);
    console.log("state: ", state.patrols);
  }
};
