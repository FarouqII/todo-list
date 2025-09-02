import { createNote } from './createNote.js';
import { storeProject } from '../storageFunctions.js';
import { deleteProject } from '../delete/deleteProject.js';

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
            storeProject(name);
        }
    }

    const createProject = document.getElementById('create-project');
    createProject.style.display = "none";
}

export function displayProject(name) {
    const nameArr = name.split(" ");
    const newName = nameArr.join("");
    display.innerHTML += `
        <div class="project-tile" id="${newName}">
            <h1 id="${newName}-h1">${name}</h1>
            <table class="project-table" id="${newName}-table">
                <tr>
                    <th>Task</th>
                    <th>Date</th>
                    <th>Priority</th>
                </tr>
            </table>
            <button class="new-button new-style" id="${newName}-new-note">New Note</button>
            <button class="delete-button new-style" id="${newName}-delete">Delete Project</button>
        </div>
        `

        const newProject = document.getElementById('new-project');
        if (newProject) {
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
ks
                createProject(name);
            });
        }

        const delProject = document.getElementById(`${newName}-delete`);
        if (delProject) {
            delProject.addEventListener('click', e => {
                e.preventDefault();

                deleteProject(name);
            })
        }
}