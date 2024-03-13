const loginForm = document.querySelector("#login-form")! as HTMLFormElement;
const username = loginForm.querySelector(
  "#login-username"
)! as HTMLInputElement;
const greetings = document.querySelector("#greetings")! as HTMLHeadingElement;
const CLASS_NAME = "hidden";
const USER_NAME_KEY = "username";

function onLoginSubmit(e: Event) {
  e.preventDefault();
  if (username.value.trim().length < 2) {
    alert("공백(띄어쓰기)를 포함하지 않고 2자 이상 입력해주세요!");
    return;
  }
  paintUsername(username.value);
  localStorage.setItem("username", username.value);
  loginForm.classList.add(CLASS_NAME);
}

function paintUsername(username: string) {
  greetings.textContent = `안녕하세요 ${username}님 :)`;
  greetings.classList.remove(CLASS_NAME);
}

const saveUsername = localStorage.getItem(USER_NAME_KEY);
if (saveUsername == null) {
  loginForm.classList.remove(CLASS_NAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  paintUsername(saveUsername);
}
