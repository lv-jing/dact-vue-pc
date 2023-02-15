<template>
  <div>
    <el-form :model="ruleForm" status-icon
             :label-position="'left'"
             :rules="rules"
             ref="ruleForm"
             label-width="304px"
             class="demo-ruleForm font-semibold">
      <el-form-item prop="overview">
        <template slot="label">
          <span>2 System Overview - 系统概述</span>
        </template>
        <el-input type="textarea" autosize v-model="ruleForm.overview" placeholder="Please Input"></el-input>
      </el-form-item>
      <el-form-item prop="system_information">
        <template slot="label">
          <span>2.1 System Information - 系统信息</span>
        </template>
        <el-input type="textarea" autosize v-model.number="ruleForm.system_information" placeholder="Please Input"></el-input>
      </el-form-item>
      <el-form-item>
        <el-upload
          class="upload-demo"
          action="https://jsonplaceholder.typicode.com/posts/"
          :on-preview="handlePreview"
          :on-remove="handleRemove"
          :file-list="fileList"
          list-type="picture">
          <el-button size="small" type="primary">点击上传</el-button>
        </el-upload>
      </el-form-item>
      <el-form-item prop="pass2">
        <template slot="label">
          <span>2.2 Functions - 功能描述</span>
        </template>
        <el-input type="textarea" autosize v-model.number="ruleForm.pass2" placeholder="Please Input"></el-input>
      </el-form-item>
      <el-form-item>
        <el-upload
          class="upload-demo"
          action="https://jsonplaceholder.typicode.com/posts/"
          :on-preview="handlePreview"
          :on-remove="handleRemove"
          :file-list="fileList"
          list-type="picture">
          <el-button size="small" type="primary">点击上传</el-button>
        </el-upload>
      </el-form-item>
      <el-form-item prop="pass3">
        <template slot="label">
          <span>2.3 Network Topology - 网络拓扑架构</span>
        </template>
        <el-input type="textarea" autosize v-model.number="ruleForm.pass3" placeholder="Please Input"></el-input>
      </el-form-item>
      <el-form-item>
        <el-upload
          class="upload-demo"
          action="https://jsonplaceholder.typicode.com/posts/"
          :on-preview="handlePreview"
          :on-remove="handleRemove"
          :file-list="fileList"
          list-type="picture">
          <el-button size="small" type="primary">点击上传</el-button>
        </el-upload>
      </el-form-item>
      <el-form-item prop="pass4">
        <template slot="label">
          <span>2.4 Operational Environment - 运行环境</span>
        </template>
        <el-input type="textarea" autosize v-model.number="ruleForm.pass4" placeholder="Please Input"></el-input>
        <el-input autosize v-model.number="ruleForm.pass4" placeholder="Please Input"></el-input>
      </el-form-item>
      <el-form-item>
        <el-upload
          class="upload-demo"
          action="https://jsonplaceholder.typicode.com/posts/"
          :on-preview="handlePreview"
          :on-remove="handleRemove"
          :file-list="fileList"
          list-type="picture">
          <el-button size="small" type="primary">点击上传</el-button>
        </el-upload>
      </el-form-item>
      <el-form-item prop="pass5">
        <template slot="label">
          <span>2.5 Exisiting Security Measures - 现有安全措施</span>
          <div class="-mt-1 text-xs text-gray-400"></div>
        </template>
        <el-select filterable allow-create v-model="ruleForm.pass5" placeholder="Please Select" multiple class="w100">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item prop="pass6">
        <template slot="label">
          <span>2.6 Assumptions - 假设</span>
          <div class="-mt-1 text-xs text-gray-400"></div>
        </template>
        <el-select filterable allow-create default-first-option v-model="ruleForm.pass6" placeholder="Please Select"
                   multiple class="w100">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item prop="pass7">
        <template slot="label">
          <span>2.6 Constraints - 约束</span>
        </template>
        <el-select filterable allow-create default-first-option v-model="ruleForm.pass7" placeholder="Please Select"
                   multiple class="w100">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item prop="pass8">
        <template slot="label">
          <span>2.6 Components - 组件</span>
        </template>
        <el-select filterable allow-create default-first-option v-model="ruleForm.pass8" placeholder="Please Select"
                   multiple class="w100">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item prop="pass9">
        <template slot="label">
          <span>2.6 Sub-Systems - 子系统</span>
        </template>
        <el-select filterable allow-create default-first-option v-model="ruleForm.pass9" placeholder="Please Select"
                   multiple class="w100" clearable>
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </el-form-item>
      <el-divider/>
      <div class="form-footer-but">
        <div>
          <el-button @click="prevStep">Prev Step</el-button>
          <el-button type="primary" @click="submitForm('ruleForm')">Next Step</el-button>
        </div>
      </div>
    </el-form>
  </div>
</template>

<script>
import {getProjectSystem} from "../../../../api/project";

export default {
  name: 'ItemDefinition',
  props: {
    changeActive:Function
  },
  data() {
    return {
      fileList: [],
      ruleForm: {
        pass: '',
        pass1: '',
        checkPass: '',
        age: '',
      },
      rules: {
        pass: [
          {required: true, message: '请输入', trigger: 'change'},
        ],
        checkPass: [
          {required: true, message: '请输入', trigger: 'change'},
        ],
        age: [
          {required: true, message: '请输入', trigger: 'change'},
        ],
      },
      options: [{
        value: '选项1',
        label: '黄金糕',
      }, {
        value: '选项2',
        label: '双皮奶',
      }, {
        value: '选项3',
        label: '蚵仔煎',
      }, {
        value: '选项4',
        label: '龙须面',
      }, {
        value: '选项5',
        label: '北京烤鸭',
      }],
      value: '',
    };
  },
  mounted() {
    this.getInfo()
  },
  methods: {
   async getInfo(){
     const{data} = await getProjectSystem({id:this.$route.query.id})
     this.ruleForm = {...this.ruleForm,...data}
    },
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.changeActive('third')

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
    prevStep(){
      this.changeActive('first')

    }
  },
};
</script>

<style scoped>

</style>
