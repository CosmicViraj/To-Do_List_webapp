let taskList = [];

function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskText = taskInput.value.trim();
    if (taskText !== "") {
        taskList.push(taskText);
        displayTasks();
        taskInput.value = "";
    }
}

function displayTasks() {
    const taskListElement = document.getElementById("taskList");
    taskListElement.innerHTML = "";
    taskList.forEach((task, index) => {
        const li = document.createElement("li");
        li.innerHTML = `
            ${task}
            <button class="delete-btn" onclick="deleteTask(${index})">Delete</button>
        `;
        taskListElement.appendChild(li);
    });
}

function deleteTask(index) {
    taskList.splice(index, 1);
    displayTasks();
}