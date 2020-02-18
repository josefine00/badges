<template>
  <div>
    <h1 class="sideName">Deltagandemärken</h1>
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
      <div class="delt sparare">
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
              <h3>{{ deltagande.name }}</h3>
              <h4>{{ deltagande.desc }}</h4>
            </b-collapse>
          </div>
        </div>
      </div>

      <div class="delt upptackare">
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
              <h3>{{ deltagande.name }}</h3>
              <h4>{{ deltagande.desc }}</h4>
            </b-collapse>
          </div>
        </div>
      </div>

      <div class="delt aventyrare">
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
              <h3>{{ deltagande.name }}</h3>
              <h4>{{ deltagande.desc }}</h4>
              <p>{{ deltagande.innehall }}</p>
            </b-collapse>
          </div>
        </div>
      </div>

      <div class="delt utmanare">
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
              <h3>{{ deltagande.name }}</h3>
              <h4>{{ deltagande.desc }}</h4>
              <p>{{ deltagande.innehall }}</p>
            </b-collapse>
          </div>
        </div>
      </div>

      <div class="delt rover">
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
              <h3>{{ deltagande.name }}</h3>
              <h4>{{ deltagande.desc }}</h4>
              <p>{{ deltagande.innehall }}</p>
            </b-collapse>
          </div>
        </div>
      </div>
    </div>
    <div class="fyllnad"></div>
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
  justify-content: flex-start;
  align-items: flex-start;
  flex-wrap: wrap;
  background-color: #ffffff;
  padding-bottom: 50px;
  margin-left: auto;
  margin-right: auto;
}

.deltagande h2 {
  margin-top: 20px;
}

#fotspar {
  margin-left: 55%;
}

#ljusspar {
  margin-left: -48.5%;
}

#djurspar {
  margin-left: -152%;
}

#tidspar {
  margin-left: -255.4%;
}

#horisonten {
  margin-left: 55%;
}

#manniskan {
  margin-left: -48.5%;
}

#vagen {
  margin-left: -152%;
}

#fjarran {
  margin-left: -255.4%;
}

#nara {
  margin-left: 55%;
}

#berattelsen {
  margin-left: -48.5%;
}

#forebilden {
  margin-left: 55%;
}

#bygget {
  margin-left: -48.5%;
}

#hajken {
  margin-left: -152%;
}

#miljon {
  margin-left: -255.4%;
}

#motet {
  margin-left: 55%;
}

#varlden {
  margin-left: -48.5%;
}

#rosten {
  margin-left: -152%;
}

#scenen {
  margin-left: -255.4%;
}

#borjan {
  margin-left: 55%;
}

#engagera {
  margin-left: -48.5%;
}

#hjalpa-deltagande {
  margin-left: -152%;
}

#vaga {
  margin-left: -255.4%;
}

#ta-stallning {
  margin-left: 55%;
}

#paverka {
  margin-left: -48.5%;
}

#utveckla {
  margin-left: -152%;
}

#utforska {
  margin-left: -255.4%;
}

#orka {
  margin-left: 55%;
}

#fortsattningen {
  margin-left: -48.5%;
}

#ledarskapet {
  margin-left: 55%;
}

#naturen {
  margin-left: -48.5%;
}

#samhallet {
  margin-left: -152%;
}

#kulturen {
  margin-left: -255.4%;
}

@media only screen and (max-width: 600px) {
  #fotspar {
    width: 90%;
    margin-left: 5%;
  }

  #ljusspar {
    width: 90%;
    margin-left: 5%;
  }

  #djurspar {
    width: 90%;
    margin-left: 5%;
  }

  #tidspar {
    width: 90%;
    margin-left: 5%;
  }

  #horisonten {
    width: 90%;
    margin-left: 5%;
  }

  #manniskan {
    width: 90%;
    margin-left: 5%;
  }

  #vagen {
    width: 90%;
    margin-left: 5%;
  }

  #fjarran {
    width: 90%;
    margin-left: 5%;
  }

  #nara {
    width: 90%;
    margin-left: 5%;
  }

  #berattelsen {
    width: 90%;
    margin-left: 5%;
  }

  #forebilden {
    width: 90%;
    margin-left: 5%;
  }

  #bygget {
    width: 90%;
    margin-left: 5%;
  }

  #hajken {
    width: 90%;
    margin-left: 5%;
  }

  #miljon {
    width: 90%;
    margin-left: 5%;
  }

  #motet {
    width: 90%;
    margin-left: 5%;
  }

  #varlden {
    width: 90%;
    margin-left: 5%;
  }

  #rosten {
    width: 90%;
    margin-left: 5%;
  }

  #scenen {
    width: 90%;
    margin-left: 5%;
  }

  #borjan {
    width: 90%;
    margin-left: 5%;
  }

  #engagera {
    width: 90%;
    margin-left: 5%;
  }

  #hjalpa-deltagande {
    width: 90%;
    margin-left: 5%;
  }

  #vaga {
    width: 90%;
    margin-left: 5%;
  }

  #ta-stallning {
    width: 90%;
    margin-left: 5%;
  }

  #paverka {
    width: 90%;
    margin-left: 5%;
  }

  #utveckla {
    width: 90%;
    margin-left: 5%;
  }

  #utforska {
    width: 90%;
    margin-left: 5%;
  }

  #orka {
    width: 90%;
    margin-left: 5%;
  }

  #fortsattningen {
    width: 90%;
    margin-left: 5%;
  }

  #ledarskapet {
    width: 90%;
    margin-left: 5%;
  }

  #naturen {
    width: 90%;
    margin-left: 5%;
  }

  #samhallet {
    width: 90%;
    margin-left: 5%;
  }

  #kulturen {
    width: 90%;
    margin-left: 5%;
  }
}
</style>
