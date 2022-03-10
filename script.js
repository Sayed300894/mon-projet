// let $ = document;

// const menu = $.querySelector(.menu);
// const list = $.querySelector(.list);
// let bool = true;

// menu.addEventListener('click', ()=>{
//     if(bool == true){
//         menu.classList.add('open');
//         bool = false;
//     }else{
//         menu.classList.remove('open');
//         bool = true;
//     }
// })
const menu = document.querySelector('.menu');
const nav = document.querySelector('nav');
const logo = document.querySelector('.logo');

menu.addEventListener('click',() => {
    menu.classList.toggle('active');
    nav.classList.toggle('active');
    logo.classList.toggle('desactive');
});