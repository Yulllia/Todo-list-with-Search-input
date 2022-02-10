import { getTodosFromSStorage, removeTodoFromSStorage } from "./sessionStorage";

export const getTodoItem = (text) => {
  // Create Todo Item
  const todoItem = document.createElement("li");
  todoItem.classList.add("todo-item");

  // Create and add Todo Text
  const todoText = document.createElement("span");
  todoText.innerText = text;
  todoText.classList.add("todo-text");
  todoItem.appendChild(todoText);
  // Create and add Search button

  // Create and add Remove button
  const removeButton = document.createElement("button");
  removeButton.innerHTML = "<i class='fas fa-times'></i>";
  removeButton.classList.add("todo-remove-button");
  removeButton.addEventListener("click", removeTodoItem(todoItem));
  todoItem.appendChild(removeButton);
  return todoItem;
};
function removeTodoItem(todoItem) {
  return (e) => {
    e.preventDefault();
    let result = confirm("Are you sure?");
    if (result) {
      todoItem.addEventListener("click", function () {
        removeTodoFromSStorage(todoItem);
        todoItem.remove();
        disableSubmitButton();
      });
    }
  };
}
function disableSubmitButton() {
  const todos = getTodosFromSStorage();
  if (!todos.length)
    document
      .querySelector(".submit-button")
      .classList.add("submit-button_disabled");
}
