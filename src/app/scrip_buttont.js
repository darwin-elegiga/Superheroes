const men = document.querySelector(".bars__menu");
const line1 = document.querySelector(".x1");
const line2 = document.querySelector(".x2");
const line3 = document.querySelector(".x3");
const x = document.querySelector(".menu__ul");
const body = document.querySelector("main");

const menu__principal = document.querySelector(".menu__ul");

men.addEventListener("click",() =>{
    line1.classList.toggle("line1__bars-menu");
    line2.classList.toggle("line2__bars-menu");
    line3.classList.toggle("line3__bars-menu");
    x.classList.toggle("visible");

})
body.addEventListener("click",()=>{
    x.classList.remove("visible");
    line1.classList.remove("line1__bars-menu");
    line2.classList.remove("line2__bars-menu");
    line3.classList.remove("line3__bars-menu");
})
