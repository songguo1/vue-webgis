<template>
  <div id="map"></div>
</template>

<script>
import { Map, View } from "ol"; //地图,视图
import Baselayers from "./js/baselayers.js"; //地图管理
import { controls } from "./js/controls"; //地图交互控件
import { fromLonLat } from "ol/proj"; //经纬度转投影
import TileLayer from "ol/layer/Tile"; //可以理解为图层
import saveAs from "file-saver";

export default {
  data() {
    return {
      map: null,
      bingMap: Baselayers.BingMapLayer(
        Baselayers.BingMapLayerTypes.AerialWithLabels
      ), //卫星地图
      osm: Baselayers.OSMLayer(true, false),
      baseLayerGroup: null,
      view: new View({
        center: fromLonLat([118.8, 32.0]), //南京的经纬度
        zoom: 11,
      }),
    };
  },
  methods: {
    createMap() {
      this.map = new Map({
        // 关联到对应的div容器
        target: "map",
        //显示的地图
        layers: [this.baseLayerGroup],
        //表层图层
        overlays: [],
        //在此设置地图控件
        controls: [
          controls.zoom,
          controls.overview,
          controls.switcher,
          controls.fullScreen,
          controls.attr,
        ],
        //开启交互时加载瓦片
        loadTilesWhileInteracting: true,
        //地图显示中心
        view: this.view,
      });
      //设置显示两个滑动地图
      controls.swipe.addLayer(bingMap);
      controls.swipe.addLayer(osm, true);

      // 组织控件工具栏
      controls.controlBar.addControl(controls.fullScreen);
      controls.controlBar.addControl(controls.wmsCapabilities);
      controls.controlBar.addControl(controls.zoomToExtend);
      controls.controlBar.addControl(controls.rotate);
      controls.controlBar.setPosition("right");

      // 监听点击事件，设置图片保存事件
      controls.print.on(["print", "error"], (e) => {
        e.canvas.toBlob((blob) => {
          saveAs(blob, "map." + e.imageType.replace("image/", ""));
        }, e.imageType);
      });
    },
  },
  mounted() {
    this.baseLayerGroup = Baselayers.BaseLayersGroup([this.bingMap, this.osm]);
    this.createMap();
  },
};
</script>

<!-- 注意不要加上scope属性 -->
<style lang="scss">
@import "../../assets/scss/widgets.scss";
#map {
  position: relative;
  height: 100%;
  width: 100%;
}
</style>
