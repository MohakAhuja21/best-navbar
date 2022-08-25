// calling html elem
const loginForm = document.querySelector(".login-popup");
const loginBtn = document.querySelector(".login-btn");
const closeBtn = document.querySelector(".login-form i");
const overlay = document.querySelector(".overlay");
const navbar = document.getElementById("navbar");

// manipulating
loginBtn.addEventListener("click", () => {
  loginForm.classList.add("active");
  overlay.classList.add("show");
  navbar.style.pointerEvents = "none";
});
closeBtn.addEventListener("click", () => {
  loginForm.classList.remove("active");
  overlay.classList.remove("show");
  navbar.style.pointerEvents = "all";
});

document.getElementById("search-listItems").style.display = "none";
//
const searchBox = document.getElementById("search-box");
// hiding the list
searchBox.addEventListener("blur", function () {
  // blur removes focus from an element.
  document.getElementById("search-listItems").style.display = "none";
});

// calling search bar popup elements
const search = () => {
  // call html elements
  const searchBox = document.getElementById("search-box").value.toUpperCase();
  // if the input is empty just hide the list
  if (searchBox.trim().length < 1) {
    // trim function removes whiteSpaces from both ends.
    document.getElementById("search-listItems").style.display = "none";
  } else {
    document.getElementById("search-listItems").style.display = "block";
  }

  const searchListItems = document.getElementById("search-listItems");
  const searchItems = document.querySelectorAll(".search-items");
  const searchName = searchListItems.getElementsByTagName("p");

  // for loop
  for (let i = 0; i < searchName.length; i++) {
    // match new variable declared
    let match = searchItems[i].getElementsByTagName("p")[0];
    if (match) {
      // textValue new variable declared
      let textValue = match.textContent || match.innerHTML;

      // if/ else condition
      if (textValue.toUpperCase().indexOf(searchBox) > -1) {
        searchItems[i].style.display = "";
      } else {
        searchItems[i].style.display = "none";
      }
    }
  }
};

// mobile nav
const navbarElement=document.querySelector('.navbar');

navbarElement.addEventListener('click',()=>{
  navbarElement.classList.toggle('active');
})