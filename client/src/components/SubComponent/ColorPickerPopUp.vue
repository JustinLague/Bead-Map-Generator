<template>
  <div v-if="showColorPicker">
    <chrome-picker @input="updateColor" :value="defaultColor"></chrome-picker>
  </div>
</template>

<script>
import { Chrome } from "vue-color";

export default {
  name: "ColorPickerPopUp",
  components: {
    "chrome-picker": Chrome
  },
  props: {
    showColorPicker: Boolean,
    defaultColor: Object
  },
  methods: {
    updateColor(color) {
      this.$emit("updateColor", color);
    }
  }
};
</script>

<style></style>
