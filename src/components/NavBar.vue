<template>
  <div class="navbar" style="height: 100%">
    <el-menu
        :default-active="activerouter"
        class="el-menu-vertical-demo"
        @select="handleSelect"
        background-color="#314155"
        text-color="#fff"
        active-text-color="#218BDB"
        style="height: 100%">

      <el-menu-item index="/">
        <i class="el-icon-menu"></i>
        <span slot="title">公告管理</span>
      </el-menu-item>
      <el-menu-item index="/staff">
        <i class="el-icon-location"></i>
        <span slot="title">人事管理</span>
      </el-menu-item>
      <el-menu-item index="/item">
        <i class="el-icon-document"></i>
        <span slot="title">商品管理</span>
      </el-menu-item>

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
    // 页面手动刷新指定路由
    //获取地址栏中的路由，设置element ui中的导航栏选中状态
    let defaultMenu = window.location.hash.substr(
        window.location.hash.indexOf("/"),
    );
    this.activerouter = defaultMenu;
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