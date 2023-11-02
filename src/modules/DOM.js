function showProjects(projects, projectList) {
    projectList.innerHTML = "";
    for (let i = 0; i < projects.arr.length; i++) {
        const projectItem = document.createElement('li');
        projectItem.classList.add('project');
        projectItem.innerHTML = `${projects.arr[i].name}`;
        if(projects.selected === i) {
            projectItem.classList.add('selected');
        }
        if (i !== 0) {
            const deleteButton = document.createElement('button');
            deleteButton.classList.add('project-delete');
            deleteButton.dataset.index = i;
            deleteButton.innerHTML = `<span class="material-symbols-outlined">delete</span>`;
            projectItem.appendChild(deleteButton);
        }
        projectList.appendChild(projectItem);
    }
}

export {showProjects};