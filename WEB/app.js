let menu = document.querySelector(".menu");
let links = document.querySelector(".navlinks");
let maincontent = document.querySelector(".main-content");


menu.addEventListener('click',()=>{
    links.classList.toggle('hide')
    maincontent.classList.toggle('moveleft')
})
