<template>
  <div>
    <el-form :model="queryParams" class="demo-form-inline" label-width="120px">
      <el-row :gutter="24">
        <el-col :span="6">
          <el-form-item label="Attack">
            <el-input v-model="queryParams.user" placeholder="Threat_Name:"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label="Component_Name">
            <el-input v-model="queryParams.user" placeholder="Component_Name:"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label="Attack_L1_Name">
            <el-input v-model="queryParams.user" placeholder="Attack_L1_Name:"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label="Attack_L2_Name">
            <el-input v-model="queryParams.user" placeholder="Attack_L2_Name:"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label="Attack_L3_Name">
            <el-input v-model="queryParams.user" placeholder="Attack_L3_Name:"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label="Attack_L4_Name">
            <el-input v-model="queryParams.user" placeholder="Attack_L4_Name:"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label="Attack_L5_Name">
            <el-input v-model="queryParams.user" placeholder="Attack_L5_Name:"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label="Mitigation">
            <el-select v-model="queryParams.region" class="w100" placeholder="请选择">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item>
          <el-button type="primary" @click="onSubmit">查询</el-button>
        </el-form-item>
        </el-col>
      </el-row>
    </el-form>
    <el-table
      border
      :data="tableData"
      :header-cell-style="{background:'#f0f9eb', color:'black'}"
      style="width: 100%">
      <el-table-column prop="date" label="Goal_ID" fixed></el-table-column>
      <el-table-column prop="name" label="Threat_Name" width="120"></el-table-column>
      <el-table-column prop="address" label="Attack_L1_Name" width="150"></el-table-column>
      <el-table-column prop="address" label="Attack_L2_Name" width="150"></el-table-column>
      <el-table-column prop="address" label="Attack_L3_Name" width="150"></el-table-column>
      <el-table-column prop="address" label="Attack_L4_Name" width="150"></el-table-column>
      <el-table-column prop="address" label="Attack_L5_Name" width="150"></el-table-column>
      <el-table-column prop="address" label="Threat_Path_Description" width="200"></el-table-column>
      <el-table-column prop="address" label="Mitigation_RefRegulation_EU" width="220"></el-table-column>
      <el-table-column prop="address" label="CVSS_Attack_Vector" width="160"></el-table-column>
      <el-table-column prop="address" label="CVSS_Complexity" width="150"> </el-table-column>
      <el-table-column prop="address" label="CVSS_Privilege_Required" width="200"></el-table-column>
      <el-table-column prop="address" label="CVSS_User_Interaction" width="200"></el-table-column>
      <el-table-column prop="address" label="CVSS_Feasibility_Rating" width="200"></el-table-column>
      <el-table-column prop="address" label="CVSS_Feasibility_Level" width="200"></el-table-column>
      <el-table-column prop="address" label="Target_Feasibility" width="150"></el-table-column>
      <el-table-column prop="address" label="Mitigation_Flag" width="150"></el-table-column>
      <el-table-column prop="address" label="Requirement_ID" width="150"></el-table-column>
      <el-table-column prop="address" label="Requirement_Content" width="180"> </el-table-column>
      <el-table-column prop="address" label="Concept_ID" width="150"> </el-table-column>
      <el-table-column prop="address" label="Final_Feasibility_Level" width="220"></el-table-column>
      <el-table-column prop="address" label="Original_Risk" width="150"></el-table-column>
      <el-table-column prop="address" label="Final_Risk" width="150"></el-table-column>
      <el-table-column prop="address" label="Claim"></el-table-column>
      <el-table-column prop="address" label="Component_Name" width="150"></el-table-column>
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
  name: 'TressTable',
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
