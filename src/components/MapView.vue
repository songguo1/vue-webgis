<template>
    <div id="mapview"></div>
</template>
  
<script>
  import { loadModules } from 'esri-loader';
  const options = {
    url: 'https://js.arcgis.com/4.18/init.js',
    css: 'https://js.arcgis.com/4.18/esri/themes/light/main.css',
  };
  export default {
    name: 'MapView',
    components: {},
    mounted: function () {
      this._createMapView();

    },
    methods: {
      async _createMapView() {
        const [Map, MapView] = await loadModules(['esri/Map', 'esri/views/MapView'], options);
        const map = new Map({
          basemap: 'osm',
        });
        const view = new MapView({
          container: 'mapview',
          center: [108, 32],
          map: map,
          zoom: 5,
        });
        this.$store.commit('setDefaultMapView', view);
        console.log(this.$store.getters.getDefaultMapView);
      },
    },
  };
</script>
  
<style>
  #mapview {
    position: relative;
    width: 100%;
    height: 100%;
  }
</style>
