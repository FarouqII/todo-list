import './reset.css';
import './style.css';

const newNote = document.getElementById('new-note');
newNote.addEventListener('click', e => {
    e.preventDefault();

    const createNote = document.getElementById('create-note');
    createNote.style.display = "flex";
})

const createSubmit = document.getElementById('create-submit');
createSubmit.addEventListener('click', e => {
    e.preventDefault();
    const noteTable = document.getElementById('project-table');

    const createTitle = document.getElementById('create-title');
    const createDate = document.getElementById('create-date');
    const newDate = createDate.value.split('-').reverse().join('/');
    const createPriority = document.getElementById('create-priority');
    noteTable.innerHTML += `
        <tr>
            <td><input type="checkbox" id="todo-checkbox"><label for="todo-checkbox"> ${createTitle.value}</label></td>
            <td class="date">${newDate}</td>
            <td class="priority">${createPriority.value}</td>
        </tr>
    `;
    

    const createNote = document.getElementById('create-note');
    createNote.style.display = "none";
})