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
          <el-table-column prop="enterprise" label="流程域"></el-table-column>
          <el-table-column prop="enterprise_short" label="项目活动"></el-table-column>
          <el-table-column prop="vehicle_name" label="活动类型"></el-table-column>
          <el-table-column prop="address" label="输出物"></el-table-column>
          <el-table-column prop="display_name" label="启动时间"></el-table-column>
          <el-table-column prop="display_name" label="结束时间"></el-table-column>
          <el-table-column prop="display_name" label="负责人"></el-table-column>
          <el-table-column prop="display_name" label="参与者"></el-table-column>
          <el-table-column prop="display_name" label="评审人"></el-table-column>
          <el-table-column prop="display_name" label="批准人"></el-table-column>
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
        width="45%"
        :before-close="handleClose">
        <el-form :model="formData" ref="formData" :rules="rules" label-width="110px" class="demo-ruleForm">
          <el-row :gutter="24">
            <el-col :span="12">
              <el-form-item label="流程域" prop="age">
                <el-input v-model.number="formData.age" autocomplete="off"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="项目活动" prop="age">
                <el-input v-model.number="formData.age" autocomplete="off"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="活动类型" prop="age">
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
              <el-form-item label="输出物" prop="age">
                <el-input v-model.number="formData.age" autocomplete="off"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="24">
              <el-form-item label="启止时间" prop="age">
                <el-date-picker
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
              <el-form-item label="负责人" prop="age">
                <el-input v-model.number="formData.age" autocomplete="off"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="参与者" prop="age">
                <el-input v-model.number="formData.age" autocomplete="off"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="评审人" prop="age">
                <el-input v-model.number="formData.age" autocomplete="off"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="批准人" prop="age">
                <el-input v-model.number="formData.age" autocomplete="off"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
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
          enterprise:'上汽乘用车',
          enterprise_short:'SAIC',
          vehicle_name:'EV52',
          address:'上海市杨浦区军工路2500号',
          display_name:'陈泓睿',
          created_at:'2022-11-17 23:46:57',
        },{
          enterprise:'上汽乘用车',
          enterprise_short:'SAIC',
          vehicle_name:'EV52',
          address:'上海市杨浦区军工路2500号',
          display_name:'陈泓睿',
          created_at:'2022-11-17 23:46:57',
        }
      ],
      dialogVisible: false,
      formData:{},
      rules:{
        pass: [
          { required: true, message: '请输入', trigger: 'change' },
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
    console.log(this.activeName);
  },
  methods: {
    // 初始化数据
    initData(){
      console.log('请求页面数据');
    },
    // 点击行数据事件
    rowClick(row, column, event){
      this.dialogVisible = true
      this.title = 'Edit projectSpace'
      console.log(row, column, event);
    },
    // 获取分页数据
    getList() {
      console.log(this.queryParams);
    },
    // 添加
    handleAdd(){
      this.dialogVisible = true
    },
    // y提交表单
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!');
        } else {
          console.log('error submit!!');
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
