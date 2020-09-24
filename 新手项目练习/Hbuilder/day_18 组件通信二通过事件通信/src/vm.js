import Vue from 'vue/dist/vue.esm';
import Parent from './components/parent';

let vm=new Vue({
    el:'#div1',
    date:{

    },
    components:{
        Parent
    },
    template:`
        <div>
            <parent></parent>
        </div>
    `
});