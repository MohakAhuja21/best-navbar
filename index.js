// calling elements
const loginBtn=document.querySelector('.login-btn');
const loginForm=document.querySelector('.login-form');
const loginFormCloseBtn=document.querySelector('.form i');
const opacity=document.querySelector('.opacity');
const searchPopup=document.querySelector('.search-form');
const searchBar=document.getElementById('search');
const closeSearchPopup=document.querySelector('.search-form i');

loginBtn.addEventListener('click',()=>{
    loginForm.classList.add('active')
    opacity.classList.add('show')
    document.getElementById('nav-container').style.pointerEvents="none";
});

loginFormCloseBtn.addEventListener('click',()=>{
    loginForm.classList.remove('active')
    opacity.classList.remove('show')
    document.getElementById('nav-container').style.pointerEvents="all";
});

searchBar.addEventListener('mousedown',()=>{
    searchPopup.classList.add('active')
    opacity.classList.add('show')
    document.getElementById('nav-container').style.pointerEvents="none";
});

closeSearchPopup.addEventListener('click',()=>{
    searchPopup.classList.remove('active')
    opacity.classList.remove('show')
    document.getElementById('nav-container').style.pointerEvents="all";
});

opacity.addEventListener('click',()=>{
    searchPopup.classList.remove('active')
    loginForm.classList.remove('active')
    document.getElementById('nav-container').style.pointerEvents="all";
    opacity.classList.remove('show')
});


