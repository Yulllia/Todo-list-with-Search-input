export function getTodoInputItems(todoInputWrapper) {
  const todoInput = todoInputWrapper.querySelector(".input-additems");
  const todoButton = todoInputWrapper.querySelector(".submit-button");
  const todoSearch = document.querySelector(".input-lister");

  return {
    todoInput,
    todoButton,
    todoSearch,
  };
}

export function validateTodoInput(todoInputWrapper) {
  const { todoInput, todoButton } = getTodoInputItems(todoInputWrapper);
  if (todoInput.value?.length >= 3) {
    todoButton.classList.remove("submit-button_disabled");
  } else {
    todoButton.classList.add("submit-button_disabled");
  }
  todoInput.addEventListener("keypress", function disableEnterClick(e) {
    if (e.key === "Enter" && todoInput.value?.length < 3) {
      e.preventDefault();
      return false;
    }
  });
}

export function clearTodoInput(todoInputWrapper) {
  const { todoInput } = getTodoInputItems(todoInputWrapper);

  todoInput.value = "";
}
