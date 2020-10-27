<template>
<!-- <el-button size="mini" type="success">成功按钮</el-button> -->
<p>{{val}} || {{changeview}}</p>
</template>
<script>
export default {
  name:'Com_View1',

  data(){
    return{
      val:'1'
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
