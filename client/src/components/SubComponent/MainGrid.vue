<template>
  <vue-p5 @setup="setup" @draw="draw" @mouseclicked="mouseClicked"></vue-p5>
</template>

<script>
import VueP5 from "vue-p5";

export default {
  components: {
    VueP5
  },
  data() {
    return {
      y: 0
    };
  },
  methods: {
    setup(sketch) {
      this.y = 0;
      sketch.createCanvas(400, 400);
      sketch.background(51);
    },
    draw(sk) {
      sk.stroke(226, 204, 0);
      sk.line(0, this.y, 400, this.y);

      this.y++;
      if (this.y > 400) {
        this.y = 0;
      }
    },
    mouseClicked(sk) {
      sk.ellipse(sk.mouseX, sk.mouseY, 10);
    }
  }
};
</script>

<style></style>
