import {tasks, addTask, completeTask, deleteTask, filterTasks} from "./taskManager";


const taskInput = document.getElementById("taskInput") as HTMLInputElement;
const addTaskBtn = document.getElementById("addTaskBtn") as HTMLButtonElement;
const taskList = document.getElementById("taskList") as HTMLUListElement;
const allBtn = document.getElementById("allBtn") as HTMLButtonElement;
const pendingBtn = document.getElementById("pendingBtn") as HTMLButtonElement;
const completedBtn = document.getElementById("completedBtn") as HTMLButtonElement;

type FilterType = "all" | "pending" | "completed";

let currentFilter: FilterType = "all";
renderTasks();
addTaskBtn.addEventListener("click", () => {
    const title = taskInput.value.trim();

    if (title === "") {
        alert("Please enter a task");
        return;
    }

    addTask(title);
    taskInput.value = "";
    console.log("sucessfully added task");
    console.log(tasks);
    renderTasks();
  });

  allBtn.addEventListener("click", () => {
    currentFilter = "all";
    renderTasks();
});

pendingBtn.addEventListener("click", () => {
    currentFilter = "pending";
    renderTasks();
});

completedBtn.addEventListener("click", () => {
    currentFilter = "completed";
    renderTasks();
});

  function renderTasks(): void {
    taskList.innerHTML = "";

     const visibleTasks = currentFilter === "all"
         ? tasks
         : filterTasks(currentFilter);

 visibleTasks.forEach(task => {
      const li = document.createElement("li");

      const title = document.createElement("span");
      title.textContent = task.title;

      const completeBtn = document.createElement("button");
      completeBtn.textContent = "Complete";
      
      completeBtn.addEventListener("click", () => {
        completeTask(task.id);
        renderTasks();
      });

      const deleteBtn = document.createElement("button");
      deleteBtn.textContent = "Delete";
      deleteBtn.addEventListener("click", () => {
        deleteTask(task.id);
        renderTasks();
      });
       
        if (task.status === "completed") {
            title.style.textDecoration = "line-through";
            completeBtn.disabled = true;
        }

        li.appendChild(title);
        li.appendChild(completeBtn);
        li.appendChild(deleteBtn);

        taskList.appendChild(li);
    });
  }
  