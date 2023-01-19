<template>
  <div class="app-container user">
    <el-button style="margin-bottom: 15px" type="primary" icon="el-icon-plus" size="mini"></el-button>
    <div class="el-table-search">
      <el-form :inline="true" :model="queryParams" class="demo-form-inline">
        <el-form-item label="Enterprise Abbr">
          <el-input v-model="queryParams.user" placeholder="请输入"></el-input>
        </el-form-item>
        <el-form-item label="Vehicle">
          <el-input v-model="queryParams.region" placeholder="请输入"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">查询</el-button>
        </el-form-item>
      </el-form>
    </div>
    <div class="el-table-content">
      <el-table
        :data="tableData"
        style="width: 100%">
        <el-table-column prop="date" label="Enterprise"></el-table-column>
        <el-table-column prop="name" label="Enterprise Abbr"></el-table-column>
        <el-table-column prop="address" label="Vehicle"></el-table-column>
        <el-table-column prop="address" label="Address"></el-table-column>
        <el-table-column prop="address" label="Modified Information"></el-table-column>
        <el-table-column label="Option">
          <template>
            <el-button
              size="mini">Edit</el-button>
            <el-button
              size="mini"
              type="danger">Delete</el-button>
          </template>
        </el-table-column>
      </el-table>
      <pagination
        v-show="total>0"
        :total="total"
        :page.sync="queryParams.pageNum"
        :limit.sync="queryParams.pageSize"
        @pagination="getList"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "ProjectSpace",
  data() {
    return {
      total: 20,
      queryParams: {
        pageNum: 1,
        pageSize: 10,
        user: '',
        region: '',
      },
      tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄',
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄',
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄',
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄',
      }],
    };
  },
  methods: {
    onSubmit() {
      console.log('submit!');
    },
    getList() {
      console.log(this.queryParams);
    }
  }

}
</script>

<style scoped>

</style>
