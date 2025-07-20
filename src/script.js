const closeButton=document.querySelector('#close-menu');
const openButton=document.querySelector('#open-menu');
const nav=document.querySelector('#nav');
console.log(nav.classList);


closeButton.addEventListener('click',()=>{
    nav.classList.remove('hidden');
    closeButton.classList.add('hidden');
    
})

openButton.addEventListener('click',()=>{
    closeButton.classList.remove('hidden');
    nav.classList.add('hidden');
    
})