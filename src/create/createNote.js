import { format } from 'date-fns';
import { resetForm } from '../resetForm.js'
import { storeNote } from '../storageFunctions.js';
import { showNote } from '../display/showNote.js';
import { sortTableByPriority } from '../sortTable.js';

export function createNote(oldParent) {
    const parent = oldParent.split(' ').join('');
    const createTitle = document.getElementById('create-title');
    const title = createTitle.value;
    const createDate = document.getElementById('create-date');
    const unformatDate = createDate.value.split('-').reverse().join('/');
    const formatDate = createDate.value ? unformatDate : format(new Date(), "dd/MM/yyyy");
    const createDescription = document.getElementById('create-description');
    const description = createDescription.value;
    const createPriority = document.getElementById('create-priority');
    const priority = createPriority.value
    
    if (!(createTitle.value)) {
        resetForm();
        return;
    } else {
        const noteTable = document.getElementById(`${parent}-table`);
        const parentID = oldParent.split(' ').join('');
        const keys = Object.keys(localStorage);
        for (const key of keys) {
            const keyObj = JSON.parse(localStorage.getItem(key));
            if (keyObj.projectName == oldParent) {
                storeNote(oldParent, key, title, formatDate, description, priority);
            };
        }
        
        const noteTbody = document.getElementById(`${parent}-tbody`);
        displayNote(parent, noteTbody, title, formatDate, priority);
    }
    resetForm();
}

export function displayNote(parent, el, title, date, priority) {
    const thisTR = document.createElement('tr');
    thisTR.id = title.split(' ').join('');

    const titleTD = document.createElement('td');
    const titleCB = document.createElement('input');
    titleCB.type = "checkbox";
    titleCB.id = "todo-checkbox";
    const titleLabel = document.createElement('label');
    titleLabel.for = "todo-checkbox";
    titleLabel.innerText = title;
    titleTD.appendChild(titleCB);
    titleTD.appendChild(titleLabel);

    const dateTD = document.createElement('td');
    dateTD.innerText = date;

    const priorityTD = document.createElement('td');
    priorityTD.innerText = priority;
    priorityTD.classList = priority;

    thisTR.appendChild(titleTD);
    thisTR.appendChild(dateTD);
    thisTR.appendChild(priorityTD);
    thisTR.addEventListener('click', e => {
        e.preventDefault();

        const showNoteWindow = document.getElementById('show-note');
        showNoteWindow.style.display = "flex";

        showNote(parent, title);
    })
    el.appendChild(thisTR);
    sortTableByPriority(parent);
}