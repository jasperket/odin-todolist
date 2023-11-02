class ProjectArray {
    constructor() {
        this.arr = [];
        this.selected = 0;
    }

    pushProject(project) {
        this.arr.push(project);
    }

    select(index) {
        this.selected = index;
    }
}

export default ProjectArray;