const input = document.querySelector(".input");
const btn_save = document.querySelector(".btn_save");
const tasks = document.querySelector(".tasks");

btn_save.addEventListener("click", () => {
  if (input.value) {
    const task = document.createElement("div");
    task.classList.add("task");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    const taskText = document.createElement("div");
    taskText.classList.add("taskText");
    taskText.textContent = input.value;

    const delTask = document.createElement("button");
    delTask.classList.add("btn");
    delTask.textContent = "×";

    task.append(checkbox);
    task.append(taskText);
    task.append(delTask);
    tasks.prepend(task);

    input.value = "";

    delTask.addEventListener("click", (e) => {
      e.target.parentElement.remove();
    });

    checkbox.addEventListener("change", (e) => {
      if (checkbox.checked) {
        taskText.style.textDecoration = "line-through";
      } else {
        taskText.style.textDecoration = "none";
      }
    });
  }
});
