const cancelBtn = document.getElementById("cancelBtn");
const title = document.getElementById("title");
const date = document.getElementById("date");
const priority = document.getElementById("priority");
const proj = document.getElementById("project");
const desc = document.getElementById("description");
const taskForm = document.getElementById("taskForm")
const taskAdd = document.querySelector(".taskAdd");
const submitBtn = document.getElementById("submitBtn");
const taskbar = document.getElementById("taskbar")
const taskCards = document.getElementById("taskCards")

import {newDiv,newBtn,clearForm} from './functions.js'

let taskArray = [];


const addTaskBtn = (() =>{
    taskAdd.addEventListener("click", function add(event){
        taskForm.style.visibility = "visible"
        taskAdd.style.visibility = "hidden"
    })
})();

const submit = (()=>{
    submitBtn.addEventListener("click",function submit(event){
        event.preventDefault();
        createTask();
        addTaskCard();
        clearForm();
        taskAdd.style.visibility = "visible"
        
        
    })
})();

const cancel = (()=>{
    cancelBtn.addEventListener("click",function cancel(event){
        clearForm();
        taskAdd.style.visibility = "visible"
        event.preventDefault();

    })
})();


const taskFactory = (title,date,priority,proj,desc) => {
    title = title.value;
    date = date.value;
    priority = priority.value;
    proj = proj.value;
    desc = desc.value;
    return { title , date, priority, proj, desc}
};


function createTask(){
    const task = taskFactory(title,date,priority,proj,desc);
    taskArray.push(task);
}

function addTaskCard(){
    taskCards.innerHTML = "";
    for(let i=0;i<taskArray.length;i++){
        taskCards.appendChild(newDiv("","taskCard",i));
        let card = document.getElementById(i);
        let taskColor = (taskArray[i].priority == "low") ? card.style.backgroundColor = '#dcfce7' : 
                        (taskArray[i].priority == "medium") ? card.style.backgroundColor = '#fef08a' : 
                        card.style.backgroundColor = '#fee2e2';

        card.appendChild(newDiv("","taskTop",`taskTop-${i}`))
        card.appendChild(newDiv(`-${taskArray[i].desc}`,"taskBottom",`taskBottom-${i}`))
        const taskTop = document.getElementById(`taskTop-${i}`)
        taskTop.appendChild(newDiv(`Project: ${taskArray[i].proj}`,"taskProject"))
        taskTop.appendChild(newDiv(taskArray[i].title,"taskTitle"))
        taskTop.appendChild(newDiv(taskArray[i].date,"taskDate"))
        

    }
}

