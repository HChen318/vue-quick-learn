import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import GlobalComponent from './components/GlobalComponent.vue'

Vue.use(ElementUI);

Vue.config.productionTip = false;

// 使用驼峰命名注册全局组件
Vue.component('GlobalComponent', GlobalComponent)

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
