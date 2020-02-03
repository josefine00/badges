<template>
  <div>
    <h1>Patruller</h1>
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
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "form-table",
  data() {
    return {
      formData: {
        patrolName: "",
        patrolAge: null
      },
      showPatrolForm: false
    };
  },
  methods: {
    ...mapActions(["addPatrol"]),
    togglePatrolForm() {
      this.showPatrolForm = !this.showPatrolForm;
    },
    handleSubmit() {
      const { patrolName, patrolAge } = this.formData;
      const payload = {
        patrolName,
        patrolAge
      };
      this.addPatrol(payload);

      //Reset form after submit
      this.formData = {
        patrolName: "",
        patrolAge: null
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
</style>
