document.addEventListener('DOMContentLoaded', () => {
  const addButton = document.getElementById('add-task-btn');
  const taskInput = document.getElementById('task-input');
  const taskList = document.getElementById('task-list');

  // Load tasks from Local Storage
  loadTasks();

  // Event listener for adding tasks
  addButton.addEventListener('click', () => {
      addTask();
  });

  // Event listener for pressing Enter key in task input
  taskInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
          addTask();
      }
  });

  // Function to add a task
  function addTask() {
      const taskText = taskInput.value.trim();

      if (taskText === '') {
          alert('Please enter a task.');
          return;
      }

      const listItem = document.createElement('li');
      listItem.textContent = taskText;

      const removeButton = document.createElement('button');
      removeButton.textContent = 'Remove';
      removeButton.classList.add('remove-btn');
      removeButton.onclick = function() {
          taskList.removeChild(listItem);
          removeTaskFromLocalStorage(taskText);
      };

      listItem.appendChild(removeButton);
      taskList.appendChild(listItem);

      // Save task to Local Storage
      saveTaskToLocalStorage(taskText);

      // Clear input field
      taskInput.value = '';
  }

  // Function to save task to Local Storage
  function saveTaskToLocalStorage(taskText) {
      const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
      storedTasks.push(taskText);
      localStorage.setItem('tasks', JSON.stringify(storedTasks));
  }

  // Function to load tasks from Local Storage
  function loadTasks() {
      const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
      storedTasks.forEach(taskText => {
          addTaskToList(taskText);
      });
  }

  // Function to add task to the DOM from Local Storage
  function addTaskToList(taskText) {
      const listItem = document.createElement('li');
      listItem.textContent = taskText;

      const removeButton = document.createElement('button');
      removeButton.textContent = 'Remove';
      removeButton.classList.add('remove-btn');
      removeButton.onclick = function() {
          taskList.removeChild(listItem);
          removeTaskFromLocalStorage(taskText);
      };

      listItem.appendChild(removeButton);
      taskList.appendChild(listItem);
  }

  // Function to remove task from Local Storage
  function removeTaskFromLocalStorage(taskText) {
      const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
      const updatedTasks = storedTasks.filter(task => task !== taskText);
      localStorage.setItem('tasks', JSON.stringify(updatedTasks));
  }
});

