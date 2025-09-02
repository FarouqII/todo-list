export function deleteProject(projectName) {
    const projectID = projectName.split(' ').join('');
    const project = document.getElementById(`${projectID}`);
    project.remove();
    const keys = Object.keys(localStorage);
    for (const key of keys) {
        const keyObj = JSON.parse(localStorage.getItem(key));
        if (keyObj.projectName == projectName) {
            console.log('found');
            localStorage.removeItem(key);
        };
    }
}