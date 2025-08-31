import { format } from 'date-fns';

export function createNote() {
    const noteTable = document.getElementById('project-table');
    const parentProject = noteTable.parentNode;
    const parent = parentProject.id;

    const createTitle = document.getElementById('create-title');
    const createDate = document.getElementById('create-date');
    const newDate = createDate.value.split('-').reverse().join('/');
    const createPriority = document.getElementById('create-priority');
    if (!(createTitle.value)) {
        resetForm();
        return;
    } else {
        noteTable.innerHTML += `
            <tr>
                <td><input type="checkbox" id="todo-checkbox"><label for="todo-checkbox"> ${createTitle.value}</label></td>
                <td>${createDate.value ? newDate : format(new Date(), "dd/MM/yyyy")}</td>
                <td>${createPriority.value}</td>
            </tr>
        `;
    }

    const keys = Object.keys(localStorage);
    for (const key of keys) {
        const keyObj = localStorage.getItem(key);
        if (keyObj.projectName == parent) {
            const newProject = {
                projectName : parent,
                notes : {
                    title : createTitle.value,
                    date : createDate.value ? newDate : format(new Date(), "dd/MM/yyyy"),
                    priority : createPriority.value,
                }
            }
            localStorage.setItem(`${parent}`, JSON.stringify(newProject));
        }
    }

    function resetForm() {
        const createNote = document.getElementById('create-note');
        createTitle.value = '';
        createDate.value = '';
        createPriority.innerHTML = `
            <option value="Low" selected>Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
        `;
        createNote.style.display = "none";
    }

    resetForm();
}