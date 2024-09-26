document.getElementById('toDoForm').addEventListener('submit', insertTask);

function insertTask(e) {
  e.preventDefault();

  let newTask = document.getElementById('toDo').value;

  if (newTask.trim() === '') {
    alert('Por favor, insira uma tarefa válida.');
    return;
  }

  const taskContainer = document.getElementById('toDoList');

  const taskElement = document.createElement('li');

  const removeButton = document.createElement('button');

  const completeButton = document.createElement('button');

  const undoButton = document.createElement('button');

  taskElement.innerHTML = newTask;

  removeButton.innerHTML = 'Remover';

  completeButton.innerHTML = 'Concluir';

  undoButton.innerHTML = 'Desfazer';

  removeButton.addEventListener('click', () => {
    taskContainer.removeChild(taskElement);
  });

  completeButton.addEventListener('click', () => {
    taskElement.style.textDecoration = 'line-through';
    taskElement.removeChild(removeButton);
    taskElement.removeChild(completeButton);
    taskElement.appendChild(undoButton);
  });

  undoButton.addEventListener('click', () => {
    taskElement.style.textDecoration = 'none';
    taskElement.removeChild(undoButton);
    taskElement.appendChild(removeButton);
    taskElement.appendChild(completeButton);
  });

  taskElement.appendChild(removeButton);

  taskElement.appendChild(completeButton);

  taskContainer.appendChild(taskElement);

  document.getElementById('toDo').value = '';
}