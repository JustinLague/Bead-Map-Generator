<template>
  <vue-p5 @setup="setup" @draw="draw" @mouseclicked="mouseClicked"></vue-p5>
</template>
<script>
import VueP5 from "vue-p5";
import { Rectangle } from "../../models/rectangle";

export default {
  components: {
    VueP5
  },
  props: {
    color: Object
  },
  data() {
    return {
      isDrawing: false,
      fps: 0
    };
  },
  computed: {
    activeColor() {
      return this.color;
    }
  },
  methods: {
    setup(sk) {
      sk.createCanvas(1600, 1024);
      sk.background(200);

      this.x = 30;
      this.y = 20;
      this.width = 30;
      this.height = 20;

      this.rects = [];
      for (let col = 0; col < 50; col++) {
        for (let ran = 0; ran < 50; ran++) {
          this.rects.push(
            new Rectangle(
              (col % 2) * 20 + 40 + (ran * (this.x + this.width)) / 2,
              (col * (this.y + this.height)) / 2,
              this.width,
              this.height,
              sk.color(255, 255, 255)
            )
          );
        }
      }
    },
    draw(sk) {
      this.rects.forEach((rect) => {
        rect.show(sk);
      });

      if (sk.mouseIsPressed) {
        this.rects.forEach((rect) => {
          if (rect.collision(sk.mouseX, sk.mouseY)) {
            rect.changeColor(sk, this.activeColor);
          }
        });
      }
    },
    mouseClicked(sk) {
      this.rects.forEach((rect) => {
        if (rect.collision(sk.mouseX, sk.mouseY)) {
          rect.changeColor(sk, this.activeColor);
        }
      });
    }
  }
};
</script>

<style></style>
