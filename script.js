// Select DOM elements
const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');

// Add event listener for the "Add Task" button
addTaskBtn.addEventListener('click', addTask);

// Function to add a new task
function addTask() {
    const taskText = taskInput.value.trim();

    // Check if the input is not empty
    if (taskText !== '') {
        // Create a new list item
        const li = document.createElement('li');

        // Add task text
        li.innerHTML = `
            ${taskText}
            <button class="deleteBtn">Delete</button>
        `;

        // Append the new list item to the task list
        taskList.appendChild(li);

        // Clear the input field
        taskInput.value = '';

        // Add event listener to delete button
        li.querySelector('.deleteBtn').addEventListener('click', deleteTask);
    } else {
        alert('Please enter a task!');
    }
}

// Function to delete a task
function deleteTask(e) {
    const taskToRemove = e.target.parentElement;
    taskList.removeChild(taskToRemove);
}
