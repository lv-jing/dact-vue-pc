<template>
<div>
  <h3 class="mb-2">身份和配置类资产</h3>
  <el-table
    :key="activeName"
    :header-cell-style="{background:'#f0f9eb', color:'black'}"
    :data="tableData"
    style="width: 100%">
    <el-table-column prop="date" label="Asset"></el-table-column>
    <el-table-column prop="name" label="Asset Description">
      <template slot-scope="scope">
        <el-input type="textarea" autosize v-model="scope.row.name" placeholder="Please Input"></el-input>
      </template>
    </el-table-column>
    <el-table-column prop="address" label="Component"></el-table-column>
    <el-table-column prop="address" label="Asset Property"></el-table-column>
    <el-table-column prop="address" label="Comments">
      <template slot-scope="scope">
        <el-input type="textarea" autosize v-model="scope.row.name" placeholder="Please Input"></el-input>
      </template>
    </el-table-column>
  </el-table>
</div>
</template>

<script>
export default {
  name: 'AssetIdentification',
  props: ['activeName'],
  data() {
    return {
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

};
</script>

<style scoped>

</style>
