<template>
  <div>
    <h2>Login</h2>
    <b-form @submit.prevent="handleSubmit">
      <b-form-invalid-feedback :state="hasError">
        {{ error }}
      </b-form-invalid-feedback>
      <b-form-group>
        <label for="feedback-user">Nom d'utilisateur</label>
        <b-input v-model="username" id="feedback-username"></b-input>
      </b-form-group>

      <b-form-group>
        <label for="feedback-user">Mot de passe</label>
        <b-input v-model="password" id="feedback-password"></b-input>
      </b-form-group>
      <b-button type="submit" variant="primary" :disabled="userTryingToLogIn">Login</b-button>
      <b-spinner variant="primary" label="Spinning" v-if="userTryingToLogIn"></b-spinner>
    </b-form>
  </div>
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

<style></style>
