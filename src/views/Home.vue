<template>
  <div class="home">
    <h1>Scoutmärken</h1>
    <div class="gallery">
      <div class="div-flex">
        <div class="button-div">
          <h2>Intressemärken</h2>
          <p class="line-left">
            Intressemärkena är främst tänkta för de två-tre yngre
            åldersgrupperna och för varje märke finns en rekommendation om
            vilken ålder det lämpar sig bäst för. Se det just som
            rekommendationer, du känner dina scouter bäst själv och tillsammans
            avgör ni vad ni vill jobba med och när.
          </p>

          <p class="line-left">
            Beroende på vilka scouter som är intresserade av vilka
            intressemärken kan det ibland också passa bra att bryta de vanliga
            patrullerna och bilda nya grupperingar tillfälligt. Till exempel kan
            alla som har en viss roll i varje patrull tillsammans jobba med ett
            märke som rör deras ansvarsområde.
          </p>

          <p class="line-left">
            Programmet för ett intressemärke sträcker sig över ett par
            scoutmöten, vissa kan man behöva arbeta med av och till under en hel
            termin. Vissa märken finns i flera nivåer men det är inget krav att
            ha det första märket innan man får det andra.
          </p>
          <router-link class="btn" to="/intresse"
            >Gå till intressemärken</router-link
          >
        </div>
        <div class="button-div">
          <h2>Bevismärken</h2>
          <p class="line-left">
            Bevismärkena skiljer sig från intressemärkena genom att de har
            tydligare riktlinjer för vad du ska göra och klara av. Det är för
            att man ska veta att alla scouter som har tagit ett bevismärke kan
            klara av samma saker. Bevismärkena blir på så sätt en bekräftelse på
            att du kan något och en påminnelse om den kunskap du fått.
          </p>
          <router-link class="btn" to="/bevis">Gå till bevismärken</router-link>
        </div>
        <div class="button-div">
          <h2>Deltagandemärken</h2>
          <p class="line-left">
            Deltagandemärken delas ut till Scouter som har varit med i ett
            projekt en termin eller ett läger. Dessa märken skiljer sig från
            varandra beroende på vilken åldersgrupp du tillhör samt olika
            intressen och ju äldre du blir, desto större möjlighet har du att
            engagera dig och bli tilldelad fler märken.
          </p>
          <p class="line-left">
            Ett deltagandemärke är ett minne av de upplevelser ni har haft
            tillsammans i patrullen.
          </p>
          <router-link class="btn" to="deltagande"
            >Gå till deltagandemärken</router-link
          >
        </div>
        <div class="button-div">
          <h2>Beställ märken</h2>
          <p class="line-left">
            För att beställa märken går du till Scoutshopen. Där kan du även
            hitta ännu fler roliga prylar och märken.
          </p>
          <a class="btn" href="https://www.scoutshop.se/"
            >Gå till Scoutshopen</a
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "home"
};
</script>

<style scoped>
.button-div {
  padding: 1em;
  padding-bottom: 2em;
  background-color: #ececec;
  margin: 1.7em;
  width: 45%;
  border-radius: 25px;
  text-align: left;
}

.div-flex {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap;
}

.btn {
  padding: 1em;
  background-color: rgb(0, 54, 96);
  color: white;
  border: none;
  border-radius: 1em;
  text-decoration: none;
}
</style>
