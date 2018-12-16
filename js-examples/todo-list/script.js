let taskList = document.querySelector('#myUL');

let fixtures = [
    'Hit the gym',
    'Pay bills',
    'Meet George',
    'Buy eggs',
    'Read a book',
    'Organize office',
];
(() => {
    document.getElementById('js-addTask').addEventListener('click', function () {
        addNewTask();
    });
    document.getElementById('myInput').addEventListener("keyup", function(event) {
        event.preventDefault();
        if (event.keyCode === 13) {
            addNewTask();
        }
    });
})();

fixtures.forEach(taskText => addNewTask(taskText));

function addNewTask(task) {
    task = task || document.getElementById('myInput').value;

    if (!task) {
        console.warn('Empty task is prohibited');
        return;
    }

    let item = createTaskItem(task);
    addTaskItemEvents(item);
    taskList.appendChild(item);

    function createTaskItem(text) {
        let taskTemplate = document
            .querySelector('li[data-template="taskItem"]')
            .cloneNode(true);
        taskTemplate.appendChild(document.createTextNode(text));
        delete taskTemplate.dataset.template;

        return taskTemplate;
    }

    function addTaskItemEvents(item) {
        let closeButton = item.querySelector('.close');

        // remove task from list
        closeButton.addEventListener('click', function (e) {
            this.parentElement.style.display = 'none';
        });

        // check or uncheck task
        item.addEventListener('click', function (e) {
            this.classList.toggle('checked');
        });
    }
}
