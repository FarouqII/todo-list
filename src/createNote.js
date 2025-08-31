import { format } from 'date-fns';

export function createNote() {
    const noteTable = document.getElementById('project-table');

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