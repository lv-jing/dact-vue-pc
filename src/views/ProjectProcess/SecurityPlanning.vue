<template>
  <div>
    <el-button @click="handleAdd" style="margin-bottom: 15px" type="primary" icon="el-icon-plus"
               size="mini"></el-button>
    <el-table
      :data="tableData"
      :key="activeName"
      highlight-current-row
      @row-click="rowClick"
      :header-cell-style="{background:'#f0f9eb', color:'black'}"
      style="width: 100%">
      <el-table-column prop="process" label="流程域"></el-table-column>
      <el-table-column prop="activities" label="项目活动"></el-table-column>
      <el-table-column prop="type" label="活动类型"></el-table-column>
      <el-table-column prop="output" label="输出物"></el-table-column>
      <el-table-column prop="starttime" label="启动时间"></el-table-column>
      <el-table-column prop="endtime" label="结束时间"></el-table-column>
      <el-table-column prop="person" label="负责人"></el-table-column>
      <el-table-column prop="participant" label="参与者"></el-table-column>
      <el-table-column prop="reviewer" label="评审人"></el-table-column>
      <el-table-column prop="approver" label="批准人"></el-table-column>
    </el-table>
    <pagination
      v-show="total>0"
      :total="total"
      :page.sync="queryParams.pageNum"
      :limit.sync="queryParams.pageSize"
      @pagination="getList"
    />
    <!-- 编辑新增弹窗   -->
    <el-dialog
      :visible.sync="dialogVisible"
      width="50%">
      <el-form :model="formData" ref="formData" :rules="rules" label-width="110px" class="demo-ruleForm">
        <el-row :gutter="24">
          <el-col :span="12">
            <el-form-item label="流程域" prop="process">
              <el-input v-model.number="formData.process" autocomplete="off"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="项目活动" prop="activities">
              <el-input v-model.number="formData.activities" autocomplete="off"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="活动类型" prop="type">
              <el-select class="w100" v-model="formData.type" clearable placeholder="请选择">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="输出物" prop="output">
              <el-input v-model.number="formData.output" autocomplete="off"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="24">
            <el-form-item label="启止时间" prop="time">
              <el-date-picker
                value-format="yyyy-MM-dd"
                style="width: 100%"
                v-model="formData.time"
                type="daterange"
                range-separator="至"
                start-placeholder="开始日期"
                end-placeholder="结束日期">
              </el-date-picker>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="负责人" prop="person">
              <el-input v-model="formData.person" autocomplete="off"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="参与者" prop="participant">
              <el-input v-model.number="formData.participant" autocomplete="off"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="评审人" prop="reviewer">
              <el-input v-model.number="formData.reviewer" autocomplete="off"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="批准人" prop="approver">
              <el-input v-model.number="formData.approver" autocomplete="off"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
      <span slot="footer" class="dialog-footer">
    <el-button @click="handleClose">取 消</el-button>
    <el-button type="primary" @click="submitForm('formData')">确 定</el-button>
  </span>
    </el-dialog>
  </div>
</template>

<script>

export default {
  name: "SecurityPlanning",
  props: ['activeName'],
  data() {
    return {
      total: 20,
      queryParams: {
        pageNum: 1,
        pageSize: 10,
        user: '',
        region: '',
      },
      tableData: [
        {
          id: 1,
          process: '整车网络安全分析设计',
          activities: '整车TARA分析',
          type: '安全分析（TARA）',
          output: '《TARA报告》《TARA核查报告》',
          starttime: '2023-2-1',
          endtime: '2023-2-20',
          person: '网络安全开发工程师',
          participant: '网络安全验证工程师、架构分析工程师、系统设计工程师',
          reviewer: '架构分析工程师、系统设计工程师',
          approver: 'Xxx高级经理'
        }, {
          id: 2,
          process: '整车网络安全分析设计',
          activities: '整车概念设计',
          type: '安全概念（concept）',
          output: '《安全概念报告》《概念核查报告》',
          starttime: '2023-2-1',
          endtime: '2023-2-20',
          person: '网络安全开发工程师',
          participant: '网络安全验证工程师、架构分析工程师、系统设计工程师',
          reviewer: '系统设计工程师',
          approver: 'Xxx高级经理'
        }
      ],
      dialogVisible: false,
      formData: {
        process: '',
        activities: '',
        type: '',
        output: '',
        starttime: '',
        endtime: '',
        person: '',
        participant: '',
        reviewer: '',
        approver: ''
      },
      rules: {
        process: [
          {required: true, message: '请输入', trigger: 'change'},
        ],
        activities: [
          {required: true, message: '请输入', trigger: 'change'},
        ],
        type: [
          {required: true, message: '请输入', trigger: 'change'},
        ],
        output: [
          {required: true, message: '请输入', trigger: 'change'},
        ],
        person: [
          {required: true, message: '请输入', trigger: 'change'},
        ],
        participant: [
          {required: true, message: '请输入', trigger: 'change'},
        ],
        reviewer: [
          {required: true, message: '请输入', trigger: 'change'},
        ],
        approver: [
          {required: true, message: '请输入', trigger: 'change'},
        ],
      },
      options: [{
        value: '安全分析',
        label: '安全分析'
      }, {
        value: '安全概念',
        label: '安全概念'
      }, {
        value: '安全设计',
        label: '安全设计'
      }],
    };
  },
  watch: {
    '$route': { // $route可以用引号，也可以不用引号
      handler(to) {
        if (to.query.active === 'first') {
          this.initData()
        }
      },
      deep: true, // 深度监听
      immediate: true, // 第一次初始化渲染就可以监听到
    }
  },
  methods: {
    // 初始化数据
    initData() {
      console.log('请求页面数据');
    },
    // 点击行数据事件
    rowClick(row) {
      this.resetForm('formData')
      if(row.starttime && row.endtime){
        row.time = [row.starttime,row.endtime]
      }
      this.formData ={
        ...this.formData,
        ...row
      }
      this.dialogVisible = true
    },
    // 获取分页数据
    getList() {
      console.log(this.queryParams);
    },
    // 添加
    handleAdd() {
      this.dialogVisible = true
      this.resetForm('formData')

    },
    // y提交表单
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          let arr = JSON.parse(JSON.stringify(this.tableData));
          if(this.formData.time.length>0){
            this.formData.starttime = this.formData.time[0]
            this.formData.endtime = this.formData.time[1]
          }
          arr.unshift(this.formData)
          let hash = {}
          this.tableData = arr.reduce((item, next) => {
            hash[next.id] ? '' : hash[next.id] = true && item.push(next)
            return item
          }, [])
          this.dialogVisible = false
        } else {
          return false;
        }
      });
    },
    // 关闭弹窗
    handleClose() {
      this.resetForm('formData')
      this.dialogVisible = false
    }
  }
}
</script>
<style scoped>

</style>
