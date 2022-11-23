



let todo = [];

let newItem = function (project, task, dueDate, priority){

    return{project, task, dueDate, priority}
};

function addToList (obj) {
    todo.push(obj);
}