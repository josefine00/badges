<template>
  <div>
    <h1>Patruller</h1>
    <button
      @click="togglePatrolForm"
      class="btn btn-primary"
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
          >Submit</b-button
        >
        <b-button
          type="reset"
          variant="primary"
          class="formButton"
          id="formReset"
          >Reset</b-button
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
      showPatrolForm: false,
      patrolName: "",
      patrolAge: null
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

      this.formData = {
        patrolName: "",
        patrolAge: null
      };
    }
  }
};
</script>
