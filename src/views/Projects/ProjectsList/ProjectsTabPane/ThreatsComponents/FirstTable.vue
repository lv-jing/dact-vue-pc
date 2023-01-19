<template>
  <div>
    <el-form :inline="true" :model="queryParams" class="demo-form-inline">
      <el-form-item label="Attack">
        <el-input v-model="queryParams.user" placeholder="审批人"></el-input>
      </el-form-item>
      <el-form-item label="Sub_Attack">
        <el-input v-model="queryParams.user" placeholder="审批人"></el-input>
      </el-form-item>
      <el-form-item label="Attack Vector">
        <el-select v-model="queryParams.region" placeholder="活动区域">
          <el-option label="区域一" value="shanghai"></el-option>
          <el-option label="区域二" value="beijing"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="Feasibility Rating">
        <el-select v-model="queryParams.region" placeholder="活动区域">
          <el-option label="区域一" value="shanghai"></el-option>
          <el-option label="区域二" value="beijing"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">查询</el-button>
      </el-form-item>
    </el-form>
    <el-table
      border
      :data="tableData"
      style="width: 100%">
      <el-table-column prop="date" label="Attack"></el-table-column>
      <el-table-column prop="name" label="Sub_Attack"></el-table-column>
      <el-table-column prop="address" label="Attack Category"></el-table-column>
      <el-table-column prop="date" label="Attack Description"></el-table-column>
      <el-table-column prop="date" label="Attack Vector"></el-table-column>
      <el-table-column prop="date" label="Complexity"></el-table-column>
      <el-table-column prop="date" label="Privilege Required"></el-table-column>
      <el-table-column prop="date" label="User Interaction"></el-table-column>
      <el-table-column prop="date" label="Feasibility Rating"></el-table-column>
      <el-table-column label="Option">
        <template>
          <el-button type="primary" size="mini">Edit</el-button>
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
</template>

<script>
export default {
  name: 'FirstTable',
  data() {
    return {
      total: 20,
      queryParams: {
        pageNum: 1,
        pageSize: 10,
        user: '',
        region: '',
      },
      activeName: 'first',
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
  },
};
</script>

<style scoped>

</style>
