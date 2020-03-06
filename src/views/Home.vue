<template>
  <div class="home">
    <h1 class="sideName">Hem</h1>
    <div class="gallery">
      <div class="div-flex">
        <div class="button-div">
          <div class="line-left">
            <h2>Intressemärken</h2>
            <h5>
              Intressemärkena är främst tänkta för de två-tre yngre
              åldersgrupperna och för varje märke finns en rekommendation om
              vilken ålder det lämpar sig bäst för. Se det just som
              rekommendationer, du känner dina scouter bäst själv och
              tillsammans avgör ni vad ni vill jobba med och när.
            </h5>

            <h5>
              Beroende på vilka scouter som är intresserade av vilka
              intressemärken kan det ibland också passa bra att bryta de vanliga
              patrullerna och bilda nya grupperingar tillfälligt. Till exempel
              kan alla som har en viss roll i varje patrull tillsammans jobba
              med ett märke som rör deras ansvarsområde.
            </h5>

            <h5>
              Programmet för ett intressemärke sträcker sig över ett par
              scoutmöten, vissa kan man behöva arbeta med av och till under en
              hel termin. Vissa märken finns i flera nivåer men det är inget
              krav att ha det första märket innan man får det andra.
            </h5>
            <router-link class="btn" to="/intresse"
              >Gå till intressemärken</router-link
            >
          </div>
        </div>
        <div class="button-div">
          <div class="line-left">
            <h2>Bevismärken</h2>
            <h5>
              Bevismärkena skiljer sig från intressemärkena genom att de har
              tydligare riktlinjer för vad du ska göra och klara av. Det är för
              att man ska veta att alla scouter som har tagit ett bevismärke kan
              klara av samma saker. Bevismärkena blir på så sätt en bekräftelse
              på att du kan något och en påminnelse om den kunskap du fått.
            </h5>
            <router-link class="btn" to="/bevis"
              >Gå till bevismärken</router-link
            >
          </div>
        </div>
        <div class="button-div">
          <div class="line-left">
            <h2>Deltagandemärken</h2>
            <h5>
              Deltagandemärken delas ut till Scouter som har varit med i ett
              projekt en termin eller ett läger. Dessa märken skiljer sig från
              varandra beroende på vilken åldersgrupp du tillhör samt olika
              intressen och ju äldre du blir, desto större möjlighet har du att
              engagera dig och bli tilldelad fler märken.
            </h5>
            <h5>
              Ett deltagandemärke är ett minne av de upplevelser ni har haft
              tillsammans i patrullen.
            </h5>
            <router-link class="btn" to="deltagande"
              >Gå till deltagandemärken</router-link
            >
          </div>
        </div>
        <div class="button-div" id="scoutshop-div">
          <div class="line-left">
            <h2>Beställ märken</h2>
            <h5>
              För att beställa märken går du till Scoutshopen. Där kan du även
              hitta ännu fler roliga prylar och märken.
            </h5>
            <a class="btn" href="https://www.scoutshop.se/"
              >Gå till Scoutshopen</a
            >
          </div>
        </div>
      </div>
    </div>
    <div class="fyllnad"></div>
  </div>
</template>

<script>
export default {
  name: "home"
};
</script>

<style scoped>
.button-div {
  margin: 5% 5% 2% 5%;
  padding: 2.5em;
  text-align: left;
  background-color: #ececec;
  border-radius: 25px;
}

.button-div h5 {
  line-height: 1.5rem;
  padding-bottom: 10px;
}

.img-button-div {
  width: 100%;
  height: auto;
  padding-top: 40px;
  padding-bottom: 10px;
}

.div-flex {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap;
}

#scoutshop-div {
  margin-bottom: 3%;
}

.btn {
  padding: 1em;
  background-color: rgb(0, 54, 96);
  color: white;
  border: none;
  border-radius: 1em;
  text-decoration: none;
  margin-top: 5%;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
}

.btn:hover {
  background-color: rgb(0, 33, 58);
  text-decoration: none;
  color: white;
}

@media only screen and (max-width: 600px) {
  .button-div {
    width: 100%;
  }
}
</style>
