<template>
  <div>
    <h4>身份和配置类资产</h4>
    <el-table
      :data="tableData"
      :key="activeName"
      :header-cell-style="{background:'#f0f9eb', color:'black'}"
      style="width: 100%; margin-top: 20px">
      <el-table-column prop="Asset" label="Asset"></el-table-column>
      <el-table-column prop="amount0" label="Asset Property"></el-table-column>
      <el-table-column prop="amount1" label="Threat ID"></el-table-column>
      <el-table-column prop="amount2" label="Impact Level"></el-table-column>
      <el-table-column prop="amount3" label="Feasibility Level"></el-table-column>
      <el-table-column prop="amount4" label="Risk Rating"></el-table-column>
      <el-table-column prop="amount5" label="Risk Treatment Decision"></el-table-column>
    </el-table>
    <el-divider/>
    <div class="form-footer-but">
      <div>
        <el-button @click="prevStep">Prev Step</el-button>
        <el-button type="primary" @click="nextStep">Next Step</el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RiskAssessment',
  props: {
    activeName:String,
    changeActive:Function
  },
  data() {
    return {
      options: [{
        value: '234',
        label: '严重',
      }],
      tableData: [{
        Asset: '智驾ADAS固件',
        amount0: '机密性 Confidentiality\t',
        amount1: 'CS_THREAT-SAIC-EV52-ADAS-4',
        amount2: 'Critical (4)',
        amount3: 'Medium (3)',
        amount4: 'High',
      }],
    };
  },
  methods: {
    prevStep(){
      this.changeActive('fifth')
      document.documentElement.scrollTop = 0
    },
    nextStep() {
      this.changeActive('seventh')
      document.documentElement.scrollTop = 0
    },
    onSubmit() {
      console.log('submit!');
    },
    getList() {
      console.log(this.queryParams);
    }
  }
};
</script>

<style scoped>

</style>
