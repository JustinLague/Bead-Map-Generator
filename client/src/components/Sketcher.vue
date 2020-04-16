<template>
  <div>
    <div class="color-picker" v-on-clickaway="closeColoPicker">
      <span class="toggle-color-picker" v-on:click="toggleColorPicker">
        <font-awesome-icon icon="palette" />
      </span>
      <color-picker-pop-up :showColorPicker="showColorPicker" @color="newColor" />
    </div>
    <div><main-grid /></div>
  </div>
</template>

<script>
import ColorPickerPopUp from "./subComponent/ColorPickerPopUp";
import MainGrid from "./subComponent/MainGrid";
import { mixin as clickaway } from "vue-clickaway";

export default {
  name: "Sketcher",
  mixins: [clickaway],
  components: {
    ColorPickerPopUp,
    MainGrid
  },
  data() {
    return {
      showColorPicker: false,
      activeColor: "#59c7f9"
    };
  },
  methods: {
    toggleColorPicker() {
      this.showColorPicker = !this.showColorPicker;
    },
    closeColoPicker() {
      this.showColorPicker = false;
    },
    newColor(color) {
      this.activeColor = color;
    },
    setColor() {}
  }
};
</script>

<style scoped>
.toggle-color-picker:hover {
  cursor: pointer;
}

.color-picker {
  display: block;
  width: fit-content;
}
</style>
