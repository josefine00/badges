export default {
  //Lägger till payloaden/datan i arrayen patrols och skriver ut det i konsolen
  appendPatrol: (state, patrol) => {
    state.patrols.push(patrol);
  }
};
