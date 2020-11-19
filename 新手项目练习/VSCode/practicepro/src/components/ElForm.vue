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
        </el-row>

        <div class="popContain">
          <el-button size="mini" @click="popEvent" plain type="primary">点击出现弹框</el-button>
          <div :class="[isOrNotShowPop? 'showPop':'hidePop']">
            <p>这是测试浮定飘窗的功能</p>
          </div>
        </div>

        <div class="classStyle">
          <p>测试vue中 Class 与 Style的绑定</p>
          <el-button type="primary" size="mini" @click="changeEvent" plain>变色</el-button>
          <div :class="['bgContain',changeBGColor?'blackBG':'greenBG']">

          </div>
        </div>
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
      changeBGColor:false,
      isOrNotShowPop:false,
      radio:1,
      radio2:'B1'
    };
  },
  methods:{
    changeEvent(){
      console.log(`come in changeEvent!!!`);
      this.changeBGColor=!this.changeBGColor;
    },
    popEvent(){
      console.log(`come in popEvent!!!`);
      this.isOrNotShowPop=!this.isOrNotShowPop;
    },
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
