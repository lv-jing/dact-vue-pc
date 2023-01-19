<template>
  <div>
    <el-form :model="ruleForm" status-icon
             :label-position="'left'"
             :rules="rules"
             ref="ruleForm"
             label-width="250px"
             class="demo-ruleForm font-semibold">
      <el-form-item prop="pass">
        <template slot="label">
          <span>2 System Overview</span>
          <div class="-mt-1 text-xs text-gray-400">系统概述</div>
        </template>
        <el-input type="textarea" autosize v-model="ruleForm.pass" placeholder="Please Input"></el-input>
      </el-form-item>
      <el-form-item prop="pass1">
        <template slot="label">
          <span>2.1 System Information</span>
          <div class="-mt-1 text-xs text-gray-400">系统信息</div>
        </template>
        <el-input type="textarea" autosize v-model.number="ruleForm.pass1" placeholder="Please Input"></el-input>
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
          <span>2.2 Functions</span>
          <div class="-mt-1 text-xs text-gray-400">功能描述</div>
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
          <span>2.3 Network Topology</span>
          <div class="-mt-1 text-xs text-gray-400">网络拓扑架构</div>
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
          <span>2.4 Operational Environment</span>
          <div class="-mt-1 text-xs text-gray-400">运行环境</div>
        </template>
        <el-input type="textarea" autosize v-model.number="ruleForm.pass4" placeholder="Please Input"></el-input>
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
          <span>2.5 Exisiting Security Measures</span>
          <div class="-mt-1 text-xs text-gray-400">现有安全措施</div>
        </template>
        <el-select v-model="ruleForm.pass5" placeholder="Please Select" multiple class="w100">
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
          <span>2.6 Assumptions</span>
          <div class="-mt-1 text-xs text-gray-400">假设</div>
        </template>
        <el-select v-model="ruleForm.pass6" placeholder="Please Select" multiple class="w100">
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
          <span>2.6 Constraints</span>
          <div class="-mt-1 text-xs text-gray-400">约束</div>
        </template>
        <el-select v-model="ruleForm.pass7" placeholder="Please Select" multiple class="w100">
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
          <span>2.6 Components</span>
          <div class="-mt-1 text-xs text-gray-400">组件</div>
        </template>
        <el-select v-model="ruleForm.pass8" placeholder="Please Select" multiple class="w100">
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
          <span>2.6 Sub-Systems</span>
          <div class="-mt-1 text-xs text-gray-400">子系统</div>
        </template>
        <el-select v-model="ruleForm.pass9" placeholder="Please Select" multiple class="w100" clearable >
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
<!--        <el-button @click="resetForm('ruleForm')">重置</el-button>-->
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'ItemDefinition',
  data() {
    return {
      fileList: [],
      ruleForm: {
        pass: '',
        checkPass: '',
        age: '',
      },
      rules: {
        pass: [
          { required: true, message: '请输入', trigger: 'change' },
        ],
        checkPass: [
          { required: true, message: '请输入', trigger: 'change' },
        ],
        age: [
          { required: true, message: '请输入', trigger: 'change' },
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
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          console.log(this.ruleForm);
          return '222';
        }
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
