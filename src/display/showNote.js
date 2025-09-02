import { deleteNote } from "../delete/deleteNote";

export function showNote(el, title) {
    const showNoteWindow = document.getElementById('show-note');;
    const keys = Object.keys(localStorage);
    const noteParent = el.parentNode;
    const parentID = noteParent.id;
    for (const key of keys) {
        const keyObj = JSON.parse(localStorage.getItem(key));
        const keyPN = keyObj.projectName;
        const newPN = keyPN.split(' ').join('');
        if (newPN == parentID) {
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
                }
            }
        }
    }
}