let navmenu = document.querySelector(".menu");
let navlinks = document.querySelector(".nav-links");

navmenu.addEventListener('click',()=>{
    navlinks.classList.toggle("hide");
})