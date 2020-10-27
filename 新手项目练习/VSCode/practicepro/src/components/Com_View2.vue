<template>
<!-- <el-button size="mini" type="info">信息按钮</el-button> -->
<p>{{val}} || {{changeview}} </p>
</template>
<script>
export default{
  name:'Com_View2',
  data(){
    return{
      val:'2'
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
