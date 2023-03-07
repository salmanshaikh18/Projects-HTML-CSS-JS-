/* 21. TODO App
Create a simple to-do app to add TODO items to the list through an input field and a button. */

const todoInput = document.getElementById("todo-input");
const addBtn = document.getElementById("add-btn");
const todoList = document.getElementById("todo-list");

addBtn.addEventListener("click", () => {
  const todoText = todoInput.value.trim();
  if (todoText !== "") {
    const newItem = document.createElement("li");
    newItem.innerText = todoText;
    todoList.appendChild(newItem);
    todoInput.value = "";
  }
});

todoInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    addBtn.click();
  }
});
