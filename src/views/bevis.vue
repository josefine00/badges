<template>
  <div>
    <h1 class="sideName">Bevismärken</h1>
    <div class="bevis gallery" id="bevis">
      <div class="info-badge">
        <div class="line-left">
          <h5>
            Bevismärkena skiljer sig från intressemärkena genom att de har
            tydligare riktlinjer för vad du ska göra och klara av. Det är för
            att man ska veta att alla scouter som har tagit ett bevismärke kan
            klara av samma saker. Bevismärkena blir på så sätt en bekräftelse på
            att du kan något och en påminnelse om den kunskap du fått.
          </h5>
        </div>
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
          <div class="ageGroup">
            <div v-for="ageImage in bevis.ageImage" v-bind:key="ageImage.name">
              <img
                :src="ageImage.image"
                :alt="ageImage.name"
                class="ageImage"
              />
            </div>
          </div>
          <h4>{{ bevis.desc }}</h4>
          <p><b>Innehåll: </b>{{ bevis.innehall }}</p>
          <ul
            v-for="list in bevis.list"
            v-bind:key="list.listId"
            :id="list.listId"
          >
            <li>
              {{ list.krav }}
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
.bevis .badgeinfo {
  width: 250%;
  margin-bottom: 5%;
}

#bevis {
  justify-content: center;
}

#kniv {
  width: 300%;
  margin-left: 4%;
}

#yxa-sag {
  width: 300%;
  margin-left: -99.5%;
}

#simning {
  width: 300%;
  margin-left: -203%;
}

@media only screen and (max-width: 600px) {
  #kniv {
    width: 185%;
    margin-left: 9.7%;
  }
  #yxa-sag {
    width: 185%;
    margin-left: -94.9%;
  }
  #simning {
    width: 185%;
    margin-left: -42.5%;
  }
}
</style>
