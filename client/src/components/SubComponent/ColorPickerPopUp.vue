<template>
  <div v-if="showColorPicker">
    <color-picker
        theme="light"
        :color="color"
        :sucker-hide="true"
        @changeColor="changeColor"
    />
  </div>
</template>

<script>
import ColorPicker from '@caohenghu/vue-colorpicker'

export default {
    name: "ColorPickerPopUp",
    components: {
        ColorPicker
    },
    props: {
        showColorPicker: Boolean,
    },
    data() {
    return {
        color: '#59c7f9',
        isSucking: false
        }
    },
    methods: {
        changeColor(color) {
            const { r, g, b, a } = color.rgba
            this.color = `rgba(${r}, ${g}, ${b}, ${a})`
            this.$emit('color', this.color)
        },
    }
}
</script>

<style>

</style>