<template>
  <div class="sketcher" @contextmenu.prevent>
    <toolBar class="tool-bar"></toolBar>
    <main-grid class="main-grid" />
  </div>
</template>

<script>
import MainGrid from "./MainGrid";
import ToolBar from "./ToolBar/ToolBar";

export default {
  name: "Sketcher",
  components: {
    ToolBar,
    MainGrid
  }
};
</script>

<style scoped>
.sketcher {
  display: flex;
  flex-flow: row nowrap;
}

.tool-bar {
  order: 1;
  flex: 1 100%;
}

.main-grid {
  order: 2;
  flex: 1 100%;
}
</style>
