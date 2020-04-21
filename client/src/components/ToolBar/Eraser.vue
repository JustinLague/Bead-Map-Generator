<template>
  <div class="eraser">
    <span v-on:click="erase">
      <font-awesome-icon icon="eraser" />
    </span>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  methods: {
    ...mapActions("sketcher", ["updateColor"]),
    erase() {
      this.updateColor({
        rgba: {
          r: 255,
          g: 255,
          b: 255,
          a: 1
        }
      });
    }
  }
};
</script>

<style scoped>
.eraser {
  margin: auto;
}
</style>
