<template>
  <div>
    <NavBar></NavBar>
    <div class="top-tab">
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="公告列表" name="first">
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

          <div class="table-container">
            <el-table ref="productTable"
                      :data="list"
                      style="width: 100%"
                      @selection-change="handleSelectionChange"
                      v-loading="listLoading"
                      border>
              <el-table-column type="selection" width="60" align="center"></el-table-column>
              <el-table-column label="编号" width="100" align="center">
                <template slot-scope="scope">{{ scope.row.id }}</template>
              </el-table-column>
              <el-table-column label="商品图片" width="120" align="center">
                <template slot-scope="scope"><img style="height: 80px" :src="scope.row.pic"></template>
              </el-table-column>
              <el-table-column label="商品名称" align="center">
                <template slot-scope="scope">
                  <p>{{ scope.row.name }}</p>
                  <p>品牌：{{ scope.row.brandName }}</p>
                </template>
              </el-table-column>
              <el-table-column label="价格/货号" width="120" align="center">
                <template slot-scope="scope">
                  <p>价格：￥{{ scope.row.price }}</p>
                  <p>货号：{{ scope.row.productSn }}</p>
                </template>
              </el-table-column>
              <el-table-column label="标签" width="140" align="center">
                <template slot-scope="scope">
                  <p>上架：
                    <el-switch
                        @change="handlePublishStatusChange(scope.$index, scope.row)"
                        :active-value="1"
                        :inactive-value="0"
                        v-model="scope.row.publishStatus">
                    </el-switch>
                  </p>
                  <p>新品：
                    <el-switch
                        @change="handleNewStatusChange(scope.$index, scope.row)"
                        :active-value="1"
                        :inactive-value="0"
                        v-model="scope.row.newStatus">
                    </el-switch>
                  </p>
                  <p>推荐：
                    <el-switch
                        @change="handleRecommendStatusChange(scope.$index, scope.row)"
                        :active-value="1"
                        :inactive-value="0"
                        v-model="scope.row.recommandStatus">
                    </el-switch>
                  </p>
                </template>
              </el-table-column>
              <el-table-column label="排序" width="100" align="center">
                <template slot-scope="scope">{{ scope.row.sort }}</template>
              </el-table-column>
              <el-table-column label="SKU库存" width="100" align="center">
                <template slot-scope="scope">
                  <el-button type="primary" icon="el-icon-edit"
                             @click="handleShowSkuEditDialog(scope.$index, scope.row)" circle></el-button>
                </template>
              </el-table-column>
              <el-table-column label="销量" width="100" align="center">
                <template slot-scope="scope">{{ scope.row.sale }}</template>
              </el-table-column>
              <el-table-column label="审核状态" width="100" align="center">
                <template slot-scope="scope">
                  <p>{{ scope.row.verifyStatus | verifyStatusFilter }}</p>
                  <p>
                    <el-button
                        type="text"
                        @click="handleShowVerifyDetail(scope.$index, scope.row)">审核详情
                    </el-button>
                  </p>
                </template>
              </el-table-column>
              <el-table-column label="操作" width="160" align="center">
                <template slot-scope="scope">
                  <p>
                    <el-button
                        size="mini"
                        @click="handleShowProduct(scope.$index, scope.row)">查看
                    </el-button>
                    <el-button
                        size="mini"
                        @click="handleUpdateProduct(scope.$index, scope.row)">编辑
                    </el-button>
                  </p>
                  <p>
                    <el-button
                        size="mini"
                        @click="handleShowLog(scope.$index, scope.row)">日志
                    </el-button>
                    <el-button
                        size="mini"
                        type="danger"
                        @click="handleDelete(scope.$index, scope.row)">删除
                    </el-button>
                  </p>
                </template>
              </el-table-column>
            </el-table>
          </div>
        </el-tab-pane>

        <el-tab-pane label="公告类型" name="second">类型</el-tab-pane>
        <el-tab-pane label="统计数据" name="third">统计</el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar";

export default {
  name: "NoticeList",
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

.table-container {
  width: 98%;
  margin-top: 10px;
}
</style>