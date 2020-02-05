<template>
  <div>
    <h1>Deltagandemärken</h1>
    <div class="deltagande gallery">
      <div class="sparare">
        <h2>Spårare</h2>
        <div class="deltagande-gallery">
          <div
            v-for="deltagande in deltagandeSparare"
            v-bind:key="deltagande.id"
            class="badge"
          >
            <img :src="deltagande.image" :alt="deltagande.name" class="img" />
            <p>{{ deltagande.name }}</p>
            <div v-show="showBadgeInfoDeltagande" class="badgeinfo">
              <h4>{{ deltagande.desc }}</h4>
            </div>
          </div>
        </div>
      </div>

      <div class="upptackare">
        <h2>Upptäckare</h2>
        <div class="deltagande-gallery">
          <div
            v-for="deltagande in deltagandeUpptackare"
            v-bind:key="deltagande.id"
            class="badge"
          >
            <img :src="deltagande.image" :alt="deltagande.name" class="img" />
            <p>{{ deltagande.name }}</p>
            <div v-show="showBadgeInfoDeltagande" class="badgeinfo">
              <h4>{{ deltagande.desc }}</h4>
            </div>
          </div>
        </div>
      </div>

      <div class="aventyrare">
        <h2>Äventyrare</h2>
        <div class="deltagande-gallery">
          <div
            v-for="deltagande in deltagandeAventyrare"
            v-bind:key="deltagande.id"
            class="badge"
          >
            <img :src="deltagande.image" :alt="deltagande.name" class="img" />
            <p>{{ deltagande.name }}</p>
            <div v-show="showBadgeInfoDeltagande" class="badgeinfo">
              <h4>{{ deltagande.desc }}</h4>
              <p>{{ deltagande.innehall }}</p>
            </div>
          </div>
        </div>
      </div>

      <div class="utmanare">
        <h2>Utmanare</h2>
        <div class="deltagande-gallery">
          <div
            v-for="deltagande in deltagandeUtmanare"
            v-bind:key="deltagande.id"
            class="badge"
          >
            <img :src="deltagande.image" :alt="deltagande.name" class="img" />
            <p>{{ deltagande.name }}</p>
            <div v-show="showBadgeInfoDeltagande" class="badgeinfo">
              <h4>{{ deltagande.desc }}</h4>
              <p>{{ deltagande.innehall }}</p>
            </div>
          </div>
        </div>
      </div>

      <div class="rover">
        <h2>Rover</h2>
        <div class="deltagande-gallery">
          <div
            v-for="deltagande in deltagandeRover"
            v-bind:key="deltagande.id"
            class="badge"
          >
            <img :src="deltagande.image" :alt="deltagande.name" class="img" />
            <p>{{ deltagande.name }}</p>
            <div v-show="showBadgeInfoDeltagande" class="badgeinfo">
              <h4>{{ deltagande.desc }}</h4>
              <p>{{ deltagande.innehall }}</p>
            </div>
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
}
</style>
