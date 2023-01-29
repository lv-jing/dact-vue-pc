<template>
  <div class="app-container">
  <el-tabs class="back-f" v-model="activeName" type="border-card" @tab-click="handleClick">
    <el-tab-pane label="安全规划" name="first">安全规划</el-tab-pane>
    <el-tab-pane label="安全分析" name="second">安全分析</el-tab-pane>
    <el-tab-pane label="安全设计" name="third">安全设计</el-tab-pane>
    <el-tab-pane label="安全实施" name="fourth">安全实施</el-tab-pane>
    <el-tab-pane label="安全验证" name="fifth">安全验证</el-tab-pane>
    <el-tab-pane label="安全确认" name="sixth">安全确认</el-tab-pane>
    <el-tab-pane label="安全评估" name="seventh">安全评估</el-tab-pane>
    <el-tab-pane label="安全放行" name="eighth">安全放行</el-tab-pane>
    <el-tab-pane label="安全生产" name="ninth">安全生产</el-tab-pane>
    <el-tab-pane label="安全运维" name="tenth">安全运维</el-tab-pane>
    <el-tab-pane label="安全停运" name="eleventh">安全停运</el-tab-pane>
  </el-tabs>
  </div>
</template>
<script>
export default {
  name: "index",
  data() {
    return {
      activeName: 'first'
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    }
  }
};
</script>

<style scoped>

</style>
