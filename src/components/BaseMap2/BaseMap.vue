<template>
  <div id="mapview">
    <div id="scalebar"></div>
  </div>
</template>

<script>
import { loadModules } from "esri-loader";
const options = {
  url: "https://js.arcgis.com/4.18/init.js",
  css: "https://js.arcgis.com/4.18/esri/themes/light/main.css",
};
export default {
  name: "MapView",
  components: {},
  mounted: function () {
    this._createMapView();
  },
  methods: {
    async _createMapView() {
      const [
        Map,
        MapView,
        Basemap,
        VectorTileLayer,
        TileLayer,
        BasemapToggle,
        ScaleBar,
      ] = await loadModules(
        [
          "esri/Map",
          "esri/views/MapView",
          "esri/Basemap",
          "esri/layers/VectorTileLayer",
          "esri/layers/TileLayer",
          "esri/widgets/BasemapToggle",
          "esri/widgets/ScaleBar",
        ],
        options
      );
      const vectorTileLayer = new VectorTileLayer({
        portalItem: {
          id: "6976148c11bd497d8624206f9ee03e30",
        },
        opacity: 0.75, //透明度
      });
      const imageTileLayer = new TileLayer({
        portalItem: {
          id: "1b243539f4514b6ba35e7d995890db1d", // World Hillshade
        },
      });

      let basemap = new Basemap({
        baseLayers: [imageTileLayer, vectorTileLayer],
        title: "basemap",
        id: "basemap",
      });

      const map = new Map({
        basemap: basemap,
      });

      const view = new MapView({
        container: "mapview",
        center: [108, 32],
        map: map,
        zoom: 5,
      });
      const basemapToggle = new BasemapToggle({
        view: view,
        nextBasemap: "hybrid",
      });
      view.ui.add(basemapToggle, {
        position: "bottom-right",
      });
      const scalebar = new ScaleBar({
        view: view,
        container: "scalebar",
        unit:"metric"
      });
      view.ui.add(scalebar);
      this.$store.commit("setDefaultMapView", view);
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
#scalebar {
  position: absolute;
  bottom: 25px;
  left: 15px;
}
</style>
