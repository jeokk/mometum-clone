const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function paintGreeting(username) {
  greeting.innerText = `Hello! ${username}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

function handleLoginFormSubmit(event) {
  // username을 입력 받아 localStorage에 저장한 후 user에게 환영 문구를 보여주는 함수
  event.preventDefault();
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  weatherContainer.classList.remove(HIDDEN_CLASSNAME);
  loginForm.classList.add(HIDDEN_CLASSNAME, "none");
  clock.classList.remove(HIDDEN_CLASSNAME);
  paintGreeting(username);
}
