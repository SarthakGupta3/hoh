import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let factor  = 0;
var lastScrollTop = 0;
window.addEventListener("scroll", function(){
   var st = window.pageYOffset || document.documentElement.scrollTop;
   if (st > lastScrollTop){
       factor+= 1.5;
      document.body.style.backgroundPositionY = factor + '%';
   } else {
    factor-= 1.5;
    document.body.style.backgroundPositionY = factor + '%';
   }
   lastScrollTop = st <= 0 ? 0 : st; 
}, false);
ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
