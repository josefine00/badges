<template>
  <div>
    <h1>Bevismärken</h1>
    <div class="bevis gallery">
      <div v-for="bevis in beviss" v-bind:key="bevis.id" class="badge">
        <img :src="bevis.image" :alt="bevis.name" class="img" />
        <p>{{ bevis.name }}</p>
        <div v-show="showBadgeInfoBevis" class="badgeinfo">
          <h4>{{ bevis.desc }}</h4>
          <p><b>Innehåll: </b>{{ bevis.innehall }}</p>
          <p>{{ bevis.info }}</p>
        </div>
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

<style scoped></style>
