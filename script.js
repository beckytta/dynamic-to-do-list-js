document.addEventListener('DOMContentLoaded', function() {
  // Selecting DOM elements
  const addButton = document.getElementById('add-task-btn');
  const taskInput = document.getElementById('task-input');
  const taskList = document.getElementById('task-list');

  // Event listener for the Add Task button
  addButton.addEventListener('click', addTask);

  // Event listener for Enter key press in the task input field
  taskInput.addEventListener('keypress', function(event) {
      if (event.key === 'Enter') {
          addTask();
      }
  });

  // Function to add a new task
  function addTask() {
      // Retrieve task text and trim whitespace
      const taskText = taskInput.value.trim();
      
      // Check if the input is empty
      if (taskText === '') {
          alert('Please enter a task');
          return;
      }

      // Create a new list item
      const listItem = document.createElement('li');
      listItem.textContent = taskText;

      // Create a remove button
      const removeButton = document.createElement('button');
      removeButton.textContent = 'Remove';
      removeButton.classList.add('remove-btn'); // Add class for styling

      // Event listener for the remove button
      removeButton.addEventListener('click', function() {
          taskList.removeChild(listItem);
      });

      // Append remove button to list item
      listItem.appendChild(removeButton);

      // Append list item to task list
      taskList.appendChild(listItem);

      // Clear input field after adding task
      taskInput.value = '';
  }
});
