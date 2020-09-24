import Vue from 'vue/dist/vue.esm';
import Cmp1 from './cmp1';
import MyDialog from './my-dialog';

let v=new Vue({
    el:"#div1",
    data:{
        type:'cmp1'
    },
    template:`
        <div>            
            <input type="text" v-model:"type"/>
            <cmp1 name='Lee chen' age='11' :list="[1,3,4]"/>
            <my-dialog>
                <template slot="title">标题</template>
                <ul>
                    <li>asdfas</li>
                    <li>jskdfj</li>
                </ul>
            </my-dialog>
        </div>
    `
});