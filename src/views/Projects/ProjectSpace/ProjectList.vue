<template>
  <div>
      <div class="el-table-content">
        <el-table
          :data="tableData"
          highlight-current-row
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
          <el-table-column label="Operations" width="100">
            <template>
              <el-button
                class="ml10"
                @click.native.stop="handleMember"
                type="text"
                size="mini">Members
              </el-button>
            </template>
          </el-table-column>
        </el-table>
        <pagination
          v-show="total>0"
          :total="total"
          :page.sync="queryParams.pageNum"
          :limit.sync="queryParams.pageSize"
          @pagination="getList"
        />
      </div>
      <!--  Members弹窗    -->
      <el-dialog :visible.sync="memberVisible">
        <div class="edit_dev">
          <el-transfer
            @change="handleChange"
            v-model="value"
            :data="data"
            :titles="['Project Space Members', 'Resource Pool']"
          ></el-transfer>
        </div>

      </el-dialog>
  </div>
</template>

<script>

export default {
  name: "ProjectList",
  data() {
    return {
      memberVisible:false,
      value:[],
      data:[
        {
          key:'1',
          label:'陈泓睿'
        },
        {
          key:'2',
          label:'张依雯'
        }
      ],
      total: 20,
      queryParams: {
        pageNum: 1,
        pageSize: 10,
        user: '',
        region: '',
      },
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
    // 切换人员
    handleMember(){
      this.memberVisible = true
    },
    handleChange(value, direction, movedKeys) {
      console.log(value, direction, movedKeys);
    },
    onSubmit() {
      console.log('submit!');
    },
    getList() {
      console.log(this.queryParams);
    }
  }

}
</script>
<style scoped>
.edit_dev >>> .el-transfer-panel {
  width:37%;
}
</style>
