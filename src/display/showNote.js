import { deleteNote } from "../delete/deleteNote";
import { editNote } from "../editNote";

export function showNote(parent, id) {
    const keys = Object.keys(localStorage);
    for (const key of keys) {
        const keyObj = JSON.parse(localStorage.getItem(key));
        const keyPN = keyObj.projectName;
        const newPN = keyPN.split(' ').join('');
        if (newPN == parent) {
            const keyNotes = keyObj.notes;
            for (const n of keyNotes) {
                if (n.id == id) {
                    const noteName = n.title;
                    const noteDate = n.date;
                    const noteDescription = n.description;
                    const noteID = n.id;
                    document.getElementById('display-h1').textContent = noteName;
                    document.getElementById('display-h3').textContent = noteDate;
                    document.getElementById('display-p').textContent = noteDescription;
                    document.getElementById('note-id').textContent = "ID: " + noteID;

                    const noteDel = document.getElementById('note-delete');
                    noteDel.addEventListener('click', e => {
                        e.preventDefault();

                        deleteNote(noteID);
                    })

                    const noteEdit = document.getElementById('note-edit');
                    noteEdit.addEventListener('click', e => {
                        e.preventDefault();

                        editNote(parent, noteName, noteDate, noteDescription, n.priority, noteID);
                    })
                }
            }
        }
    }
}