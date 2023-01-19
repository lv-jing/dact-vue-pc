<template>
  <div class="app-container user">
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
        style="width: 100%">
        <el-table-column prop="date" label="Enterprise"></el-table-column>
        <el-table-column prop="name" label="Enterprise Abbr"></el-table-column>
        <el-table-column prop="address" label="Vehicle"></el-table-column>
        <el-table-column prop="address" label="Address"></el-table-column>
        <el-table-column prop="address" label="Modified Information"></el-table-column>
        <el-table-column label="Option">
          <template>
            <el-button
              size="mini">Edit
            </el-button>
            <el-button
              size="mini"
              type="danger">Delete
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
  </div>
</template>

<script>
import AvatarUploader from "@/components/AvatarUploader"
export default {
  name: "ProjectSpace",
  components:{
    AvatarUploader
  },
  data() {
    return {
      title: '',
      dialogVisible: false,
      ruleForm:{
        enterprise_id:'',
        vehicle_name:'',
        address:''
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

</style>
