import Vue from 'vue/dist/vue.esm';
import Child from './child';

export default Vue.component('parent',{
    data(){
        return {
            num:0,
        }
    },
    components:{
        Child
    },
    methods:{
        addChild(){
            this.$refs.child.$emit('add',5)
        }
    },
    tempate:`
        <div>
            <div>
                父级
                num:{{num}}
                <br/>
                <input type='button' value='子级 num1+5' @click="addChild"/>
                <Child ref="child" :parent="this"></Child>
            </div>
        </div>
    `
})