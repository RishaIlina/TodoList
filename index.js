let todos = [];

function addTodo(text) {
    const todo = {
        text,
        done: false,
        id: `${Math.random()}`
    };

   todos.push(todo);
}

// Удаление todo
function deleteTodo(id) {
    todos.forEach(todo => {
     if (todo.id === id) {
        todo.done = true;
     }
    })
}

// Выводим список в консоль
function render() {
    console.log(todos);
}

// Добавляем пункт в список
addTodo('Купить хлеб');
render();

