<template>
  <div>
    <div class="el-table-search">
      <el-form :inline="true" :model="queryParams" class="demo-form-inline">
        <el-form-item label="Enterprise Abbr">
          <el-input v-model="queryParams.user" placeholder="请输入"></el-input>
        </el-form-item>
        <el-form-item label="Vehicle">
          <el-input v-model="queryParams.region" placeholder="请输入"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">查询</el-button>
        </el-form-item>
      </el-form>
    </div>
    <div class="el-table-content">
      <el-table
        :data="tableData"
        highlight-current-row
        :header-cell-style="{background:'#f0f9eb', color:'black'}"
        style="width: 100%">
        <el-table-column prop="enterprise" label="Enterprise"></el-table-column>
        <el-table-column prop="enterprise_short" label="Enterprise Abbr"></el-table-column>
        <el-table-column prop="vehicle_name" label="Vehicle"></el-table-column>
        <el-table-column prop="address" label="Address"></el-table-column>
        <el-table-column prop="display_name" label="Modified Information">
          <template slot-scope="scope">
            {{ scope.row.display_name }}<br />
            {{ scope.row.created_at }}
          </template>
        </el-table-column>
        <el-table-column label="Operations" width="215">
          <template>
            <router-link class="ml10" :to="{path:'/ProjectList',query:{id:1}}">
              <el-button
                type="text"
                size="mini">Project List
              </el-button>
            </router-link>
            <!--              <router-link class="ml10" :to="{path:'/Members',query:{id:1}}">-->
            <!--                <el-button-->
            <!--                  type="text"-->
            <!--                  size="mini">Members1-->
            <!--                </el-button>-->
            <!--              </router-link>-->
            <el-button
              class="ml10"
              @click.native.stop="handleMember"
              type="text"
              size="mini">Members
            </el-button>
            <router-link class="ml10" :to="{path:'/Libraries',query:{id:1}}">
              <el-button
                type="text"
                size="mini">Libraries
              </el-button>
            </router-link>
          </template>
        </el-table-column>
      </el-table>
      <pagination
        v-show="total>0"
        :total="total"
        :page.sync="queryParams.pageNum"
        :limit.sync="queryParams.pageSize"
        @pagination="getList"
      />
    </div>
  </div>
</template>

<script>

export default {
  name: "SecurityPlanning",
  data() {
    return {
      ruleForm: {
        enterprise_id: '',
        vehicle_name: '',
        address: ''
      },
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
        }
      ],
    };
  },
  methods: {
    onSubmit() {
      console.log('submit!');
    },
    getList() {
      console.log(this.queryParams);
    }
  }

}
</script>
<style scoped>

</style>
