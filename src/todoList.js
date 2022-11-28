import format from "date-fns/format";

function toDoList (inputList){

    const todo = inputList;
    let content = document.getElementById("content")
    const list = document.createElement("ul")

    list.classList.add("checklist")


    

    todo.forEach(element => {
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
        console.log(element.dueDate)
        date.textContent = result;
        console.log(element.dueDate);
        left.appendChild(check);
        left.appendChild(text);
        right.appendChild(date);
        item.appendChild(left);
        item.appendChild(right);
        list.appendChild(item)
    });

    content.appendChild(list);

}

export default toDoList

