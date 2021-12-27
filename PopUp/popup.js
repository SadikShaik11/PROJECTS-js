const btnOpen = document.getElementById('open');
const cont = document.getElementById('cont');
const btnClose= document.getElementById('close');

btnOpen.addEventListener('click',()=>{
       cont.classList.replace('container','active');
})
btnClose.addEventListener('click',()=>{
       cont.classList.replace('active','container');
})
