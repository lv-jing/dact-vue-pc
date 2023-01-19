<template>
  <div class="app-container">
    <el-tabs class="back-f" v-model="activeName" type="border-card" @tab-click="handleClick" lazy>
      <el-tab-pane name="first" lazy>
        <template slot="label">
          <div>Project Information<br><small>项目信息</small></div>
        </template>
        <ProjectInformation/>
      </el-tab-pane>
      <el-tab-pane name="second">
        <template slot="label">
          <div>Item Definition<br><small>对象定义</small></div>
        </template>
        <ItemDefinition/>
      </el-tab-pane>
      <el-tab-pane name="third">
        <template slot="label">
          <div>Asset Identification<br><small>资产识别</small></div>
        </template>
        <AssetIdentification :activeName="activeName"/>
      </el-tab-pane>
      <el-tab-pane name="fourth">
        <template slot="label">
          <div>Damage analysis<br><small>危害分析</small></div>
        </template>
        <DamageAnalysis :activeName="activeName"/>
      </el-tab-pane>
      <el-tab-pane name="fifth">
        <template slot="label">
          <div>Threats analysis<br><small>威胁分析</small></div>
        </template>
        <ThreatsAnalysis :active="active" :activeName="activeName"/>
      </el-tab-pane>
      <el-tab-pane name="sixth">
        <template slot="label">
          <div>Risk Assessment<br><small>风险评估</small></div>
      </template>风险评估
      </el-tab-pane>
      <el-tab-pane name="seventh">
        <template slot="label">
          <div>Security Goal<br><small>安全目标</small></div>
        </template>
        <SecurityGoal :activeName="activeName"/>
      </el-tab-pane>
      <el-tab-pane name="eighth">
        <template slot="label">
          <div>Requirement allocation<br><small>网络安全需求分配</small></div>
        </template>
        <RequirementAllocation :activeName="activeName"/>
      </el-tab-pane>
      <el-tab-pane name="ninth">
        <template slot="label">
          <div>Concept allocation<br><small>网络安全概念分配</small></div>
        </template>
        <ConceptAllocation :activeName="activeName"/>
      </el-tab-pane>
      <el-tab-pane name="tenth">
        <template slot="label">
          <div>Risk Re-Assessment<br><small>风险重估</small></div>
        </template>
        <RiskReAssessment :activeName="activeName"/>
      </el-tab-pane>
      <el-tab-pane name="eleventh">
        <template slot="label">
          <div>Security Claim<br><small>安全声明</small></div>
        </template>
        <SecurityClaim :activeName="activeName"/>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import ProjectInformation from './ProjectsTabPane/ProjectInformation.vue';
import ItemDefinition from './ProjectsTabPane/ItemDefinition.vue';
import AssetIdentification from './ProjectsTabPane/AssetIdentification.vue';
import DamageAnalysis from './ProjectsTabPane/DamageAnalysis.vue';
import ThreatsAnalysis from './ProjectsTabPane/ThreatsAnalysis.vue';
import SecurityGoal from './ProjectsTabPane/SecurityGoal.vue';
import RequirementAllocation from './ProjectsTabPane/RequirementAllocation.vue';
import ConceptAllocation from './ProjectsTabPane/ConceptAllocation.vue';
import RiskReAssessment from './ProjectsTabPane/RiskReAssessment.vue';
import SecurityClaim from './ProjectsTabPane/SecurityClaim.vue';

export default {
  name: 'EditProject',
  components: {
    ProjectInformation,
    ItemDefinition,
    AssetIdentification,
    DamageAnalysis,
    ThreatsAnalysis,
    SecurityGoal,
    RequirementAllocation,
    ConceptAllocation,
    RiskReAssessment,
    SecurityClaim,
  },
  data() {
    return {
      activeName: 'first',
      active: 'first',
    };
  },
  created() {
    this.activeName = sessionStorage.getItem('current_name');
    this.active = sessionStorage.getItem('table_name');
  },
  beforeUpdate() {
    console.log(1);
  },
  methods: {
    handleClick(tab) {
      sessionStorage.setItem('current_name', tab.name);
      sessionStorage.setItem('table_name', 'first');
      this.active = 'first';
    },
  },
};
</script>

<style lang="scss">
.el-tabs__item{
  height: auto;
}
.el-tabs__nav-next, .el-tabs__nav-prev{
  line-height: 80px;
}
</style>
