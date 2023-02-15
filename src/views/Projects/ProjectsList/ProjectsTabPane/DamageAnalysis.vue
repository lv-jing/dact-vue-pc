<template>
<div>
  <h4 class="mb-2">身份和配置类资产</h4>
  <el-table
    :data="tableData"
    :key="activeName"
    :header-cell-style="{background:'#f0f9eb', color:'black'}"
    style="width: 100%; margin-top: 20px">
    <el-table-column prop="id" label="Asset"></el-table-column>
    <el-table-column prop="name" label="Asset Property"></el-table-column>
    <el-table-column prop="amount1" label="Damage Description">
      <template slot-scope="scope">
        <el-input type="textarea" autosize v-model="scope.row.amount1" placeholder="Please Input"></el-input>
      </template>
    </el-table-column>
    <el-table-column prop="amount2" label="Safety">
      <template slot-scope="scope">
        <el-select clearable v-model="scope.row.amount2" placeholder="请选择">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </template>
    </el-table-column>
    <el-table-column prop="amount3" label="Financial">
      <template slot-scope="scope">
        <el-select clearable v-model="scope.row.amount2" placeholder="请选择">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </template>
    </el-table-column>
    <el-table-column prop="amount3" label="Privacy">
      <template slot-scope="scope">
        <el-select clearable v-model="scope.row.amount2" placeholder="请选择">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </template>
    </el-table-column>
    <el-table-column prop="amount3" label="Operational">
      <template slot-scope="scope">
        <el-select clearable v-model="scope.row.amount2" placeholder="请选择">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </template>
    </el-table-column>
    <el-table-column prop="amount3" label="Impact Rating"></el-table-column>
  </el-table>
  <el-divider/>
  <div class="form-footer-but">
    <div>
      <el-button @click="prevStep">Prev Step</el-button>
      <el-button type="primary" @click="nextStep">Next Step</el-button>
    </div>
    <div>
      <el-button type="primary" @click="update">Update</el-button>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'DamageAnalysis',
  props: {
    activeName:String,
    changeActive:Function
  },
  data() {
    return {
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
    update(){
      console.log(this.tableData);
    },
    prevStep(){
      this.changeActive('third')

    },
    nextStep() {
      this.changeActive('fifth')

    }
  },
};
</script>

<style scoped>

</style>
