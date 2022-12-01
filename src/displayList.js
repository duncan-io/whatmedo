import format from "date-fns/format";
import newTask from "./newTaskWindow";
let newItem = function (task, dueDate, priority){
    return{task, dueDate, priority}
};

function displayList (inputList){

    let content = document.getElementById("content")
    const list = document.createElement("ul")

    list.classList.add("checklist")


    

    inputList.forEach(element => {
        let item = document.createElement("li");
        item.classList.add("checklistItem");
        if (element.priority === "High"){
            item.classList.add("high")
        } else if(element.priority === "Medium"){
            item.classList.add("medium")
        }
        let left = document.createElement("div");
        left.classList.add("left");
        let right = document.createElement("div");
        right.classList.add("right")
        
        let check = document.createElement("input");
        check.setAttribute("type", "checkbox");
        check.addEventListener("click", () => {
            item.classList.toggle("checked");
            item.classList.toggle("noBorder")
        })
        let text = document.createElement("p");
        text.textContent = element.task;
        let date = document.createElement("p");
        let result = format(new Date(element.dueDate), 'MM/dd/yyyy')
        date.textContent = result;
        left.appendChild(check);
        left.appendChild(text);
        right.appendChild(date);
        item.appendChild(left);
        item.appendChild(right);
        list.appendChild(item)
    });
    
    let addNew = document.createElement("button");
    addNew.setAttribute("type", "button")
    addNew.textContent = "Add New Item"
    addNew.addEventListener("click", () => newTaskSubmission().bind(inputList))

    content.appendChild(list);
    content.appendChild(addNew)

}

function newTaskSubmission() {
    console.log(this)
    let obj = newItem(newTask())
    let content = document.getElementById("content")
    this.list.push(obj);
    while (content.firstChild) {
        content.removeChild(content.firstChild);
    }
    displayList(inputList);
    const newItemBox = document.getElementById("addNew");
    while (newItemBox.firstChild) {
        newItemBox.removeChild(newItemBox.firstChild);
    }
    const background = document.getElementById("backgroundWrapper")
    background.classList.toggle("hidden")

}

export default displayList

