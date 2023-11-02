import './styles/reset.css';
import './styles/style.css';

import Project from './modules/project';
import ToDo from './modules/todo';
import ProjectArray from './modules/projectArray';
import { showProjects } from './modules/DOM';

const defaultProject = new Project("Default");
const projects = new ProjectArray();
projects.pushProject(defaultProject);

const dialogAddProj = document.querySelector('.addProjectDialog');
const btnAddProject = document.querySelector('.add-project');
const formAddProj = document.querySelector('.addProjForm');
const projectList = document.querySelector('.projectList');

showProjects(projects,projectList);

btnAddProject.addEventListener('click', () => {
    const rect = btnAddProject.getBoundingClientRect();
    dialogAddProj.style.position = 'absolute';
    dialogAddProj.style.top = `${rect.bottom}px`;
    dialogAddProj.style.left = `${rect.left}px`;
    dialogAddProj.show();
    btnAddProject.style.display = 'none';
});

dialogAddProj.addEventListener('close', () => {
    btnAddProject.style.display = 'block';
});

formAddProj.addEventListener('submit', (event) => {
    event.preventDefault();
    const projName = document.querySelector('#projName').value;
    
    const newProject = new Project(projName);
    projects.pushProject(newProject);

    showProjects(projects,projectList);

    dialogAddProj.close();
    formAddProj.reset();
});