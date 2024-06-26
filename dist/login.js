"use strict";
{
    const lockScreen = document.querySelector(".lock-screen");
    const screen = document.querySelector(".screen");
    const loginForm = document.querySelector("#login-form");
    const passwordInput = loginForm.querySelector("#password");
    const hint = loginForm.querySelector(".hint");
    const hintPw = hint.querySelector(".hint__pw");
    const CLASS_NAME = "hidden";
    const USER_PW_KEY = "user-password";
    function onLoginSubmit(e) {
        e.preventDefault();
        localStorage.setItem(USER_PW_KEY, passwordInput.value);
        unlocking();
    }
    function onVerificationSubmit(e) {
        e.preventDefault();
        if (passwordInput.value == savePassword) {
            unlocking();
        }
        else {
            passwordInput.classList.add("fail");
            hintPw.textContent = `[${savePassword}]`;
            hint.classList.add("visible");
            passwordInput.value = "";
            passwordInput.focus();
            setTimeout(() => {
                passwordInput.classList.remove("fail");
            }, 600);
        }
    }
    function unlocking() {
        lockScreen.classList.add(CLASS_NAME);
        screen.classList.remove(CLASS_NAME);
    }
    const savePassword = localStorage.getItem(USER_PW_KEY);
    passwordInput.focus();
    if (savePassword == null) {
        loginForm.addEventListener("submit", onLoginSubmit);
    }
    else {
        passwordInput.placeholder = "암호 입력";
        loginForm.addEventListener("submit", onVerificationSubmit);
    }
}
