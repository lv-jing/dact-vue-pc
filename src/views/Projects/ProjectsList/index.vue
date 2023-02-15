<template>
  <div class="app-container user">
    <div v-if="$route.name==='ProjectsList'" class="source demo-block">
      <el-collapse accordion v-model="activeNames">
        <el-collapse-item name="1">
          <template slot="title">
            项目空间1
            <button @click="handleGoto" class="header-icon el-icon-circle-plus add-icon"></button>
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
                {{ scope.row.creator }}<br/>
                {{ parseTime(scope.row.created_at) }}<br/>
              </template>
            </el-table-column>
            <el-table-column label="Option">
              <template  v-slot="{row}">
                <router-link class="ml10" :to="{path:'/EditProject',query:{active:'first',id:row.id}}">
                  <el-button type="text" size="mini">Edit</el-button>
                </router-link>
                <router-link class="ml10" :to="{path:'/SecurityTechnology/SecurityTechnology'}">
                  <el-button
                    type="text"
                    size="mini">Libraries
                  </el-button>
                </router-link>
                <el-button class="ml10" type="text" size="mini">Copy</el-button>
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
import {getProjects} from "../../../api/project";
import {parseTime} from "@/utils/common";

export default {
  name: 'ProjectsList',
  data() {
    return {
      parseTime,
      activeNames: '1',
      tableData: [],
    };
  },
  mounted() {
    if (this.$route.name === 'ProjectsList') {
      this.getList()
    }
  },
  methods: {
    async getList() {
      const {data} = await getProjects()
      this.tableData = data || []
    },
    handleGoto() {
      this.$router.push({path: '/EditProject', query: {active: 'first'}});
    },
  },
};
</script>

<style scoped lang="scss">
.add-icon {
  background: #FFFFFF;
  border: none;
  color: #67C23A;
  cursor: pointer;
}

.source {
  padding: 24px;
  background: #FFFFFF;
}
</style>
