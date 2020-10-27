<template>
  <el-container>
    <el-header>
      <el-col :span="24">
        <el-radio-group v-model="curview" @change="toggle(curview)">
          <el-radio-button :label="view.view" v-for="(view) in views" :key="view.name">{{view.name}}</el-radio-button>
        </el-radio-group>
      </el-col>
    </el-header>
    <el-main>
      <component :is='curview' :changeview="transdata"></component>
    </el-main>
  </el-container>
</template>
<script>
import Com_View1 from '@/components/Com_View1';
import Com_View2 from '@/components/Com_View2';
import Com_View3 from '@/components/Com_View3';
export default {
  name:'Com',
  data(){
    return{
      tab1:"view1",
      curview:'Com_View1',
      transdata:'',
      views:[
        {
          name:'view1',
          view:'Com_View1',
          say:'这是父组件传给view1界面的数据'
        },
        {
          name:'view2',
          view:'Com_View2',
          say:'这是父组件传给view2界面的数据'
        },
        {
          name:'view3',
          view:'Com_View3',
          say:'这是父组件传给view3界面的数据'
        }
      ]
    }
  },
  components:{
    Com_View1,Com_View2,Com_View3
  },
  mounted(){
    this.transdata=this.views[0].say;
  },
  methods:{
    toggle:function(name){
      // console.log(name);
      this.curview=name;
      for(let item of this.views){
        if(item.view==name){
          this.transdata=item.say;
          break;
        }
      }
    }
  }
}
</script>
<style src='../assets/css/Com.css' lang='css' scoped></style>
