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

  todoItem.appendChild(removeButton);
  return todoItem;
};
