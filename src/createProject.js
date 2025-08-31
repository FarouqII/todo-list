import { createNote } from './createNote.js';

export function createProject(name) {
    if (name) {
        const display = document.getElementById('display');
        let exists = false;
        const keys = Object.keys(localStorage);

        for (const key of keys) {
            const keyObj = JSON.parse(localStorage.getItem(key));
            if (keyObj.projectName == name) exists = true;
        }
        if (!(exists)) {
            displayProject(name);
        }
    }

    const createProject = document.getElementById('create-project');
    createProject.style.display = "none";
}

export function displayProject(name) {
    display.innerHTML += `
        <div class="project-tile" id="${name}">
            <h1>${name}</h1>
            <table id="project-table">
                <tr>
                    <th>Task</th>
                    <th>Date</th>
                    <th>Priority</th>
                </tr>
            </table>
            <button class="new-button" id="new-note">New Note</button>
        </div>
        `

        const newNote = document.getElementById('new-note');
        newNote.addEventListener('click', e => {
            e.preventDefault();

            const createNote = document.getElementById('create-note');
            createNote.style.display = "flex";
        })

        const noteSubmit = document.getElementById('note-submit');
        noteSubmit.addEventListener('click', e => {
            e.preventDefault();
            createNote();
        });
        
        const newProjectObj = {
            projectName : name,
        }

        localStorage.setItem(`${name}`, JSON.stringify(newProjectObj));

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
}