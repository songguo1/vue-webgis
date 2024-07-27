<template>
  <div class="mapview">
    <base-map></base-map>
  </div>
</template>

<script>
import BaseMap from "../components/BaseMap1/BaseMap";

export default {
  name: "MapView1",
  components: { BaseMap },
};
</script>

<style>
.mapview {
  position: relative;
  height: 100%;
  width: 100%;
  background-color: cadetblue;
}
</style>
