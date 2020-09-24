import Vue from 'vue/dist/vue.esm';
import Parent from './components/parent';

let vm=new Vue({
    el:'#app1',
    data:{

    },
    components:{
        Parnet
    },
    template:`
        <div>
            <parent></parent>
        </div>
    `
});