<template>
  <div class="child09_root">
    <div class="firstRow">
      <el-button type="primary" size="mini" plain @click="clickEvent">点击禁用</el-button>
      <el-input v-model="firstRowData.inputVal" placeholder="点击输入数据" :disabled='firstRowData.inputDisAble' size="mini"></el-input>
      <el-button type="primary" size="mini" @click="AddLiClick()">测试div高度自适应</el-button>
      <div class="contant">
        <li v-for="(item,i) in firstRowData.liList" :key="i">{{item.val}}</li>
      </div>
    </div>
    <div class="secondRow">

    </div>
    <div class="thirdRow">

    </div>
  </div>
</template>
<script>
export default {
  data(){return{
    firstRowData:{
      inputDisAble:false,
      inputVal:'',
      liList:[
        {val:'s1'},
        {val:'s2'}
      ]
    }
  }},
  methods:{
    AddLiClick(){
      this.firstRowData.liList.push({val:'su'});
    },
    clickEvent(){
      this.firstRowData.inputDisAble=!this.firstRowData.inputDisAble;
    }
  },
  watch:{

  },
  created(){

  }
}
</script>
<style src="../assets/css/Elform_child_01.css" lang='css' scoped ></style>
