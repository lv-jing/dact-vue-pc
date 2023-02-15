<template>
  <div class="app-container">
    <div class="el-table-content">
      <el-table
        :data="tableData"
        highlight-current-row
        :header-cell-style="{background:'#f0f9eb', color:'black'}"
        style="width: 100%">
        <el-table-column prop="spaces" label="Project Spaces"></el-table-column>
        <el-table-column prop="enterprise" label="Project TOE"></el-table-column>
        <el-table-column prop="enterprise_short" label="Id"></el-table-column>
        <el-table-column prop="vehicle_name" label="Status"></el-table-column>
        <el-table-column prop="created_at" label="Start Time"></el-table-column>
        <el-table-column prop="created_at" label="End Time"></el-table-column>
        <el-table-column label="Operations" width="215">
          <template>
              <el-button
                type="text"
                size="mini">取消
              </el-button>
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
  data() {
    return {
      ruleForm: {
        enterprise_id: '',
        vehicle_name: '',
        address: ''
      },
      total: 20,
      queryParams: {
        pageNum: 1,
        pageSize: 10,
      },
      tableData: [
        {
          spaces:'上汽乘用车',
          enterprise:'ADAS',
          enterprise_short:'52',
          vehicle_name:'ProcessStatus.Finish',
          address:'上海市杨浦区军工路2500号',
          display_name:'陈泓睿',
          created_at:'2022-11-17 23:46:57',
        }
      ],
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
