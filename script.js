burger = document.querySelector('.burger')
navbar = document.querySelector('.navbar')
navlist = document.querySelector('.nav-list')
rightnav = document.querySelector('.rightNav')

let welcome = alert("welcome to my responsive website sir/ma'am/friends")

burger.addEventListener('click', ()=>{
navlist.classList.toggle('v-class') 
rightnav.classList.toggle('v-class')
navbar.classList.toggle('h-nav')
})