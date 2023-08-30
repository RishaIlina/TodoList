const todosNode = document.querySelector('.js-todos');
const inputNode = document.querySelector('.js-input');
const btnNode = document.querySelector('.js-btn');
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
    let html = '';

    todos.forEach(todo => {
        if (todo.done) {
            retutn;
        };

        html += `
        <div>${todo.text}</div>
        `;
        })
    todosNode.innerHTML = html;
}

// Создаём возможность добавления задачи
btnNode.addEventListener('click', () => {
const text = inputNode.value;  //при клике на кнопку достаём актуальный текст из поля ввода

addTodo(text);

render(); //метод обновляет актуальное состояние интерфейса
});

render();
