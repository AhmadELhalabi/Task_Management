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


        const doneBtn = document.createElement('button');
        doneBtn.textContent = 'Mark as Done';
        doneBtn.classList.add('done-btn')
     
        doneBtn.addEventListener('click', () => {
        console.log(`Task ${taskText} marked as done`);
        taskLabel.classList.add('done');
        });

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.classList.add('delete-btn'); 
    
        deleteBtn.addEventListener('click', () => {
          console.log(`Task ${taskText} deleted`);
          container.remove();
        });

     container.appendChild(taskLabel);
     container.appendChild(doneBtn);
     container.appendChild(deleteBtn);
     taskList.appendChild(container);

     
     taskInput.value =''; 
      }
    }

    addBtn.addEventListener('click', addTask);