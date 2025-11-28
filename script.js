const todoInput = document.getElementById('todoInput');
const todoList = document.getElementById('todoList');
const countSpan = document.getElementById('count');

function addTodo() {
    const input = document.getElementById('todoInput');
    const text = input.value.trim();
    if (text) {
        createTodoElement(text, false);
        input.value = '';
        updateCounter();
    }
}

function createTodoElement(text, isCompleted) {
    const todoItem = document.createElement('div');
    todoItem.className = 'todo-item';
    if (isCompleted) {
        todoItem.classList.add('completed');
    }
    
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = isCompleted;
    checkbox.addEventListener('change', function() {
        todoItem.classList.toggle('completed');
        updateCounter();
    });
    
    const span = document.createElement('span');
    span.textContent = text;
    
    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'delete-btn';
    deleteBtn.textContent = 'Delete';
    deleteBtn.addEventListener('click', function() {
        todoItem.remove();
        updateCounter();
    });
    
    todoItem.appendChild(checkbox);
    todoItem.appendChild(span);
    todoItem.appendChild(deleteBtn);
    todoList.appendChild(todoItem);
}

function updateCounter() {
    const allTodos = document.querySelectorAll('.todo-item');
    let incompleteCount = 0;
    allTodos.forEach(function(todo) {
        if (!todo.classList.contains('completed')) {
            incompleteCount++;
        }
    });
    countSpan.textContent = incompleteCount;
}

updateCounter();