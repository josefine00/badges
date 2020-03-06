<template>
  <div>
    <h1 class="sideName">Intressemärken</h1>
    <div class="intresse gallery">
      <div class="info-badge">
        <div class="line-left">
          <h5>
            Intressemärkena är främst tänkta för de två-tre yngre
            åldersgrupperna och för varje märke finns en rekommendation om
            vilken ålder det lämpar sig bäst för. Se det just som
            rekommendationer, du känner dina scouter bäst själv och tillsammans
            avgör ni vad ni vill jobba med och när.
          </h5>

          <h5>
            Beroende på vilka scouter som är intresserade av vilka
            intressemärken kan det ibland också passa bra att bryta de vanliga
            patrullerna och bilda nya grupperingar tillfälligt. Till exempel kan
            alla som har en viss roll i varje patrull tillsammans jobba med ett
            märke som rör deras ansvarsområde.
          </h5>

          <h5>
            Programmet för ett intressemärke sträcker sig över ett par
            scoutmöten, vissa kan man behöva arbeta med av och till under en hel
            termin. Vissa märken finns i flera nivåer men det är inget krav att
            ha det första märket innan man får det andra.
          </h5>
        </div>
      </div>
      <div
        role="tablist"
        v-for="intresse in intresses"
        v-bind:key="intresse.id"
        class="badge"
      >
        <b-card role="tab" class="b-card">
          <div v-b-toggle="intresse.id">
            <img :src="intresse.image" :alt="intresse.name" class="img" />
            <p>{{ intresse.name }}</p>
          </div>
        </b-card>
        <b-collapse
          role="tabpanel"
          :id="intresse.id"
          accordion="intresse-badges"
          v-show="showBadgeInfoIntresse"
          class="badgeinfo"
        >
          <h3>{{ intresse.name }}</h3>
          <div class="ageGroup">
            <div
              v-for="ageImage in intresse.ageImage"
              v-bind:key="ageImage.name"
            >
              <img
                :src="ageImage.image"
                :alt="ageImage.name"
                class="ageImage"
              />
            </div>
          </div>

          <h4>{{ intresse.desc }}</h4>
          <p v-if="intresse.malspar"><b>Målspår: </b>{{ intresse.malspar }}</p>
          <p><b>Innehåll: </b>{{ intresse.innehall }}</p>
          <ul
            v-for="list in intresse.list"
            v-bind:key="list.listId"
            :id="list.listId"
          >
            <li>
              {{ list.krav }}
            </li>
          </ul>
          <p>{{ intresse.info }}</p>
        </b-collapse>
      </div>
    </div>
    <div class="fyllnad"></div>
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

<style>
#int-lara {
  margin-left: 55%;
}

#int-lyssna {
  margin-left: -48.5%;
}

#int-mota {
  margin-left: -152%;
}

#klura {
  margin-left: -255.4%;
}

#hitta {
  margin-left: 55%;
}

#finna {
  margin-left: -48.5%;
}

#tanda {
  margin-left: -152%;
}

#brinna {
  margin-left: -255.4%;
}

#elda {
  margin-left: 55%;
}

#matettan {
  margin-left: -48.5%;
}

#mattvaan {
  margin-left: -152%;
}

#mattrean {
  margin-left: -255.4%;
}

#goda-garningar {
  margin-left: 55%;
}

#varldsforbattraren {
  margin-left: -48.5%;
}

#spela {
  margin-left: -152%;
}

#filma {
  margin-left: -255.4%;
}

#skapa {
  margin-left: 55%;
}

#fixa {
  margin-left: -48.5%;
}

#forsta-rep {
  margin-left: -152%;
}

#andra-rep {
  margin-left: -255.4%;
}

#da-och-nu {
  margin-left: 55%;
}

#livsaskadning {
  margin-left: -48.5%;
}

#blogga {
  margin-left: -152%;
}

#chatta {
  margin-left: -255.4%;
}

#vara-ute-vinter {
  margin-left: 55%;
}

#vara-ute-vatten {
  margin-left: -48.5%;
}

#vara-ute-staden {
  margin-left: -152%;
}

#vara-ute-skogen {
  margin-left: -255.4%;
}

#vara-ute-fjallet {
  margin-left: 55%;
}

#plastra {
  margin-left: -48.5%;
}

#hjalpa {
  margin-left: -152%;
}

#radda {
  margin-left: -255.4%;
}

#rekrytera {
  margin-left: 55%;
}

#miljo-sortera {
  margin-left: -48.5%;
}

#miljo-atervinn {
  margin-left: -152%;
}

#demokrati {
  margin-left: -255.4%;
}

#bygga {
  margin-left: 55%;
}

#naturligt {
  margin-left: -48.5%;
}

#vader {
  margin-left: -152%;
}

#paddla {
  margin-left: -255.4%;
}

#under-ytan {
  margin-left: 55%;
}

#vatten {
  margin-left: -48.5%;
}

#morker {
  margin-left: -152%;
}

@media only screen and (max-width: 600px) {
  #int-lara {
    width: 185%;
    margin-left: 9.7%;
  }

  #int-lyssna {
    width: 185%;
    margin-left: -94.9%;
  }
  #int-mota {
    width: 185%;
    margin-left: 9.7%;
  }

  #klura {
    width: 185%;
    margin-left: -94.9%;
  }

  #hitta {
    width: 185%;
    margin-left: 9.7%;
  }

  #finna {
    width: 185%;
    margin-left: -94.9%;
  }

  #tanda {
    width: 185%;
    margin-left: 9.7%;
  }

  #brinna {
    width: 185%;
    margin-left: -94.9%;
  }

  #elda {
    width: 185%;
    margin-left: 9.7%;
  }

  #matettan {
    width: 185%;
    margin-left: -94.9%;
  }

  #mattvaan {
    width: 185%;
    margin-left: 9.7%;
  }

  #mattrean {
    width: 185%;
    margin-left: -94.9%;
  }

  #goda-garningar {
    width: 185%;
    margin-left: 9.7%;
  }

  #varldsforbattraren {
    width: 185%;
    margin-left: -94.9%;
  }

  #spela {
    width: 185%;
    margin-left: 9.7%;
  }

  #filma {
    width: 185%;
    margin-left: -94.9%;
  }

  #skapa {
    width: 185%;
    margin-left: 9.7%;
  }

  #fixa {
    width: 185%;
    margin-left: -94.9%;
  }

  #forsta-rep {
    width: 185%;
    margin-left: 9.7%;
  }

  #andra-rep {
    width: 185%;
    margin-left: -94.9%;
  }

  #da-och-nu {
    width: 185%;
    margin-left: 9.7%;
  }

  #livsaskadning {
    width: 185%;
    margin-left: -94.9%;
  }

  #blogga {
    width: 185%;
    margin-left: 9.7%;
  }

  #chatta {
    width: 185%;
    margin-left: -94.9%;
  }

  #vara-ute-vinter {
    width: 185%;
    margin-left: 9.7%;
  }

  #vara-ute-vatten {
    width: 185%;
    margin-left: -94.9%;
  }

  #vara-ute-staden {
    width: 185%;
    margin-left: 9.7%;
  }

  #vara-ute-skogen {
    width: 185%;
    margin-left: -94.9%;
  }

  #vara-ute-fjallet {
    width: 185%;
    margin-left: 9.7%;
  }

  #plastra {
    width: 185%;
    margin-left: -94.9%;
  }

  #hjalpa {
    width: 185%;
    margin-left: 9.7%;
  }

  #radda {
    width: 185%;
    margin-left: -94.9%;
  }

  #rekrytera {
    width: 185%;
    margin-left: 9.7%;
  }

  #miljo-sortera {
    width: 185%;
    margin-left: -94.9%;
  }

  #miljo-atervinn {
    width: 185%;
    margin-left: 9.7%;
  }

  #demokrati {
    width: 185%;
    margin-left: -94.9%;
  }

  #bygga {
    width: 185%;
    margin-left: 9.7%;
  }

  #naturligt {
    width: 185%;
    margin-left: -94.9%;
  }

  #vader {
    width: 185%;
    margin-left: 9.7%;
  }

  #paddla {
    width: 185%;
    margin-left: -94.9%;
  }

  #under-ytan {
    width: 185%;
    margin-left: 9.7%;
  }

  #vatten {
    width: 185%;
    margin-left: -94.9%;
  }

  #morker {
    width: 185%;
    margin-left: -42.5%;
  }
}
</style>
