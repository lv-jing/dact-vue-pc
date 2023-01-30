<template>
  <div>
    <p><a href="">安全分析有关流程说明</a></p>
    <p><a href="">安全分析有关模板下载链接</a></p>
    <el-table
      :key="activeName"
      :data="tableData"
      highlight-current-row
      :header-cell-style="{background:'#f0f9eb', color:'black'}"
      style="width: 100%">
      <el-table-column prop="enterprise" label="评审文档名称"></el-table-column>
      <el-table-column prop="enterprise_short" label="Version"></el-table-column>
      <el-table-column prop="vehicle_name" label="文档作者"></el-table-column>
      <el-table-column prop="address" label="评审人员"></el-table-column>
      <el-table-column prop="display_name" label="评审时间"></el-table-column>
      <el-table-column prop="display_name" label="评审意见"></el-table-column>
      <el-table-column prop="display_name" label="评审确认"></el-table-column>
      <el-table-column prop="display_name" label="批准人"></el-table-column>
      <el-table-column prop="display_name" label="批准意见"></el-table-column>
      <el-table-column prop="display_name" label="批准时间"></el-table-column>
      <el-table-column label="评审文档链接" >
        <template>
            <el-button
              type="text"
              size="mini">download
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
</template>

<script>

export default {
  name: "SafetyAnalysis",
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
          enterprise:'车辆系统网络安全TARA',
          enterprise_short:'SAIC',
          vehicle_name:'EV52',
          address:'上海市杨浦区军工路2500号',
          display_name:'陈泓睿',
          created_at:'2022-11-17 23:46:57',
        },{
          enterprise:'车辆系统网络安全TARA',
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
<style scoped lang="scss">
p{
  a{
    text-decoration: underline;
    color: #1890FF;
  }
}
</style>
