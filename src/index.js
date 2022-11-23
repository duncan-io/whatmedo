import toDoList from "./todoList";
import newTask from "./newItem";

(function (){
    const sideBar = document.getElementById("sidebar")

    const list = document.createElement("ul");
    list.classList.add("sideBarList")

    const sideBarMain = ["Home", "This Week", "This Month", "Projects"];
    sideBarMain.forEach(element => {

        let item = document.createElement("li");
        item.classList.add("listItem")
        item.textContent = element;
        item.onclick = ()=>console.log("do some shit")
        list.appendChild(item)

    });

    sideBar.appendChild(list)
})();

toDoList([{task:"fuck"},{task:"you"}]);

newTask();


// let newItemBox = document.getElementById("addNew");

// newItemBox.addEventListener("click", presentNewBox);

//presentNewBox function should pull up the item box and have options to create new tasks or projects