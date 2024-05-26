const toDoForm = document.querySelector("#todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector("#todo-list");

const TODOS_KEY = "toDos";

let toDos = [];

function saveToDo(toDos) {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo() {
  const li = this.parentElement;
  const indexToRemove = Array.prototype.indexOf.call(toDoList.children, li);
  li.remove();
  toDos.splice(indexToRemove, 1);
  saveToDo(toDos);
}

function paintToDo(toDo) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  span.innerText = toDo;
  const button = document.createElement("button");
  button.innerText = "Ⅹ";
  button.addEventListener("click", deleteToDo);
  li.appendChild(span);
  li.appendChild(button);
  toDoList.appendChild(li);
}

function handleToDoFormSubmit(event) {
  event.preventDefault();
  const toDo = toDoInput.value;
  if (toDo === "") {
    return;
  }
  toDoInput.value = "";
  toDos.push(toDo);
  saveToDo(toDos);
  paintToDo(toDo);
}

toDoForm.addEventListener("submit", handleToDoFormSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos) {
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos; // localStorage에 저장된 toDo들이 있다면 불러와서 toDos에 업로드해주고, toDos는 다시 localStorage로 저장된다.
  parsedToDos.forEach(paintToDo);
}
