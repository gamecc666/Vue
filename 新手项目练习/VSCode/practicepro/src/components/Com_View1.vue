<template>
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
