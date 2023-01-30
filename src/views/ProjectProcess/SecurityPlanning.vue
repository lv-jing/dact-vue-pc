<template>
    <div>
        <el-table
          :data="tableData"
          :key="activeName"
          highlight-current-row
          :header-cell-style="{background:'#f0f9eb', color:'black'}"
          style="width: 100%">
          <el-table-column prop="enterprise" label="流程域"></el-table-column>
          <el-table-column prop="enterprise_short" label="项目活动"></el-table-column>
          <el-table-column prop="vehicle_name" label="活动类型"></el-table-column>
          <el-table-column prop="address" label="输出物"></el-table-column>
          <el-table-column prop="display_name" label="启动时间"></el-table-column>
          <el-table-column prop="display_name" label="结束时间"></el-table-column>
          <el-table-column prop="display_name" label="负责人"></el-table-column>
          <el-table-column prop="display_name" label="参与者"></el-table-column>
          <el-table-column prop="display_name" label="评审人"></el-table-column>
          <el-table-column prop="display_name" label="批准人"></el-table-column>
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
  name: "SecurityPlanning",
  props: ['activeName'],
  data() {
    return {
      total: 20,
      queryParams: {
        pageNum: 1,
        pageSize: 10,
        user: '',
        region: '',
      },
      tableData: [
        {
          enterprise:'上汽乘用车',
          enterprise_short:'SAIC',
          vehicle_name:'EV52',
          address:'上海市杨浦区军工路2500号',
          display_name:'陈泓睿',
          created_at:'2022-11-17 23:46:57',
        },{
          enterprise:'上汽乘用车',
          enterprise_short:'SAIC',
          vehicle_name:'EV52',
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
