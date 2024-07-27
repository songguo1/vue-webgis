//用于管理底图
import {Group as LayerGroup, Tile as TileLayer, Vector as VectorLayer} from "ol/layer"
import {OSM, Stamen, BingMaps, Vector as VectorSource} from "ol/source"
import {Style, Fill, Stroke, Circle} from "ol/style"

export default class Baselayers{

  //创建底图组
  static BaseLayersGroup(layers){
    return new LayerGroup({
        title: 'Base Layers',
      allwaysOnTop: true,//总是位于地图的最顶层
      openInLayerSwitcher: true,//指示在图层切换器中默认是展开的
      layers: layers
    });
  }

  //创建Open Street Map
  static OSMLayer(isBaseLayer, isVisible){
    return new TileLayer({
      title: 'OSM',
      baseLayer: isBaseLayer,  
      source: new OSM(),
      visible: isVisible
    });
  }

  //https://www.bingmapsportal.com/Application，申请key的地址
  //创建Bing Map

  static BingMapLayer(layerName){
    let apiKey = 'AtZERjCwvdBNg8oMLWovo9GviRoGN_azkcbykiv1WNLAfJIQTBbJNJXazwZIpbWr';
    return new TileLayer({
      preload: Infinity,
      baseLayer: true,
      title: upperCaseFirst.call(this, layerName),
      visible: true,
      source: new BingMaps({
        key: apiKey,
        imagerySet: layerName
      })
    });
  }
}
//Bing Map的类型
Baselayers.BingMapLayerTypes = {
  Road: 'Road',
  Aerial: 'Aerial',
  AerialWithLabels: 'AerialWithLabels',
  collinsBart: 'collinBart',
  ordnanceSurvey: 'ordnanceSurvey'
}

function upperCaseFirst(str){
  return str[0].toUpperCase() + str.substring(1);
}
