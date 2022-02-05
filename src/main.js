import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')

const element = document.getElementById('element');

import Typed from 'typed.js';

// var options = {
//   strings: ['User List', 'Hello world'],
//   typeSpeed: 60,
//   backSpeed: 70,
//   loop: true
// };

var typed = new Typed('#element', options);
  
