<template>
  <div id="co">
    <p>{{message | captitalize}}</p>
    <hr>
    <div id="pack">
      <div id="demo1">
        <button v-on:click="pSetClick">赋值</button>
        <button v-on:click="pClearClick">清空</button>
        <p ref="settext" id='setp'></p>
        <p>v-model修饰符（.lazy/.number/trim）</p>
        .lazy: <input type="text" v-model.lazy='lazyvalue' placeholder="请输入">
        <p>输入框内容：{{lazyvalue}}</p>
        .number: <input type="text" v-model.number='numbervalue' placeholder="请输入">
        <p>输入框内容：{{numbervalue}},输入框类型：{{typeof numbervalue}}</p>
        .trim: <input type="text" v-model.trim='trimvalue' placeholder="请输入">
        <p>输入框内容：{{trimvalue}}</p>
        <table>
          <thead>
            <tr>
              <th>科目</th>
              <th>分数(计算属性)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>数学</td>
              <td><input type="text" v-model.number="value1" placeholder="输入数学成绩"></td>
            </tr>
            <tr>
              <td>语文</td>
              <td><input type="text" v-model.number="value2" placeholder="输入语文成绩"></td>
            </tr>
            <tr>
              <td>英语</td>
              <td><input type="text" v-model.number="value3" placeholder="输入英语成绩"></td>
            </tr>
            <tr>
              <td>总分</td>
              <td>{{sum}}</td>
            </tr>
          </tbody>
        </table>
        <button @click="throttle">节流</button>
      </div>
      <!-- tab选项卡 -->
      <div id="demo2">
        <div id="demo2_buts">
          <button class="demo2_btn" @click="toggle(index,tab.view)" v-for="(tab,index) in tabs" :key="tab.id">{{tab.name}}</button>
        </div>
        <div id="demo2_content">
          <component :is="currentview"></component>
        </div>
      </div>
      <div id="demo3">

      </div>
      <div id="demo4">

      </div>
    </div>
  </div>
  <!-- <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <ul>
      <li>
        <a
          href="https://vuejs.org"
          target="_blank"
        >
          Core Docs
        </a>
      </li>
      <li>
        <a
          href="https://forum.vuejs.org"
          target="_blank"
        >
          Forum
        </a>
      </li>
      <li>
        <a
          href="https://chat.vuejs.org"
          target="_blank"
        >
          Community Chat
        </a>
      </li>
      <li>
        <a
          href="https://twitter.com/vuejs"
          target="_blank"
        >
          Twitter
        </a>
      </li>
      <br>
      <li>
        <a
          href="http://vuejs-templates.github.io/webpack/"
          target="_blank"
        >
          Docs for This Template
        </a>
      </li>
    </ul>
    <h2>Ecosystem</h2>
    <ul>
      <li>
        <a
          href="http://router.vuejs.org/"
          target="_blank"
        >
          vue-router
        </a>
      </li>
      <li>
        <a
          href="http://vuex.vuejs.org/"
          target="_blank"
        >
          vuex
        </a>
      </li>
      <li>
        <a
          href="http://vue-loader.vuejs.org/"
          target="_blank"
        >
          vue-loader
        </a>
      </li>
      <li>
        <a
          href="https://github.com/vuejs/awesome-vue"
          target="_blank"
        >
          awesome-vue
        </a>
      </li>
    </ul>
  </div> -->
</template>

<script>
var tab1={
  template:'<div>显示tab1选项卡</div>'
};
var tab2={
  template:'<div>显示tab2选项卡</div>'
};
var tab3={
  template:'<div>显示tab3选项卡</div>'
};
var tab4={
  template:'<div>显示tab4选项卡</div>'
};
// 防抖
let timer;
// 节流（定时器，上次点击时间，当前点击时间）
let ttimer,lasttime;
let now= +new Date();

export default {
  name: 'HelloWorld',
  data () {
    return {
      value1:0,
      value2:0,
      value3:0,
      trimvalue:'',
      numbervalue:34,
      lazyvalue:'',
      message: 'gamecc666 测试过滤器！！！',
      currentview:'tab1',
      tabs:[
        {
          name:'btn_tab1',
          view:'tab1'
        },
        {
          name:'btn_tab2',
          view:'tab2'
        },
        {
          name:'btn_tab3',
          view:'tab3'
        },
        {
          name:'btn_tab4',
          view:'tab4'
        }
      ]
    }
  },
  components:{
    tab1,tab2,tab3,tab4
  },
  computed:{
    sum:function(){
      return this.value1+this.value2+this.value3;
    }
  },
  watch:{
    value1:{
      handler:function(val,oldval){
        if(val!==oldval){
          console.log(`新值是${val},老值是${oldval}`);
        }
      }
    },
    value2:{
      handler:function(val,oldval){
        if(timer){
          clearTimeout(timer); //只是删除了timer指向的定时器
        }
        timer=setTimeout(()=>{
          console.log('-----------------防抖---------------');
          if(val!==oldval){
            console.log(`新值是${val},老值是${oldval}`);
          }
          timer=undefined; //重新指向定时器
        },2000);
      }
    }
  },
  filters:{
    captitalize:function(value){
      if(!value) return '';
      value=value.toString();
      return value.charAt(0).toUpperCase()+value.slice(1);
    }
  },
  methods:{
    // tab选项卡
    toggle(index,view){
      this.currentview=view
    },
    // 节流（在2秒内多次点击，只有一次生效）
    throttle:function(event){
      if(lasttime){
        if(lasttime - now <2000)
        {
          lasttime= +new Date();
        }
        else{
          now= +new Date();
          ttimer=setTimeout(()=>{
            console.log('--点击2');
            lasttime= +new Date();
          },2000);
        }
        //clearTimeout(ttimer);
      }
      else{
        lasttime= +new Date();
        ttimer=setTimeout(()=>{
          console.log('--点击2');
          lasttime= +new Date();
        },2000);
      }
    },
    pSetClick:function(){
      let pdom=this.$refs.settext;
      pdom.innerHTML='gamecc666';
    },
    pClearClick:function(){
      let pdom=this.$refs.settext;
      pdom.innerHTML=null;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style src='../assets/css/helloworld.css' lang='css' scoped></style>
