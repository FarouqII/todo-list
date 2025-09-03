import { displayNote } from "./create/createNote";
import { loadHome } from "./load/loadHome";
import { resetForm } from "./resetForm";
import { format } from 'date-fns';

export function editNote(projectName, title, date, description, priority) {
    resetForm();
    const editNoteWindow = document.getElementById('edit-note');
    editNoteWindow.style.display = "flex";
    const titleInp = document.getElementById('edit-title');
    const dateInp = document.getElementById('edit-date');
    const descriptionInp = document.getElementById('edit-description');
    const priorityInp = document.getElementById('edit-priority');

    titleInp.value = title;
    dateInp.value = date;
    descriptionInp.value = description;
    priorityInp.value = priority;

    const editSubmit = document.getElementById('edit-submit');
    editSubmit.addEventListener('click', e => {
        e.preventDefault();

        const keys = Object.keys(localStorage);
        for (const key of keys) {
            const project = JSON.parse(localStorage.getItem(key));
            const newName = project.projectName;
            if (newName.split(' ').join('') === projectName) {
                const note = project.notes.find(n => n.title === title);
                if (note) {
                    note.title = titleInp.value;
                    const unformatDate = dateInp.value.split('-').reverse().join('/');
                    const formatDate = dateInp.value ? unformatDate : format(new Date(), "dd/MM/yyyy");
                    note.date = formatDate;
                    note.description = descriptionInp.value;
                    note.priority = priorityInp.value;
                    localStorage.setItem(key, JSON.stringify(project));
                    
                    resetForm();
                    loadHome();
                }
                break;
            }
        }
    })
}