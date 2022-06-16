const addTaskBtn = document.getElementById('add-task-btn'); // Здесь обьявляем по Id
const deskTaskInput = document.getElementById('input-task');
const todoContainer = document.querySelector('.todo-list'); // Здесь обявляем по классу. Ставится точка в начале

// массив для вводимых данных

let tasks;
!localStorage.tasks ? tasks = [] : tasks = JSON.parse(localStorage.getItem('tasks')); // если ничего не ввели, то tasks равне пустому массиву (!localStorage). Если ввели, то значение парсится в tasks

let todoItemElems = []; // массив для определения какой todo-item из html

// Конструктор для вводимого обьекта.
function Task(description) { // принимаем discription из input
    this.description = description; // ключ обьекта decroption равен  description, который мы вводим
    this.completed = false; // по умолчанию должно быть значение false, чтобы не давать пользщователю ничего изменить
}

const createTemplate = (task, index) => {
    // здесь мы вставляем часть кода для html, которая должна генерироваться. Через динамические скобки, чтоб вставлят ьнужные значения куда надо
    return `  
        <div class="todo-item ${task.completed ? 'checked' : ''}">
            <div class="description">${task.description}</div>
            <div class="buttons">
                <input onclick="completeTask(${index})" class="btn-compleate" type="checkbox"  ${task.completed ? 'checked' : ''}>
                <button class="btn-delete">Удалить</button>
            </div>
        </div>
    `
}

// Ф-ция для внесения данных в список дел
const fillHtmlList = () => {
    todoContainer.innerHTML = ''; // обращаемся к списку задач с методом innerHTML задавая поведение, что изначально все будет зачищаться
    if (tasks.length > 0) { // если tasks не пустой...
        tasks.forEach((item, index) => {  // ... то обращаемся к массиву с помощью метода .forEach
            todoContainer.innerHTML += createTemplate(item, index);  // каждую итерацию (item, index) буду отправлять в createTamplate
        });
        todoItemElems = document.querySelectorAll('.todo-item'); // передаем в селектов todo-item
    }
}

fillHtmlList();

// Функция для сохранения данных в локальном хранилище, к которой мы обращаемся в дальнейшем
const updateLocal = () => {  // функция к которой мы дуем обращаться, чтоб обновить данные в локальком хранилище
    localStorage.setItem('tasks', JSON.stringify(tasks)); // глаобальная перменная localStorage с помощью методоа setItem будет вносить ключ tasks, преобразовывая его в формат JSON c методом strigify с помощью массива tasks
}

const completeTask = index => { // ф-ция для кнопки чекбокс
    tasks[index].completed = !tasks[index].completed; //берет массив в котором значение index для обозначчения какую именно задачу мы выбрали
    if(tasks[index].completed) { // если значение верно (compleated), то...
        todoItemElems[index].classList.add('checked'); // ...то мы обращаемся к массиву и добавляем todo-item значение checked
    } else { 
        todoItemElems[index].classList.remove('checked'); // если значнеие неверно, то добавляем .remove (убрать класс checked)
    }
    updateLocal(); //снова обнавляем
    fillHtmlList(); // снова обращаемся к переменной для заполнения новых данных
}

addTaskBtn.addEventListener('click', () => { // взаимодействуя с перменной btn при событии click в массив будет отправлятсья вводимый обьект
    tasks.push(new Task(deskTaskInput.value)); // в массив tasks пушим значеничя с помощью метода push, создавая новый Task из deskTaskInput забирая значение через св-во value
    updateLocal(); // здесь вызываем функцию преобразования
    fillHtmlList();
    deskTaskInput.value = ''; // берет value из input и зачищает введенные данные, после их добавления
})







