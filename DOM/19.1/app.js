const start = document.querySelector('.start-here');
start.textContent = 'main';
const title4 = document.querySelector('ul li ul')
// childElement;
const li = "<li>sub title 4</li>"
title4.innerHTML += li
const ul = document.querySelector('ul');
ul.removeChild(ul.lastElementChild)
const title = document.head.querySelector('title');
title.innerHTML = 'master of the DOM'
document.querySelector('p').innerHTML = 'Hi'