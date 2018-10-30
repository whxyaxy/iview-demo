import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Second from '@/components/Second'
import Third from '@/components/Third'
import Last from '@/components/Last'
import Login from '@/components/Login'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes:[
        // {path: '/Login',name: 'Login',component: Login},
	    {path: '/Home',name: 'Home',component: Home},
	    {path: '/Second',name: 'Second',component: Second},
	    {path: '/Third',name: 'Third',component: Third},
	    {path: '/Last',name: 'Last',component: Last},
	    {path: '/Login',name: 'Login',component: Login},
	    {path:'*', redirect:'/Home'} 
    ]
})

