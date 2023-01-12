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
import {newDiv,newBtn} from './functions.js'





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
    const sidebar = document.getElementById("sidebar");
    
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
    taskbar.appendChild(newDiv("","","taskCards"))
})();


function taskFactory(title,date,priority,proj,desc,comp){
    title = title.value;
    if(date.value == ""){ date = "No due date"}else{date = date.value;}
    if(priority.value == ""){ priority = "No priority"}else{priority = priority.value;}
    if(proj.value == ""){ proj = "All"}else{proj = proj.value;}
    if(desc.value == ""){ desc = "No description"}else{desc = desc.value;}
    comp = "";
    return { title , date, priority, proj, desc,comp}
};





let taskArray = [];

export function createTask(){
    const title = document.getElementById("title");
    const date = document.getElementById("date");
    const priority = document.getElementById("priority");
    const proj = document.getElementById("project");
    const desc = document.getElementById("description");
    const comp = "";
    const task = taskFactory(title,date,priority,proj,desc,comp);
    taskArray.push(task);
}

export function addTaskCard(){

    
  
    const taskCards = document.getElementById("taskCards");

    taskCards.innerHTML = "";
    for(let i=0;i<taskArray.length;i++){
        taskCards.appendChild(newDiv("","taskCard",i));
        let card = document.getElementById(i);
        let taskColor = (taskArray[i].comp == "completed") ? card.style.backgroundColor = '#78716c':
                        (taskArray[i].priority == "low") ? card.style.backgroundColor = '#22c55e' : 
                        (taskArray[i].priority == "medium") ? card.style.backgroundColor = '#f59e0b' : 
                        (taskArray[i].priority == "high") ? card.style.backgroundColor = '#ef4444':
                        (taskArray[i].priority == "No priority") ? card.style.backgroundColor = '#e5e7eb':
                        card.style.backgroundColor = '#78716c';
                        

        card.appendChild(newDiv("","taskTop",`taskTop-${i}`))
        const taskTop = document.getElementById(`taskTop-${i}`)
        taskTop.appendChild(newDiv(`Project: ${taskArray[i].proj}`,"taskProject"))
        taskTop.appendChild(newDiv(taskArray[i].title,"taskTitle"))
        taskTop.appendChild(newDiv(taskArray[i].date,"taskDate"))
        card.appendChild(newDiv("","taskBottom",`taskBottom-${i}`))


    
        const taskBottom = document.getElementById(`taskBottom-${i}`);
        taskBottom.appendChild(newDiv(`-${taskArray[i].desc}`,"description"))
        taskBottom.appendChild(newDiv("","taskCheckRemove",`taskCheckRemove-${i}`));
        const taskBtns = document.getElementById(`taskCheckRemove-${i}`)
        const checkBtn = document.createElement("button")
        const rmBtn = document.createElement("button")
        checkBtn.textContent = ""
        checkBtn.classList = "check"
        checkBtn.addEventListener("click",()=>{
            if(taskArray[i].comp == "completed"){
                taskArray[i].comp = ""
            }else{
                taskArray[i].comp = "completed"
            }
            
            addTaskCard();
        })
        taskBtns.appendChild(checkBtn)
        
        rmBtn.textContent = ""
        rmBtn.classList = "remove"
        rmBtn.addEventListener("click",()=>{
            taskArray.splice(i,1);
            addTaskCard();
        })
        taskBtns.appendChild(rmBtn)
    }
}