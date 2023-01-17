const taskInput = document.getElementById("task-input");
const addTaskBtn = document.getElementById("add-task-btn");
const taskList = document.getElementById("task-list");

addTaskBtn.addEventListener("click", function() {
  const taskValue = taskInput.value;
  if (taskValue === "") {
    alert("Please enter a task.");
    return;
  }
  const task = document.createElement("li");
  task.classList.add("task");
  task.innerHTML = taskValue;
  taskList.appendChild(task);
  taskInput.value = "";
});
