<template>
  <el-container>
    <el-header>element-ui/Form(表单) Apply</el-header>
    <el-container>
      <el-aside>侧边栏</el-aside>
      <el-main>
        <el-row>
          <el-col :span="6">
            <el-radio-group v-model="radio" @change="getRadioValue(radio)">
              <el-radio :label="1">选1</el-radio>
              <el-radio :label="2">选2</el-radio>
              <el-radio :label="3" disabled>选3</el-radio>
            </el-radio-group>
          </el-col>
          <el-col :span="6">
            <el-radio-group v-model="radio2" @change="getBRadioValue(radio2)">
              <el-radio-button label="B1">B1</el-radio-button>
              <el-radio-button label="B2">B2</el-radio-button>
              <el-radio-button label="B3">B3</el-radio-button>
            </el-radio-group>
          </el-col>
          <el-col :span="12">
            <el-checkbox :indeterminate='isIndeterminate' v-model="checkAll" @change="handleChackboxAll" >全选</el-checkbox>
          </el-col>
        </el-row>
        <!-- 点击表中的一个文字触发一个弹窗 -->

      </el-main>
    </el-container>
    <el-footer>底操作栏</el-footer>
  </el-container>
</template>
<script>
export default {
  name:'ElForm',
  data(){
    return {
      radio:1,
      radio2:'B1'
    };
  },
  methods:{
    getRadioValue:function(value){
      console.log(`当前选中的值${value}`);
    },
    getBRadioValue:function(value){
      console.log(`BRadio当前选中的值${value}`);
    }
  }
}
</script>
<style src='../assets/css/elform.css' lang='css' scoped></style>
