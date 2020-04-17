<template>
  <div>
    <div class="color-picker" v-on-clickaway="closeColoPicker">
      <span class="toggle-color-picker" v-on:click="toggleColorPicker">
        <font-awesome-icon icon="palette" />
      </span>
      <color-picker-pop-up :showColorPicker="showColorPicker" :defaultColor="color" @updateColor="updateColor" />
    </div>
    <div><main-grid :color="color" /></div>
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
      color: {
        rgba: {
          r: 255,
          g: 255,
          b: 255,
          a: 1
        }
      }
    };
  },
  methods: {
    toggleColorPicker() {
      this.showColorPicker = !this.showColorPicker;
    },
    closeColoPicker() {
      this.showColorPicker = false;
    },
    updateColor(color) {
      this.color = color;
    }
  }
};
</script>

<style scoped>
.toggle-color-picker:hover {
  cursor: pointer;
}

.color-picker {
  float: right;
}
</style>
