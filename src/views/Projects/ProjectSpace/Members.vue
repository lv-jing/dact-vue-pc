<template>
  <el-row :gutter="24">
    <el-col :span="12">
      <el-card header="Project Space Members" :body-style="{ padding: '0px' }" class="box-card">
        <el-table
        ref="multipleTable"
        :data="tableData"
        tooltip-effect="dark"
        style="width: 100%"
        @selection-change="handleSelectionChange">
        <el-table-column type="selection" width="55"></el-table-column>
        <el-table-column label="日期" ><template slot-scope="scope">{{ scope.row.date }}</template></el-table-column>
        <el-table-column prop="name" label="姓名"></el-table-column>
        <el-table-column prop="address" label="地址" show-overflow-tooltip></el-table-column>
        </el-table>
        <el-card >
          <el-button type="danger">Disassociate</el-button>
        </el-card>
      </el-card>
    </el-col>
    <el-col :span="12">
      <el-card header="Resource Pool" class="box-card" :body-style="{ padding: '0px' }">
        <el-table
          ref="multipleTable"
          :data="tableData"
          tooltip-effect="dark"
          style="width: 100%"
          @selection-change="handleSelectionChange">
          <el-table-column type="selection" width="55"></el-table-column>
          <el-table-column label="日期" ><template slot-scope="scope">{{ scope.row.date }}</template></el-table-column>
          <el-table-column prop="name" label="姓名"></el-table-column>
          <el-table-column prop="address" label="地址" show-overflow-tooltip></el-table-column>
        </el-table>
        <el-card >
          <el-button type="primary">Disassociate</el-button>
        </el-card>
      </el-card>
    </el-col>

  </el-row>
</template>

<script>
export default {
  name: "Members",
  data() {
    return {
      tableData: [{
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }],
      multipleSelection:[]
    }
  },
  methods:{
    handleSelectionChange(val) {
      this.multipleSelection = val;
    }
  }
}
</script>

<style scoped>

</style>
