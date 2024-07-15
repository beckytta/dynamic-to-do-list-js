document.addEventListener('DOMContentLoaded', function() {
  const addButton = document.getElementById('add-task-btn');
  const taskInput = document.getElementById('task-input');
  const taskList = document.getElementById('task-list');

  // Load tasks from Local Storage
  loadTasks();

  // Event listener for adding tasks
  addButton.addEventListener('click', function() {
      addTask();
  });

  // Event listener for pressing Enter key in task input
  taskInput.addEventListener('keypress', function(e) {
      if (e.key === 'Enter') {
          addTask();
      }
  });

  // Function expression to add a task
  const addTask = function() {
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
  };

  // Function expression to save task to Local Storage
  const saveTaskToLocalStorage = function(taskText) {
      const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
      storedTasks.push(taskText);
      localStorage.setItem('tasks', JSON.stringify(storedTasks));
  };

  // Function expression to load tasks from Local Storage
  const loadTasks = function() {
      const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
      storedTasks.forEach(function(taskText) {
          addTaskToList(taskText);
      });
  };

  // Function expression to add task to the DOM from Local Storage
  const addTaskToList = function(taskText) {
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
  };

  // Function expression to remove task from Local Storage
  const removeTaskFromLocalStorage = function(taskText) {
      const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
      const updatedTasks = storedTasks.filter(function(task) {
          return task !== taskText;
      });
      localStorage.setItem('tasks', JSON.stringify(updatedTasks));
  };
});
