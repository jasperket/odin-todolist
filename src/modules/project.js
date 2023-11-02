class Project {
    toDos = [];
    constructor(name) {
        this.name = name;
    }
    addToDo(todo) {
        this.toDos.push(todo);
    }
}

export default Project;