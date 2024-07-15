document.addEventListener('DOMContentLoaded', init);

function init() {
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    addButton.addEventListener('click', addTask);
    taskInput.addEventListener('keypress', handleKeyPress);

    function addTask() {
        const taskText = taskInput.value.trim();
        if (taskText === '') {
            alert('Please enter a task');
            return;
        }

        const listItem = document.createElement('li');
        listItem.textContent = taskText;

        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.className = 'remove-btn';

        removeButton.onclick = function() {
            taskList.removeChild(listItem);
        };

        listItem.appendChild(removeButton);
        taskList.appendChild(listItem);

        taskInput.value = '';
    }

    function handleKeyPress(event) {
        if (event.key === 'Enter') {
            addTask();
        }
    }
}
