
let a = 1;

console.log(window.a);

window.a = 1;
window.localStorage = 1;
window.a.b.c = 1;

window.localStorage.setItem('a', 1);

localStorage.setItem('a', 1);

const subWindow = require('sad');
subWindow.localStorage.setItem('a', 1);
