<template>
    <div class="onemap-page">
      <MapView />
      <MapTool />
    </div>
  </template>
  
  <script>
  import MapView from "../components/BaseMap2/BaseMap.vue";
  import MapTool from "../components/BaseMap2/BaseMap.vue"
  export default {
    name: "MapView2",
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
  }
  </style>