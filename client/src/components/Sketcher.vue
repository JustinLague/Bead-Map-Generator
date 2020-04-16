<template>
  <div>
    <div>
      <span class="toggleColorPicker" v-on-clickaway="closeColoPicker" v-on:click="toggleColorPicker">
        <font-awesome-icon icon="palette" />
      </span>
      <colorPickerPopUp :showColorPicker="showColorPicker" @color="newColor" />
    </div>
    <div style="width:400px;height:300px">
      <div v-on:click="setColor"></div>
    </div>
  </div>
</template>

<script>
import ColorPickerPopUp from "./subComponent/ColorPickerPopUp";
import { mixin as clickaway } from "vue-clickaway";

export default {
  name: "Sketcher",
  mixins: [clickaway],
  components: {
    ColorPickerPopUp
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
.toggleColorPicker:hover {
  cursor: pointer;
}

.tile {
  width: 100px;
  height: 100px;
}
</style>
