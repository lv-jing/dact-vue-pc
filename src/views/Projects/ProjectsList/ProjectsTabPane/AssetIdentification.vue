<template>
  <div>
    <div>
      <h4 class="mb-2">身份和配置类资产</h4>
      <el-table
        :key="activeName"
        :header-cell-style="{background:'#f0f9eb', color:'black'}"
        :data="tableData"
        @row-click="rowClick"
        style="width: 100%">
        <el-table-column prop="asset" label="Asset"></el-table-column>
        <el-table-column prop="assetDescription" label="Asset Description"></el-table-column>
        <el-table-column prop="component" label="Component"></el-table-column>
        <el-table-column prop="assetProperty" label="Asset Property"></el-table-column>
        <el-table-column prop="comments" label="Comments"></el-table-column>
        <el-table-column >
          <template slot-scope="scope">
            <el-popconfirm
              title="这是一段内容确定删除吗？"
              @onConfirm="hanedleDelete(scope)"
              @confirm="hanedleDelete(scope)"
            >
              <el-button slot="reference" type="text">delete</el-button>
            </el-popconfirm>
          </template>
        </el-table-column>

      </el-table>
      <div class="form-footer-but mt14">
        <el-button type="primary" @click="handleAdd('formData')">Add</el-button>
      </div>
    </div>
    <el-divider/>
    <div class="form-footer-but">
      <div>
        <el-button @click="prevStep">Prev Step</el-button>
        <el-button type="primary" @click="nextStep">Next Step</el-button>
      </div>
    </div>
    <el-dialog
      :visible.sync="visible"
      width="40%">
      <el-form :model="formData" ref="formData" :rules="rules" label-width="130px" class="demo-ruleForm">
        <el-form-item label="Asset" prop="asset">
          <el-select
            class="w100"
            v-model="formData.asset"
            filterable
            allow-create
            default-first-option
            placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="Asset Description" prop="assetDescription">
          <el-input type="textarea"  placeholder="请输入" autosize v-model.number="formData.assetDescription" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="Component" prop="component">
          <el-select
            class="w100"
            v-model="formData.component"
            filterable
            multiple
            placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="Asset Property" prop="assetProperty">
          <el-select
            class="w100"
            v-model="formData.assetProperty"
            filterable
            multiple
            placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="Comments" prop="comments">
          <el-input type="textarea" placeholder="请输入"  autosize v-model.number="formData.comments" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
    <el-button @click="visible = false">取 消</el-button>
    <el-button type="primary"@click="submitForm('formData')">确 定</el-button>
  </span>
    </el-dialog>
  </div>
</template>

<script>

export default {
  name: 'AssetIdentification',
  props: {
    activeName:String,
    changeActive:Function
  },
  data() {
    return {
      formData: {
        asset:'',
        assetDescription:'',
        component:[],
        assetProperty:[],
        comments:''
      },
      rules: {
        asset: [
          {required: true, message: '请选择', trigger: 'change'},
        ],
        component: [
          {required: true, message: '请选择', trigger: 'change'},
        ],
        assetProperty: [
          {required: true, message: '请选择', trigger: 'change'},
        ],
      },
      visible: false,
      options: [{
        value: 'HTML',
        label: 'HTML'
      }, {
        value: 'CSS',
        label: 'CSS'
      }, {
        value: 'JavaScript',
        label: 'JavaScript'
      }],
      tableData: [],
    };
  },
  methods: {
    prevStep(){
      this.changeActive('second')
      document.documentElement.scrollTop = 0
    },
    nextStep(){
      this.changeActive('fourth')
      document.documentElement.scrollTop = 0
    },
    handleAdd(refName) {
      this.visible = true
      this.resetForm(refName)
    },
    // 点击行数据事件
    rowClick(row, column, event){
      this.visible = true
      console.log(row, column, event);
    },
    hanedleDelete(scope){
      this.tableData.splice(scope.$index,1)
    },
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.tableData.push(Object.assign({},this.formData))
          this.visible = false
        } else {
          return false;
        }
      });
    },
  }

};
</script>

<style scoped>

</style>
