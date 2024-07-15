// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
  // Select the necessary DOM elements
  const addButton = document.getElementById('add-task-btn');
  const taskInput = document.getElementById('task-input');
  const taskList = document.getElementById('task-list');

  // Function to add a task
  const addTask = () => {
      // Get the task text and trim any whitespace
      const taskText = taskInput.value.trim();

      // Check if the input is not empty
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
      removeButton.className = 'remove-btn';

      // Set the click event to remove the task
      removeButton.onclick = () => {
          taskList.removeChild(listItem);
      };

      // Append the remove button to the list item
      listItem.appendChild(removeButton);

      // Append the list item to the task list
      taskList.appendChild(listItem);

      // Clear the input field
      taskInput.value = '';
  };

  // Event listener for the "Add Task" button
  addButton.addEventListener('click', addTask);

  // Event listener for the "Enter" key press
  taskInput.addEventListener('keypress', (event) => {
      if (event.key === 'Enter') {
          addTask();
      }
  });
});
