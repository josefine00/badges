<template>
  <div>
    <h1>Patruller</h1>
    <div class="form">
      <div class="formPatrol">
        <button
          @click="togglePatrolForm"
          class="btn btn-primary formButton"
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
                  'Rover'
                ]"
              ></b-form-select>
            </b-form-group>

            <b-form-group
              id="ScoutNameGroup"
              label="Scouternas namn:"
              label-for="ScoutName"
            >
              <b-form-input
                id="scoutName1"
                v-model="formData.scoutName"
                placeholder="Skriv scoutens namn..."
              >
              </b-form-input>
            </b-form-group>

            <b-button
              type="submit"
              variant="success"
              class="formButton"
              id="formSubmit"
              >Spara</b-button
            >
            <b-button
              type="reset"
              variant="primary"
              class="formButton"
              id="formReset"
              >Återställ</b-button
            >
          </b-form>
        </section>
      </div>

      <div class="table">
        <b-table class="patrolTable" striped hover :items="patrols"> </b-table>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "form-table",
  data() {
    return {
      formData: {
        patrolName: "",
        patrolAge: null,
        scoutName: ""
      },
      showPatrolForm: false,
      patrols: [
        {
          patrolName: "Vargarna",
          patrolAge: "Äventyrare",
          scoutName: "Ellen"
        },
        {
          patrolName: "Uttrarna",
          patrolAge: "Upptäckare",
          scoutName: "Leo"
        },
        {
          patrolName: "Hökarna",
          patrolAge: "Spårare",
          scoutName: "Emil"
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
      const { patrolName, patrolAge, scoutName } = this.formData;
      const payload = {
        patrolName,
        patrolAge,
        scoutName
      };

      //Skickar vidare payloaden till addPatrol (actions.js)
      this.addPatrol(payload);

      //Reset form after submit
      this.formData = {
        patrolName: "",
        patrolAge: null,
        scoutName: ""
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
}

.formButton:hover {
  background-color: rgb(0, 33, 58);
  border-color: rgb(0, 33, 58);
}

#ScoutNameGroup * {
  margin-bottom: 2rem;
}

.form {
  width: 75%;
  margin-left: auto;
  margin-right: auto;
  background-color: #ffffff;
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
}

.addPatrol {
  width: 50%;
}

#addPatrolButton {
  margin-left: 25%;
  margin-right: 25%;
}
</style>
