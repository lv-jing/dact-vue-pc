<template>
  <div class="app-container" style="height: 100%">
    <el-tabs class="back-f" v-model="activeName" type="border-card" @tab-click="handleClick">
      <el-tab-pane label="Asset Category" name="first"></el-tab-pane>
      <el-tab-pane label="Asset Property" name="second"></el-tab-pane>
      <el-button @click="addProject" style="margin-bottom: 15px" type="primary" icon="el-icon-plus"
                 size="small"></el-button>
      <el-table
        :data="tableData"
        highlight-current-row
        :header-cell-style="{background:'#f0f9eb', color:'black'}"
        style="width: 100%">
        <el-table-column prop="id" label="ID"></el-table-column>
        <el-table-column prop="lable" label="Lable"></el-table-column>
        <el-table-column prop="name" label="Name"></el-table-column>
        <el-table-column prop="ids" label="Front IDs"></el-table-column>
        <el-table-column prop="description" label="Description"></el-table-column>
        <el-table-column prop="created" label="Created by"></el-table-column>
        <el-table-column label="Operations" width="215">
          <template>
            <el-button
              @click="addProject('edit')"
              type="text"
              size="mini">Edit
            </el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-tabs>
    <el-dialog
      :title="title"
      :visible.sync="dialogVisible"
      width="45%"
      :before-close="handleClose">
      <el-form :model="formData" ref="formData" :rules="rules" label-width="100px" class="demo-ruleForm">
        <el-form-item label="Name" prop="name">
          <el-input v-model.number="formData.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="Abbr." prop="abbr">
          <el-input v-model.number="formData.abbr" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="Lable" prop="lable">
          <el-input v-model.number="formData.lable" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="Description" prop="description">
          <el-input type="textarea" :autosize="{ minRows: 3, maxRows: 5}" v-model.number="formData.Description" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="Value" prop="value">
          <el-input v-model.number="formData.value" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="Range" prop="range">
          <el-input v-model.number="formData.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="Front IDs" prop="ids">
          <el-input v-model.number="formData.ids" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="Color" prop="color">
          <el-input v-model.number="formData.color" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="submitForm('formData')">确 定</el-button>
  </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: "Library",
  data() {
    return {
      tableData: [
        {
          id: '22956',
          lable: 'AS-CG-01',
          name: '身份和配置类资产',
          ids: '',
          description: '身份和配置信息是整车或零部件的标识或配置信息，例如整车VIN码，零部件的DID，软件版本，硬件版本等。',
          created: 'Administrator',
        },
        {
          id: '22957',
          lable: 'AS-CG-02',
          name: '固件和应用类资产',
          ids: '',
          description: '车辆功能发挥依赖控制器的可执行程序，包括固件和第三方应用。例如：网关的固件，娱乐模块可以安装的第三方APP，动力系统性能相关标定数据，网络安全算法及密钥信息等。',
          created: 'Administrator',
        }
      ],
      activeName: 'first',
      title: 'Record',
      dialogVisible: false,
      formData: {},
      rules: {
        name: [
          {required: true, message: '请输入', trigger: 'change'},
        ],
        lable: [
          {required: true, message: '请输入', trigger: 'change'},
        ],
      },
      options: [{
        value: '选项1',
        label: '黄金糕'
      }, {
        value: '选项2',
        label: '双皮奶'
      }, {
        value: '选项3',
        label: '蚵仔煎'
      }, {
        value: '选项4',
        label: '龙须面'
      }, {
        value: '选项5',
        label: '北京烤鸭'
      }],
      value: ''
    }
  },
  methods: {
    handleClick() {

    },
    addProject(type) {
      this.dialogVisible = true
    },
    handleClose(done) {
      this.resetForm('formData')
      this.dialogVisible = false
    },
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {

        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
  }
}
</script>

<style scoped>

</style>
