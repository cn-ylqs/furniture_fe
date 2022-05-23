<template>
  <div>
    <NavBar></NavBar>
    <div class="top-tab">
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="人员管理" name="first">
          <div class="search-area">
            <el-card class="filter-container" shadow="never">
              <div>
                <i class="el-icon-search"></i>
                <span>筛选搜索</span>
                <el-button
                    style="float: right"
                    @click="handleSearchList()"
                    type="primary"
                    size="small">
                  查询结果
                </el-button>
                <el-button
                    style="float: right;margin-right: 15px"
                    @click="handleResetSearch()"
                    size="small">
                  重置
                </el-button>
              </div>
              <div style="margin-top: 15px">
                <el-form :inline="true" :model="listQuery" size="small" label-width="140px">
                  <el-form-item label="输入搜索：">
                    <!--              <el-input style="width: 203px" v-model="listQuery.keyword" placeholder="商品名称"></el-input>-->
                    <el-input style="width: 203px" placeholder="审批名称"></el-input>
                  </el-form-item>
                  <el-form-item label="商品分类：">
                    <el-cascader
                        clearable
                        v-model="selectProductCateValue"
                        :options="productCateOptions">
                    </el-cascader>
                  </el-form-item>
                </el-form>
              </div>
            </el-card>
          </div>

          <div class="stlist">
            <el-card class="operate-container" shadow="never">
              <i class="el-icon-tickets"></i>
              <span>数据列表</span>
              <el-button
                  class="btn-add"
                  @click="handleAddProduct()"
                  size="mini">
                添加
              </el-button>
            </el-card>
          </div>
        </el-tab-pane>

        <el-tab-pane label="招聘审核" name="second">配置管理</el-tab-pane>
        <el-tab-pane label="职位审核" name="third">角色管理</el-tab-pane>
        <el-tab-pane label="离职审核" name="fourth">定时任务补偿</el-tab-pane>
        <el-tab-pane label="培训审核" name="fifth">定时任务补偿</el-tab-pane>
        <el-tab-pane label="公文审核" name="sixth">定时任务补偿</el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar";
export default {
  name: "Staff",
  data() {
    return {
      activeName: 'first'
    };
  },
  components: {
    NavBar
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    }
  }
}
</script>

<style scoped>
.top-tab {
  width: 85%;
  position: fixed;
  right: 0;
  top: 0;
}

.stlist {
  width: 98%;
  margin-top: 20px;
}

.search-area {
  width: 98%;
  margin-top: 10px;
}
</style>