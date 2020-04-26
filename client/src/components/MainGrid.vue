<template>
  <vue-p5 @setup="setup" @draw="draw" @mouseclicked="mouseClicked"></vue-p5>
</template>
<script>
import { mapState } from "vuex";
import VueP5 from "vue-p5";
import { Drawing } from "../p5js";

export default {
  components: {
    VueP5
  },
  data() {
    return {
      drawing: new Drawing(),
      isDrawing: false,
      fps: 0
    };
  },
  computed: {
    ...mapState("sketcher", {
      mainColor: (state) => state.mainColor,
      secondaryColor: (state) => state.secondaryColor
    })
  },
  methods: {
    setup(sk) {
      this.drawing.setup(sk);
    },
    draw(sk) {
      this.drawing.draw(sk, this.mainColor, this.secondaryColor);
    },
    mouseClicked(sk) {
      this.drawing.mouseClicked(sk, this.mainColor);
    }
  }
};
</script>

<style></style>
