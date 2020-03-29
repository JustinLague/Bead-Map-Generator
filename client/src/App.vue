<template>
  <div id="app">
    SAlut
    <div>
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/test">test</router-link></li>
      </ul>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'app',
}
</script>

<style>

</style>
