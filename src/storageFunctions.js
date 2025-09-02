export function storeNote(parent, newTitle, newDate, newDescription, newPriority) {
    console.log(parent);
    const keys = Object.keys(localStorage);
    for (const key of keys) {
        const keyObj = JSON.parse(localStorage.getItem(key));
        if (keyObj.projectName == parent) {
            const newNote = {
                    title : newTitle,
                    date : newDate,
                    description: newDescription,
                    priority : newPriority,
                }
            const notesArr = keyObj.notes;
            notesArr.push(newNote);
            const newProject = {
                projectName : parent,
                notes : notesArr,
            }
            localStorage.setItem(`${parent}`, JSON.stringify(newProject));
        }
    }
}

export function storeProject(name) {
    const newProjectObj = {
        projectName : name,
        notes : [],
    }

    localStorage.setItem(`${localStorage.length + 1}`, JSON.stringify(newProjectObj));
}