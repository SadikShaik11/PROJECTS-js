const btn =document.getElementById('btn');

btn.addEventListener('click',()=>{
console.log(2);
    if(document.body.classList.contains('dark'))
     {
         
         document.body.classList.remove('dark')
         btn.classList.remove('btnDark')
    
     }
     else
   {
    document.body.classList.add('dark')
    btn.classList.add('btnDark')
}
})