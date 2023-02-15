<template>
  <div>
      <el-form :inline="true" :model="queryParams" class="demo-form-inline">
        <el-form-item label="Enterprise Abbr">
          <el-input v-model="queryParams.user" placeholder="请输入"></el-input>
        </el-form-item>
        <el-form-item label="Vehicle">
          <el-input v-model="queryParams.region" placeholder="请输入"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">查询</el-button>
        </el-form-item>
      </el-form>
      <el-table
        :data="tableData"
        :key="activeName"
        :header-cell-style="{background:'#f0f9eb', color:'black'}"
        style="width: 100%; margin-top: 20px">
        <el-table-column prop="id" label="Component"></el-table-column>
        <el-table-column prop="name" label="Risk ID"></el-table-column>
        <el-table-column prop="amount3" label="Threat Name"></el-table-column>
        <el-table-column prop="id" label="Attack ID"></el-table-column>
        <el-table-column prop="id" label="Concept ID"></el-table-column>
        <el-table-column prop="id" label="Concept Content"></el-table-column>
        <el-table-column prop="id" label="Claim ID"></el-table-column>
        <el-table-column prop="id" label="Claim Content"></el-table-column>

      </el-table>
      <pagination
        v-show="total>0"
        :total="total"
        :page.sync="queryParams.pageNum"
        :limit.sync="queryParams.pageSize"
        @pagination="getList"
      />
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
  props: {
    activeName:String,
    changeActive:Function
  },
  data() {
    return {
      total: 20,
      queryParams: {
        pageNum: 1,
        pageSize: 10,
        user: '',
        region: '',
      },
      options: [{
        value: '234',
        label: '严重',
      }, {
        value: '4.43',
        label: '重大的',
      }, {
        value: '2.2',
        label: '中等的',
      }, {
        value: '4.1',
        label: '微不足道的',
      }],
      tableData: [{
        id: '12987122',
        name: '王小虎',
        amount1: '234',
        amount2: '234',
        amount3: 10,
      }, {
        id: '12987123',
        name: '王小虎',
        amount1: '165',
        amount2: '4.43',
        amount3: 12,
      }, {
        id: '12987124',
        name: '王小虎',
        amount1: '324',
        amount2: '4.43',
        amount3: 9,
      }, {
        id: '12987125',
        name: '王小虎',
        amount1: '621',
        amount2: '2.2',
        amount3: 17,
      }, {
        id: '12987126',
        name: '王小虎',
        amount1: '539',
        amount2: '4.1',
        amount3: 15,
      }],
    };
  },
  methods: {
    prevStep(){
      this.changeActive('tenth')

    },
    nextStep() {
      this.changeActive('twelfth')

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
