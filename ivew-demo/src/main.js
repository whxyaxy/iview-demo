import Vue from 'vue'
import App from './App'
import Vuex from 'vuex'
import router from './router'
import 'iview/dist/styles/iview.css'
import echarts from 'echarts'
Vue.prototype.$echarts = echarts
Vue.config.productionTip = false
Vue.use(Vuex)
import 'es6-promise/auto'
var store = new Vuex.Store({//store对象
    state:{
        loginFlag:false
    }
})
import {Row,Col,Button,Input,Form,FormItem,DatePicker,Icon,Modal,Tooltip,Table,Page} from 'iview';
Vue.component('Row', Row);
Vue.component('Col', Col);
Vue.component('Button', Button);
Vue.component('Input', Input);
Vue.component('Form', Form);
Vue.component('FormItem', FormItem);
Vue.component('DatePicker', DatePicker);
Vue.component('Icon', Icon);
Vue.component('Modal', Modal);
Vue.component('Tooltip', Tooltip);
Vue.component('Table', Table);
Vue.component('Page', Page);
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
