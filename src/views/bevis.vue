<template>
  <div>
    <h1 class="sideName">Bevismärken</h1>
    <div class="bevis gallery" id="bevis">
      <div class="info-badge">
        <h5 class="line-left">
          Bevismärkena skiljer sig från intressemärkena genom att de har
          tydligare riktlinjer för vad du ska göra och klara av. Det är för att
          man ska veta att alla scouter som har tagit ett bevismärke kan klara
          av samma saker. Bevismärkena blir på så sätt en bekräftelse på att du
          kan något och en påminnelse om den kunskap du fått.
        </h5>
      </div>
      <div
        role="tablist"
        v-for="bevis in beviss"
        v-bind:key="bevis.id"
        class="badge"
      >
        <b-card role="tab" class="b-card">
          <div v-b-toggle="bevis.id">
            <img :src="bevis.image" :alt="bevis.name" class="img" />
            <p>{{ bevis.name }}</p>
          </div>
        </b-card>

        <b-collapse
          role="tabpanel"
          :id="bevis.id"
          accordion="bevis-badges"
          v-show="showBadgeInfoBevis"
          class="badgeinfo"
        >
          <h3>{{ bevis.name }}</h3>
          <h4>{{ bevis.desc }}</h4>
          <p><b>Innehåll: </b>{{ bevis.innehall }}</p>
          <ul>
            <li>
              {{ bevis.list }}
            </li>
          </ul>
          <p>{{ bevis.info }}</p>
        </b-collapse>
      </div>
    </div>
    <div class="fyllnad"></div>
  </div>
</template>

<script>
import beviss from "../data/bevis";
export default {
  name: "bevis",

  data() {
    return {
      beviss: beviss,
      showBadgeInfoBevis: true
    };
  }
};
</script>

<style>
#kniv {
  margin-left: 5%;
}

#yxa-sag {
  margin-left: -98.5%;
}

#simning {
  margin-left: -202%;
}

#bevis {
  justify-content: center;
}

@media only screen and (max-width: 600px) {
  #kniv {
    width: 90%;
    margin-left: 5%;
  }
  #yxa-sag {
    width: 90%;
    margin-left: 5%;
  }
  #simning {
    width: 90%;
    margin-left: 5%;
  }
}
</style>
