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

export let taskArray = [];





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
    const allBtn = document.getElementById("all")
    const todayBtn = document.getElementById("today")
    const upcomingBtn = document.getElementById("upcoming")
    const importantBtn = document.getElementById("important")
    const completedBtn = document.getElementById("completed")

    allBtn.addEventListener("click",()=>{
        addTaskCard(taskArray);
    })

    todayBtn.addEventListener("click",()=>{
        let today = new Date().toISOString().slice(0, 10)
        
        addTaskCard(Array.from(taskArray).filter(x=>x.date == today ))
    })
    
    upcomingBtn.addEventListener("click",()=>{
        const today = new Date().toISOString().slice(0,10)
        const date = new Date();
        const nextWeek = date.getDate() + 7;
        date.setDate(nextWeek)
        addTaskCard(Array.from(taskArray).filter(x => x.date <= date.toISOString().slice(0,10) && x.date >= today))
    })

    importantBtn.addEventListener("click",()=>{
        addTaskCard(Array.from(taskArray).filter(x=>x.priority == "high" && x.comp !== "completed"));
    })

    completedBtn.addEventListener("click",()=>{
        addTaskCard(Array.from(taskArray).filter(x=>x.comp == "completed"));
    })
})();


(function newProjects(){
    const projectFormOpt =  document.getElementById("project")
    
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
    const projForm = document.querySelector(".projectForm")
    addProj.addEventListener("click",()=>{
        projForm.style.visibility = "visible"
        addProj.style.visibility = "hidden"
    })
    const projInput = document.getElementById("projName")
    const projFormAdd = document.getElementById("projAdd")
    const projFormCancel = document.getElementById("projCancel")
    projFormCancel.addEventListener("click",function cancel(event){
        event.preventDefault();
        projForm.style.visibility = "hidden"
        addProj.style.visibility = "visible"
        projInput.value = "";
    })
    projects.appendChild(newDiv("","projContainer"))
    let projList =[];
    projFormAdd.addEventListener("click",function add(event){
        event.preventDefault();
        
        console.log(projList)
        if(projList.includes(projInput.value)){
            alert("fuck you")
        }else{
            const newOpt = document.createElement("option")
            newOpt.textContent = projInput.value
            newOpt.setAttribute("value",projInput.value)
            projectFormOpt.appendChild(newOpt);
            const projCont = document.querySelector(".projContainer")
            projCont.appendChild(newDiv(projInput.value,"projectSelect",projInput.value,))
            projList.push(projInput.value)
            const projSelectTitle = document.getElementById(projInput.value);
            const xBtn = document.createElement("button")
            xBtn.classList.add("projRm")
            projSelectTitle.appendChild(xBtn);
            xBtn.addEventListener("click",()=>{
                projSelectTitle.remove();
                newOpt.remove();
                projList.splice(projList.indexOf(xBtn.id),1)
            })
            projForm.style.visibility = "hidden"
            addProj.style.visibility = "visible"
            projInput.value = "";
        }
    })
   



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

export function addTaskCard(array){


    
    const taskCards = document.getElementById("taskCards");

    taskCards.innerHTML = "";
    for(let i=0;i<array.length;i++){
        taskCards.appendChild(newDiv("","taskCard",i));
        let card = document.getElementById(i);
        let taskColor = (array[i].comp == "completed") ? card.style.backgroundColor = '#78716c':
                        (array[i].priority == "low") ? card.style.backgroundColor = '#22c55e' : 
                        (array[i].priority == "medium") ? card.style.backgroundColor = '#f59e0b' : 
                        (array[i].priority == "high") ? card.style.backgroundColor = '#ef4444':
                        (array[i].priority == "No priority") ? card.style.backgroundColor = '#e5e7eb':
                        card.style.backgroundColor = '#78716c';
                        

        card.appendChild(newDiv("","taskTop",`taskTop-${i}`))
        const taskTop = document.getElementById(`taskTop-${i}`)
        taskTop.appendChild(newDiv(`Project: ${array[i].proj}`,"taskProject"))
        taskTop.appendChild(newDiv(array[i].title,"taskTitle"))
        taskTop.appendChild(newDiv(array[i].date,"taskDate"))
        card.appendChild(newDiv("","taskBottom",`taskBottom-${i}`))

    
        const taskBottom = document.getElementById(`taskBottom-${i}`);
        taskBottom.appendChild(newDiv(`-${array[i].desc}`,"description"))
        taskBottom.appendChild(newDiv("","taskCheckRemove",`taskCheckRemove-${i}`));
        const taskBtns = document.getElementById(`taskCheckRemove-${i}`)
        const checkBtn = document.createElement("button")
        const rmBtn = document.createElement("button")
        checkBtn.textContent = ""
        checkBtn.classList = "check"
        checkBtn.addEventListener("click",()=>{
            if(array[i].comp == "completed"){
                array[i].comp = ""
            }else{
                array[i].comp = "completed"
            }
            
            addTaskCard(taskArray);
        })
        taskBtns.appendChild(checkBtn)
        
        rmBtn.textContent = ""
        rmBtn.classList = "remove"
        rmBtn.addEventListener("click",()=>{
            array.splice(i,1);
            addTaskCard(taskArray);
        })
        taskBtns.appendChild(rmBtn)
    }
}
