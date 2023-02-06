<template>
  <div>
    <el-tabs v-model="activeTable" @tab-click="handleClick">
      <el-tab-pane label="LEVEL-5" name="first"></el-tab-pane>
      <el-tab-pane label="LEVEL-4" name="second"></el-tab-pane>
      <el-tab-pane label="LEVEL-3" name="third"></el-tab-pane>
      <el-tab-pane label="LEVEL-2" name="fourth"></el-tab-pane>
      <el-tab-pane label="LEVEL-1" name="fifth"></el-tab-pane>
      <el-tab-pane label="TREES" name="sixth"></el-tab-pane>
    </el-tabs>
    <SecondTable :activeName="activeName" v-if="activeTable!=='sixth'" :tableData="tableData" :handleDate="handleDate"/>
    <div v-else>定时任务补偿222</div>
    <!--  tree 弹窗   -->
    <el-dialog
      v-if="dialogVisible"
      :title="title"
      :visible.sync="dialogVisible"
      width="50%"
      :before-close="handleClose">
      <el-form :model="formData" ref="formData" :rules="rules" label-width="230px" class="demo-ruleForm">
        <el-form-item label="Attack Node Name" prop="name">
          <el-input v-model.number="formData.name"
                    placeholder="请输入Atk_L[层级]-[组件简称，多个下划线分割]-[任意字符] 示例：Atk-L1-FDR_RDA-Leakage"
                    autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item v-if="activeTable==='fifth'" label="Asset with Property" prop="asset">
          <el-select
            class="w100"
            v-model="formData.asset"
            clearable
            filterable
            placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item v-if="activeTable==='fifth'" label="Threat Description" prop="threat_desc">
          <el-input type="textarea" autosize v-model.number="formData.threat_desc" placeholder="请输入威胁描述"
                    autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item v-else label="Attack Description" prop="attack_description">
          <el-input type="textarea" autosize v-model.number="formData.attack_description" placeholder="请输入"
                    autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="Attack Category" prop="attack_category">
          <el-select
            class="w100"
            v-model="formData.attack_category"
            clearable
            filterable
            placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>
        <template v-if="activeTable==='first'">
          <el-form-item label="Cybersecurity Requirement" prop="requirement_content">
            <el-select
              class="w100"
              v-model="formData.requirement_content"
              filterable
              placeholder="请选择">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="Cybersecurity Concept" prop="concept_brief">
            <el-select
              class="w100"
              v-model="formData.concept_brief"
              filterable
              placeholder="请选择">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="R155 Threat Reference" prop="threat_reference">
            <el-select
              class="w100"
              v-model="formData.threat_reference"
              multiple
              filterable
              placeholder="请选择">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="R155 Mitigration Reference" prop="mitigation_ref_regulation">
            <el-select
              class="w100"
              v-model="formData.mitigation_ref_regulation"
              multiple
              filterable
              placeholder="请选择">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="GB Threat Reference" prop="threat_reference_gb">
            <el-select
              class="w100"
              v-model="formData.threat_reference_gb"
              multiple
              filterable
              placeholder="请选择">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="GB Mitigration Reference" prop="mitigation_ref_regulation_gb">
            <el-select
              class="w100"
              v-model="formData.mitigation_ref_regulation_gb"
              multiple
              filterable
              placeholder="请选择">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </el-form-item>
        </template>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="handleClose">取 消</el-button>
        <el-button type="primary" @click="submitForm('formData')">确 定</el-button>
      </span>
    </el-dialog>
    <!--  L5新增后分数弹窗   -->
    <el-dialog
      title="提示"
      :visible.sync="visible"
      width="30%">
      <span>这是一段信息</span>
      <span slot="footer" class="dialog-footer">
    <el-button @click="visible = false">取 消</el-button>
    <el-button type="primary" @click="visible = false">确 定</el-button>
  </span>
    </el-dialog>
  </div>

</template>

<script>
import SecondTable from './ThreatsComponents/SecondTable.vue';

export default {
  name: 'ThreatsAnalysis',
  components: {
    SecondTable,
  },
  props: {
    activeName: {
      type: String,
    }
  },
  data() {
    return {
      tableData: [],
      activeTable: this.$route.query.level,
      dialogVisible: false,
      visible: false,
      formData: {
        name: '',
        asset: '',
        threat_desc: '',
        attack_category: '',
        attack_description: '',
        namattack_categorye: '',
        requirement_content: '',
        concept_brief: '',
        threat_reference: [],
        mitigation_ref_regulation: [],
        threat_reference_gb: [],
        mitigation_ref_regulation_gb: []
      },
      rules: {
        name: [
          {required: true, message: '请输入', trigger: 'blur'},
        ],
        asset: [
          {required: true, message: '请选择', trigger: 'blur'},
        ],
        requirement_content: [
          {required: true, message: '请选择', trigger: 'blur'},
        ],
        concept_brief: [
          {required: true, message: '请选择', trigger: 'blur'},
        ],
        threat_reference: [
          {required: true, message: '请选择', trigger: 'blur'},
        ],
        mitigation_ref_regulation: [
          {required: true, message: '请选择', trigger: 'blur'},
        ],
      },
      title: '',
      objs: {
        first: 'LEVEL-5',
        second: 'LEVEL-4',
        third: 'LEVEL-3',
        fourth: 'LEVEL-2',
        fifth: 'LEVEL-1',
      },
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
    };
  },
  methods: {
    // 新增和编辑攻击树
    handleDate() {
      this.title = this.objs[this.activeTable]
      this.dialogVisible = true
    },
    handleClick(tab) {
      console.log(this.formData);

      const {active} = this.$route.query
      this.$router.push({path: '/EditProject', query: {active, level: tab.name}});
      if (this.activeTable === 'first') {
        this.tableData = [{
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
        }];
      } else {
        this.tableData = [{
          id: 1,
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
        }, {
          id: 2,
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄',
        }, {
          id: 3,
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄',
          children: [{
            id: 31,
            name: '王小虎',
            address: '上海市普陀区金沙江路 1519 弄',
          }, {
            id: 32,
            name: '王小虎',
            address: '上海市普陀区金沙江路 1519 弄',
          }],
        }, {
          id: 4,
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄',
        }];
      }
    },
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!');
          this.dialogVisible = false
          this.visible = true
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    handleClose(done) {
      this.dialogVisible = false
    }
  },
};
</script>

<style scoped>

</style>
