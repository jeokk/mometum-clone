const savedUsername = localStorage.getItem(USERNAME_KEY);
if (savedUsername === null) {
  // show the form
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", handleLoginFormSubmit);
} else {
  // show greeting
  loginForm.classList.add(HIDDEN_CLASSNAME, "none");
  clock.classList.remove(HIDDEN_CLASSNAME);
  weatherContainer.classList.remove(HIDDEN_CLASSNAME);
  toDoForm.classList.remove(HIDDEN_CLASSNAME);
  toDoList.classList.remove(HIDDEN_CLASSNAME);
  quoteContainer.classList.remove(HIDDEN_CLASSNAME);
  paintGreeting(savedUsername);
}
