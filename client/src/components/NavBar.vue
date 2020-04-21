<template>
  <div>
    <nav class="navbar navbar-default">
      <div class="container-fluid">
        <div class="navbar-header">
          <router-link class="navbar-brand" to="/">Ton application préféré !</router-link>
        </div>
        <ul class="nav navbar-nav">
          <li></li>
        </ul>
      </div>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "NavBar"
};
</script>

<style scoped></style>
