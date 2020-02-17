<template>
  <div>
    <h1>Intressemärken</h1>
    <div class="intresse gallery">
      <div class="info-badge">
        <h5 class="line-left">
          Intressemärkena är främst tänkta för de två-tre yngre åldersgrupperna
          och för varje märke finns en rekommendation om vilken ålder det lämpar
          sig bäst för. Se det just som rekommendationer, du känner dina scouter
          bäst själv och tillsammans avgör ni vad ni vill jobba med och när.
        </h5>

        <h5 class="line-left">
          Beroende på vilka scouter som är intresserade av vilka intressemärken
          kan det ibland också passa bra att bryta de vanliga patrullerna och
          bilda nya grupperingar tillfälligt. Till exempel kan alla som har en
          viss roll i varje patrull tillsammans jobba med ett märke som rör
          deras ansvarsområde.
        </h5>

        <h5 class="line-left">
          Programmet för ett intressemärke sträcker sig över ett par scoutmöten,
          vissa kan man behöva arbeta med av och till under en hel termin. Vissa
          märken finns i flera nivåer men det är inget krav att ha det första
          märket innan man får det andra.
        </h5>
      </div>
      <div
        role="tablist"
        v-for="intresse in intresses"
        v-bind:key="intresse.id"
        class="badge"
      >
        <b-card role="tab" class="b-card">
          <div v-b-toggle="intresse.id">
            <img :src="intresse.image" :alt="intresse.name" class="img" />
            <p>{{ intresse.name }}</p>
          </div>
        </b-card>
        <b-collapse
          role="tabpanel"
          :id="intresse.id"
          accordion="intresse-badges"
          v-show="showBadgeInfoIntresse"
          class="badgeinfo"
        >
          <h4>{{ intresse.desc }}</h4>
          <p v-if="intresse.malspar"><b>Målspår: </b>{{ intresse.malspar }}</p>
          <p><b>Innehåll: </b>{{ intresse.innehall }}</p>
          <p>{{ intresse.info }}</p>
        </b-collapse>
      </div>
    </div>
  </div>
</template>

<script>
import intresses from "../data/intresse.js";
export default {
  name: "intresse",

  data() {
    return {
      intresses: intresses,
      showBadgeInfoIntresse: true
    };
  }
};
</script>
