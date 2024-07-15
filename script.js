document.addEventListener('DOMContentLoaded', function() {
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    addButton.addEventListener('click', addTask);
    taskInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });

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
        removeButton.classList.add('remove-btn'); // Using classList.add for better handling of classes

        removeButton.onclick = function() {
            taskList.removeChild(listItem);
            updateLocalStorage();
        };

        listItem.appendChild(removeButton);
        taskList.appendChild(listItem);

        updateLocalStorage();

        taskInput.value = '';
    }

    function updateLocalStorage() {
        const tasks = [];
        const taskElements = document.querySelectorAll('#task-list li');
        taskElements.forEach(function(taskElement) {
            tasks.push(taskElement.textContent.trim());
        });
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    function loadTasks() {
        const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
        storedTasks.forEach(function(taskText) {
            addTaskToList(taskText);
        });
    }

    function addTaskToList(taskText) {
        const listItem = document.createElement('li');
        listItem.textContent = taskText;

        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.classList.add('remove-btn'); // Using classList.add for better handling of classes

        removeButton.onclick = function() {
            taskList.removeChild(listItem);
            updateLocalStorage();
        };

        listItem.appendChild(removeButton);
        taskList.appendChild(listItem);
    }

    loadTasks();
});
