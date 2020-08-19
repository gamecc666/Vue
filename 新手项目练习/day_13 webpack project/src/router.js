// 引入VueRouter模块
import VueRouter from "vue-router";
import Header from './components/header';
import Home from './components/home';
import News from './components/news1';

export default new VueRouter({
    routes:[
        {
            path:'/index',
            name:'index',
            components:{
                Header:Header,
                default:Home
            }
        },
        {
            path:'/news',
            name:'news',
            components:{
                header:Header,
                default:News
            }
        }
    ]
})