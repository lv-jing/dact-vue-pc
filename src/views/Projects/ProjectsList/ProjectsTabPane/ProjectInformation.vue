<template>
  <div>
    <el-form :model="ruleForm" status-icon
             :label-position="'left'"
             :rules="rules"
             ref="ruleForm"
             label-width="220px"
             class="demo-ruleForm font-semibold">
      <el-row :gutter="24">
          <el-col :span="8">
            <el-form-item label="1 Project TOE" prop="project_toe">
              <el-input v-model="ruleForm.project_toe" placeholder="Please Input"></el-input>
            </el-form-item>
          </el-col>
        <el-col :span="8">
          <el-form-item label="2 TOE Level" prop="document_class">
            <el-select v-model="ruleForm.document_class" placeholder="Please Select" class="w100">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="3 Document Version" prop="document_version">
            <el-input v-model="ruleForm.document_version"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="4 Status" prop="status">
            <el-input v-model="ruleForm.status"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="5 Reviewer(s)" prop="reviewers">
            <el-input v-model="ruleForm.reviewers"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="6 Author(s)" prop="authors">
            <el-input v-model="ruleForm.authors"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="7 Author Department" prop="author_department">
            <el-input v-model="ruleForm.author_department"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="8 Author company" prop="author_company">
            <el-input v-model="ruleForm.author_company"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="9 Author phone num" prop="author_phone_num">
            <el-input v-model="ruleForm.author_phone_num"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="10 Doucment Secrecy Level" prop="document_secrecy_level">
            <el-input v-model="ruleForm.document_secrecy_level"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item prop="target_object">
            <template slot="label">
              <span>11 Objects - 目标</span>
            </template>
            <el-input v-model.number="ruleForm.target_object"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-form-item prop="inputs">
        <template slot="label">
          <span>12 Inputs - 输入信息</span>
        </template>
        <el-input   type="textarea"  autosize v-model.number="ruleForm.inputs"></el-input>
      </el-form-item>
      <el-form-item>
        <el-upload
          class="upload-demo"
          :action="actionUrl"
          :on-preview="handlePreview"
          :on-remove="handleRemove"
          :file-list="fileList"
          list-type="picture">
          <el-button size="small" type="primary">点击上传</el-button>
<!--          <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>-->
        </el-upload>
      </el-form-item>
      <el-form-item prop="activities">
        <template slot="label">
          <span>13 Activities - 工作概述</span>
        </template>
        <el-input   type="textarea"  autosize v-model.number="ruleForm.activities"></el-input>
      </el-form-item>
      <el-form-item prop="output">
        <template slot="label">
          <span>14 Outputs - 工作输出</span>
        </template>
        <el-input   type="textarea"  autosize v-model.number="ruleForm.output"></el-input>
      </el-form-item>
      <el-form-item prop="document_history">
        <template slot="label">
          <span>15 Document History - 文件历史</span>
        </template>
        <el-input   type="textarea"  autosize v-model.number="ruleForm.document_history"></el-input>
      </el-form-item>
      <el-form-item prop="todo_list">
        <template slot="label">
          <span>16 Todo List - 任务清单</span>
        </template>
        <el-input   type="textarea"  autosize v-model.number="ruleForm.todo_list"></el-input>
      </el-form-item>
      <el-divider/>
      <div class="form-footer-but">
          <el-button type="primary" @click="submitForm('ruleForm')">Next Step</el-button>
      </div>
    </el-form>
  </div>
</template>

<script>
import {getProjectsInfor} from "@/api/project";
import {actionUrl} from "@/api/upload";
export default {
  name: 'ProjectInformation',
  props: {
    changeActive:Function
  },
  data() {
    return {
      actionUrl,
      fileList: [],
      ruleForm: {
        pass: '',
        checkPass: '',
        age: '',
      },
      rules: {
        project_toe: [
          { required: true, message: '请输入', trigger: 'blur' },
        ],
        document_class: [
          { required: true, message: '请输入', trigger: 'change' },
        ],
        document_version: [
          { required: true, message: '请输入', trigger: 'blur' },
        ],
        status: [
          { required: true, message: '请输入', trigger: 'blur' },
        ],
        reviewers: [
          { required: true, message: '请输入', trigger: 'blur' },
        ],
        authors: [
          { required: true, message: '请输入', trigger: 'blur' },
        ],
        author_department: [
          { required: true, message: '请输入', trigger: 'blur' },
        ],
        author_company: [
          { required: true, message: '请输入', trigger: 'blur' },
        ],
        author_phone_num: [
          { required: true, message: '请输入', trigger: 'blur' },
        ],
        document_secrecy_level: [
          { required: true, message: '请输入', trigger: 'blur' },
        ],
      },
      options: [{
        value: 'Vehicle',
        label: 'Vehicle',
      }, {
        value: 'Function',
        label: 'Function',
      }, {
        value: 'Component',
        label: 'Component',
      }],
      value: '',
    };
  },
  watch: {
    '$route': { // $route可以用引号，也可以不用引号
      handler(to){
        if(to.query.active==='first'){
          this.initData()
        }
      },
      deep: true, // 深度监听
      immediate: true, // 第一次初始化渲染就可以监听到
    }
  },
  mounted() {

  },
  methods: {
    async initData(){
      const {data} = await getProjectsInfor({id:this.$route.query.id})
      this.ruleForm = {...this.ruleForm,...data}
    },
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.changeActive('second')
          return true;
        }
        this.isErrorPosition()
        return false;
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePreview(file) {
      console.log(file);
    },
  },
};
</script>

<style scoped>

</style>
