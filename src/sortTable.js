export function sortTableByPriority(name) {
    const table = document.getElementById(`${name}-table`);
    const tbody = table.querySelector("tbody");

    // Convert rows to array
    const rows = Array.from(tbody.querySelectorAll("tr"));

    // Define priority order
    const priorityOrder = { "High": 1, "Medium": 2, "Low": 3 };

    // Sort rows by priority
    rows.sort((a, b) => {
        const priorityA = a.cells[2].textContent.trim();
        const priorityB = b.cells[2].textContent.trim();
        return priorityOrder[priorityA] - priorityOrder[priorityB];
    });

    // Clear and re-append rows
    tbody.innerHTML = "";
    rows.forEach(row => tbody.appendChild(row));
}