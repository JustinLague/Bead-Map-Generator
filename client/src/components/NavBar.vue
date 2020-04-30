<template>
  <div>
    <nav class="navbar navbar-default">
      <div class="container-fluid">
        <div class="navbar-header">
          <router-link class="navbar-brand" to="/Sketcher">Ton application préféré !</router-link>
        </div>
        <ul class="nav navbar-nav">
          <li v-on:click="logout"><router-link class="navbar-brand" to="/">Déconnection</router-link></li>
        </ul>
      </div>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "NavBar",
  methods: {
    ...mapActions("user", ["logout"])
  }
};
</script>

<style scoped></style>
