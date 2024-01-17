window.addEventListener("scroll", function(){

  const header = document.querySelector(".header");


  header.classList.toggle("header-active",window.scrollY<750);


})
const btn = document.querySelector(".btn");
btn.addEventListener('click',()=>{
alert("SSSSS")
})
