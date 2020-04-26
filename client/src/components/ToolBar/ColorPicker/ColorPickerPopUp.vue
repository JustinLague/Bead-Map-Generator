<template>
  <div v-if="showColorPicker">
    <chrome-picker @input="updateColor" :value="activeColor"></chrome-picker>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import { Chrome } from "vue-color";

export default {
  name: "ColorPickerPopUp",
  components: {
    "chrome-picker": Chrome
  },
  props: {
    color: String,
    showColorPicker: Boolean
  },
  computed: {
    ...mapState("sketcher", {
      mainColor: (state) => state.mainColor,
      secondaryColor: (state) => state.secondaryColor
    }),
    activeColor() {
      return this.color === "mainColor" ? this.mainColor : this.secondaryColor;
    }
  },
  methods: {
    ...mapActions("sketcher", ["updateMainColor", "updateSecondaryColor"]),
    updateColor(color) {
      if (this.color === "mainColor") {
        this.updateMainColor(color);
      } else if (this.color === "secondaryColor") {
        this.updateSecondaryColor(color);
      }
    }
  }
};
</script>

<style scoped></style>
