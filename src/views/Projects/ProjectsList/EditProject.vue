<template>
  <div class="app-container">
    <el-tabs class="back-f" v-model="activeName" type="border-card" @tab-click="handleClick">
      <el-tab-pane name="first">
        <template slot="label">
          <div class="label-cont">Project Information</div>
          <small>项目信息</small>
        </template>
        <ProjectInformation :changeActive="changeActive" v-if="activeName==='first'"/>
      </el-tab-pane>
      <el-tab-pane name="second">
        <template slot="label">
          <div>Item Definition<br><small>对象定义</small></div>
        </template>
        <ItemDefinition :changeActive="changeActive" v-if="activeName==='second'"/>
      </el-tab-pane>
      <el-tab-pane name="third">
        <template slot="label">
          <div>Asset Identification<br><small>资产识别</small></div>
        </template>
        <AssetIdentification :activeName="activeName" :changeActive="changeActive" v-if="activeName==='third'"/>
      </el-tab-pane>
      <el-tab-pane name="fourth">
        <template slot="label">
          <div>Damage analysis<br><small>危害分析</small></div>
        </template>
        <DamageAnalysis :activeName="activeName" :changeActive="changeActive" v-if="activeName==='fourth'"/>
      </el-tab-pane>
      <el-tab-pane name="fifth">
        <template slot="label">
          <div>Threats analysis<br><small>威胁分析</small></div>
        </template>
        <ThreatsAnalysis :activeName="activeName" v-if="activeName==='fifth'" :changeActive="changeActive" />
      </el-tab-pane>
      <el-tab-pane name="sixth">
        <template slot="label">
          <div>Risk Assessment<br><small>风险评估</small></div>
        </template>
        <RiskAssessment :activeName="activeName" v-if="activeName==='sixth'" :changeActive="changeActive"/>
      </el-tab-pane>
      <el-tab-pane name="seventh">
        <template slot="label">
          <div>Security Goal<br><small>安全目标</small></div>
        </template>
        <SecurityGoal :activeName="activeName" v-if="activeName==='seventh'" :changeActive="changeActive"/>
      </el-tab-pane>
      <el-tab-pane name="eighth">
        <template slot="label">
          <div>Requirement allocation<br><small>网络安全需求分配</small></div>
        </template>
        <RequirementAllocation :activeName="activeName" v-if="activeName==='eighth'" :changeActive="changeActive"/>
      </el-tab-pane>
      <el-tab-pane name="ninth">
        <template slot="label">
          <div>Concept allocation<br><small>网络安全概念分配</small></div>
        </template>
        <ConceptAllocation :activeName="activeName" v-if="activeName==='ninth'" :changeActive="changeActive"/>
      </el-tab-pane>
      <el-tab-pane name="tenth">
        <template slot="label">
          <div>Risk Re-Assessment<br><small>风险重估</small></div>
        </template>
        <RiskReAssessment :activeName="activeName" v-if="activeName==='tenth'" :changeActive="changeActive"/>
      </el-tab-pane>
      <el-tab-pane name="eleventh">
        <template slot="label">
          <div>Security Claim<br><small>安全声明</small></div>
        </template>
        <SecurityClaim :activeName="activeName" v-if="activeName==='eleventh'" :changeActive="changeActive"/>
      </el-tab-pane>
      <el-tab-pane name="twelfth">
        <template slot="label">
          <div>Specification<br><small>安全规范</small></div>
        </template>
        <Specification :activeName="activeName" v-if="activeName==='twelfth'" :changeActive="changeActive"/>
      </el-tab-pane>
      <el-tab-pane name="thirteenth">
        <template slot="label">
          <div>Integration Verification<br><small>集成规则</small></div>
        </template>
        <Integration :activeName="activeName" v-if="activeName==='thirteenth'" :changeActive="changeActive"/>
      </el-tab-pane>
      <el-tab-pane name="fourteenth">
        <template slot="label">
          <div>Validation<br><small>安全验证</small></div>
        </template>
        <Validation :activeName="activeName" v-if="activeName==='fourteenth'" :changeActive="changeActive"/>
      </el-tab-pane>
      <el-tab-pane name="fifteenth">
        <template slot="label">
          <div>TBD<br><small>待定</small></div>
        </template>
        <TBD :activeName="activeName" v-if="activeName==='fifteenth'" :changeActive="changeActive"/>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import ProjectInformation from './ProjectsTabPane/ProjectInformation.vue';
import ItemDefinition from './ProjectsTabPane/ItemDefinition.vue';
import AssetIdentification from './ProjectsTabPane/AssetIdentification.vue';
import DamageAnalysis from './ProjectsTabPane/DamageAnalysis.vue';
import RiskAssessment from './ProjectsTabPane/RiskAssessment.vue';
import ThreatsAnalysis from './ProjectsTabPane/ThreatsAnalysis.vue';
import SecurityGoal from './ProjectsTabPane/SecurityGoal.vue';
import RequirementAllocation from './ProjectsTabPane/RequirementAllocation.vue';
import ConceptAllocation from './ProjectsTabPane/ConceptAllocation.vue';
import RiskReAssessment from './ProjectsTabPane/RiskReAssessment.vue';
import SecurityClaim from './ProjectsTabPane/SecurityClaim.vue';
import Specification from './ProjectsTabPane/Specification.vue';
import Integration from './ProjectsTabPane/Integration.vue';
import Validation from './ProjectsTabPane/Validation.vue';
import TBD from './ProjectsTabPane/TBD.vue';
import merge from 'webpack-merge'

export default {
  name: 'EditProject',
  components: {
    ProjectInformation,
    ItemDefinition,
    AssetIdentification,
    DamageAnalysis,
    ThreatsAnalysis,
    RiskAssessment,
    SecurityGoal,
    RequirementAllocation,
    ConceptAllocation,
    RiskReAssessment,
    SecurityClaim,
    Specification,
    Integration,
    Validation,
    TBD
  },
  data() {
    return {
      activeName: this.$route.query.active
    };
  },
  methods: {
    changeActive(val) {
      this.activeName = val
      this.$router.push({
        query:merge(this.$route.query,{active:val})
      })
    },
    handleClick(tab) {
      let query = {active: tab.name,id:this.$route.query.id}
      if (tab.name === 'fifth') {
        query.level = 'first'
      }
      this.$router.push({path: '/EditProject', query: query});
    },
  },
};
</script>

<style lang="scss">
.el-tabs__item {
  height: auto !important;
}

.el-tabs__nav-next, .el-tabs__nav-prev {
  line-height: 80px;
}
</style>
