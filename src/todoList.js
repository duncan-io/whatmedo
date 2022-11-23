function toDoList (inputList){

    const todo = inputList;
    let content = document.getElementById("content")
    const list = document.createElement("ul")

    list.classList.add("checklist")


    

    todo.forEach(element => {
        let item = document.createElement("li");
        item.classList.add("checklistItem")
        let check = document.createElement("input");
        check.setAttribute("type", "checkbox");
        check.addEventListener("click", () => {
            item.classList.toggle("checked");
        })
        let text = document.createElement("p");
        text.textContent = element;
        item.appendChild(check);
        item.appendChild(text);
        list.appendChild(item);
    });

    content.appendChild(list);

}

export default toDoList

