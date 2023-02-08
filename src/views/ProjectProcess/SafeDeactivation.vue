<template>
  <div>
    <p><a href="">安全停运有关流程说明</a></p>
    <p><a href="">安全停运有关模板下载链接</a></p>
    <el-button @click="handleAdd" style="margin-bottom: 15px" type="primary" icon="el-icon-plus"
               size="mini"></el-button>
    <el-table
      :key="activeName"
      :data="tableData"
      highlight-current-row
      @row-click="rowClick"
      :header-cell-style="{background:'#f0f9eb', color:'black'}"
      style="width: 100%">
      <el-table-column prop="name" label="评审文档名称"></el-table-column>
      <el-table-column prop="version" label="Version"></el-table-column>
      <el-table-column prop="author" label="文档作者"></el-table-column>
      <el-table-column prop="personnel" label="评审人员"></el-table-column>
      <el-table-column prop="opinion" label="评审意见"></el-table-column>
      <el-table-column prop="status" label="评审状态"></el-table-column>
      <el-table-column prop="time" label="评审时间"></el-table-column>
      <el-table-column prop="approver" label="批准人"></el-table-column>
      <el-table-column prop="comments" label="批准意见"></el-table-column>
      <el-table-column prop="approvalsStatus" label="批准状态"></el-table-column>
      <el-table-column prop="approvalsTime" label="批准时间"></el-table-column>
      <el-table-column label="评审文档链接">
        <template>
          <el-button
            type="text"
            size="mini">download
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
    <el-dialog
      :visible.sync="visible"
      width="60%"
      :before-close="handleClose">
      <el-form :model="formData" ref="formData" :rules="rules" label-width="110px" class="demo-ruleForm">
        <el-row :gutter="24">
          <el-col :span="12">
            <el-form-item label="评审文档名称" prop="name">
              <el-input v-model.number="formData.name" autocomplete="off"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="Version" prop="version">
              <el-input v-model.number="formData.version" autocomplete="off"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="文档作者" prop="author">
              <el-input v-model.number="formData.author" autocomplete="off"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="评审人员" prop="personnel">
              <el-input v-model.number="formData.personnel" autocomplete="off"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="评审时间" prop="time">
              <el-input v-model.number="formData.time" autocomplete="off"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="评审意见" prop="opinion">
              <el-input v-model.number="formData.opinion" autocomplete="off"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="批准人" prop="approver">
              <el-input v-model.number="formData.approver" autocomplete="off"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="批准意见" prop="comments">
              <el-input v-model.number="formData.comments" autocomplete="off"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="批准时间" prop="approvalsTime">
              <el-input v-model.number="formData.approvalsTime" autocomplete="off"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="24">
            <el-form-item label="待评审文档">
              <el-upload
                class="upload-demo"
                action="https://jsonplaceholder.typicode.com/posts/"
                :on-preview="handlePreview"
                :on-remove="handleRemove"
                :before-remove="beforeRemove"
                multiple
                :file-list="fileList">
                <el-button size="small" type="primary">点击上传</el-button>
              </el-upload>
            </el-form-item>
          </el-col>
          <el-col :span="24">
            <el-form-item label="已评审文档">
              <el-upload
                class="upload-demo"
                action="https://jsonplaceholder.typicode.com/posts/"
                :on-preview="handlePreview"
                :on-remove="handleRemove"
                :before-remove="beforeRemove"
                multiple
                :file-list="fileList">
                <el-button size="small" type="primary">点击上传</el-button>
              </el-upload>
            </el-form-item>
          </el-col>
          <el-col :span="24">
            <el-form-item label="已修订文档">
              <el-upload
                class="upload-demo"
                action="https://jsonplaceholder.typicode.com/posts/"
                :on-preview="handlePreview"
                :on-remove="handleRemove"
                :before-remove="beforeRemove"
                multiple
                :file-list="fileList">
                <el-button size="small" type="primary">点击上传</el-button>
              </el-upload>
            </el-form-item>
          </el-col>
        </el-row>

      </el-form>
      <span slot="footer" class="dialog-footer">
      <el-button @click="visible = false">取 消</el-button>
      <el-button type="primary" @click="submitForm('formData')">确 定</el-button>
    </span>
    </el-dialog>
  </div>
</template>

<script>

export default {
  props: ['activeName'],
  data() {
    return {
      visible: false,
      total: 20,
      queryParams: {
        pageNum: 1,
        pageSize: 10,
        user: '',
        region: '',
      },
      tableData: [
        {
          name:'TARA报告',
          version:'1.0',
          author:'网络安全开发工程师',
          personnel:'系统设计工程师',
          opinion:'修改xxx',
          status:'同意',
          time:'2023-2-1',
          approver:'高级经理',
          comments:'修改xxx',
          approvalsStatus:'退回',
          approvalsTime:'2023-2-1',
        },
        {
          name:'TARA报告',
          version:'1.1',
          author:'网络安全开发工程师',
          personnel:'系统设计工程师',
          opinion:'修改xxx',
          status:'同意',
          time:'2023-2-1',
          approver:'高级经理',
          comments:'修改xxx',
          approvalsStatus:'退回',
          approvalsTime:'2023-2-1',
        },
        {
          name:'TARA报告',
          version:'1.2',
          author:'网络安全开发工程师',
          personnel:'系统设计工程师',
          opinion:'修改xxx',
          status:'同意',
          time:'2023-2-1',
          approver:'高级经理',
          comments:'修改xxx',
          approvalsStatus:'退回',
          approvalsTime:'2023-2-1',
        }
      ],
      formData:{
        name:'',
        version:'',
        author:'',
        personnel:'',
        opinion:'',
        status:'',
        time:'',
        approver:'',
        comments:'',
        approvalsStatus:'',
        approvalsTime:'',
      },
      rules:{
        name: [
          {required: true, message: '请输入', trigger: 'change'},
        ],
      },
      fileList:[]
    };
  },
  methods: {
    // 点击行数据事件
    rowClick(row){
      this.resetForm('formData')
      if(row.starttime && row.endtime){
        row.time = [row.starttime,row.endtime]
      }
      this.formData ={
        ...this.formData,
        ...row
      }
      this.visible = true
    },
    onSubmit() {
      console.log('submit!');
    },
    getList() {
      console.log(this.queryParams);
    },
    handleClose() {
      this.visible = false
    },
    handleAdd() {
      this.visible = true
    },
    submitForm(formName){
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!');
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePreview(file) {
      console.log(file);
    },
    beforeRemove(file, fileList) {
      return this.$confirm(`确定移除 ${ file.name }？`);
    }
  }

}
</script>
<style scoped lang="scss">
p {
  a {
    text-decoration: underline;
    color: #1890FF;
  }
}
</style>
