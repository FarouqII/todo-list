export function resetForm() {
    const createNote = document.getElementById('create-note');
    const createProjectWindow = document.getElementById('create-project');
    const createTitle = document.getElementById('create-title');
    const createDate = document.getElementById('create-date');
    const createDescription = document.getElementById('create-description');
    const createPriority = document.getElementById('create-priority');
    const createName = document.getElementById('create-name');

    createTitle.value = '';
    createDate.value = '';
    createDescription.value = '';
    createPriority.innerHTML = `
        <option value="Low" selected>Low</option>
        <option value="Medium">Medium</option>
        <option value="High">High</option>
    `;
    createName.value = '';
    createNote.style.display = "none";
    createProjectWindow.style.display = "none";
}