// calling html elem
const loginForm=document.querySelector('.login-popup');
const loginBtn=document.querySelector('.login-btn');
const closeBtn=document.querySelector('.login-form i');
const overlay=document.querySelector('.overlay');
const navbar=document.getElementById('navbar');

// manipulating
loginBtn.addEventListener('click',()=>{
    loginForm.classList.add('active')
    overlay.classList.add('show')
    navbar.style.pointerEvents="none"
    
});
closeBtn.addEventListener('click',()=>{
    loginForm.classList.remove('active')
    overlay.classList.remove('show')
    navbar.style.pointerEvents="all"
});



