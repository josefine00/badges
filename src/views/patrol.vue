<template>
  <div>
    <h1 class="sideName">{{ $route.params.patrolName }}</h1>

    <div class="gallery">
      <div class="addBadgeForm">
        <h4 class="formBadgeGroup">Scout:</h4>
        <div class="selectBadges">
          <Multiselect
            class="multiselect"
            v-model="valueScout"
            :options="patrols.scouts"
            label="name"
            select-label="Välj scout"
            selected-label="Vald"
            deselect-label="Ta bort"
            :multiple="false"
            :close-on-select="true"
            placeholder="Välj scout..."
            track-by="name"
          ></Multiselect>
        </div>

        <h4 class="formBadgeGroup">Bevismärken:</h4>
        <div class="selectBadges">
          <Multiselect
            class="multiselect"
            v-model="valueBevis"
            :options="optionsBevis"
            label="name"
            select-label="Välj märke"
            selected-label="Vald"
            deselect-label="Ta bort"
            :multiple="true"
            :close-on-select="false"
            placeholder="Välj bevismärke/märken..."
            track-by="name"
          >
          </Multiselect>
        </div>

        <h4 class="formBadgeGroup">Intressemärken:</h4>
        <div class="selectBadges">
          <Multiselect
            class="multiselect"
            v-model="valueIntresse"
            :options="optionsIntresse"
            label="name"
            select-label="Välj märke"
            selected-label="Vald"
            deselect-label="Ta bort"
            :multiple="true"
            :close-on-select="false"
            placeholder="Välj intressemärke/märken..."
            track-by="name"
          ></Multiselect>
        </div>

        <h4 class="formBadgeGroup">Deltagandemärken:</h4>
        <div class="selectBadges">
          <Multiselect
            class="multiselect"
            v-model="valueDeltagande"
            :options="optionsDeltagande"
            label="name"
            select-label="Välj märke"
            selected-label="Vald"
            deselect-label="Ta bort"
            group-values="badges"
            group-label="ageGroup"
            :group-select="false"
            :multiple="true"
            :close-on-select="false"
            placeholder="Välj deltagandemärke/märken..."
            track-by="name"
          ></Multiselect>
        </div>

        <button @click="addBadge()" class="formButton" id="addBadgeButton">
          Lägg till märken
        </button>
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
    </div>

    <div class="fyllnad"></div>
  </div>
</template>

<script>
import patrolsData from "../data/patrols";
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
      // Anger vilka märken som man ska kunna välja ifrån i drop-downen, Deltagande har grupper inom drop-downen
      optionsBevis: bevis,
      optionsIntresse: intresse,
      optionsDeltagande: [
        { ageGroup: "Spårare", badges: deltagandeSparare },
        { ageGroup: "Upptäckare", badges: deltagandeUpptackare },
        { ageGroup: "Äventyrare", badges: deltagandeAventyrare },
        { ageGroup: "Utmanare", badges: deltagandeUtmanare },
        { ageGroup: "Rover", badges: deltagandeRover }
      ],

      intresse: intresse,
      bevis: bevis,
      deltagandeSparare: deltagandeSparare,
      deltagandeUpptackare: deltagandeUpptackare,
      deltagandeAventyrare: deltagandeAventyrare,
      deltagandeUtmanare: deltagandeUtmanare,
      deltagandeRover: deltagandeRover,

      // Bestämmer vilka kolumner och vad de ska innehålla i table
      fields: [
        { key: "name", label: "Scout" },
        {
          key: "badgesBevis.length",
          label: "Bevismärken ( /3)"
        },
        {
          key: "badgesIntresse.length",
          label: "Intressemärken ( /43)"
        },
        {
          key: "badgesDeltagande.length",
          label: "Deltagandemärken ( /32)"
        }
      ],

      // Array med de märken man väljer att lägga till
      valueScout: [],
      valueBevis: [],
      valueIntresse: [],
      valueDeltagande: []
    };
  },
  computed: {
    patrols() {
      // Hittar rätt patrull i arrayen med hjälp av patrullnamnet
      return patrolsData.find(
        p => p.patrolName === this.$route.params.patrolName
      );
    }
  },

  mounted() {},

  methods: {
    addBadge() {
      // Lägger till de valda märkena i den valda scoutens märkes-arrayer
      this.valueScout.badgesBevis = this.valueScout.badgesBevis.concat(
        this.valueBevis
      );
      this.valueScout.badgesIntresse = this.valueScout.badgesIntresse.concat(
        this.valueIntresse
      );
      this.valueScout.badgesDeltagande = this.valueScout.badgesDeltagande.concat(
        this.valueDeltagande
      );

      // Reset value efter knappen är tryckt
      this.valueScout = null;
      this.valueBevis = null;
      this.valueIntresse = null;
      this.valueDeltagande = null;
    }
  }
};
</script>

<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>

<style>
.selectBadges {
  width: 100%;
  text-align: center;
  margin: 10px auto 25px auto;
}

.addBadgeForm {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 75%;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  padding-top: 5%;
}

.formBadgeGroup {
  font-size: 1.2em;
  margin: 0;
}

#addBadgeButton {
  margin: 10px auto 0 auto;
  text-align: center;
}
</style>
