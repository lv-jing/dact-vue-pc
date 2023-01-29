<template>
  <div class="app-container user">
    Project list
  </div>
</template>

<script>
export default {
  name: "ProjectList",
  mounted() {
    console.log(this.$route.params.id);
  }
}
</script>

<style scoped>

</style>
