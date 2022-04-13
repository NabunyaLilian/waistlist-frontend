
const menuIcon = document.querySelector('.menu-icon')
const menu = document.querySelector('#menu')

menuIcon.addEventListener('click', ()=>{
   if(menu.classList.contains('menu')){
       menu.classList.remove('menu')
   }else{
       menu.classList.add('menu')
   }
})
