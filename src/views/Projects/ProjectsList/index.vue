<template>
  <div class="app-container user">
    <div class="source demo-block">
      <el-collapse accordion v-model="activeNames">
        <el-collapse-item name="1">
          <template slot="title">
            项目空间1<button @click="handleGoto" class="header-icon el-icon-circle-plus add-icon"></button>
          </template>
          <el-table
            :header-cell-style="{background:'#f0f9eb', color:'black'}"
            :data="tableData"
            style="width: 100%">
            <el-table-column prop="date" label="Enterprise"></el-table-column>
            <el-table-column prop="name" label="Enterprise"></el-table-column>
            <el-table-column prop="address" label="Abbr"></el-table-column>
            <el-table-column prop="address" label="Vehicle"></el-table-column>
            <el-table-column prop="address" label="Address"></el-table-column>
            <el-table-column prop="address" label="Create By"></el-table-column>
            <el-table-column label="Option">
              <template>
                <el-button
                  size="mini">Edit</el-button>
                <el-button
                  size="mini"
                  type="danger">Delete</el-button>
              </template>
            </el-table-column>
          </el-table>
        </el-collapse-item>
        <el-collapse-item name="2">
          <template slot="title">
            项目空间2<button @click="handleGoto" class="header-icon el-icon-circle-plus add-icon" style="color: #67C23A"></button>
          </template>
          <el-table
            :header-cell-style="{background:'#f0f9eb', color:'black'}"
            :data="tableData"
            style="width: 100%">
            <el-table-column prop="date" label="Enterprise"></el-table-column>
            <el-table-column prop="name" label="Enterprise"></el-table-column>
            <el-table-column prop="address" label="Abbr"></el-table-column>
            <el-table-column prop="address" label="Vehicle"></el-table-column>
            <el-table-column prop="address" label="Address"></el-table-column>
            <el-table-column prop="address" label="Create By"></el-table-column>
            <el-table-column label="Option">
              <template>
                <el-button
                  size="mini">Edit</el-button>
                <el-button
                  size="mini"
                  type="danger">Delete</el-button>
              </template>
            </el-table-column>
          </el-table>
        </el-collapse-item>
        <el-collapse-item name="3">
          <template slot="title">
            项目空间3<button @click="handleGoto" class="header-icon el-icon-circle-plus add-icon" style="color: #67C23A"></button>
          </template>
          <el-table
            :header-cell-style="{background:'#f0f9eb', color:'black'}"
            :data="tableData"
            style="width: 100%">
            <el-table-column prop="date" label="Enterprise"></el-table-column>
            <el-table-column prop="name" label="Enterprise"></el-table-column>
            <el-table-column prop="address" label="Abbr"></el-table-column>
            <el-table-column prop="address" label="Vehicle"></el-table-column>
            <el-table-column prop="address" label="Address"></el-table-column>
            <el-table-column prop="address" label="Create By"></el-table-column>
            <el-table-column label="Option">
              <template>
                <el-button
                  size="mini">Edit</el-button>
                <el-button
                  size="mini"
                  type="danger">Delete</el-button>
              </template>
            </el-table-column>
          </el-table>
        </el-collapse-item>
        <el-collapse-item name="4">
          <template slot="title">
            项目空间4<button @click="handleGoto" class="header-icon el-icon-circle-plus add-icon" style="color: #67C23A"></button>
          </template>
          <el-table
            :header-cell-style="{background:'#f0f9eb', color:'black'}"
            :data="tableData"
            style="width: 100%">
            <el-table-column prop="date" label="Enterprise"></el-table-column>
            <el-table-column prop="name" label="Enterprise"></el-table-column>
            <el-table-column prop="address" label="Abbr"></el-table-column>
            <el-table-column prop="address" label="Vehicle"></el-table-column>
            <el-table-column prop="address" label="Address"></el-table-column>
            <el-table-column prop="address" label="Create By"></el-table-column>
            <el-table-column label="Option">
              <template>
                <el-button
                  size="mini">Edit</el-button>
                <el-button
                  size="mini"
                  type="danger">Delete</el-button>
              </template>
            </el-table-column>
          </el-table>
        </el-collapse-item>
      </el-collapse>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProjectsList',
  data() {
    return {
      activeNames: '1',
      tableData: [{
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
      }],
    };
  },
  methods: {
    handleGoto() {
      sessionStorage.setItem('current_name', 'first');
      this.$router.push({ name: 'EditProject' });
    },
  },
};
</script>

<style scoped lang="scss">
.add-icon{
  background: #FFFFFF;
  border: none;
  color: #67C23A;
  cursor: pointer;
}
.source{
  padding: 24px;
  background: #FFFFFF;
}
</style>
