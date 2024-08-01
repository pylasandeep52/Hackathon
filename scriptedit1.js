// Search box open/close functionality
let navbar = document.querySelector(".navbar");
let searchBox = document.querySelector(".search-box .bx-search");

searchBox.addEventListener("click", () => {
    navbar.classList.toggle("showInput");
    if (navbar.classList.contains("showInput")) {
        searchBox.classList.replace("bx-search", "bx-x");
    } else {
        searchBox.classList.replace("bx-x", "bx-search");
    }
});

// Sidebar open/close functionality
let navLinks = document.querySelector(".nav-links");
let menuOpenBtn = document.querySelector(".navbar .bx-menu");
let menuCloseBtn = document.querySelector(".nav-links .bx-x");

menuOpenBtn.onclick = function() {
    navLinks.style.left = "0";
};

menuCloseBtn.onclick = function() {
    navLinks.style.left = "-100%";
};

// Sidebar submenu open/close functionality
let htmlcssArrow = document.querySelector(".arrow");
htmlcssArrow.onclick = function() {
    navLinks.classList.toggle("show1");
};

let moreArrow = document.querySelector(".more-arrow");
moreArrow.onclick = function() {
    navLinks.classList.toggle("show2");
};

let jsArrow = document.querySelector(".js-arrow");
jsArrow.onclick = function() {
    navLinks.classList.toggle("show3");
};

// Login and Register form switching
let loginForm = document.getElementById("loginForm");
let registerForm = document.getElementById("registerForm");
let registerLink = document.getElementById("registerLink");
let loginLink = document.getElementById("loginLink");

registerLink.onclick = function(event) {
    event.preventDefault();
    loginForm.style.display = "none";
    registerForm.style.display = "block";
};

loginLink.onclick = function(event) {
    event.preventDefault();
    registerForm.style.display = "none";
    loginForm.style.display = "block";
};

// Login modal open/close functionality
let loginBtn = document.getElementById("loginBtn");
let loginModal = document.getElementById("loginModal");
let closeModalLogin = document.querySelector("#loginModal .close");

loginBtn.onclick = function() {
    loginModal.style.display = "flex";
    loginForm.style.display = "block";
    registerForm.style.display = "none";
};

closeModalLogin.onclick = function() {
    loginModal.style.display = "none";
};

window.onclick = function(event) {
    if (event.target === loginModal) {
        loginModal.style.display = "none";
    }
};