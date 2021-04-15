<template>
  <div>
    <h1>分类列表</h1>
    <el-table :data="items">
        <el-table-column prop="_id" label="ID" width="220"> </el-table-column>
      <el-table-column prop="name" label="分类名称" width="120"> </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
    data(){
        return{
            items:[]
        }
    },
    methods:{
        fetch(){
            
        }
    },
    create(){

    }
}
</script>