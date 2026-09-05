const menuButton=document.querySelector('.menu-toggle');
const navigation=document.querySelector('.main-nav');
const dropdown=document.querySelector('.nav-dropdown');
const dropdownButton=document.querySelector('.dropdown-toggle');
menuButton?.addEventListener('click',()=>{const open=navigation.classList.toggle('open');menuButton.setAttribute('aria-expanded',String(open));});
dropdownButton?.addEventListener('click',(event)=>{if(window.innerWidth<=760){event.preventDefault();const open=dropdown.classList.toggle('open');dropdownButton.setAttribute('aria-expanded',String(open));}});
document.querySelectorAll('.main-nav a').forEach(link=>link.addEventListener('click',()=>{navigation.classList.remove('open');menuButton?.setAttribute('aria-expanded','false');}));
