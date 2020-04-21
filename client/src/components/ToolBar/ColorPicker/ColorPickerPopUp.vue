<template>
  <div v-if="showColorPicker">
    <chrome-picker @input="updateColor" :value="color"></chrome-picker>
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
    showColorPicker: Boolean
  },
  computed: {
    ...mapState("sketcher", {
      color: (state) => state.color
    })
  },
  methods: {
    ...mapActions("sketcher", ["updateColor"])
  }
};
</script>

<style scoped>
.chrome-picker {
  position: absolute;
}
</style>
