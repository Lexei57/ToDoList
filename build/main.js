const addTaskBtn = document.getElementById('add-task-btn'); // Здесь обьявляем по Id
const deskTaskInput = document.getElementById('input-task');
const todoContainer = document.querySelector('.todo-list'); // Здесь обявляем по классу. Ставится точка в начале

let tasks = []; // массив для вводимых данных

// Конструктор для вводимого обьекта
function Task(description) { // принимаем discription из input
    this.description = description; // ключ обьекта decroption равен  description, который мы вводим
    this.completed = false; // по умолчанию должно быть значение false, чтобы не давать пользщователю ничего изменить
}

addTaskBtn.addEventListener('click', () => { // взаимодействуя с перменной btn при событии click в массив будет отправлятсья вводимый обьект
    tasks.push(new Task(deskTaskInput.value)); // в массив tasks пушим значеничя с помощью метода push, создавая новый Task из deskTaskInput забирая значение через св-во value
    console.log(tasks); // выводим значение tasks в консольe
})







