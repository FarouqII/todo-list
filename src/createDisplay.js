import { createNote } from "./createNote";
import { createProject, displayProject } from "./createProject";

export function createDisplay() {
    const main = document.querySelector('main');
    main.innerHTML += `
     <div id="display">
        <button class="new-button" id="new-project">New Project</button>
    </div>
    `;

    const projects = [];
    const keys = Object.keys(localStorage);
    for (const key of keys) {
        const keyObj = JSON.parse(localStorage.getItem(key));
        const name = keyObj.projectName;
        if (!(projects.includes(name))) {
            displayProject(name);
            projects.push(name);
        }
    }
}