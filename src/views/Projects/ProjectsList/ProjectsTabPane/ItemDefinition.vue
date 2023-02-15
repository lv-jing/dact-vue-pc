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
        <el-input type="textarea" autosize v-model.number="ruleForm.system_information"
                  placeholder="Please Input"></el-input>
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
      <el-form-item prop="functions">
        <template slot="label">
          <span>2.2 Functions - 功能描述</span>
        </template>
        <el-input type="textarea" autosize v-model.number="ruleForm.functions" placeholder="Please Input"></el-input>
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
      <el-form-item prop="network_topology">
        <template slot="label">
          <span>2.3 Network Topology - 网络拓扑架构</span>
        </template>
        <el-input type="textarea" autosize v-model.number="ruleForm.network_topology" placeholder="Please Input"></el-input>
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
      <el-form-item prop="operational_environment">
        <template slot="label">
          <span>2.4 Operational Environment - 运行环境</span>
        </template>
        <el-input type="textarea" autosize v-model.number="ruleForm.operational_environment" placeholder="Please Input"></el-input>
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
      <el-form-item prop="exisiting_security_measures">
        <template slot="label">
          <span>2.5 Exisiting Security Measures - 现有安全措施</span>
          <div class="-mt-1 text-xs text-gray-400"></div>
        </template>
        <el-select filterable allow-create v-model="ruleForm.exisiting_security_measures" placeholder="Please Select" multiple class="w100">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item prop="assumptions">
        <template slot="label">
          <span>2.6 Assumptions - 假设</span>
          <div class="-mt-1 text-xs text-gray-400"></div>
        </template>
        <el-select filterable allow-create default-first-option v-model="ruleForm.assumptions" placeholder="Please Select"
                   multiple class="w100">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item prop="constraints">
        <template slot="label">
          <span>2.6 Constraints - 约束</span>
        </template>
        <el-select filterable allow-create default-first-option v-model="ruleForm.constraints" placeholder="Please Select"
                   multiple class="w100">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item prop="components">
        <template slot="label">
          <span>2.6 Components - 组件</span>
        </template>
        <el-select filterable allow-create default-first-option v-model="ruleForm.components" placeholder="Please Select"
                   multiple class="w100">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item prop="sub_systems">
        <template slot="label">
          <span>2.6 Sub-Systems - 子系统</span>
        </template>
        <el-select filterable allow-create default-first-option v-model="ruleForm.sub_systems" placeholder="Please Select"
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
    changeActive: Function
  },
  data() {
    return {
      fileList: [],
      ruleForm: {},
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
      options: [],
      value: '',
    };
  },
  mounted() {
    this.getInfo()
  },
  methods: {
    async getInfo() {
      const {data} = await getProjectSystem({id: this.$route.query.id})
      this.ruleForm = {
        ...this.ruleForm,
        ...data,
        assumptions:data.assumptions.split(','),
        components:data.components.split(','),
        constraints:data.constraints.split(','),
        exisiting_security_measures:data.exisiting_security_measures.split(','),
        sub_systems:data.sub_systems.split(',')
      }
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
    prevStep() {
      this.changeActive('first')

    }
  },
};
</script>

<style scoped>

</style>
