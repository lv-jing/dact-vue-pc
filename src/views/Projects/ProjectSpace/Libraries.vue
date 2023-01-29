<template>
  <el-card>
      <el-collapse v-model="activeName" accordion>
        <el-collapse-item title="Tool Configuration" name="1">
          <el-row :gutter="24" class="mb14">
            <el-col :span="6">
              <el-card shadow="always">
                <div class="card-box-cont">
                  <span>Asset Category</span>
                  <span></span>
                </div>
              </el-card>
            </el-col>
            <el-col :span="6">
              <el-card shadow="hover">
                <div class="card-box-cont">
                  <span>Asset Property</span>
                  <span></span>
                </div>
              </el-card>
            </el-col>
            <el-col :span="6">
              <el-card shadow="never">
                <div class="card-box-cont">
                  <span>Impact Dimension</span>
                  <span></span>
                </div>
              </el-card>
            </el-col>
            <el-col :span="6">
              <el-card shadow="never">
                <div class="card-box-cont">
                  <span>Impact Level</span>
                  <span></span>
                </div>
              </el-card>
            </el-col>
          </el-row>
          <el-row :gutter="24">
            <el-col :span="6">
              <el-card shadow="always">
                <div class="card-box-cont">
                  <span>Asset Category</span>
                  <span></span>
                </div>
              </el-card>
            </el-col>
            <el-col :span="6">
              <el-card shadow="hover">
                <div class="card-box-cont">
                  <span>Asset Property</span>
                  <span></span>
                </div>
              </el-card>
            </el-col>
            <el-col :span="6">
              <el-card shadow="never">
                <div class="card-box-cont">
                  <span>Impact Dimension</span>
                  <span></span>
                </div>
              </el-card>
            </el-col>
            <el-col :span="6">
              <el-card shadow="never">
                <div class="card-box-cont">
                  <span>Impact Level</span>
                  <span></span>
                </div>
              </el-card>
            </el-col>
          </el-row>
        </el-collapse-item>
        <el-collapse-item title="System Lib" name="2">
          <el-row :gutter="24">
            <el-col :span="6">
              <el-card shadow="always">
                <div class="card-box-cont">
                  <span>Asset Category</span>
                  <span></span>
                </div>
              </el-card>
            </el-col>
            <el-col :span="6">
              <el-card shadow="hover">
                <div class="card-box-cont">
                  <span>Asset Property</span>
                  <span></span>
                </div>
              </el-card>
            </el-col>
            <el-col :span="6">
              <el-card shadow="never">
                <div class="card-box-cont">
                  <span>Impact Dimension</span>
                  <span></span>
                </div>
              </el-card>
            </el-col>
            <el-col :span="6">
              <el-card shadow="never">
                <div class="card-box-cont">
                  <span>Impact Level</span>
                  <span></span>
                </div>
              </el-card>
            </el-col>
          </el-row>
        </el-collapse-item>
        <el-collapse-item title="Security Lib" name="3">
          <el-row :gutter="24">
            <el-col :span="6">
              <el-card shadow="always">
                <div class="card-box-cont">
                  <span>Asset Category</span>
                  <span></span>
                </div>
              </el-card>
            </el-col>
            <el-col :span="6">
              <el-card shadow="hover">
                <div class="card-box-cont">
                  <span>Asset Property</span>
                  <span></span>
                </div>
              </el-card>
            </el-col>
            <el-col :span="6">
              <el-card shadow="never">
                <div class="card-box-cont">
                  <span>Impact Dimension</span>
                  <span></span>
                </div>
              </el-card>
            </el-col>
            <el-col :span="6">
              <el-card shadow="never">
                <div class="card-box-cont">
                  <span>Impact Level</span>
                  <span></span>
                </div>
              </el-card>
            </el-col>
          </el-row>
        </el-collapse-item>
      </el-collapse>
  </el-card>
</template>

<script>
export default {
  name: "Libraries",
  data() {
    return {
      activeName: '1'
    };
  }
}
</script>

<style scoped lang="scss">
.card-box-cont{
  span:nth-of-type(1){
    font-weight: 600;
    color: #00A3E0;
  }
}
</style>
