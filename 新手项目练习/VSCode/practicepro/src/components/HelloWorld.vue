<template>
  <div id="co">
    <p>{{message | captitalize}}</p>
    <hr>
    <div id="demo">
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
export default {
  name: 'HelloWorld',
  data () {
    return {
      trimvalue:'',
      numbervalue:34,
      lazyvalue:'',
      message: 'gamecc666 测试过滤器！！！'
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
<style scoped>
#setp{
  background-color: bisque;
  display: inline;
}
#demo,#co{
  text-align: left;
}
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
