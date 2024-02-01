<template>
<el-container>
  <el-header>webgis系统</el-header>
  <el-container>
    <el-aside width="200px">菜单栏</el-aside>
    <el-main>
      <MapView/>
    </el-main>
  </el-container>
</el-container>
</template>

<script>
import MapView from "./components/MapView.vue"
export default {
  name: 'App',
  components: {MapView},
};

</script>
<style>
  .el-container{
    height:100vh
  }

  .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  } 

  .el-aside {
    background-color: #062344;
    color: #f8f7f7;
    text-align: center;
    line-height: 200px;
  } 

  .el-main {
    background-color: #f6f8fb;
    color: #333;
    text-align: center;
    line-height: 160px;
  }
</style>
