document.getElementById("addTaskBtn").addEventListener("click", function() {
    let taskTitle = document.getElementById("taskTitle").value.trim();
    let taskDescription = document.getElementById("taskDescription").value.trim();
    let taskPeople = document.getElementById("taskPeople").value.trim();
    
    if (taskTitle === "" || taskPeople === "") return;
    
    let taskList = document.getElementById("taskList");
    let li = document.createElement("li");
    
    li.innerHTML = `<strong>${taskTitle}</strong><br>
                    <em>${taskDescription}</em><br>
                    <small>Assigned to: ${taskPeople}</small>`;

    let actions = document.createElement("div");
    actions.classList.add("task-actions");

    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.classList.add("delete");
    deleteBtn.addEventListener("click", function() {
        li.remove();
    });

    let doneBtn = document.createElement("button");
    doneBtn.textContent = "Done";
    doneBtn.classList.add("done");
    doneBtn.addEventListener("click", function() {
        li.classList.add("completed");
        document.getElementById("completedTasks").appendChild(li);
        actions.remove();
    });

    actions.appendChild(doneBtn);
    actions.appendChild(deleteBtn);
    li.appendChild(actions);
    taskList.appendChild(li);

    document.getElementById("taskTitle").value = "";
    document.getElementById("taskDescription").value = "";
    document.getElementById("taskPeople").value = "";
});
