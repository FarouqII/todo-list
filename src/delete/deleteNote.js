import { resetForm } from "../resetForm";

export function deleteNote(noteID) {
    console.log(noteID);
    resetForm();
    
    const note = document.getElementById(noteID);
    if (note) note.remove();

    const keys = Object.keys(localStorage);
    for (const key of keys) {
        const keyObj = JSON.parse(localStorage.getItem(key));
        const notesList = keyObj.notes;

        const index = notesList.findIndex(n => n.id === noteID);

        if (index !== -1) {
            notesList.splice(index, 1);

            localStorage.setItem(key, JSON.stringify(keyObj));
            break;
        }
    }
}