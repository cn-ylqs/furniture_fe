<template>
  <div class="navbar" style="height: 100%">
    <el-menu
        :default-active="activerouter"
        default-openeds="2,3"
        class="el-menu-vertical-demo"
        @select="handleSelect"
        background-color="#314155"
        text-color="#fff"
        active-text-color="#218BDB"
        style="height: 100%">

      <el-menu-item index="/">
        <i class="el-icon-menu"></i>
        <span slot="title">使用情况</span>
      </el-menu-item>
      <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>信息维护</span>
        </template>
        <el-menu-item index="/sourcelist">资源列表</el-menu-item>
        <el-menu-item index="/addsource">添加资源</el-menu-item>
      </el-submenu>
      <el-submenu index="3">
        <template slot="title">
          <i class="el-icon-document"></i>
          <span>审批</span>
        </template>
        <el-menu-item index="/addapprove">发起审批</el-menu-item>
        <el-menu-item index="/approvelist">审批列表</el-menu-item>
      </el-submenu>

    </el-menu>
  </div>
</template>

<script>
export default {
  name: "NavBar",
  data() {
    return {
      // activeIndex: '1',
      activerouter: ""
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      this.$router.push({
        path: key,
        params: {data: 'query' }
      })
      console.log(key, keyPath);
    }
  },
  mounted() {
    //获取地址栏中的路由，设置elementui中的导航栏选中状态
    this.activerouter = window.location.pathname;
  }
}
</script>

<style scoped>
div::-webkit-scrollbar {
  width: 0;
}

.navbar {
  width: 14%;
  height: 100%;
  margin: 0 auto;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  box-sizing: content-box;
  font-size: 16px;
  /*overflow-y:scroll;*/
  overflow-y: auto;
  overflow-x: hidden;
  /*border-right: none;*/
}
</style>