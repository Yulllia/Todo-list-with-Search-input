(()=>{"use strict";var t="todos";function e(){var e=sessionStorage.getItem(t);return e?JSON.parse(e):[]}var n=function(n){var o=document.createElement("li");o.classList.add("todo-item");var r=document.createElement("span");r.innerText=n,r.classList.add("todo-text"),o.appendChild(r);var i=document.createElement("button");return i.innerHTML="<i class='fas fa-times'></i>",i.classList.add("todo-remove-button"),i.addEventListener("click",function(n){return function(o){o.preventDefault(),confirm("Are you sure?")&&n.addEventListener("click",(function(){!function(n){var o=e(),r=Array.from(n.childNodes).find((function(t){return t.classList.contains("todo-text")}));if(r){var i=o.filter((function(t){return t!==r.innerText}));sessionStorage.setItem(t,JSON.stringify(i))}}(n),n.remove(),e().length||document.querySelector(".submit-button").classList.add("submit-button_disabled")}))}}(o)),o.appendChild(i),o};function o(t){return{todoInput:t.querySelector(".input-additems"),todoButton:t.querySelector(".submit-button"),todoSearch:document.querySelector(".input-lister")}}function r(t){var e,n=o(t),r=n.todoInput,i=n.todoButton;(null===(e=r.value)||void 0===e?void 0:e.length)>=3?i.classList.remove("submit-button_disabled"):i.classList.add("submit-button_disabled"),r.addEventListener("keypress",(function(t){var e;if("Enter"===t.key&&(null===(e=r.value)||void 0===e?void 0:e.length)<3)return t.preventDefault(),!1}))}var i=document.querySelector(".form-position"),u=o(i),a=u.todoInput,d=u.todoButton,s=u.todoSearch,c=document.querySelector(".todo-list");a.addEventListener("input",(function(){return r(i)})),d.addEventListener("click",(function(r){var u,d;r.preventDefault(),u=a.value,(d=e()).push(u),sessionStorage.setItem(t,JSON.stringify(d));var s=n(a.value);c.appendChild(s),function(t){o(t).todoInput.value=""}(i)})),s.addEventListener("keyup",(function(t){var e=t.target.value.toLowerCase(),n=document.getElementsByTagName("li");Array.from(n).forEach((function(t){-1!=t.firstElementChild.textContent.toLowerCase().indexOf(e)?t.style.display="flex":t.style.display="none"}))})),document.addEventListener("DOMContentLoaded",(function(){e().forEach((function(t){var e=n(t);c.appendChild(e)})),r(i)}))})();