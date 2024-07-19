'use strict';

const loginEl = document.querySelectorAll(".login-button");
const overlay = document.querySelector(".overlay");
const formBodyEl = document.querySelector(".formBody");
const closeModal = document.querySelector(".close_modal");
const loginBtn = document.querySelector(".logIn");
const emailFill = document.querySelector(".emailReq");
const passFill = document.querySelector(".passReq");
const loginSuccess = document.querySelector('.loginSuccessful'); 
const continueBtn= document.querySelector("#contBtn");
const loginNotSuccess = document.querySelector('.loginNotSuccessful'); 
const AgainBtn= document.querySelector("#TryAgainBtn");

console.log(loginEl);
const close = function () {
    formBodyEl.classList.add("hidden");
    overlay.classList.add("hidden")
}

for (let i = 0; i < loginEl.length; i++) {
    loginEl[i].addEventListener("click", function () {
        formBodyEl.classList.remove("hidden");
        overlay.classList.remove("hidden");
    });
}

closeModal.addEventListener("click", function () {
    close();
});

overlay.addEventListener("click", function () {
    close();
});

document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && !formBodyEl.classList.contains('hidden')) {
        console.log(e.key);
        close();
    }
});

loginBtn.addEventListener("click", function () {
    var emailvalue = emailFill.value
    var passvalue = passFill.value
    if (emailvalue === "codevijeta@gmail.com" && passvalue === "22122005") {
        close();
        loginSuccess.classList.remove("hidden"); 
        overlay.classList.remove("hidden");
    } else {
        close();
        loginNotSuccess.classList.remove("hidden"); 
        overlay.classList.remove("hidden");
        emailFill.value = "";
        passFill.value = "";
    }
})

continueBtn.addEventListener("click",function(){
    loginSuccess.classList.add("hidden");
    overlay.classList.add("hidden");
})

AgainBtn.addEventListener("click",function(){
    loginNotSuccess.classList.add("hidden"); 
    formBodyEl.classList.remove("hidden");
    overlay.classList.remove("hidden");
})