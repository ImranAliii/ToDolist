function addTask() {
    let taskInput = document.getElementById("taskInput");
    let task = taskInput.value.trim();

    if (task === "") {
        alert("Please enter a task!");
        return;
    }

    let table = document.getElementById("taskTable").getElementsByTagName("tbody")[0];

    let newRow = table.insertRow();

    let cell1 = newRow.insertCell(0);
    let cell2 = newRow.insertCell(1);

    cell1.textContent = task;

    let deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.onclick = function() {
        table.deleteRow(newRow.rowIndex - 1);
    };

    cell2.appendChild(deleteButton);

    taskInput.value = "";
}