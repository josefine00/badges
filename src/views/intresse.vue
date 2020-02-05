<template>
  <div>
    <h1>Intressemärken</h1>
    <div class="intresse gallery">
      <div v-for="intresse in intresses" v-bind:key="intresse.id" class="badge">
        <img :src="intresse.image" :alt="intresse.name" class="img" />
        <p>{{ intresse.name }}</p>
        <div v-show="showBadgeInfoIntresse" class="badgeinfo">
          <h4>{{ intresse.desc }}</h4>
          <p v-if="intresse.malspar"><b>Målspår: </b>{{ intresse.malspar }}</p>
          <p><b>Innehåll: </b>{{ intresse.innehall }}</p>
          <p>{{ intresse.info }}</p>
        </div>
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
