import Vue from 'vue';
import App from './App.vue';
import router from './router';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css'; // 默认主题
// import './assets/css/theme-green/index.css'; // 浅绿色主题
import enLang from 'element-ui/lib/locale/lang/en';
import 'babel-polyfill';

Vue.config.productionTip = false;
Vue.use(ElementUI, {
    size: 'small',
    locale: enLang 
});

//使用钩子函数对路由进行权限跳转
router.beforeEach((to, from, next) => {
    next();
});

new Vue({
    router,
    render: h => h(App)
}).$mount('#app');
