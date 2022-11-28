import toDoList from "./displayList";
import newTask from "./newTaskWindow";

(function (){
    const projects = [{name:"Home", list:[{task:"fuck", dueDate: [1995, 10, 24], priority: "High"}, {task:"you", dueDate: "08/10/1995", priority: "Medium"},]}, 
    {name:"This Week", list:[{task:"bitch", dueDate: [1995, 10, 24], priority: "High"}, {task:"bum", dueDate: "08/10/1995", priority: "Medium"},]}, 
    {name:"This Month", list:[]}, 
    {name:"Projects", list:[]}];
    const sideBar = document.getElementById("sidebar")
    let currentProject = "Home"
    function display(project){
        let proj = projects.find(obj => {
            return obj.name === project
        })
        toDoList(proj.list)
    }
    display(currentProject);
    const list = document.createElement("ul");
    list.classList.add("sideBarList")

  
    projects.forEach(element => {

        let item = document.createElement("li");
        item.classList.add("listItem")
        item.textContent = element.name;
        item.onclick = ()=>{
            currentProject = element.name;
            let content = document.getElementById("content")
            while (content.firstChild) {
                content.removeChild(content.firstChild);
            }
            toDoList(element.list)
            if(element.list.length === 0){
                let msg = document.createElement("p")
                msg.textContent = "This list is empty"
                content.appendChild(msg)
            }
        }

        list.appendChild(item)

    });

    sideBar.appendChild(list)
})();


const newButton = document.getElementById("newbutton");
newButton.addEventListener("click", () => newTask());



// let newItemBox = document.getElementById("addNew");

// newItemBox.addEventListener("click", presentNewBox);

//presentNewBox function should pull up the item box and have options to create new tasks or projects