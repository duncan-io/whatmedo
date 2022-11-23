function toDoList (){
    
    let content = document.getElementById("content")



    const todo = ["do some work", "get an ultrasound"]

    todo.forEach(element => {
        let item = document.createElement("li");
        let check = document.createElement("input");
        check.setAttribute("type", "checkbox");
        let text = document.createElement("p");
        text.textContent = element;
        item.appendChild(check);
        item.appendChild(text);
        content.appendChild(item);
    });

}

export default toDoList

