import format from "date-fns/format";
import newTask from "./newTaskWindow";
import {allProjects, taskCreator} from "./projectManager"


function displayList (inputList){

    let content = document.getElementById("content")
    const list = document.createElement("ul")

    list.classList.add("checklist")


    

    inputList.forEach(element => {
        let item = document.createElement("li");
        item.classList.add("checklistItem");
        let left = document.createElement("div");
        left.classList.add("left");
        let leftInfo = document.createElement("div");
        left.classList.add("leftInfo");
        let right = document.createElement("div");
        right.classList.add("right")

        let description = document.createElement("p");
        description.classList.add("description")
        description.textContent = element.description;
        
        let check = document.createElement("input");
        check.setAttribute("type", "checkbox");
        check.addEventListener("click", () => {
            item.classList.toggle("checked");
            item.classList.toggle("noBorder")
        })
        let text = document.createElement("p");
        text.textContent = element.name;
        let date = document.createElement("p");
        let result = format(new Date(element.date), 'MM/dd/yyyy')
        date.textContent = result;
        left.appendChild(check);
        leftInfo.appendChild(text);
        leftInfo.appendChild(description);
        left.appendChild(leftInfo);
        right.appendChild(date);
        item.appendChild(left);
        item.appendChild(right);
        list.appendChild(item)

        let addNew = document.createElement("button");
        addNew.setAttribute("type", "button")
        addNew.textContent = "Add New Item"
        addNew.addEventListener("click", () => newTaskSubmission(element.id))
    
        content.appendChild(list);
        content.appendChild(addNew)
    });
    


}

function newTaskSubmission(id) {
   let proj = findProj(id)

    let obj = taskCreator(newTask())
    let content = document.getElementById("content")
    proj.list.push(obj);
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
function findProj(id){
    let idNum = allProjects.find(element => {
         element.id === id
    })
    return idNum
}

export default displayList

