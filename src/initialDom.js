import Check from './images/check.gif';
import Coffee from './images/coffeeT.gif';
import All from './icons/all.png'
import Today from './icons/today.png'
import Upcoming from './icons/week.png'
import Important from './icons/important.png'
import Completed from './icons/completed.png'
import Projects from './icons/projects.png'
import Add from './icons/add.png'
import Plus from './icons/plus.png'


const sidebar = document.getElementById("sidebar");

function newDiv(content,classList,id){
    const newDiv = document.createElement("div");
    newDiv.textContent = content
    if(classList !== ""){
    newDiv.classList.add(classList)
    }
    if(id !== undefined){
        newDiv.id = id;
    }
    return newDiv;
}

function newBtn(content,classList,id){
    const newBtn = document.createElement("button");
    newBtn.textContent = content
    if(classList !== ""){
    newBtn.classList.add(classList)
    }
    if(id !== undefined){
        newBtn.id = id;
    }
    return newBtn;
}


(function header(){
    const header = document.getElementById("header");
    
    function right(){
        header.appendChild(newDiv("","rightHeader"))
        const rightHeader = document.querySelector(".rightHeader")
        const myIcon = new Image();
        myIcon.src = Check;
        myIcon.classList = ("icon")
        rightHeader.appendChild(myIcon);
        
    }

    function left(){
        header.appendChild(newDiv("","leftHeader"))
        const newButton = document.createElement("button")
        const loginIcon = new Image();
        loginIcon.src = Coffee;
        loginIcon.classList = ("coffee");
        newButton.appendChild(loginIcon);
        newButton.appendChild(newDiv("| Sign in with Google",""))
        newButton.classList = ("login")
        header.appendChild(newButton);
    }

    right();
    left();
})();


(function projDates(){
    
    sidebar.appendChild(newDiv("","dateNav"))
    const dateNav = document.querySelector(".dateNav");
        
    for(let i=0;i<5;i++){
        const dateArray = ["All","Today","Upcoming","Important","Completed"];
        const iconArray = [All,Today,Upcoming,Important,Completed]
        const myIcon = new Image();
        myIcon.src = iconArray[i];
        myIcon.classList = ("sideIcon");  
        dateNav.appendChild(newBtn(dateArray[i],"navigation",dateArray[i].toLowerCase()))
        const nav = document.getElementById(dateArray[i].toLowerCase());
        nav.appendChild(myIcon)
    }
})();


(function newProjects(){
    sidebar.appendChild(newDiv("","projects"));
    const projects = document.querySelector(".projects");
    const projIcon = new Image();
    projIcon.src = Projects
    projects.appendChild(newDiv("Projects","projectHeader"))
    const projHead = document.querySelector(".projectHeader")
    projHead.appendChild(projIcon) 
    const addIcon = new Image();
    addIcon.src = Add
    projects.appendChild(newBtn("Create new project","addProject"))
    const addProj = document.querySelector(".addProject")
    addProj.appendChild(addIcon)
})();

const newTask = (() => {
    const taskbar = document.getElementById("taskbar")
    const plusIcon = new Image();
    plusIcon.src = Plus;
    taskbar.appendChild(newBtn("Add task","taskAdd"))
    const taskAdd = document.querySelector(".taskAdd")
    taskAdd.appendChild(plusIcon)
})();


const taskForm = (() =>{
    const content = document.getElementById("content");
    content.appendChild(newDiv("","","taskForm"));
    const taskForm = document.getElementById("taskForm");
    taskForm.appendChild(newDiv("","taskInfo1"))
    taskForm.appendChild(newDiv("","taskInfo2"))
    const taskInfo1 = document.querySelector(".taskInfo1")
    const taskInfo2 = document.querySelector(".taskInfo2")

    taskInfo1.innerHTML = '<input type="text" id="title" placeholder="Task Info"></input>'
    taskInfo1.innerHTML += '<input type="text" id="dueDate" placeholder="Schedule">'
    taskInfo1.innerHTML += '<select id="project-select"><option value="Inbox">Inbox</option></select>'
    taskInfo2.innerHTML = '<select id="priority-select"><option value="none">Select Priority</option><option value="low">Low</option><option value="medium">Medium</option><option value="high">High</option></select>'
})();