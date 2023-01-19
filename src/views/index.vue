<template>
  <div class="app-container home">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>Hi, 吕静!</span>
      </div>
      <div v-for="o in 1" :key="o" class="text item">
        Welcome!
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  name: "Index",
  mounted() {

  }
};
</script>

<style scoped lang="scss">

</style>

