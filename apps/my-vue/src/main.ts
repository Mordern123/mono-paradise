import './styles.scss';

import { createApp } from 'vue';
import App from './app/App.vue';
import { ui } from '@mono-paradise/ui';

const app = createApp(App);

const a = ui();
console.log(a);

app.mount('#root');
