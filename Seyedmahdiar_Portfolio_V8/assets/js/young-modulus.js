const header=document.querySelector('.site-header');
const menu=document.querySelector('.menu-toggle');
menu?.addEventListener('click',()=>{const open=header.classList.toggle('open');menu.setAttribute('aria-expanded',String(open));});
document.querySelectorAll('.main-nav a').forEach(link=>link.addEventListener('click',()=>{header.classList.remove('open');menu?.setAttribute('aria-expanded','false');}));
const lightbox=document.querySelector('.lightbox');
const lightboxImage=lightbox?.querySelector('img');
const lightboxCaption=lightbox?.querySelector('p');
function openLightbox(figure){const image=figure.querySelector('img');if(!image||!lightbox)return;lightboxImage.src=image.src;lightboxImage.alt=image.alt;lightboxCaption.textContent=figure.querySelector('figcaption')?.textContent||'';lightbox.hidden=false;document.body.style.overflow='hidden';}
function closeLightbox(){if(!lightbox)return;lightbox.hidden=true;document.body.style.overflow='';}
document.querySelectorAll('.lightbox-trigger').forEach(figure=>{figure.addEventListener('click',()=>openLightbox(figure));figure.addEventListener('keydown',event=>{if(event.key==='Enter'||event.key===' '){event.preventDefault();openLightbox(figure);}});});
lightbox?.querySelector('button')?.addEventListener('click',closeLightbox);
lightbox?.addEventListener('click',event=>{if(event.target===lightbox)closeLightbox();});
document.addEventListener('keydown',event=>{if(event.key==='Escape'&&lightbox&&!lightbox.hidden)closeLightbox();});
