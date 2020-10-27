<template>
<!-- <el-button size="mini" type="danger">危险按钮</el-button> -->
<p>{{val}}  || {{changeview}}</p>
</template>
<script>
export default{
  name:'Com_View3',
  data(){
    return{
      val:'3'
    }
  },
  methods:{

  },
  props:{
    changeview:String
  }
}
</script>
<style scoped>
</style>
