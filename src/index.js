
const sideBar = document.getElementById("sidebar")
console.log(sideBar)
const sideBarMain = ["Home", "This Week", "This Month", "Projects"];

sideBarMain.forEach(element => {

    let item = document.createElement("h3");
    item.textContent = element;
    item.onclick = ()=>console.log("do some shit")
    sideBar.appendChild(item)

})