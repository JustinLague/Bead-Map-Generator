<template>
  <div class="container">
    <div class="color-picker" v-on-clickaway="closeColoPicker">
      <span class="toggle-color-picker" v-on:click="toggleColorPicker">
        <font-awesome-icon icon="palette" />
      </span>
      <color-picker-pop-up class="chrome-picker" :showColorPicker="showColorPicker" />
    </div>
  </div>
</template>

<script>
import ColorPickerPopUp from "./ColorPickerPopUp";
import { mixin as clickaway } from "vue-clickaway";

export default {
  mixins: [clickaway],
  components: {
    ColorPickerPopUp
  },
  data() {
    return {
      showColorPicker: false
    };
  },
  methods: {
    toggleColorPicker() {
      this.showColorPicker = !this.showColorPicker;
    },
    closeColoPicker() {
      this.showColorPicker = false;
    }
  }
};
</script>

<style scoped>
.toggle-color-picker:hover {
  cursor: pointer;
}

.containter {
  position: relative;
}

.chrome-picker {
  position: absolute;
}
</style>
