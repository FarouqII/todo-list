import { format } from 'date-fns';
import { displayNote } from "../create/createNote";
import { displayProject } from "../create/createProject";

export function loadUpcoming() {
    const display = document.getElementById('display');
    display.innerHTML = '';

    const projects = [];
    const keys = Object.keys(localStorage);
    for (const key of keys) {
        const keyObj = JSON.parse(localStorage.getItem(key));
        const name = keyObj.projectName;
        const newName = name.split(' ').join('');
        const currentDate = format(new Date(), "dd/MM/yyyy");
        const day = currentDate.split('/')[0];
        const month = currentDate.split('/')[1];
        const year = currentDate.split('/')[2];
        if (!(projects.includes(name))) {
            displayProject(name);
            const notesList = keyObj.notes;
            const noteTable = document.getElementById(`${newName}-table`);
            for (const note of notesList) {
                const noteDateArr = note.date.split('/');
                const noteDay = noteDateArr[0];
                const noteMonth = noteDateArr[1];
                const noteYear = noteDateArr[2];
                if (noteDay > day || noteMonth > month || noteYear > year) {
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