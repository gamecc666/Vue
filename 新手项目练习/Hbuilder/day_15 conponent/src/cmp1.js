import Vue from 'vue/dist/vue.esm';
export default  Vue.component('cmp1',{
    props:['name','age','list'],
    date(){
        return {a:44,b:12};
    },
    template:`
        <div>
            姓名：{{name}}<br>
            年龄：{{age}}<br>
            <ul>
                <li v-for="item in list">{{item}}</li>
            </ul>
        </div>
    `
});