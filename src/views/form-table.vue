<template>
  <div>
    <h1 class="sideName">Patruller</h1>
    <div class="form">
      <div class="formPatrol">
        <button
          @click="togglePatrolForm"
          class="formButton"
          id="addPatrolButton"
        >
          Lägg till patrull
        </button>
        <section id="addPatrol" class="addPatrol">
          <b-form @submit.prevent="handleSubmit" v-if="showPatrolForm">
            <div class="patrolFormInputs">
              <b-form-group
                class="form-group"
                id="PatrolNameGroup"
                label="Patrullens namn:"
                label-for="PatrolName"
              >
                <b-form-input
                  id="patrolName"
                  type="text"
                  v-model="formData.patrolName"
                  required
                  placeholder="Skriv patrullens namn..."
                >
                </b-form-input>
              </b-form-group>

              <b-form-group
                class="form-group"
                id="PatrolAgeGroup"
                label="Åldersgrupp:"
                label-for="PatrolAge"
              >
                <b-form-select
                  id="patrolAge"
                  v-model="formData.patrolAge"
                  placeholder="Välj patrullens åldersgrupp..."
                  required
                  :options="[
                    'Familjescouter',
                    'Spårare',
                    'Upptäckare',
                    'Äventyrare',
                    'Utmanare',
                    'Rover',
                    'Ledare',
                    'Övriga'
                  ]"
                ></b-form-select>
              </b-form-group>

              <b-form-group
                class="form-group"
                id="ScoutNameGroup1"
                label="Scout 1 namn:"
                label-for="ScoutName1"
              >
                <b-form-input
                  id="scoutName1"
                  v-model="formData.scoutName1"
                  required
                  placeholder="Skriv scoutens namn..."
                >
                </b-form-input>
              </b-form-group>

              <b-form-group
                class="form-group"
                id="ScoutNameGroup2"
                label="Scout 2 namn:"
                label-for="ScoutName2"
              >
                <b-form-input
                  id="scoutName2"
                  v-model="formData.scoutName2"
                  placeholder="Skriv scoutens namn..."
                >
                </b-form-input>
              </b-form-group>

              <b-form-group
                class="form-group"
                id="ScoutNameGroup3"
                label="Scout 3 namn:"
                label-for="ScoutName3"
              >
                <b-form-input
                  id="scoutName3"
                  v-model="formData.scoutName3"
                  placeholder="Skriv scoutens namn..."
                >
                </b-form-input>
              </b-form-group>

              <b-form-group
                class="form-group"
                id="ScoutNameGroup4"
                label="Scout 4 namn:"
                label-for="ScoutName4"
              >
                <b-form-input
                  id="scoutName4"
                  v-model="formData.scoutName4"
                  placeholder="Skriv scoutens namn..."
                >
                </b-form-input>
              </b-form-group>

              <b-form-group
                class="form-group"
                id="ScoutNameGroup5"
                label="Scout 5 namn:"
                label-for="ScoutName5"
              >
                <b-form-input
                  id="scoutName5"
                  v-model="formData.scoutName5"
                  placeholder="Skriv scoutens namn..."
                >
                </b-form-input>
              </b-form-group>

              <b-form-group
                class="form-group"
                id="ScoutNameGroup6"
                label="Scout 6 namn:"
                label-for="ScoutName6"
              >
                <b-form-input
                  id="scoutName6"
                  v-model="formData.scoutName6"
                  placeholder="Skriv scoutens namn..."
                >
                </b-form-input>
              </b-form-group>

              <b-form-group
                class="form-group"
                id="ScoutNameGroup7"
                label="Scout 7 namn:"
                label-for="ScoutName7"
              >
                <b-form-input
                  id="scoutName7"
                  v-model="formData.scoutName7"
                  placeholder="Skriv scoutens namn..."
                >
                </b-form-input>
              </b-form-group>

              <b-form-group
                class="form-group"
                id="ScoutNameGroup8"
                label="Scout 8 namn:"
                label-for="ScoutName8"
              >
                <b-form-input
                  id="scoutName8"
                  v-model="formData.scoutName8"
                  placeholder="Skriv scoutens namn..."
                >
                </b-form-input>
              </b-form-group>

              <b-form-group
                class="form-group"
                id="ScoutNameGroup9"
                label="Scout 9 namn:"
                label-for="ScoutName9"
              >
                <b-form-input
                  id="scoutName9"
                  v-model="formData.scoutName9"
                  placeholder="Skriv scoutens namn..."
                >
                </b-form-input>
              </b-form-group>

              <b-form-group
                class="form-group"
                id="ScoutNameGroup10"
                label="Scout 10 namn:"
                label-for="ScoutName10"
              >
                <b-form-input
                  id="scoutName10"
                  v-model="formData.scoutName10"
                  placeholder="Skriv scoutens namn..."
                >
                </b-form-input>
              </b-form-group>
            </div>

            <b-button type="submit" class="formButton" id="formSubmit">
              Spara
            </b-button>

            <b-button type="reset" class="formButton" id="formReset">
              Återställ
            </b-button>

            <button
              type="button"
              class="formButton"
              @click="togglePatrolForm()"
            >
              Stäng
            </button>
          </b-form>
        </section>
      </div>

      <div class="table">
        <b-table
          class="patrolTable"
          striped
          hover
          :items="patrols"
          :fields="fields"
        >
          <template v-slot:cell(patrolName)="data"
            ><router-link :to="`/patruller/${data.item.id}`">{{
              data.item.patrolName
            }}</router-link>
          </template>
        </b-table>
      </div>
    </div>
    <div class="fyllnad"></div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import patrols from "../data/patrols";

export default {
  name: "form-table",
  data() {
    return {
      //Datan i formuläret vid start
      formData: {
        patrolName: "",
        patrolAge: null,
        scouts: [
          { scoutName1: "" },
          { scoutName2: "" },
          { scoutName3: "" },
          { scoutName4: "" },
          { scoutName5: "" },
          { scoutName6: "" },
          { scoutName7: "" },
          { scoutName8: "" },
          { scoutName9: "" },
          { scoutName10: "" }
        ],
        badgesBevis: [],
        badgesIntresse: [],
        badgesDeltagande: [],
        patrols: patrols
      },

      //Formuläret är stängt från början
      showPatrolForm: false,

      //Array med patruller från state
      patrols: patrols,

      //Vilka fält som ska visas i table
      fields: [
        { key: "patrolName", label: "Patrullnamn" },
        { key: "patrolAge", label: "Åldersgrupp" },
        {
          key: "scouts.length",
          label: "Antal scouter"
        }
      ]
    };
  },
  methods: {
    ...mapActions(["addPatrol"]),

    //Öppnar/Stänger formuläret
    togglePatrolForm() {
      this.showPatrolForm = !this.showPatrolForm;
    },

    //Sätter datan i formuläret till payloaden
    handleSubmit() {
      const {
        patrolName,
        patrolAge,
        scoutName1,
        scoutName2,
        scoutName3,
        scoutName4,
        scoutName5,
        scoutName6,
        scoutName7,
        scoutName8,
        scoutName9,
        scoutName10,
        badgesBevis,
        badgesIntresse,
        badgesDeltagande
      } = this.formData;

      const scouts = [
        { name: scoutName1, badgesBevis, badgesIntresse, badgesDeltagande },
        { name: scoutName2, badgesBevis, badgesIntresse, badgesDeltagande },
        { name: scoutName3, badgesBevis, badgesIntresse, badgesDeltagande },
        { name: scoutName4, badgesBevis, badgesIntresse, badgesDeltagande },
        { name: scoutName5, badgesBevis, badgesIntresse, badgesDeltagande },
        { name: scoutName6, badgesBevis, badgesIntresse, badgesDeltagande },
        { name: scoutName7, badgesBevis, badgesIntresse, badgesDeltagande },
        { name: scoutName8, badgesBevis, badgesIntresse, badgesDeltagande },
        { name: scoutName9, badgesBevis, badgesIntresse, badgesDeltagande },
        { name: scoutName10, badgesBevis, badgesIntresse, badgesDeltagande }
      ];

      const filteredScouts = scouts.filter(scout => scout.name != undefined);

      const payload = {
        patrolName,
        patrolAge,
        scouts: filteredScouts
      };

      //Skickar vidare payloaden till addPatrol (actions.js)
      this.addPatrol(payload);

      //Reset form after submit
      this.formData = {
        patrolName: "",
        patrolAge: null,
        scouts: [
          { scoutName1: "" },
          { scoutName2: "" },
          { scoutName3: "" },
          { scoutName4: "" },
          { scoutName5: "" },
          { scoutName6: "" },
          { scoutName7: "" },
          { scoutName8: "" },
          { scoutName9: "" },
          { scoutName10: "" }
        ]
      };
      this.showPatrolForm = !this.showPatrolForm;
    }
  }
};
</script>

<style>
.formButton {
  margin: 1rem;
  background-color: rgb(0, 54, 96);
  border: none;
  padding: 0.7rem;
  padding-left: 1.2rem;
  padding-right: 1.2rem;
  border-radius: 10px;
  color: white;
}

.formButton:hover {
  background-color: rgb(0, 33, 58);
  border-color: rgb(0, 33, 58);
}

.formButton:active {
  background-color: rgb(0, 33, 58);
  border-color: rgb(0, 33, 58);
}

.patrolFormInputs {
  text-align: left;
}

.patrolFormInputs .form-group {
  padding-bottom: 10px;
}

.form {
  width: 75%;
  margin-left: auto;
  margin-right: auto;
  background-color: #ffffff;
  border-radius: 25px;
}

.formPatrol {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap;
}

.table {
  width: 95%;
  margin-left: auto;
  margin-right: auto;
  margin-top: 5%;
  padding-bottom: 20px;
}

.addPatrol {
  width: 50%;
}

#addPatrolButton {
  margin-left: 25%;
  margin-right: 25%;
  margin-top: 5%;
}
</style>
