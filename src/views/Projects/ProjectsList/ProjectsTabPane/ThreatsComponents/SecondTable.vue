<template>
  <div>
    <el-form :inline="true" :model="formInline" class="demo-form-inline">
      <el-form-item label="Attack">
        <el-input v-model="formInline.user" placeholder="审批人"></el-input>
      </el-form-item>
      <el-form-item label="Sub_Attack">
        <el-input v-model="formInline.user" placeholder="审批人"></el-input>
      </el-form-item>
      <el-form-item label="Attack Vector">
        <el-select v-model="formInline.region" placeholder="活动区域">
          <el-option label="区域一" value="shanghai"></el-option>
          <el-option label="区域二" value="beijing"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="Feasibility Rating">
        <el-select v-model="formInline.region" placeholder="活动区域">
          <el-option label="区域一" value="shanghai"></el-option>
          <el-option label="区域二" value="beijing"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">查询</el-button>
        <el-button type="primary" @click="onSubmit">规则检查</el-button>
        <el-button type="primary" @click="onSubmit">生成trees</el-button>
        <el-button type="primary" @click="handleAdd">Add</el-button>
      </el-form-item>
    </el-form>
    <el-table
      border
      :key="activeName"
      row-key="id"
      :data="tableData"
      :row-class-name="tableRowClassName"
      :header-cell-style="{background:'#f0f9eb', color:'black'}"
      :tree-props="{children: 'children', hasChildren: 'hasChildren'}"
      style="width: 100%">
      <el-table-column prop="date" label="Attack"></el-table-column>
      <el-table-column prop="name" label="Sub_Attack"></el-table-column>
      <el-table-column prop="address" label="Attack Category"></el-table-column>
      <el-table-column prop="date" label="Attack Description"></el-table-column>
      <el-table-column prop="date" label="Attack Vector"></el-table-column>
      <el-table-column prop="date" label="Complexity"></el-table-column>
      <el-table-column prop="date" label="Privilege Required"></el-table-column>
      <el-table-column prop="date" label="User Interaction"></el-table-column>
      <el-table-column prop="date" label="Feasibility Rating"></el-table-column>
      <el-table-column label="Option">
        <template>
          <el-button type="primary" size="mini">Edit</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: 'SecondTable',
  props:{
    handleDate:Function,
    tableData:Array,
    activeName:String,
    activeTable:String
  },
  data() {
    return {
      formInline: {
        user: '',
        region: '',
      },
    };
  },
  methods: {
    tableRowClassName({ row }) {
      if (row.children) {
        return 'warning-row';
      }
      return '';
    },
    onSubmit() {
      console.log('submit!');
    },
    handleAdd(){
      this.handleDate()
    }
  },
};
</script>

<style lang="scss">
.el-table .warning-row {
  background: oldlace;
}

.el-table .success-row {
  background: #f0f9eb;
}
</style>
