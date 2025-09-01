import { format } from 'date-fns';
import { resetForm } from '../resetForm.js'
import { storeNote } from '../storageFunctions.js';

export function createNote(oldParent) {
    const parent = oldParent.split(' ').join('');
    console.log(parent)
    const createTitle = document.getElementById('create-title');
    const title = createTitle.value;
    const createDate = document.getElementById('create-date');
    const unformatDate = createDate.value.split('-').reverse().join('/');
    const formatDate = createDate.value ? unformatDate : format(new Date(), "dd/MM/yyyy");
    const createPriority = document.getElementById('create-priority');
    const priority = createPriority.value
    
    if (!(createTitle.value)) {
        resetForm();
        return;
    } else {
        const noteTable = document.getElementById(`${parent}-table`);
        displayNote(noteTable, title, formatDate, priority);
        storeNote(oldParent, title, formatDate, priority);
    }
    resetForm();
}

export function displayNote(el, title, date, priority) {
    console.log(`element ${el}`);
    el.innerHTML += `
        <tr>
            <td><input type="checkbox" id="todo-checkbox"><label for="todo-checkbox"> ${title}</label></td>
            <td>${date}</td>
            <td>${priority}</td>
        </tr>
    `;
}