import VueRouter from 'vue-router';
import Header from './component/header';
import Home from './component/home';
import News,{router as news_router} from './component/news';

export default new VueRouter({
    routes:[        
          {
            path:'/index',
            name:'index',
            components:{
                header:Header,
                default:Home
            }
            },
            {
                path:'/news',
                name:'news',
                components:{
                    header:Header,
                    default:News
                },
                children:news_router
            }        
    ]
})