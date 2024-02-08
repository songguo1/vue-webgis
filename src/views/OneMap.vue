<template>
  <div class="onemap-page">
    <MapView />
    <MapTool />
  </div>
</template>

<script>
import MapView from "../components/MapView.vue";
import MapTool from "../components/MapTool.vue"
export default {
  name: "OneMap",
  components: { MapView,
    MapTool
   },
};
</script>

<style>
.onemap-page {
  position:relative;
  height: 100%;
  width: 100%;
  background-color: cadetblue;
}
</style>
