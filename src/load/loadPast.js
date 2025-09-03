import { parse, isBefore, startOfDay } from 'date-fns';
import { displayNote } from "../create/createNote";
import { displayProject } from "../create/createProject";

export function loadPast() {
    const display = document.getElementById('display');
    display.innerHTML = '';

    const projectsDisplayed = new Set();
    const keys = Object.keys(localStorage);
    const today = startOfDay(new Date());

    for (const key of keys) {
        const keyObj = JSON.parse(localStorage.getItem(key));
        const name = keyObj.projectName;

        if (projectsDisplayed.has(name)) continue;

        displayProject(name);
        const newName = name.replace(/\s+/g, '');
        const noteTbody = document.getElementById(`${newName}-tbody`);

        for (const note of keyObj.notes) {
            const noteDate = startOfDay(parse(note.date, 'dd/MM/yyyy', new Date()));

            if (isBefore(noteDate, today)) {
                displayNote(newName, noteTbody, note.title, note.date, note.priority);
            }
        }

        projectsDisplayed.add(name);
    }

    document.querySelectorAll('.new-button').forEach(btn => btn.remove());
}
