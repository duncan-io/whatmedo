import displayList from "./displayList";
import newTask from "./newTaskWindow";


//Try to set a current project so that project can be found and pushed to

// const newButton = document.getElementById("newbutton");
// newButton.addEventListener("click", () => newTask());
// const projects = [{name:"Home", list:[{task:"fuck", dueDate: [1995, 10, 24], priority: "High"}, {task:"you", dueDate: "08/10/1995", priority: "Medium"},]}, 
// {name:"This Week", list:[{task:"bitch", dueDate: [1995, 10, 24], priority: "High"}, {task:"bum", dueDate: "08/10/1995", priority: "Medium"},]}, 
// {name:"This Month", list:[]}, 
// {name:"Projects", list:[]}];

// let currentProject = "Home"
// console.log(currentProject)

// (function (){

    const sideBar = document.getElementById("sidebar")
 
    function display(project){
        let proj = projects.find(obj => {
            return obj.name === project
        })
        displayList(proj.list)
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
            console.log(currentProject)
            let content = document.getElementById("content")
            while (content.firstChild) {
                content.removeChild(content.firstChild);
            }
            displayList(element.list)
            if(element.list.length === 0){
                let msg = document.createElement("p")
                msg.textContent = "This list is empty"
                content.appendChild(msg)
            }
        }

        list.appendChild(item)

    });

    sideBar.appendChild(list)
// })();



export default {currentProject, projects}

// let newItemBox = document.getElementById("addNew");

// newItemBox.addEventListener("click", presentNewBox);

//presentNewBox function should pull up the item box and have options to create new tasks or projects