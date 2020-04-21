<template>
  <div>
    <color-picker class="color-picker"></color-picker>
    <eraser class="eraser"></eraser>
  </div>
</template>

<script>
import ColorPicker from "./ColorPicker/ColorPicker";

export default {
  components: {
    ColorPicker
  }
};
</script>

<style scoped>
.color-picker {
  font-size: 34px;
}

.eraser {
  font-size: 34px;
}
</style>
