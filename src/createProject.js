import { createNote } from './createNote.js';

export function createProject() {
    const display = document.getElementById('display');
    const createName = document.getElementById('create-name');

    display.innerHTML += `
    <div class="project-tile">
        <h1>${createName.value}</h1>
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
    })

    const createProject = document.getElementById('create-project');
    createProject.style.display = "none";
}