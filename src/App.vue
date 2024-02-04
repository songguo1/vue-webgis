<template>
<el-container>
  <el-header>webgis系统</el-header>
  <el-container>
    <el-aside width="200px">
      <p style="background-color: aliceblue; margin-top: 0;  
  margin-bottom: 0;">菜单栏</p>
    <el-menu
      default-active="1"
      class="el-menu-vertical-demo"
      @select="handleMenuSelect"
      @open="handleOpen"
      @close="handleClose"
      background-color="#062344"
      text-color="#fff"
      active-text-color="#ffd04b">
      <el-menu-item index="1">
        <i class="el-icon-location"></i>
        <span slot="title">导航一</span>
      </el-menu-item>
      <el-menu-item index="2">
        <i class="el-icon-menu"></i>
        <span slot="title">导航二</span>
      </el-menu-item>
      <el-menu-item index="3" disabled>
        <i class="el-icon-document"></i>
        <span slot="title">导航三</span>
      </el-menu-item>
      <el-menu-item index="4">
        <i class="el-icon-setting"></i>
        <span slot="title">导航四</span>
      </el-menu-item>
    </el-menu>
    </el-aside>
    <el-main>
      <router-view></router-view>
    </el-main>
  </el-container>
</el-container>
</template>

<script>
import MapView from "./components/MapView.vue"
export default {
  name: 'App',
  data(){
    return{
      isCollapse: true
    }
  },
  methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
      handleMenuSelect(index) {
      console.log(index);
      if (index === '1') {
        this.$router.push('/');
      } else if (index === '2') {
        this.$router.push('/onemap');
      }
    }
  }
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
    color: #062344;
    text-align: center;
    line-height: 60px;
  } 

  .el-main {
    background-color: #f6f8fb;
    color: #333;
    text-align: center;
    line-height: 160px;
  }
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
</style>
