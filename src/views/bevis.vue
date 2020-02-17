<template>
  <div>
    <h1>Bevismärken</h1>
    <div class="bevis gallery">
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
