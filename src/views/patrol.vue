<template>
  <div>
    <h1 class="sideName">{{ $route.params.patrolName }}</h1>
    <div class="gallery">
      <div class="selectBadges">
        <Multiselect
          v-model="value"
          :options="options"
          label="name"
          :multiple="true"
          :close-on-select="false"
          placeholder="Välj märke/märken..."
        ></Multiselect>
      </div>

      <button @click="addBadge()" class="formButton">Lägg till märken</button>
      <div class="table">
        <b-table
          class="patrolTable"
          striped
          hover
          :items="patrols.scouts"
          :fields="fields"
        >
        </b-table>
      </div>
    </div>
    <div class="fyllnad"></div>
  </div>
</template>

<script>
import patrols from "../data/patrols";
import intresse from "../data/intresse";
import bevis from "../data/bevis";
import deltagandeSparare from "../data/deltagandeSparare";
import deltagandeUpptackare from "../data/deltagandeUpptackare";
import deltagandeAventyrare from "../data/deltagandeAventyrare";
import deltagandeUtmanare from "../data/deltagandeUtmanare";
import deltagandeRover from "../data/deltagandeRover";

//https://vue-multiselect.js.org/
import Multiselect from "vue-multiselect";

export default {
  name: "patrol",
  components: { Multiselect },

  data() {
    return {
      options: bevis,

      intresse: intresse,
      bevis: bevis,
      deltagandeSparare: deltagandeSparare,
      deltagandeUpptackare: deltagandeUpptackare,
      deltagandeAventyrare: deltagandeAventyrare,
      deltagandeUtmanare: deltagandeUtmanare,
      deltagandeRover: deltagandeRover,

      patrols: patrols[0],

      fields: [
        { key: "name", label: "Scout" },
        {
          key: "badges.length",
          label: "Antal märken"
        }
      ],
      value: []
    };
  },

  methods: {
    addBadge() {
      patrols[0].scouts[0].badges.push({ id: "klura" }, { id: "matettan" });
      console.log(patrols[0].scouts[0].badges);
    }
  }
};
</script>

<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>

<style>
.selectBadges {
  width: 85%;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  padding: 20px;
}
</style>
