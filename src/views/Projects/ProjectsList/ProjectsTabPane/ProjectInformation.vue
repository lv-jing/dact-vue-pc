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
            <el-form-item label="1 Project TOE" prop="pass">
              <el-input v-model="ruleForm.pass" placeholder="Please Input"></el-input>
            </el-form-item>
          </el-col>
        <el-col :span="8">
          <el-form-item label="2 TOE Level" prop="pass1">
            <el-select v-model="ruleForm.pass1" placeholder="Please Select" class="w100">
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
          <el-form-item label="3 Document Version" prop="pass2">
            <el-input v-model="ruleForm.pass2"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="4 Status" prop="pass3">
            <el-input v-model="ruleForm.pass3"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="5 Reviewer(s)" prop="pass4">
            <el-input v-model="ruleForm.pass4"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="6 Author(s)" prop="pass5">
            <el-input v-model="ruleForm.pass5"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="7 Author Department" prop="pass6">
            <el-input v-model="ruleForm.pass6"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="8 Author company" prop="pass7">
            <el-input v-model="ruleForm.pass7"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="9 Author phone num" prop="pass8">
            <el-input v-model="ruleForm.pass8"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="10 Doucment Secrecy Level" prop="pass9">
            <el-input v-model="ruleForm.pass9"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item prop="pass10">
            <template slot="label">
              <span>11 Objects - 目标</span>
            </template>
            <el-input v-model.number="ruleForm.pass10"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-form-item prop="pass11">
        <template slot="label">
          <span>12 Inputs - 输入信息</span>
        </template>
        <el-input   type="textarea"  autosize v-model.number="ruleForm.pass11"></el-input>
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
<!--          <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>-->
        </el-upload>
      </el-form-item>
      <el-form-item prop="pass12">
        <template slot="label">
          <span>14 Outputs - 工作输出</span>
        </template>
        <el-input   type="textarea"  autosize v-model.number="ruleForm.pass12"></el-input>
      </el-form-item>
      <el-form-item prop="pass13">
        <template slot="label">
          <span>15 Document History - 文件历史</span>
        </template>
        <el-input   type="textarea"  autosize v-model.number="ruleForm.pass13"></el-input>
      </el-form-item>
      <el-form-item prop="pass14">
        <template slot="label">
          <span>16 Todo List - 任务清单</span>
        </template>
        <el-input   type="textarea"  autosize v-model.number="ruleForm.pass14"></el-input>
      </el-form-item>
      <el-divider/>
      <div class="form-footer-but">
          <el-button type="primary" @click="submitForm('ruleForm')">Next Step</el-button>
      </div>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'ProjectInformation',
  props: {
    changeActive:Function
  },
  data() {
    return {
      fileList: [
        {
          name: 'food.jpeg',
          url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100',
        },
        {
          name: 'food2.jpeg',
          url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100',
        },
      ],
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
    initData(){

    },
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          console.log(this.ruleForm);
          this.changeActive('second')
          document.documentElement.scrollTop = 0
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
