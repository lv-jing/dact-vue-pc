<template>
  <div class="app-container">
    <el-tabs class="back-f" v-model="activeName" type="border-card" @tab-click="handleClick">
      <el-tab-pane label="安全规划" name="first">
        <SecurityPlanning :activeName="activeName"/>
      </el-tab-pane>
      <el-tab-pane label="安全分析" name="second">
        <SafetyAnalysis :activeName="activeName"/>
      </el-tab-pane>
      <el-tab-pane label="安全概念" name="third">安全概念</el-tab-pane>
      <el-tab-pane label="安全设计" name="fourth">安全设计</el-tab-pane>
      <el-tab-pane label="安全实施" name="fifth">安全实施</el-tab-pane>
      <el-tab-pane label="安全验证" name="sixth">安全验证</el-tab-pane>
      <el-tab-pane label="安全确认" name="seventh">安全确认</el-tab-pane>
      <el-tab-pane label="安全评估" name="eighth">安全评估</el-tab-pane>
      <el-tab-pane label="安全放行" name="ninth">安全放行</el-tab-pane>
      <el-tab-pane label="安全生产" name="tenth">安全生产</el-tab-pane>
      <el-tab-pane label="安全运维" name="eleventh">安全运维</el-tab-pane>
      <el-tab-pane label="安全停运" name="twelfth">安全停运</el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>

import SecurityPlanning from './SecurityPlanning'
import SafetyAnalysis from './SafetyAnalysis'

export default {
  name: "index",
  components: {
    SecurityPlanning,
    SafetyAnalysis
  },
  data() {
    return {
      activeName: this.$route.query.active || 'first',
    };
  },
  methods: {
    handleClick(tab, event) {
      this.$router.push({path: '/EditProjectProces', query: {active: tab.name,id:this.$route.query.id}});
    },
  }
};
</script>

<style scoped>

</style>
