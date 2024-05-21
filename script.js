function addTask() {
    var taskInput = document.getElementById("taskInput");
    var prioritySelect = document.getElementById("prioritySelect");
    var dueDateInput = document.getElementById("dueDateInput");

    var taskText = taskInput.value;
    var priority = prioritySelect.value;
    var dueDate = dueDateInput.value;

    if (taskText.trim() === "") {
      alert("Please enter a task.");
      return;
    }

    var taskList;
    if (priority === "low") {
      taskList = document.getElementById("lowPriorityTasks");
    } else if (priority === "medium") {
      taskList = document.getElementById("mediumPriorityTasks");
    } else {
      taskList = document.getElementById("highPriorityTasks");
    }

    var li = document.createElement("li");
    li.className = "task";
    li.innerHTML = `
      <input type="checkbox" onchange="toggleComplete(this)">
      <span>${taskText}</span>
      <button onclick="deleteTask(this)">Delete</button>
      <span>Priority: ${priority}</span>
      <span>Due Date: ${dueDate}</span>
    `;
    taskList.appendChild(li);

    taskInput.value = "";
    prioritySelect.value = "low";
    dueDateInput.value = "";
  }

  function toggleComplete(checkbox) {
    var task = checkbox.parentElement;
    if (checkbox.checked) {
      task.classList.add("completed");
      var completedTaskList = document.getElementById("completedTaskList");
      completedTaskList.appendChild(task);
    } else {
      task.classList.remove("completed");
      var priority = task.querySelector("span:nth-child(3)").textContent.split(":")[1].trim();
      var taskList;
      if (priority === "Low") {
        taskList = document.getElementById("lowPriorityTasks");
      } else if (priority === "Medium") {
        taskList = document.getElementById("mediumPriorityTasks");
      } else {
        taskList = document.getElementById("highPriorityTasks");
      }
      taskList.appendChild(task);
    }
  }

  function deleteTask(button) {
    var task = button.parentElement;
    task.remove();
  }
