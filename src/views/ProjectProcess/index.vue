<template>
  <div class="app-container">
    <el-tabs class="back-f" v-model="activeName" type="border-card" @tab-click="handleClick">
      <el-tab-pane label="安全规划" name="first">
        <SecurityPlanning :activeName="activeName"/>
      </el-tab-pane>
      <el-tab-pane label="安全分析" name="second">
        <SafetyAnalysis :activeName="activeName"/>
      </el-tab-pane>
      <el-tab-pane label="安全概念" name="third">
        <SafetyConcept :activeName="activeName"/>
      </el-tab-pane>
      <el-tab-pane label="安全设计" name="fourth">
        <SafetyDesign :activeName="activeName"/>
      </el-tab-pane>
      <el-tab-pane label="安全实施" name="fifth">
        <SecurityImplementation :activeName="activeName"/>
      </el-tab-pane>
      <el-tab-pane label="安全验证" name="sixth">
        <SecurityVerification :activeName="activeName"/>
      </el-tab-pane>
      <el-tab-pane label="安全确认" name="seventh">
        <SafetyConfirmation :activeName="activeName"/>
      </el-tab-pane>
      <el-tab-pane label="安全评估" name="eighth">
        <SafetyAssessment :activeName="activeName"/>
      </el-tab-pane>
      <el-tab-pane label="安全放行" name="ninth">
        <SafeRelease :activeName="activeName"/>
      </el-tab-pane>
      <el-tab-pane label="安全生产" name="tenth">
        <SafeProduction :activeName="activeName"/>
      </el-tab-pane>
      <el-tab-pane label="安全运维" name="eleventh">
        <Safe0peration  :activeName="activeName"/>
      </el-tab-pane>
      <el-tab-pane label="安全停运" name="twelfth">
        <SafeDeactivation :activeName="activeName"/>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>

import SecurityPlanning from './SecurityPlanning'
import SafetyAnalysis from './SafetyAnalysis'
import SafetyConcept from './SafetyConcept'
import SafetyDesign from './SafetyDesign'
import SecurityImplementation from './SecurityImplementation'
import SecurityVerification from './SecurityVerification'
import SafetyConfirmation from './SafetyConfirmation'
import SafetyAssessment from './SafetyAssessment'
import SafeRelease from './SafeRelease'
import SafeProduction from './SafeProduction'
import Safe0peration from './Safe0peration'
import SafeDeactivation from './SafeDeactivation'

export default {
  name: "index",
  components: {
    SecurityPlanning,
    SafetyAnalysis,
    SafetyConcept,
    SafetyDesign,
    SecurityImplementation,
    SecurityVerification,
    SafetyConfirmation,
    SafetyAssessment,
    SafeRelease,
    SafeProduction,
    Safe0peration,
    SafeDeactivation
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
