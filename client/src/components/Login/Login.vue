<template>
  <b-container class="form-container">
    <h2>Sketcher</h2>
    <b-form @submit.prevent="handleSubmit">
      <b-form-group>
        <label for="feedback-user">Nom d'utilisateur</label>
        <b-input v-model="username" id="feedback-username"></b-input>
      </b-form-group>

      <b-form-group>
        <label for="feedback-user">Mot de passe</label>
        <b-input type="password" v-model="password" id="feedback-password"></b-input>
      </b-form-group>
      <div v-if="!userTryingToLogIn">
        <b-button type="submit" variant="primary">Se connecter</b-button>
      </div>
      <div v-else>
        <b-spinner variant="primary" label="Spinning" class="spinner"></b-spinner>
      </div>
      <b-form-group>
        <label class="error" :state="hasError">
          {{ error }}
        </label>
      </b-form-group>
    </b-form>
  </b-container>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
  data() {
    return {
      username: "",
      password: ""
    };
  },
  computed: {
    ...mapState("user", ["userSignedIn", "userTryingToLogIn", "error"]),
    hasError() {
      return !this.error;
    }
  },
  methods: {
    ...mapActions("user", ["login"]),
    handleSubmit() {
      const { username, password } = this;
      if (username && password) {
        this.login({ username, password });
      }
    }
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Copse&display=swap");

.form-container {
  margin-top: 50px;
}

h2 {
  font-family: Copse;
  color: #007bff;
}

.spiner {
  margin-left: 15px;
}

.error {
  color: red;
  margin-top: 10px;
}
</style>
