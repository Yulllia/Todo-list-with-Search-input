import "../styles/index.css";
import "../index.html";
import { getTodosFromSStorage, saveTodoToSStorage } from "./sessionStorage";
import { getTodoItem } from "./addTodoItem";
// import { filterTodoItems } from "./filterTodoItems";
import {
  clearTodoInput,
  getTodoInputItems,
  validateTodoInput,
} from "./todoInput";

const todoInputWrapper = document.querySelector(".form-position");
const { todoInput, todoButton, todoSearch } =
  getTodoInputItems(todoInputWrapper);
const todoList = document.querySelector(".todo-list");

// document.addEventListener("DOMContentLoaded", onDOMLoaded);
todoInput.addEventListener("input", () => validateTodoInput(todoInputWrapper));
todoButton.addEventListener("click", addTodo);
todoSearch.addEventListener("keyup", searchTodos);
document.addEventListener("DOMContentLoaded", onDOMLoaded);

function onDOMLoaded() {
  renderTodosFromSStorage();
  validateTodoInput(todoInputWrapper);
}

function renderTodosFromSStorage() {
  const todos = getTodosFromSStorage();
  todos.forEach((todoValue) => {
    const todoItem = getTodoItem(todoValue);

    // Add todo item to list
    todoList.appendChild(todoItem);
  });
}
function addTodo(event) {
  event.preventDefault();

  saveTodoToSStorage(todoInput.value);
  const todoItem = getTodoItem(todoInput.value);
  todoList.appendChild(todoItem);

  clearTodoInput(todoInputWrapper);
}

function searchTodos(e) {
  const term = e.target.value.toLowerCase();
  let lis = document.getElementsByTagName("li");
  Array.from(lis).forEach((todo) => {
    const todoElement = todo.firstElementChild.textContent;
    if (todoElement.toLowerCase().indexOf(term) != -1) {
      todo.style.display = "flex";
    } else {
      todo.style.display = "none";
    }
  });
}
