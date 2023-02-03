<template>
  <div class="app-container user">
    <div v-if="$route.name==='ProjectsList'" class="source demo-block">
      <el-collapse accordion v-model="activeNames">
        <el-collapse-item name="1">
          <template slot="title">
            项目空间1<button @click="handleGoto" class="header-icon el-icon-circle-plus add-icon"></button>
          </template>
          <el-table
            :data="tableData"
            :header-cell-style="{background:'#f0f9eb', color:'black'}"
            style="width: 100%">
            <el-table-column prop="project_toe" label="Project TOE"></el-table-column>
            <el-table-column prop="document_class" label="TOE level"></el-table-column>
            <el-table-column prop="document_version" label="Document Version"></el-table-column>
            <el-table-column prop="status" label="Status"></el-table-column>
            <el-table-column prop="authors" label="Author(s)"></el-table-column>
            <el-table-column prop="reviewers" label="Reviewer(s)"></el-table-column>
            <el-table-column prop="creator" label="Create By">
              <template slot-scope="scope">
                {{ scope.row.creator }}<br />
                {{ scope.row.created_at }}<br />
              </template>
            </el-table-column>
            <el-table-column label="Option">
              <template>
                <el-button type="text" size="mini">Edit</el-button>
                <el-button type="text" size="mini">Libraries</el-button>
                <el-button  type="text" size="mini" >Copy</el-button>
              </template>
            </el-table-column>
          </el-table>
        </el-collapse-item>
        <el-collapse-item name="2">
          <template slot="title">
            项目空间2<button @click="handleGoto" class="header-icon el-icon-circle-plus add-icon" style="color: #67C23A"></button>
          </template>
          <el-table
            :data="tableData"
            :header-cell-style="{background:'#f0f9eb', color:'black'}"
            style="width: 100%">
            <el-table-column prop="project_toe" label="Project TOE"></el-table-column>
            <el-table-column prop="document_class" label="TOE level"></el-table-column>
            <el-table-column prop="document_version" label="Document Version"></el-table-column>
            <el-table-column prop="status" label="Status"></el-table-column>
            <el-table-column prop="authors" label="Author(s)"></el-table-column>
            <el-table-column prop="reviewers" label="Reviewer(s)"></el-table-column>
            <el-table-column prop="creator" label="Create By">
              <template slot-scope="scope">
                {{ scope.row.creator }}<br />
                {{ scope.row.created_at }}<br />
              </template>
            </el-table-column>
            <el-table-column label="Option">
              <template>
                <el-button type="text" size="mini">Edit</el-button>
                <el-button type="text" size="mini">Libraries</el-button>
                <el-button  type="text" size="mini" >Copy</el-button>
              </template>
            </el-table-column>
          </el-table>
        </el-collapse-item>
        <el-collapse-item name="3">
          <template slot="title">
            项目空间3<button @click="handleGoto" class="header-icon el-icon-circle-plus add-icon" style="color: #67C23A"></button>
          </template>
          <el-table
            :data="tableData"
            style="width: 100%">
            <el-table-column prop="project_toe" label="Project TOE"></el-table-column>
            <el-table-column prop="document_class" label="TOE level"></el-table-column>
            <el-table-column prop="document_version" label="Document Version"></el-table-column>
            <el-table-column prop="status" label="Status"></el-table-column>
            <el-table-column prop="authors" label="Author(s)"></el-table-column>
            <el-table-column prop="reviewers" label="Reviewer(s)"></el-table-column>
            <el-table-column prop="creator" label="Create By">
              <template slot-scope="scope">
                {{ scope.row.creator }}<br />
                {{ scope.row.created_at }}<br />
              </template>
            </el-table-column>
            <el-table-column label="Option">
              <template>
                <el-button type="text" size="mini">Edit</el-button>
                <el-button type="text" size="mini">Libraries</el-button>
                <el-button  type="text" size="mini" >Copy</el-button>
              </template>
            </el-table-column>
          </el-table>
        </el-collapse-item>
        <el-collapse-item name="4">
          <template slot="title">
            项目空间4<button @click="handleGoto" class="header-icon el-icon-circle-plus add-icon" style="color: #67C23A"></button>
          </template>
          <el-table
            :data="tableData"
            style="width: 100%">
            <el-table-column prop="project_toe" label="Project TOE"></el-table-column>
            <el-table-column prop="document_class" label="TOE level"></el-table-column>
            <el-table-column prop="document_version" label="Document Version"></el-table-column>
            <el-table-column prop="status" label="Status"></el-table-column>
            <el-table-column prop="authors" label="Author(s)"></el-table-column>
            <el-table-column prop="reviewers" label="Reviewer(s)"></el-table-column>
            <el-table-column prop="creator" label="Create By">
              <template slot-scope="scope">
                {{ scope.row.creator }}<br />
                {{ scope.row.created_at }}
              </template>
            </el-table-column>
            <el-table-column label="Option">
              <template>
                <el-button type="text" size="mini">Edit</el-button>
                <el-button type="text" size="mini">Libraries</el-button>
                <el-button  type="text" size="mini" >Copy</el-button>
              </template>
            </el-table-column>
          </el-table>
        </el-collapse-item>
      </el-collapse>
    </div>
    <router-view v-else/>
  </div>
</template>

<script>
export default {
  name: 'ProjectsList',
  data() {
    return {
      activeNames: '1',
      tableData: [{
        project_toe:'Infortainment',
        document_class:'Function',
        document_version:'3.0',
        status:'Draft',
        authors:'Zhao Shawn',
        reviewers:'Liu Zheng',
        creator:'陈泓睿',
        created_at:'2022-12-19 18:24'
      }],
    };
  },
  methods: {
    handleGoto() {
      this.$router.push({ path: '/EditProject',query:{active:'first'} });
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
