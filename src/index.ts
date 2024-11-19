import { createApp } from 'vue';
import App from './App.vue';
import Antd from 'ant-design-vue';
import './index.css';
import 'ant-design-vue/dist/reset.css';

createApp(App).use(Antd).mount('#root');

let timer: number;
window.addEventListener('scroll', function () {
  document.body.toggleAttribute('scroll', true);
  if (timer) {
    clearTimeout(timer);
  }
  timer = setTimeout(() => {
    document.body.toggleAttribute('scroll');
  }, 500);
});
