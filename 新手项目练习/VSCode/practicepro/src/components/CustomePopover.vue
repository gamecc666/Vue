<template>
<div :class="[showPop? 'showPop':'hidePop']">
  <el-button type="primary" size="mini" @click="handlePopEvent(false)" plain> 确定</el-button>
  <el-button type="primary" size="mini" @click="handlePopEvent(false)" plain> 取消</el-button>
  <p>测试浮定飘窗</p>
</div>
</template>
<script>
export default {
  props:{
    closeOrOpen:{
      type:Boolean,
      defalut:false
    },
    fPop:{
      type:String,
      defalut:''
    }
  },
  data(){
    return{
      showPop:false
    };
  },
  methods:{
    handlePopEvent(param){
      console.log(`come in handlePopEvent!!!`);
      this.showPop=param;
      this.$emit('cTransf',[false,this.fPop]);
    }
  },
  watch:{
      closeOrOpen:function(val,oldVal){
      console.log(`come in closeOrOpen!!!`);
      this.showPop=val;
      console.log(val);
    }
  }
}
</script>
<style src="../assets/css/CustomePopover.css" scoped lang='css' ></style>
