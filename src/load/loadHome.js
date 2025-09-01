import { createNote, displayNote } from "../create/createNote";
import { createProject, displayProject } from "../create/createProject";

export function loadHome() {
    const display = document.getElementById('display');
    display.innerHTML = '';
    display.innerHTML += `
     <button class="new-style" id="new-project">New Project</button>
    `;
    const newProject = document.getElementById('new-project');
    newProject.addEventListener('click', e => {
        e.preventDefault();

        const createProject = document.getElementById('create-project');
        createProject.style.display = "flex";
    });

    const projectSubmit = document.getElementById('project-submit');
    projectSubmit.addEventListener('click', e => {
        e.preventDefault();
        const createName = document.getElementById('create-name');
        const name = createName.value;

        createProject(name);
    });

    const projects = [];
    const keys = Object.keys(localStorage);
    for (const key of keys) {
        const keyObj = JSON.parse(localStorage.getItem(key));
        const name = keyObj.projectName;
        const newName = name.split(' ').join('');
        if (!(projects.includes(name))) {
            displayProject(name);
            const notesList = keyObj.notes;
            const noteTable = document.getElementById(`${newName}-table`);
            for (const note of notesList) {
                displayNote(noteTable, note.title, note.date, note.priority);
            }
            projects.push(name);
        }
    }
}

let currentProjectID = null;

document.addEventListener('click', e => {
    if (e.target.classList.contains('new-button')) {
        e.preventDefault();

        const btnParent = e.target.parentNode;
        currentProjectID = btnParent.id; // remember the project we’re adding to

        const createNoteWin = document.getElementById('create-note');
        createNoteWin.style.display = "flex";
    }
});

const noteSubmit = document.getElementById('note-submit');
noteSubmit.addEventListener('click', e => {
    e.preventDefault();

    if (!currentProjectID) return; // safety check

    const parentH1 = document.getElementById(`${currentProjectID}-h1`);
    createNote(parentH1.textContent);

    // reset after submission
    currentProjectID = null;
});
