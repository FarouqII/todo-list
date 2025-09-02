export function showNote(note) {
    const showNoteWindow = document.getElementById('show-note');
    showNoteWindow.display = "flex";
    const keys = Object.keys(localStorage);
    const noteParent = note.parentNode;
    const parentID = noteParent.id;
    for (const key of keys) {
        const keyObj = JSON.parse(localStorage.getItem(key));
        const keyName = key.split(' ').join('');
        if (keyName == parentID) {
            const keyNotes = keyObj.notes;
            for (const n of keyNotes) {
                if (n.title == note.textContent) {
                    const showNoteWindow = document.getElementById('show-note');
                    const noteName = n.title;
                    const noteDate = n.date;
                    const noteDescription = n.description;
                    showNoteWindow.innerHTML = `
                    <h1>${noteName}</h1>
                    <h3>${noteDate}</h3>
                    <p>${noteDescription}</p>

                    <button class="button" id="project-submit">Delete Note</button>
                    `
                }
            }
        }
    }
}