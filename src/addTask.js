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
import {newDiv,newBtn,clearForm} from './functions.js'

let taskArray = [];


const addTaskBtn = (() =>{
    taskAdd.addEventListener("click", function add(event){
        taskForm.style.visibility = "visible"
    })
})();

const submit = (()=>{
    submitBtn.addEventListener("click",function submit(event){
        event.preventDefault();
        createTask();
        clearForm();
        
    })
})();

const cancel = (()=>{
    cancelBtn.addEventListener("click",function cancel(event){
        clearForm();
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
    console.log(taskArray)
    console.log(taskArray[0].title)
    
    for(let i=0;i<taskArray.length;i++){
        taskbar.appendChild(newDiv(taskArray[i].title,"taskCard"))
    }
}

