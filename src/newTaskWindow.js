//Create and store check lists
import toDoList from "./displayList";


let todo = [{task:"fuck", dueDate: [1995, 10, 24], priority: "High"}, {task:"you", dueDate: "08/10/1995", priority: "Medium"},];

let newItem = function (task, dueDate, priority){
    return{task, dueDate, priority}
};

function newTask (){
    const background = document.getElementById("backgroundWrapper")
    const newItemBox = document.getElementById("addNew");

    background.classList.toggle("hidden");
    const heading = document.createElement("h2");
    heading.textContent="Create New Task";
    const content = document.createElement("div");
    content.classList.add("addNewContentBox")

    const form = document.createElement("form");
    const taskLabel = document.createElement("label");
    taskLabel.setAttribute("for", "taskName")
    taskLabel.textContent = "Task Name: ";
    const taskName = document.createElement("input");
    taskName.setAttribute("type", "textbox");
    taskName.setAttribute("placeholder", "Task To Be Completed");
    taskName.setAttribute("name", "taskName");

    const dateLabel = document.createElement("label");
    dateLabel.setAttribute("for", "date");
    dateLabel.textContent = "Due Date: ";
    const date = document.createElement("input");
    date.setAttribute("type", "date");
    date.setAttribute("name", "date");

    const priorityLabel = document.createElement("label");
    priorityLabel.setAttribute("for", "priority");
    priorityLabel.textContent = "Priority: ";
    const lowLabel = document.createElement("label");
    lowLabel.setAttribute("for", "low");
    lowLabel.textContent = "Low"
    const low = document.createElement("input");
    low.setAttribute("type", "radio");
    low.setAttribute("value", "low");
    low.setAttribute("name", "priority");

    const mediumLabel = document.createElement("label");
    mediumLabel.setAttribute("for", "medium");
    mediumLabel.textContent = "Medium"
    const medium = document.createElement("input");
    medium.setAttribute("type", "radio");
    medium.setAttribute("value", "medium");
    medium.setAttribute("name", "priority")

    const highLabel = document.createElement("label");
    highLabel.setAttribute("for", "high");
    highLabel.textContent = "High"
    const high = document.createElement("input");
    high.setAttribute("type", "radio");
    high.setAttribute("value", "high");
    high.setAttribute("name", "priority")

    const submit = document.createElement("button");
    submit.setAttribute("type", "button")
    submit.textContent = "Add Item"
    submit.addEventListener("click", () => newTaskSubumission(taskName.value, date.value, "test"))
    //test === priority level. Add in functionality to accept that info

    taskLabel.appendChild(taskName)
    form.appendChild(taskLabel)
    dateLabel.appendChild(date)
    form.appendChild(dateLabel)
    lowLabel.appendChild(low)
    priorityLabel.appendChild(lowLabel)
    mediumLabel.appendChild(medium)
    priorityLabel.appendChild(mediumLabel)
    highLabel.appendChild(high)
    priorityLabel.appendChild(highLabel)
    form.appendChild(priorityLabel)
    form.appendChild(submit)
    newItemBox.appendChild(heading)
    content.appendChild(form)
    newItemBox.appendChild(content)
};

function newTaskSubumission(task, dueDate, priority) {
    let content = document.getElementById("content")
    addToList(newItem(task, dueDate, priority));
    while (content.firstChild) {
        content.removeChild(content.firstChild);
    }
    toDoList(todo);
    const newItemBox = document.getElementById("addNew");
    while (newItemBox.firstChild) {
        newItemBox.removeChild(newItemBox.firstChild);
    }
    const background = document.getElementById("backgroundWrapper")
    background.classList.toggle("hidden")

}






function addToList (obj) {
    todo.push(obj);
}

export default newTask