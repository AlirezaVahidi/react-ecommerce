import "bootstrap/dist/css/bootstrap.css";
import $ from "jquery";
import Popper from "popper.js";
import "bootstrap/dist/js/bootstrap.bundle.min";

import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import store from "./store/store";
import { Provider } from "react-redux";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

serviceWorker.unregister();







// here is the code to control the stickness of the top header on user scroll

document.body.onscroll = headerScroll;
var c,
  currentScrollTop = 0;
function headerScroll() {
  var a = window.scrollY;
  var b = document.getElementById("stickyHeader").style.height;

  currentScrollTop = a;
  if (a > 500) {
    if (c >= currentScrollTop && !(a <= b)) {
      document.getElementById("stickyHeader").classList.add("sticky-top");
      document.getElementById("stickyHeader").classList.add("shadow");
    } else if (c < currentScrollTop && a > b + b) {
      document.getElementById("stickyHeader").classList.remove("sticky-top");
      document.getElementById("stickyHeader").classList.remove("shadow");
    }
    c = currentScrollTop;
  } else {
    document.getElementById("stickyHeader").classList.add("sticky-top");
    if (a >= 200) {
      document.getElementById("stickyHeader").classList.add("shadow");
    } else {
      document.getElementById("stickyHeader").classList.remove("shadow");
	}
  }
}

//--------------------------------------------------------------------------------------------------------



//here is the code to control the navbar bottom indicator

const ul = document.getElementById('navbar');
const indicatorSpan = document.createElement("span");
indicatorSpan.classList.add('nav-indicator');
ul.appendChild(indicatorSpan)
const indicator = document.querySelector('.nav-indicator');
const items = document.querySelectorAll('.nav-item');
const lists = document.querySelectorAll('.list')

function removeIndicator(el) {
  indicator.style.opacity = '0';
  lists.forEach(list => {
    list.classList.remove('is-active');
    list.removeAttribute('style');
  });

}

function handleIndicator(el) {
  lists.forEach(list => {
    list.classList.remove('is-active');
    list.removeAttribute('style');
  });
  indicator.style.opacity = '1';
  indicator.style.width = `${el.childNodes[0].offsetWidth}px`;
  indicator.style.left = `${el.childNodes[0].offsetLeft}px`;
  indicator.style.background = el.getAttribute('active-color');

  el.classList.add('is-active');
  el.style.color = el.getAttribute('active-color');
}

lists.forEach((list, index) => {
  list.addEventListener('mouseover', (e) => { handleIndicator(list)});
  list.classList.contains('is-active') && handleIndicator(list);
});


ul.addEventListener('mouseout', (e) => { removeIndicator(e.target)});

//--------------------------------------------------------------------------------------------------------


// here is the code to show the megamenu overlay
const main = document.querySelector('#mega-menu-overlay')
function addOverlay(){
  main.classList.add('mega-menu-overlay');
}

function removeOverlay(){
  main.classList.remove('mega-menu-overlay');
}

ul.addEventListener('mouseover', () => addOverlay())
ul.addEventListener('mouseout', () => removeOverlay())