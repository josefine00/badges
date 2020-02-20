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
            <b-form-group
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
              id="PatrolAgeGroup"
              label="Åldersgrupp:"
              label-for="PatrolAge"
            >
              <b-form-select
                id="patrolAge"
                v-model="formData.patrolAge"
                placeholder="Välj patrullens åldersgrupp..."
                :options="[
                  'Spårare',
                  'Upptäckare',
                  'Äventyrare',
                  'Utmanare',
                  'Rover',
                  'Ledare'
                ]"
              ></b-form-select>
            </b-form-group>

            <b-form-group
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

            <b-button type="submit" class="formButton" id="formSubmit">
              Spara
            </b-button>

            <b-button type="reset" class="formButton" id="formReset">
              Återställ
            </b-button>
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
          <template v-slot:cell(scouts)="patrols"> </template>
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
          { scoutName6: "" }
        ],
        patrols: patrols
      },

      //Formuläret är stängt från början
      showPatrolForm: false,

      //Array med patruller, ska ändras till state arrayen patrols
      patrols: [
        {
          patrolName: "Vargarna",
          patrolAge: "Äventyrare",
          scouts: [
            { scoutName1: "Ellen" },
            { scoutName2: "Sanna" },
            { scoutName3: "Amanda" }
          ]
        },
        {
          patrolName: "Uttrarna",
          patrolAge: "Upptäckare",
          scouts: [
            { scoutName1: "Leo" },
            { scoutName2: "Indra" },
            { scoutName3: "Cian" },
            { scoutName4: "Annie" },
            { scoutName5: "Alwin" }
          ]
        },
        {
          patrolName: "Hökarna",
          patrolAge: "Spårare",
          scouts: [
            { scoutName1: "Emil" },
            { scoutName2: "Mollie" },
            { scoutName3: "Alice" },
            { scoutName4: "Nils" }
          ]
        }
      ],

      //Vilka fält som ska visas i table
      fields: [
        { key: "patrolName", label: "Patrullnamn" },
        { key: "patrolAge", label: "Åldersgrupp" },
        {
          key: "scouts",
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
        scoutName6
      } = this.formData;
      const payload = {
        patrolName,
        patrolAge,
        scoutName1,
        scoutName2,
        scoutName3,
        scoutName4,
        scoutName5,
        scoutName6
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
          { scoutName6: "" }
        ]
      };
    }
  }
};
</script>

<style>
.formButton {
  margin: 1rem;
  background-color: rgb(0, 54, 96);
  border-color: rgb(0, 54, 96);
  padding: 0.5rem;
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
  width: 100%;
  margin-top: 5%;
  padding-bottom: 20px;
}

.addPatrol {
  width: 50%;
}

#addPatrolButton {
  margin-left: 25%;
  margin-right: 25%;
}
</style>
