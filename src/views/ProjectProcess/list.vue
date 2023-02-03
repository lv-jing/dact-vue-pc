<template>
  <div>
    <div class="app-container" v-if="$route.name==='ProjectProces'">
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>项目流程管理</span>
        </div>
        <div v-for="(item,index) in list" :key="index" class="text item" @click="hanldleGoto(item)">{{item.name}}
          <el-divider></el-divider>
        </div>
      </el-card>
    </div>
    <router-view v-else/>
  </div>
</template>

<script>
export default {
  name: "list",
  data(){
    return{
      list:[
        {
          name:'项目空间1流程管理',
          id:1
        },
        {
          name:'项目空间2流程管理',
          id:2
        },
        {
          name:'项目空间3流程管理',
          id:3
        },
        {
          name:'项目空间4流程管理',
          id:4
        },
        {
          name:'项目空间5流程管理',
          id:5
        },
        {
          name:'项目空间6流程管理',
          id:6
        }
      ]
    }
  },

  methods:{
    hanldleGoto(item){
      this.$router.push({path:'/EditProjectProces',query:{id:item.id,active:'first'}})
    },
  }
}
</script>

<style scoped>
.item {
  margin-bottom: 18px;
  cursor: pointer;
}

</style>
