<template>

  <div>
    <el-tabs v-model="activeTable" @tab-click="handleClick">
      <el-tab-pane label="LEVEL-5" name="first"></el-tab-pane>
      <el-tab-pane label="LEVEL-4" name="second"></el-tab-pane>
      <el-tab-pane label="LEVEL-3" name="third"></el-tab-pane>
      <el-tab-pane label="LEVEL-2" name="fourth"></el-tab-pane>
      <el-tab-pane label="LEVEL-1" name="fifth"></el-tab-pane>
      <el-tab-pane label="TREES" name="sixth"></el-tab-pane>
    </el-tabs>
    <SecondTable :activeName="activeName" v-if="activeTable!=='sixth'" :tableData="tableData"/>
    <div v-else>定时任务补偿222</div>
  </div>

</template>

<script>
import SecondTable from './ThreatsComponents/SecondTable.vue';

export default {
  name: 'ThreatsAnalysis',
  components: {
    SecondTable,
  },
  props:{
    activeName:{
      type: String,
    }
  },
  data() {
    return {
      tableData: [],
      activeTable:sessionStorage.getItem('table_name')
    };
  },
  created() {
    window.addEventListener('setItem', () => {
      this.activeTable = sessionStorage.getItem('table_name')
    })
  },
  mounted() {
    if (this.activeTable === 'first') {
      this.tableData = [{
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
      }];
    } else {
      this.tableData = [{
        id: 1,
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄',
      }, {
        id: 2,
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄',
      }, {
        id: 3,
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄',
        children: [{
          id: 31,
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄',
        }, {
          id: 32,
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄',
        }],
      }, {
        id: 4,
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄',
      }];
    }
  },
  methods: {
    handleClick(tab) {
      sessionStorage.setItem('table_name', tab.name);
    },
  },
};
</script>

<style scoped>

</style>
