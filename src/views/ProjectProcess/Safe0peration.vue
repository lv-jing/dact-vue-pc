
<template>
  <div>
    <p><a href="">安全运维有关流程说明</a></p>
    <p><a href="">安全运维有关模板下载链接</a></p>
    <el-button @click="handleAdd" style="margin-bottom: 15px" type="primary" icon="el-icon-plus"
               size="mini"></el-button>
    <el-table
      :key="activeName"
      :data="tableData"
      highlight-current-row
      @row-click="rowClick"
      :header-cell-style="{background:'#f0f9eb', color:'black'}"
      style="width: 100%">
      <el-table-column prop="enterprise" label="评审文档名称"></el-table-column>
      <el-table-column prop="enterprise_short" label="Version"></el-table-column>
      <el-table-column prop="vehicle_name" label="文档作者"></el-table-column>
      <el-table-column prop="address" label="评审人员"></el-table-column>
      <el-table-column prop="display_name" label="评审时间"></el-table-column>
      <el-table-column prop="display_name" label="评审意见"></el-table-column>
      <el-table-column prop="display_name" label="评审确认"></el-table-column>
      <el-table-column prop="display_name" label="批准人"></el-table-column>
      <el-table-column prop="display_name" label="批准意见"></el-table-column>
      <el-table-column prop="display_name" label="批准时间"></el-table-column>
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
            <el-form-item label="评审文档名称" prop="age">
              <el-input v-model.number="formData.age" autocomplete="off"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="Version" prop="age">
              <el-input v-model.number="formData.age" autocomplete="off"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="文档作者" prop="age">
              <el-input v-model.number="formData.age" autocomplete="off"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="评审人员" prop="age">
              <el-input v-model.number="formData.age" autocomplete="off"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="评审时间" prop="age">
              <el-input v-model.number="formData.age" autocomplete="off"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="评审意见" prop="age">
              <el-input v-model.number="formData.age" autocomplete="off"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="批准人" prop="age">
              <el-input v-model.number="formData.age" autocomplete="off"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="批准意见" prop="age">
              <el-input v-model.number="formData.age" autocomplete="off"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="批准时间" prop="age">
              <el-input v-model.number="formData.age" autocomplete="off"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="24">
            <el-form-item label="评审文档">
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
  name: "Safe0peration",
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
          enterprise: '车辆系统网络安全TARA',
          enterprise_short: 'SAIC',
          vehicle_name: 'EV52',
          address: '上海市杨浦区军工路2500号',
          display_name: '陈泓睿',
          created_at: '2022-11-17 23:46:57',
        }, {
          enterprise: '车辆系统网络安全TARA',
          enterprise_short: 'SAIC',
          vehicle_name: 'EV52',
          address: '上海市杨浦区军工路2500号',
          display_name: '陈泓睿',
          created_at: '2022-11-17 23:46:57',
        }
      ],
      formData:{
        age:'',
      },
      rules:{
        age: [
          {required: true, message: '请输入', trigger: 'change'},
        ],
      },
      fileList:[]
    };
  },
  methods: {
    // 点击行数据事件
    rowClick(row, column, event){
      this.visible = true
      console.log(row, column, event);
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
