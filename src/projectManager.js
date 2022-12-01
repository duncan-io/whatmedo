let id = 0;

function projectCreator (name, list){
    id++
    return {name, list, id}
}

function taskCreator (name, description, date, id){
    return {name, description, date, id}
}

let allProjects = [];

let home = projectCreator("home", [])
let thisWeek = projectCreator("This Week", [])

home.list.push(taskCreator("Test", "This is a test", 10/1995, 1))
thisWeek.list.push(taskCreator("Testie", "This is a test also", 8/1995, 2))

allProjects.push(home)
allProjects.push(thisWeek)


export {allProjects, taskCreator}