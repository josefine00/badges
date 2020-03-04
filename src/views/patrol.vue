<template>
  <div>
    <h1 class="sideName">{{ $route.params.patrolName }}</h1>

    <div v-for="scout in patrols.scouts" v-bind:key="scout.name">
      <b-modal
        class="modalBadgeList"
        centered
        :id="scout.name"
        :title="scout.name"
      >
        <div class="badgeList-gallery">
          <h5
            v-if="
              scout.badgesBevis.length < 1 &&
                scout.badgesIntresse.length < 1 &&
                scout.badgesDeltagande.length < 1
            "
          >
            {{ scout.name }} har inga märken än. Lägg till märken i formuläret
            ovan.
          </h5>
          <h3 v-if="scout.badgesBevis.length >= 1" class="badgeList-desc">
            Bevismärken
          </h3>
          <div
            role="tablist"
            v-for="bevis in scout.badgesBevis"
            v-bind:key="bevis.id"
            class="badge badge-badgeList"
          >
            <b-card role="tab" class="b-card">
              <div>
                <img
                  :src="bevis.image"
                  :alt="bevis.name"
                  class="img bevis-img"
                />
                <p>{{ bevis.name }}</p>
              </div>
            </b-card>
          </div>

          <h3 v-if="scout.badgesIntresse.length >= 1" class="badgeList-desc">
            Intressemärken
          </h3>
          <div
            role="tablist"
            v-for="intresse in scout.badgesIntresse"
            v-bind:key="intresse.id"
            class="badge badge-badgeList"
          >
            <b-card role="tab" class="b-card">
              <div>
                <img
                  :src="intresse.image"
                  :alt="intresse.name"
                  class="img intresse-img"
                />
                <p>{{ intresse.name }}</p>
              </div>
            </b-card>
          </div>

          <h3 v-if="scout.badgesDeltagande.length >= 1" class="badgeList-desc">
            Deltagandemärken
          </h3>
          <div
            role="tablist"
            v-for="deltagande in scout.badgesDeltagande"
            v-bind:key="deltagande.id"
            class="badge badge-badgeList"
          >
            <b-card role="tab" class="b-card">
              <div>
                <img
                  :src="deltagande.image"
                  :alt="deltagande.name"
                  class="img deltagande-img"
                />
                <p>{{ deltagande.name }}</p>
              </div>
            </b-card>
          </div>
        </div>
      </b-modal>
    </div>

    <div class="gallery">
      <div class="addBadgeForm">
        <div class="info-badge">
          <div class="line-left">
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
          </div>

          <div class="line-left">
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
                :option-height="60"
              >
                <template slot="singleLabel" slot-scope="props"
                  ><img
                    class="option__image"
                    :src="props.option.image"
                    :alt="props.option.name"
                  />
                  <span class="option__desc">
                    <span class="option__title">
                      {{ props.option.name }}
                    </span>
                  </span>
                </template>
                <template slot="option" slot-scope="props">
                  <img
                    class="option__image"
                    :src="props.option.image"
                    :alt="props.option.name"
                  />
                  <div class="option__desc">
                    <span class="option__small">{{ props.option.name }}</span>
                  </div>
                </template>
              </Multiselect>
            </div>
          </div>

          <div class="line-left">
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
                :option-height="60"
              >
                <template slot="singleLabel" slot-scope="props">
                  <img
                    class="option__image"
                    :src="props.option.image"
                    :alt="props.option.name"
                  />
                  <span class="option__desc">
                    <span class="option__title">
                      {{ props.option.name }}
                    </span>
                  </span>
                </template>
                <template slot="option" slot-scope="props">
                  <img
                    class="option__image"
                    :src="props.option.image"
                    :alt="props.option.name"
                  />
                  <div class="option__desc">
                    <span class="option__small">{{ props.option.name }}</span>
                  </div>
                </template>
              </Multiselect>
            </div>
          </div>

          <div class="line-left">
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
                :option-height="60"
              >
                <template slot="singleLabel" slot-scope="props">
                  <img
                    class="option__image"
                    :src="props.option.image"
                    :alt="props.option.name"
                  />
                  <span class="option__desc">
                    <span class="option__title">
                      {{ props.option.name }}
                    </span>
                  </span>
                </template>
                <template
                  class="optionImgText"
                  slot="option"
                  slot-scope="props"
                >
                  <img
                    class="option__image"
                    :src="props.option.image"
                    :alt="props.option.name"
                  />
                  <div class="option__desc">
                    <span class="option__small">{{ props.option.name }}</span>
                  </div>
                </template>
              </Multiselect>
            </div>
          </div>

          <div class="line-left">
            <button @click="addBadge()" class="formButton" id="addBadgeButton">
              Lägg till märken
              <!-- {{ checkName() }} -->
            </button>
          </div>
        </div>

        <div class="table">
          <b-table
            class="patrolTable"
            striped
            hover
            :responsive="true"
            :items="patrols.scouts"
            :fields="fields"
          >
            <template v-slot:cell(name)="data">
              <a id="openModalLink" v-b-modal="data.item.name">
                {{ data.item.name }}
              </a>
            </template>
          </b-table>
        </div>
      </div>
      <button class="formButton backButton">
        <router-link class="backLink" to="/patruller">
          Tillbaka till patruller
        </router-link>
      </button>
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
        p =>
          p.patrolName ===
          this.$route.params
            .patrolName /*&&
          p.patrolAge === this.$route.params.patrolAge &&
          p.scouts === this.$route.params.scouts*/
      );
    }
  },

  mounted() {},

  methods: {
    addBadge() {
      // Lägger till de valda märkena i den valda scoutens märkes-arrayer

      /*
      this.valueScout.badgesBevis.forEach(badge => {
        if (!this.valueScout.badgesBevis.includes(badge)) {
          this.valueScout.badgesBevis = this.valueScout.badgesBevis.concat(
            this.valueBevis
          );
        }
      });
*/
      if (this.valueBevis.length >= 1) {
        this.valueScout.badgesBevis = this.valueScout.badgesBevis.concat(
          this.valueBevis
        );
      } else {
        this.valueScout.badgesBevis = this.valueScout.badgesBevis;
      }

      if (this.valueIntresse.length >= 1) {
        this.valueScout.badgesIntresse = this.valueScout.badgesIntresse.concat(
          this.valueIntresse
        );
      } else {
        this.valueScout.badgesIntresse = this.valueScout.badgesIntresse;
      }

      if (this.valueDeltagande.length >= 1) {
        this.valueScout.badgesDeltagande = this.valueScout.badgesDeltagande.concat(
          this.valueDeltagande
        );
      } else {
        this.valueScout.badgesDeltagande = this.valueScout.badgesDeltagande;
      }

      // Reset value efter knappen är tryckt
      this.valueScout = null;
      this.valueBevis = null;
      this.valueIntresse = null;
      this.valueDeltagande = null;
    },

    checkName() {
      if (this.valueScout.name) {
        return "Lägg till märken till " + this.valueScout.name;
      } else {
        return "Lägg till märken";
      }
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
  width: 100%;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
}

.formBadgeGroup {
  font-size: 1.2em;
  margin: 0;
}

#addBadgeButton {
  margin: 10px auto 0 auto;
  text-align: center;
}

.backButton {
  text-align: center;
  margin-left: auto;
  margin-right: auto;
}

.backLink {
  color: #fff;
}

.backLink:hover {
  color: #fff;
  text-decoration: none;
}

.option__image {
  width: 60px;
  height: auto;
}

#openModalLink {
  color: #007bff;
  text-decoration: underline;
}

#openModalLink:hover {
  cursor: pointer;
}

.deltagande-img {
  width: 200px;
  height: auto;
}

.intresse-img {
  width: 150px;
  height: auto;
}

.bevis-img {
  width: 150px;
  height: auto;
}

.badge-badgeList {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin: 0px 10px 10px 10px;
}

.badge-badgeList .card {
  cursor: default;
}

.badgeList-gallery {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
  width: 90%;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
}

.badgeList-gallery .badge {
  width: 30%;
}

.badgeList-desc {
  width: 100%;
  margin-bottom: 0;
  padding-bottom: 0;
  text-align: left;
}

.multiselect__element {
  font-size: 1.2rem;
}

.multiselect__option {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
}

.option__small {
  padding-left: 15px;
}

.multiselect {
  color: rgb(0, 54, 96);
}

.multiselect__input::placeholder {
  color: rgb(0, 54, 96);
}

.multiselect__tag {
  color: #fff;
  background: rgb(0, 54, 96);
}

.multiselect__tag-icon:after {
  content: "×";
  color: rgb(0, 33, 58);
  font-size: 14px;
}
.multiselect__tag-icon:focus,
.multiselect__tag-icon:hover {
  background: rgb(0, 33, 58);
}
.multiselect__tag-icon:focus:after,
.multiselect__tag-icon:hover:after {
  color: white;
}

.multiselect__option--highlight {
  background: rgb(0, 54, 96);
  color: white;
}
.multiselect__option--highlight:after {
  background: rgb(0, 54, 96);
  color: white;
}
.multiselect__option--selected {
  background: #dbdbdb;
  color: #35495e;
}

.multiselect__option--selected.multiselect__option--highlight {
  background: #ff3c3c;
  color: #fff;
}
.multiselect__option--selected.multiselect__option--highlight:after {
  background: #ff3c3c;
  color: #fff;
}
</style>
