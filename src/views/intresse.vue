<template>
  <div>
    <h1>Intressemärken</h1>
    <div class="intresse gallery">
      <div
        class="badge sparare upptackare aventyrare utmanare rover"
        @click="toggleBadge"
      >
        <img
          class="img"
          src="../assets/Intressemarken/Internationellt-lara.jpg"
          alt="Internationellt Lära"
        />
        <p>Internationellt Lära</p>
      </div>

      <div
        class="badge upptackare aventyrare utmanare rover"
        @click="toggleBadge"
      >
        <img
          class="img"
          src="../assets/Intressemarken/Internationellt-lyssna.jpg"
          alt="Internationellt Lyssna"
        />
        <p>Internationellt Lyssna</p>
      </div>
      <div class="badge aventyrare utmanare rover" @click="toggleBadge">
        <img
          class="img"
          src="../assets/Intressemarken/Internationellt-mota.jpg"
          alt="Internationellt Möta"
        />
        <p>Internationellt Möta</p>
      </div>
      <div
        class="badge sparare upptackare aventyrare utmanare rover"
        @click="toggleBadge"
      >
        <img class="img" src="../assets/Intressemarken/Klura.jpg" alt="Klura" />
        <p>Klura</p>
      </div>
      <div
        class="badge sparare upptackare aventyrare utmanare rover"
        @click="toggleBadge"
      >
        <img class="img" src="../assets/Intressemarken/Hitta.jpg" alt="Hitta" />
        <p>Hitta</p>
      </div>
      <div
        class="badge upptackare aventyrare utmanare rover"
        @click="toggleBadge"
      >
        <img class="img" src="../assets/Intressemarken/Finna.jpg" alt="Finna" />
        <p>Finna</p>
      </div>

      <section
        @submit.prevent="handleSubmit"
        v-if="showBadge"
        class="badgeinfo"
      >
        <h2>Internationellt Lära</h2>
        <h3>
          Scouting är en global rörelse med ca 40 miljoner medlemmar i över 160
          länder. Internationellt: Lära handlar om att lära sig mer om scouting
          i ett annat land och det landets kultur. Att lära sig mer och träffas
          över gränserna är en viktig del av scouting. På så sätt bidrar vi till
          fred och förståelse mellan folk och länder.
        </h3>
        <p>
          <b>Målspår</b>
          <br />Förståelse för omvärlden, egna värderingar, självinsikt och
          självkänsla.
          <br />
          <br />
          <b>Innehåll</b>
          <br />För att få intressemärket Internationellt: Lära ska du ta reda
          på hur det är att vara scout i ett annat land och vad det innebär. Det
          kan ni till exempel göra genom att ta reda på vad de gör för
          scoutaktiviteter, vilka likheterna och skillnaderna är det jämfört mot
          vad ni gör i Scouterna. Ni kan också ta reda på hur många scouter det
          finns i det landet, vilka åldersgrupper de har, om det finns olika
          scoutförbund och vad det betyder och så vidare.
          <br />
          <br />På www.scouterna.se, www.wagggs.org och www.scout.org finns
          kontaktuppgifter och länkar till scoutorganisationer i hela världen.
          Kanske är det någon i kåren som har varit på läger i ett annat land
          och kan berätta mer om det. Passa samtidigt på att lära er mer om
          själva landet. Det finns massor av information på internet och
          bibliotek men att jobba med det här märket är mer än att bara läsa och
          prata. Lyssna på musik från det land ni valt, laga typisk mat, avbilda
          typiska djur och natur från landet i papier maché, måla eller prova
          någon typisk dans.
        </p>
      </section>

      <div
        class="badge sparare upptackare aventyrare utmanare rover"
        @click="toggleBadge"
      >
        <img class="img" src="../assets/Intressemarken/Tanda.jpg" alt="Tända" />
        <p>Tända</p>
      </div>
      <div
        class="badge upptackare aventyrare utmanare rover"
        @click="toggleBadge"
      >
        <img
          class="img"
          src="../assets/Intressemarken/Brinna.jpg"
          alt="Brinna"
        />
        <p>Brinna</p>
      </div>
      <div
        class="badge upptackare aventyrare utmanare rover"
        @click="toggleBadge"
      >
        <img class="img" src="../assets/Intressemarken/Elda.jpg" alt="Elda" />
        <p>Elda</p>
      </div>
      <div
        class="badge sparare upptackare aventyrare utmanare rover"
        @click="toggleBadge"
      >
        <img
          class="img"
          src="../assets/Intressemarken/Matettan.jpg"
          alt="Matettan"
        />
        <p>Matettan</p>
      </div>
      <div
        class="badge upptackare aventyrare utmanare rover"
        @click="toggleBadge"
      >
        <img
          class="img"
          src="../assets/Intressemarken/Mattvaan.jpg"
          alt="Mattvåan"
        />
        <p>Mattvåan</p>
      </div>
      <div class="badge aventyrare utmanare rover" @click="toggleBadge">
        <img
          class="img"
          src="../assets/Intressemarken/Mattrean.jpg"
          alt="Mattrean"
        />
        <p>Mattrean</p>
      </div>
      <div
        class="badge sparare upptackare aventyrare utmanare rover"
        @click="toggleBadge"
      >
        <img
          class="img"
          src="../assets/Intressemarken/Goda-garningar.jpg"
          alt="Goda gärningar"
        />
        <p>Goda gärningar</p>
      </div>
      <div
        class="badge upptackare aventyrare utmanare rover"
        @click="toggleBadge"
      >
        <img
          class="img"
          src="../assets/Intressemarken/Varldsforbattraren.jpg"
          alt="Världsförbättraren"
        />
        <p>Världsförbättraren</p>
      </div>
      <div
        class="badge sparare upptackare aventyrare utmanare rover"
        @click="toggleBadge"
      >
        <img class="img" src="../assets/Intressemarken/Spela.jpg" alt="Spela" />
        <p>Spela</p>
      </div>
      <div
        class="badge upptackare aventyrare utmanare rover"
        @click="toggleBadge"
      >
        <img class="img" src="../assets/Intressemarken/Filma.jpg" alt="Filma" />
        <p>Filma</p>
      </div>
      <div
        class="badge sparare upptackare aventyrare utmanare rover"
        @click="toggleBadge"
      >
        <img class="img" src="../assets/Intressemarken/Skapa.jpg" alt="Skapa" />
        <p>Skapa</p>
      </div>
      <div
        class="badge upptackare aventyrare utmanare rover"
        @click="toggleBadge"
      >
        <img class="img" src="../assets/Intressemarken/Fixa.jpg" alt="Fixa" />
        <p>Fixa</p>
      </div>
      <div
        class="badge sparare upptackare aventyrare utmanare rover"
        @click="toggleBadge"
      >
        <img
          class="img"
          src="../assets/Intressemarken/Forsta-rep.jpg"
          alt="Första repmärket"
        />
        <p>Första repmärket</p>
      </div>
      <div
        class="badge upptackare aventyrare utmanare rover"
        @click="toggleBadge"
      >
        <img
          class="img"
          src="../assets/Intressemarken/Andra-rep.jpg"
          alt="Andra repmärket"
        />
        <p>Andra repmärket</p>
      </div>
      <div
        class="badge upptackare aventyrare utmanare rover"
        @click="toggleBadge"
      >
        <img
          class="img"
          src="../assets/Intressemarken/Da-och-nu.jpg"
          alt="Då och nu"
        />
        <p>Då och nu</p>
      </div>
      <div
        class="badge upptackare aventyrare utmanare rover"
        @click="toggleBadge"
      >
        <img
          class="img"
          src="../assets/Intressemarken/Livsaskadning.jpg"
          alt="Livsåskådning"
        />
        <p>Livsåskådning</p>
      </div>
      <div
        class="badge upptackare aventyrare utmanare rover"
        @click="toggleBadge"
      >
        <img
          class="img"
          src="../assets/Intressemarken/Blogga.jpg"
          alt="Blogga"
        />
        <p>Blogga</p>
      </div>
      <div class="badge aventyrare utmanare rover" @click="toggleBadge">
        <img
          class="img"
          src="../assets/Intressemarken/Chatta.jpg"
          alt="Chatta"
        />
        <p>Chatta</p>
      </div>
      <div
        class="badge sparare upptackare aventyrare utmanare rover"
        @click="toggleBadge"
      >
        <img
          class="img"
          src="../assets/Intressemarken/Ute-vinter.jpg"
          alt="Vara ute vinter"
        />
        <p>Vara ute vinter</p>
      </div>
      <div
        class="badge sparare upptackare aventyrare utmanare rover"
        @click="toggleBadge"
      >
        <img
          class="img"
          src="../assets/Intressemarken/Ute-vatten.jpg"
          alt="Vara ute vatten"
        />
        <p>Vara ute vatten</p>
      </div>
      <div
        class="badge sparare upptackare aventyrare utmanare rover"
        @click="toggleBadge"
      >
        <img
          class="img"
          src="../assets/Intressemarken/Ute-staden.jpg"
          alt="Vara ute staden"
        />
        <p>Vara ute staden</p>
      </div>
      <div
        class="badge sparare upptackare aventyrare utmanare rover"
        @click="toggleBadge"
      >
        <img
          class="img"
          src="../assets/Intressemarken/Ute-skogen.jpg"
          alt="Vara ute skogen"
        />
        <p>Vara ute skogen</p>
      </div>
      <div
        class="badge sparare upptackare aventyrare utmanare rover"
        @click="toggleBadge"
      >
        <img
          class="img"
          src="../assets/Intressemarken/Ute-fjallet.jpg"
          alt="Vara ute fjället"
        />
        <p>Vara ute fjället</p>
      </div>
      <div
        class="badge sparare upptackare aventyrare utmanare rover"
        @click="toggleBadge"
      >
        <img
          class="img"
          src="../assets/Intressemarken/Plastra.jpg"
          alt="Plåstra"
        />
        <p>Plåstra</p>
      </div>
      <div
        class="badge upptackare aventyrare utmanare rover"
        @click="toggleBadge"
      >
        <img
          class="img"
          src="../assets/Intressemarken/Hjalpa.jpg"
          alt="Hjälpa"
        />
        <p>Hjälpa</p>
      </div>
      <div class="badge aventyrare utmanare rover" @click="toggleBadge">
        <img class="img" src="../assets/Intressemarken/Radda.jpg" alt="Rädda" />
        <p>Rädda</p>
      </div>
      <div
        class="badge upptackare aventyrare utmanare rover"
        @click="toggleBadge"
      >
        <img
          class="img"
          src="../assets/Intressemarken/Rekrytera.jpg"
          alt="Rekrytera"
        />
        <p>Rekrytera</p>
      </div>
      <div
        class="badge sparare upptackare aventyrare utmanare rover"
        @click="toggleBadge"
      >
        <img
          class="img"
          src="../assets/Intressemarken/Sortera.jpg"
          alt="Miljö: Sortera"
        />
        <p>Miljö: Sortera</p>
      </div>
      <div
        class="badge upptackare aventyrare utmanare rover"
        @click="toggleBadge"
      >
        <img
          class="img"
          src="../assets/Intressemarken/Atervinn.jpg"
          alt="Miljö: Återvinn"
        />
        <p>Miljö: Återvinn</p>
      </div>
      <div
        class="badge upptackare aventyrare utmanare rover"
        @click="toggleBadge"
      >
        <img
          class="img"
          src="../assets/Intressemarken/Demokrati.jpg"
          alt="Demokrati"
        />
        <p>Demokrati</p>
      </div>
      <div
        class="badge upptackare aventyrare utmanare rover"
        @click="toggleBadge"
      >
        <img class="img" src="../assets/Intressemarken/Bygga.jpg" alt="Bygga" />
        <p>Bygga</p>
      </div>
      <div
        class="badge sparare upptackare aventyrare utmanare rover"
        @click="toggleBadge"
      >
        <img
          class="img"
          src="../assets/Intressemarken/Naturligt.jpg"
          alt="Naturligt"
        />
        <p>Naturligt</p>
      </div>
      <div
        class="badge upptackare aventyrare utmanare rover"
        @click="toggleBadge"
      >
        <img class="img" src="../assets/Intressemarken/Vader.jpg" alt="Väder" />
        <p>Väder</p>
      </div>
      <div
        class="badge sparare upptackare aventyrare utmanare rover"
        @click="toggleBadge"
      >
        <img
          class="img"
          src="../assets/Intressemarken/Paddla.jpg"
          alt="Paddla"
        />
        <p>Paddla</p>
      </div>
      <div
        class="badge sparare upptackare aventyrare utmanare rover"
        @click="toggleBadge"
      >
        <img
          class="img"
          src="../assets/Intressemarken/Under-ytan.jpg"
          alt="Under ytan"
        />
        <p>Under ytan</p>
      </div>
      <div
        class="badge upptackare aventyrare utmanare rover"
        @click="toggleBadge"
      >
        <img
          class="img"
          src="../assets/Intressemarken/Vatten.jpg"
          alt="Vatten"
        />
        <p>Vatten</p>
      </div>
      <div
        class="badge upptackare aventyrare utmanare rover"
        @click="toggleBadge"
      >
        <img
          class="img"
          src="../assets/Intressemarken/Morker.jpg"
          alt="Mörker"
        />
        <p>Mörker</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "intresse",

  data() {
    return {
      showBadge: false
    };
  },

  methods: {
    toggleBadge() {
      this.showBadge = !this.showBadge;
    }
  }
};
</script>
