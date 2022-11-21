(function (){
    const sideBar = document.getElementById("sidebar")

    const list = document.createElement("ul");

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