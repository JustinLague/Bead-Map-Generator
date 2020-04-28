<template>
  <div v-if="showColorPicker">
    <chrome-picker @input="updateColor" :value="activeColor"></chrome-picker>
  </div>
</template>

<script>
/* eslint-disable no-console */
import { Chrome } from "vue-color";

export default {
  name: "ColorPickerPopUp",
  components: {
    "chrome-picker": Chrome
  },
  props: {
    color: Object,
    showColorPicker: Boolean
  },
  data() {
    let keyColor = Object.keys(this.color)[0];
    return {
      keyColor: keyColor,
      activeColor: this.color[keyColor]
    };
  },
  methods: {
    updateColor(color) {
      this.color[this.keyColor].rgba = color.rgba;
      this.$store.dispatch("sketcher/updateColor", this.color);
    }
  }
};
</script>

<style scoped></style>
