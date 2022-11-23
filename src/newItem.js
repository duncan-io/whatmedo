//Create and store check lists
function newb (){
    const background = document.getElementById("backgroundWrapper")
    const newItemBox = document.getElementById("addNew");

    background.classList.toggle("hidden");
    const heading = document.createElement("h2");
    heading.textContent="Create New Task";
    const form = document.createElement("form");
    const taskName = document.createElement("input")
    taskName.setAttribute("type", "textbox");


    newItemBox.appendChild(heading)
    newItemBox.appendChild(form)
};


let todo = [];

let newItem = function (project, task, dueDate, priority){

    return{project, task, dueDate, priority}
};

function addToList (obj) {
    todo.push(obj);
}

export default newb