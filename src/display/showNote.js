import { deleteNote } from "../delete/deleteNote";
import { editNote } from "../editNote";

export function showNote(parent, title) {
    const keys = Object.keys(localStorage);
    for (const key of keys) {
        const keyObj = JSON.parse(localStorage.getItem(key));
        const keyPN = keyObj.projectName;
        const newPN = keyPN.split(' ').join('');
        if (newPN == parent) {
            const keyNotes = keyObj.notes;
            for (const n of keyNotes) {
                if (n.title == title) {
                    const noteName = n.title;
                    const noteDate = n.date;
                    const noteDescription = n.description;
                    document.getElementById('display-h1').textContent = noteName;
                    document.getElementById('display-h3').textContent = noteDate;
                    document.getElementById('display-p').textContent = noteDescription;

                    const noteDel = document.getElementById('note-delete');
                    noteDel.addEventListener('click', e => {
                        e.preventDefault();

                        deleteNote(noteName);
                    })

                    const noteEdit = document.getElementById('note-edit');
                    noteEdit.addEventListener('click', e => {
                        e.preventDefault();

                        editNote(parent, noteName, noteDate, noteDescription, n.priority);
                    })
                }
            }
        }
    }
}