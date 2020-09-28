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
      <div id="demo2">

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
// 防抖、节流
let timer,ttimer,lasttime;
let nowtime = +new Date();
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
      message: 'gamecc666 测试过滤器！！！'
    }
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
          clearTimeout(timer);
        }
        timer=setTimeout(()=>{
          console.log('-----------------防抖---------------');
          if(val!==oldval){
            console.log(`新值是${val},老值是${oldval}`);
          }
          timer=undefined;
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
    throttle:function(event){
      console.log('----节流----');
      if(lasttime && nowtime-lasttime<200){
        clearTimeout(ttimer);
        ttimer=setTimeout(() => {
          lasttime=+new Date();
          console.log(`--1--nowtime:${nowtime}||lasttime:${lasttime}||span:${nowtime-lasttime}`);
        }, 2000);
      }else{
        // lasttime=nowtime;
        ttimer=setTimeout(() => {
          lasttime=+new Date();
          console.log(`--2--nowtime:${nowtime}||lasttime:${lasttime}`);
        }, 200);
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
