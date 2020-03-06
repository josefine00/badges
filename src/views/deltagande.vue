<template>
  <div>
    <h1 class="sideName">Deltagandemärken</h1>
    <div class="deltagande gallery">
      <div class="info-badge">
        <div class="line-left">
          <h5>
            Deltagandemärken delas ut till Scouter som har varit med i ett
            projekt en termin eller ett läger. Dessa märken skiljer sig från
            varandra beroende på vilken åldersgrupp du tillhör samt olika
            intressen och ju äldre du blir, desto större möjlighet har du att
            engagera dig och bli tilldelad fler märken.
          </h5>
          <h5>
            Ett deltagandemärke är ett minne av de upplevelser ni har haft
            tillsammans i patrullen.
          </h5>
        </div>
      </div>
      <div class="delt sparare">
        <div class="deltagande-header">
          <img src="sparare.png" alt="Spårarsymbolen" class="ageGroupLogo" />
          <h2>Spårare</h2>
          <img src="sparare.png" alt="Spårarsymbolen" class="ageGroupLogo" />
        </div>

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

      <div class="line"></div>

      <div class="delt upptackare">
        <div class="deltagande-header">
          <img
            src="upptackare.png"
            alt="Upptäckarsymbolen"
            class="ageGroupLogo"
          />
          <h2>Upptäckare</h2>
          <img
            src="upptackare.png"
            alt="Upptäckarsymbolen"
            class="ageGroupLogo"
          />
        </div>
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

      <div class="line"></div>

      <div class="delt aventyrare">
        <div class="deltagande-header">
          <img
            src="aventyrare.png"
            alt="Äventyrarsymbolen"
            class="ageGroupLogo"
          />
          <h2>Äventyrare</h2>
          <img
            src="aventyrare.png"
            alt="Äventyrarsymbolen"
            class="ageGroupLogo"
          />
        </div>
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

      <div class="line"></div>

      <div class="delt utmanare">
        <div class="deltagande-header">
          <img src="utmanare.png" alt="Utmanarsymbolen" class="ageGroupLogo" />
          <h2>Utmanare</h2>
          <img src="utmanare.png" alt="Utmanarsymbolen" class="ageGroupLogo" />
        </div>
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

      <div class="line"></div>

      <div class="delt rover">
        <div class="deltagande-header">
          <img src="rover.png" alt="Roversymbolen" class="ageGroupLogo" />
          <h2>Rover</h2>
          <img src="rover.png" alt="Roversymbolen" class="ageGroupLogo" />
        </div>
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
.rover {
  width: 100%;
}

.sparare {
  width: 100%;
}

.line {
  width: 90%;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 25px;
  border-bottom: 3px solid rgb(0, 54, 96);
}

.deltagande-gallery img {
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

.deltagande-header {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
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
    width: 185%;
    margin-left: 9.7%;
  }

  #ljusspar {
    width: 185%;
    margin-left: -94.9%;
  }

  #djurspar {
    width: 185%;
    margin-left: 9.7%;
  }

  #tidspar {
    width: 185%;
    margin-left: -94.9%;
  }

  #horisonten {
    width: 185%;
    margin-left: 9.7%;
  }

  #manniskan {
    width: 185%;
    margin-left: -94.9%;
  }

  #vagen {
    width: 185%;
    margin-left: 9.7%;
  }

  #fjarran {
    width: 185%;
    margin-left: -94.9%;
  }

  #nara {
    width: 185%;
    margin-left: 9.7%;
  }

  #berattelsen {
    width: 185%;
    margin-left: -94.9%;
  }

  #forebilden {
    width: 185%;
    margin-left: 9.7%;
  }

  #bygget {
    width: 185%;
    margin-left: -94.9%;
  }

  #hajken {
    width: 185%;
    margin-left: 9.7%;
  }

  #miljon {
    width: 185%;
    margin-left: -94.9%;
  }

  #motet {
    width: 185%;
    margin-left: 9.7%;
  }

  #varlden {
    width: 185%;
    margin-left: -94.9%;
  }

  #rosten {
    width: 185%;
    margin-left: 9.7%;
  }

  #scenen {
    width: 185%;
    margin-left: -94.9%;
  }

  #borjan {
    width: 185%;
    margin-left: 9.7%;
  }

  #engagera {
    width: 185%;
    margin-left: -94.9%;
  }

  #hjalpa-deltagande {
    width: 185%;
    margin-left: 9.7%;
  }

  #vaga {
    width: 185%;
    margin-left: -94.9%;
  }

  #ta-stallning {
    width: 185%;
    margin-left: 9.7%;
  }

  #paverka {
    width: 185%;
    margin-left: -94.9%;
  }

  #utveckla {
    width: 185%;
    margin-left: 9.7%;
  }

  #utforska {
    width: 185%;
    margin-left: -94.9%;
  }

  #orka {
    width: 185%;
    margin-left: 9.7%;
  }

  #fortsattningen {
    width: 185%;
    margin-left: -94.9%;
  }

  #ledarskapet {
    width: 185%;
    margin-left: 9.7%;
  }

  #naturen {
    width: 185%;
    margin-left: -94.9%;
  }

  #samhallet {
    width: 185%;
    margin-left: 9.7%;
  }

  #kulturen {
    width: 185%;
    margin-left: -94.9%;
  }
}
</style>
