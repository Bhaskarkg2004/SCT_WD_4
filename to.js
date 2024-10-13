document.getElementById('add-task-btn').addEventListener('click', addTask);

function addTask() {
    
    const taskInput = document.getElementById('task-input');
    const taskDate = document.getElementById('task-date');
    const taskValue = taskInput.value;
    const taskTime = taskDate.value;

    if (taskValue === '') {
        alert('Please enter a task!');
        return;
    }

    const taskList = document.getElementById('task-list');
    
    const li = document.createElement('li');
    const taskContent = document.createElement('span');
    taskContent.innerHTML = `${taskValue} - ${taskTime ? new Date(taskTime).toLocaleString() : ''}`;
    
    const buttonsDiv = document.createElement('div');
    buttonsDiv.classList.add('task-buttons');
    
    const completeBtn = document.createElement('button');
    completeBtn.classList.add('complete-btn');
    completeBtn.innerText = 'Complete';
    completeBtn.addEventListener('click', () => li.classList.toggle('completed'));

    const editBtn = document.createElement('button');
    editBtn.classList.add('edit-btn');
    editBtn.innerText = 'Edit';
    editBtn.addEventListener('click', () => editTask(li, taskContent));
    
    const deleteBtn = document.createElement('button');
    deleteBtn.classList.add('delete-btn');
    deleteBtn.innerText = 'Delete';
    deleteBtn.addEventListener('click', () => taskList.removeChild(li));

    buttonsDiv.appendChild(completeBtn);
    buttonsDiv.appendChild(editBtn);
    buttonsDiv.appendChild(deleteBtn);
    
    li.appendChild(taskContent);
    li.appendChild(buttonsDiv);
    taskList.appendChild(li);

    taskInput.value = '';
    taskDate.value = '';
}

function editTask(taskItem, taskContent) {
    const newTask = prompt('Edit your task:', taskContent.textContent.split(' - ')[0]);
    const newDate = prompt('Edit task date and time:', taskContent.textContent.split(' - ')[1]);
    
    if (newTask !== null) {
        taskContent.innerHTML = `${newTask} - ${newDate ? new Date(newDate).toLocaleString() : ''}`;
    }
}
