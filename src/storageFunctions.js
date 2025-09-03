export function storeNote(parent, key, newTitle, newDate, newDescription, newPriority, newSelected) {
    const keys = Object.keys(localStorage);
    const keyObj = JSON.parse(localStorage.getItem(key));
        if (keyObj.projectName == parent) {
            const newNote = {
                    title : newTitle,
                    date : newDate,
                    description: newDescription,
                    priority : newPriority,
                    selected: newSelected,
                }
            const notesArr = keyObj.notes;
            notesArr.push(newNote);
            const newProject = {
                projectName : parent,
                notes : notesArr,
            }
            localStorage.setItem(key, JSON.stringify(newProject));
        }
}

export function storeProject(name) {
    const newProjectObj = {
        projectName : name,
        notes : [],
    }

    localStorage.setItem(`${localStorage.length + 1}`, JSON.stringify(newProjectObj));
}