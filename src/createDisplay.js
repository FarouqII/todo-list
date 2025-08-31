import { createProject } from "./createProject";

export function createDisplay() {
    const main = document.querySelector('main');
    main.innerHTML += `
     <div id="display">
        <button class="new-button" id="new-project">New Project</button>
    </div>
    `

    const newProject = document.getElementById('new-project');
    newProject.addEventListener('click', e => {
        e.preventDefault();

        const createProject = document.getElementById('create-project');
        createProject.style.display = "flex";
    });

    const projectSubmit = document.getElementById('project-submit');
    projectSubmit.addEventListener('click', e => {
        e.preventDefault();
        createProject();
    });
}