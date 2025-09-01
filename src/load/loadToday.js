import { format } from 'date-fns';
import { createNote, displayNote } from "../create/createNote";
import { createProject, displayProject } from "../create/createProject";

export function loadToday() {
    const display = document.getElementById('display');
    display.innerHTML = '';

    const projects = [];
    const keys = Object.keys(localStorage);
    for (const key of keys) {
        const keyObj = JSON.parse(localStorage.getItem(key));
        const name = keyObj.projectName;
        const newName = name.split(' ').join('');
        const currentDate = format(new Date(), "dd/MM/yyyy");
        if (!(projects.includes(name))) {
            displayProject(name);
            const notesList = keyObj.notes;
            const noteTable = document.getElementById(`${newName}-table`);
            for (const note of notesList) {
                if (note.date == currentDate) {
                    displayNote(noteTable, note.title, note.date, note.priority);
                }
            }
            projects.push(name);
        }
    }

    const newBtnList = document.querySelectorAll('.new-button');
    for (const button of newBtnList) {
        button.remove();
    }
}