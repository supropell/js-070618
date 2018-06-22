'use strict';
console.log('i am app.js');
import PhonesPage from './phones/phones-page.js';

new PhonesPage({
  element: document.querySelector('[data-page-container]')
});
