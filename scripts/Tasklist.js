const addBtn = document.querySelector('.add-btn');
const taskInput = document.querySelector('.task-input');
const taskList = document.querySelector('.task-list');

function addTask() {
    const taskText = taskInput.value.trim();
  
    if (taskText !== '') {
        console.log('New Task:', taskText);
    
       //container div for the task and buttons 
        const container = document.createElement('div');
        container.classList.add('task-container'); 
    
        // task label
        const taskLabel = document.createElement('span');
        taskLabel.textContent = taskText;
        taskLabel.classList.add('task-label');
    
      }
    }