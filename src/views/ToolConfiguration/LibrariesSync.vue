<template>
  <div class="app-container user">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>Libraries Sync</span>
      </div>
      <div  class="text item">
        <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
          <el-row :gutter="24">
            <el-col :span="12">
              <el-card class="box-card">
                <div slot="header" class="clearfix">
                  <span>可复制的 Libraries</span>
                </div>
                <div  class="text item">
                  <el-form-item label="Project Space" prop="pass">
                    <el-select class="w100" v-model="ruleForm.value1" clearable placeholder="请选择">
                      <el-option
                        v-for="item in options1"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                      </el-option>
                    </el-select>
                  </el-form-item>
                  <el-form-item label="Project" prop="pass">
                    <el-select class="w100" v-model="ruleForm.value2" clearable placeholder="请选择">
                      <el-option
                        v-for="item in options2"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                      </el-option>
                    </el-select>
                  </el-form-item>
                </div>
              </el-card>
            </el-col>
            <el-col :span="12">
              <el-card class="box-card">
                <div slot="header" class="clearfix">
                  <span>Libraries 复制到哪里</span>
                </div>
                <div  class="text item">
                  <el-form-item label="Project Space" prop="pass">
                    <el-select class="w100" v-model="ruleForm.value3" clearable placeholder="请选择">
                      <el-option
                        v-for="item in options3"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                      </el-option>
                    </el-select>
                  </el-form-item>
                  <el-form-item label="Project" prop="pass">
                    <el-select class="w100" v-model="ruleForm.value4" clearable placeholder="请选择">
                      <el-option
                        v-for="item in options4"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                      </el-option>
                    </el-select>
                  </el-form-item>
                </div>
              </el-card>
            </el-col>
          </el-row>
        </el-form>
      </div>
      <el-divider/>
      <div class="form-footer-but">
        <div>
          <el-button @click="save" type="primary">Save</el-button>
        </div>
      </div>
    </el-card>

  </div>
</template>

<script>
export default {
  data(){
    return{
      ruleForm:{},
      options1:[],
      options2:[],
      options3:[],
      options4:[],
    }
  },
  methods:{
    save(){

    }
  }
}
</script>

<style scoped>

</style>
