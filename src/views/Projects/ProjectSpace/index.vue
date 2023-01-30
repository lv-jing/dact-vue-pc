<template>
  <div class="app-container user">
    <div v-if="$route.name==='list'">
      <el-button @click="addProject" style="margin-bottom: 15px" type="primary" icon="el-icon-plus"
                 size="small"></el-button>
      <div class="el-table-search">
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
      </div>
      <div class="el-table-content">
        <el-table
          :data="tableData"
          highlight-current-row
          @row-click="rowClick"
          :header-cell-style="{background:'#f0f9eb', color:'black'}"
          style="width: 100%">
          <el-table-column prop="enterprise" label="Enterprise"></el-table-column>
          <el-table-column prop="enterprise_short" label="Enterprise Abbr"></el-table-column>
          <el-table-column prop="vehicle_name" label="Vehicle"></el-table-column>
          <el-table-column prop="address" label="Address"></el-table-column>
          <el-table-column prop="display_name" label="Modified Information">
            <template slot-scope="scope">
              {{ scope.row.display_name }}<br />
              {{ scope.row.created_at }}
            </template>
          </el-table-column>
          <el-table-column label="Operations" width="215">
            <template>
              <router-link class="ml10" :to="{path:'/ProjectList',query:{id:1}}">
                <el-button
                  type="text"
                  size="mini">Project List
                </el-button>
              </router-link>
<!--              <router-link class="ml10" :to="{path:'/Members',query:{id:1}}">-->
<!--                <el-button-->
<!--                  type="text"-->
<!--                  size="mini">Members1-->
<!--                </el-button>-->
<!--              </router-link>-->
              <el-button
                class="ml10"
                @click.native.stop="handleMember"
                type="text"
                size="mini">Members
              </el-button>
              <router-link class="ml10" :to="{path:'/Libraries',query:{id:1}}">
                <el-button
                  type="text"
                  size="mini">Libraries
                </el-button>
              </router-link>
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
      <el-dialog
        :title="title"
        :visible.sync="dialogVisible"
        width="35%">
        <el-form label-position="left" label-width="90px" :model="ruleForm" ref="ruleForm" :rules="rules">
          <el-form-item label="Enterprise" prop="enterprise_id">
            <el-select v-model="ruleForm.enterprise_id" placeholder="select" class="w100">
              <el-option label="长安" value="shanghai"></el-option>
              <el-option label="吉利" value="beijing"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="Vehicle" prop="vehicle_name">
            <el-input v-model="ruleForm.vehicle_name" placeholder="please input"></el-input>
          </el-form-item>
          <el-form-item label="Address">
            <el-input v-model="ruleForm.address" placeholder="please input"></el-input>
          </el-form-item>
          <el-form-item label="Logo">
            <AvatarUploader/>
          </el-form-item>
        </el-form>
        <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible = false">Cancel</el-button>
    <el-button type="primary" @click="submitForm('ruleForm')">Confirm</el-button>
  </span>
      </el-dialog>
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
    <router-view/>
  </div>
</template>

<script>
import AvatarUploader from "@/components/AvatarUploader"

export default {
  name: "ProjectSpace",
  components: {
    AvatarUploader
  },
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
      title: '',
      dialogVisible: false,
      ruleForm: {
        enterprise_id: '',
        vehicle_name: '',
        address: ''
      },
      total: 20,
      queryParams: {
        pageNum: 1,
        pageSize: 10,
        user: '',
        region: '',
      },
      rules: {
        enterprise_id: [
          {required: true, message: '请选择', trigger: 'change'},
        ],
        vehicle_name: [
          {required: true, message: '请输入', trigger: 'change'},
        ],
      },
      tableData: [
        {
          enterprise:'上汽乘用车',
          enterprise_short:'SAIC',
          vehicle_name:'EV52',
          address:'上海市杨浦区军工路2500号',
          display_name:'陈泓睿',
          created_at:'2022-11-17 23:46:57',
        }
      ],
    };
  },
  methods: {
    rowClick(row, column, event){
      this.dialogVisible = true
      this.title = 'Edit projectSpace'
      console.log(row, column, event);
    },
    addProject() {
      this.dialogVisible = true
      this.title = 'Create projectSpace'
    },
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!');
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
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
