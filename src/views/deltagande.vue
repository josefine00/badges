<template>
  <div>
    <h1>Deltagandemärken</h1>
    <div class="deltagande gallery">
      <div class="info-badge">
        <h5 class="line-left">
          Deltagandemärken delas ut till Scouter som har varit med i ett projekt
          en termin eller ett läger. Dessa märken skiljer sig från varandra
          beroende på vilken åldersgrupp du tillhör samt olika intressen och ju
          äldre du blir, desto större möjlighet har du att engagera dig och bli
          tilldelad fler märken.
        </h5>
        <h5 class="line-left">
          Ett deltagandemärke är ett minne av de upplevelser ni har haft
          tillsammans i patrullen.
        </h5>
      </div>
      <div class="sparare">
        <h2>Spårare</h2>
        <div class="deltagande-gallery">
          <div
            role="tablist"
            v-for="deltagande in deltagandeSparare"
            v-bind:key="deltagande.id"
            class="badge"
          >
            <b-card role="tab" class="b-card">
              <div v-b-toggle="deltagande.id">
                <img
                  :src="deltagande.image"
                  :alt="deltagande.name"
                  class="img"
                />
                <p>{{ deltagande.name }}</p>
              </div>
            </b-card>
            <b-collapse
              role="tabpanel"
              :id="deltagande.id"
              v-show="showBadgeInfoDeltagande"
              accordion="deltagande-sparare-badges"
              class="badgeinfo"
            >
              <h4>{{ deltagande.desc }}</h4>
            </b-collapse>
          </div>
        </div>
      </div>

      <div class="upptackare">
        <h2>Upptäckare</h2>
        <div class="deltagande-gallery">
          <div
            role="tablist"
            v-for="deltagande in deltagandeUpptackare"
            v-bind:key="deltagande.id"
            class="badge"
          >
            <b-card role="tab" class="b-card">
              <div v-b-toggle="deltagande.id">
                <img
                  :src="deltagande.image"
                  :alt="deltagande.name"
                  class="img"
                />
                <p>{{ deltagande.name }}</p>
              </div>
            </b-card>
            <b-collapse
              role="tabpanel"
              :id="deltagande.id"
              v-show="showBadgeInfoDeltagande"
              accordion="deltagande-upptackare-badges"
              class="badgeinfo"
            >
              <h4>{{ deltagande.desc }}</h4>
            </b-collapse>
          </div>
        </div>
      </div>

      <div class="aventyrare">
        <h2>Äventyrare</h2>
        <div class="deltagande-gallery">
          <div
            role="tablist"
            v-for="deltagande in deltagandeAventyrare"
            v-bind:key="deltagande.id"
            class="badge"
          >
            <b-card role="tab" class="b-card">
              <div v-b-toggle="deltagande.id">
                <img
                  :src="deltagande.image"
                  :alt="deltagande.name"
                  class="img"
                />
                <p>{{ deltagande.name }}</p>
              </div>
            </b-card>
            <b-collapse
              role="tabpanel"
              :id="deltagande.id"
              v-show="showBadgeInfoDeltagande"
              accordion="deltagande-aventyrare-badges"
              class="badgeinfo"
            >
              <h4>{{ deltagande.desc }}</h4>
              <p>{{ deltagande.innehall }}</p>
            </b-collapse>
          </div>
        </div>
      </div>

      <div class="utmanare">
        <h2>Utmanare</h2>
        <div class="deltagande-gallery">
          <div
            role="tablist"
            v-for="deltagande in deltagandeUtmanare"
            v-bind:key="deltagande.id"
            class="badge"
          >
            <b-card role="tab" class="b-card">
              <div v-b-toggle="deltagande.id">
                <img
                  :src="deltagande.image"
                  :alt="deltagande.name"
                  class="img"
                />
                <p>{{ deltagande.name }}</p>
              </div>
            </b-card>
            <b-collapse
              role="tabpanel"
              :id="deltagande.id"
              v-show="showBadgeInfoDeltagande"
              accordion="deltagande-utmanare-badges"
              class="badgeinfo"
            >
              <h4>{{ deltagande.desc }}</h4>
              <p>{{ deltagande.innehall }}</p>
            </b-collapse>
          </div>
        </div>
      </div>

      <div class="rover">
        <h2>Rover</h2>
        <div class="deltagande-gallery">
          <div
            role="tablist"
            v-for="deltagande in deltagandeRover"
            v-bind:key="deltagande.id"
            class="badge"
          >
            <b-card role="tab" class="b-card">
              <div v-b-toggle="deltagande.id">
                <img
                  :src="deltagande.image"
                  :alt="deltagande.name"
                  class="img"
                />
                <p>{{ deltagande.name }}</p>
              </div>
            </b-card>
            <b-collapse
              role="tabpanel"
              :id="deltagande.id"
              v-show="showBadgeInfoDeltagande"
              accordion="deltagande-rover-badges"
              class="badgeinfo"
            >
              <h4>{{ deltagande.desc }}</h4>
              <p>{{ deltagande.innehall }}</p>
            </b-collapse>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import deltagandeSparare from "../data/deltagandeSparare";
import deltagandeUpptackare from "../data/deltagandeUpptackare";
import deltagandeAventyrare from "../data/deltagandeAventyrare";
import deltagandeUtmanare from "../data/deltagandeUtmanare";
import deltagandeRover from "../data/deltagandeRover";
export default {
  name: "deltagande",

  data() {
    return {
      deltagandeSparare: deltagandeSparare,
      deltagandeUpptackare: deltagandeUpptackare,
      deltagandeAventyrare: deltagandeAventyrare,
      deltagandeUtmanare: deltagandeUtmanare,
      deltagandeRover: deltagandeRover,
      showBadgeInfoDeltagande: true
    };
  }
};
</script>

<style>
.deltagande img {
  width: 225px;
  height: auto;
}

.deltagande-gallery {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap;
  background-color: #ffffff;
  padding-bottom: 50px;
}

.deltagande h2 {
  margin-top: 20px;
}
</style>
