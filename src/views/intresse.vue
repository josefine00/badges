<template>
  <div>
    <h1 class="sideName">Intressemärken</h1>
    <div class="intresse gallery">
      <div class="info-badge">
        <h5 class="line-left">
          Intressemärkena är främst tänkta för de två-tre yngre åldersgrupperna
          och för varje märke finns en rekommendation om vilken ålder det lämpar
          sig bäst för. Se det just som rekommendationer, du känner dina scouter
          bäst själv och tillsammans avgör ni vad ni vill jobba med och när.
        </h5>

        <h5 class="line-left">
          Beroende på vilka scouter som är intresserade av vilka intressemärken
          kan det ibland också passa bra att bryta de vanliga patrullerna och
          bilda nya grupperingar tillfälligt. Till exempel kan alla som har en
          viss roll i varje patrull tillsammans jobba med ett märke som rör
          deras ansvarsområde.
        </h5>

        <h5 class="line-left">
          Programmet för ett intressemärke sträcker sig över ett par scoutmöten,
          vissa kan man behöva arbeta med av och till under en hel termin. Vissa
          märken finns i flera nivåer men det är inget krav att ha det första
          märket innan man får det andra.
        </h5>
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
          <h4>{{ intresse.desc }}</h4>
          <p v-if="intresse.malspar"><b>Målspår: </b>{{ intresse.malspar }}</p>
          <p><b>Innehåll: </b>{{ intresse.innehall }}</p>
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
    width: 90%;
    margin-left: 5%;
  }

  #int-lyssna {
    width: 90%;
    margin-left: 5%;
  }
  #int-mota {
    width: 90%;
    margin-left: 5%;
  }

  #klura {
    width: 90%;
    margin-left: 5%;
  }

  #hitta {
    width: 90%;
    margin-left: 5%;
  }

  #finna {
    width: 90%;
    margin-left: 5%;
  }

  #tanda {
    width: 90%;
    margin-left: 5%;
  }

  #brinna {
    width: 90%;
    margin-left: 5%;
  }

  #elda {
    width: 90%;
    margin-left: 5%;
  }

  #matettan {
    width: 90%;
    margin-left: 5%;
  }

  #mattvaan {
    width: 90%;
    margin-left: 5%;
  }

  #mattrean {
    width: 90%;
    margin-left: 5%;
  }

  #goda-garningar {
    width: 90%;
    margin-left: 5%;
  }

  #varldsforbattraren {
    width: 90%;
    margin-left: 5%;
  }

  #spela {
    width: 90%;
    margin-left: 5%;
  }

  #filma {
    width: 90%;
    margin-left: 5%;
  }

  #skapa {
    width: 90%;
    margin-left: 5%;
  }

  #fixa {
    width: 90%;
    margin-left: 5%;
  }

  #forsta-rep {
    width: 90%;
    margin-left: 5%;
  }

  #andra-rep {
    width: 90%;
    margin-left: 5%;
  }

  #da-och-nu {
    width: 90%;
    margin-left: 5%;
  }

  #livsaskadning {
    width: 90%;
    margin-left: 5%;
  }

  #blogga {
    width: 90%;
    margin-left: 5%;
  }

  #chatta {
    width: 90%;
    margin-left: 5%;
  }

  #vara-ute-vinter {
    width: 90%;
    margin-left: 5%;
  }

  #vara-ute-vatten {
    width: 90%;
    margin-left: 5%;
  }

  #vara-ute-staden {
    width: 90%;
    margin-left: 5%;
  }

  #vara-ute-skogen {
    width: 90%;
    margin-left: 5%;
  }

  #vara-ute-fjallet {
    width: 90%;
    margin-left: 5%;
  }

  #plastra {
    width: 90%;
    margin-left: 5%;
  }

  #hjalpa {
    width: 90%;
    margin-left: 5%;
  }

  #radda {
    width: 90%;
    margin-left: 5%;
  }

  #rekrytera {
    width: 90%;
    margin-left: 5%;
  }

  #miljo-sortera {
    width: 90%;
    margin-left: 5%;
  }

  #miljo-atervinn {
    width: 90%;
    margin-left: 5%;
  }

  #demokrati {
    width: 90%;
    margin-left: 5%;
  }

  #bygga {
    width: 90%;
    margin-left: 5%;
  }

  #naturligt {
    width: 90%;
    margin-left: 5%;
  }

  #vader {
    width: 90%;
    margin-left: 5%;
  }

  #paddla {
    width: 90%;
    margin-left: 5%;
  }

  #under-ytan {
    width: 90%;
    margin-left: 5%;
  }

  #vatten {
    width: 90%;
    margin-left: 5%;
  }

  #morker {
    width: 90%;
    margin-left: 5%;
  }
}
</style>
