const cancelBtn = document.getElementById("cancelBtn");
const title = document.getElementById("title");
const date = document.getElementById("date");
const priority = document.getElementById("priority");
const proj = document.getElementById("project");
const desc = document.getElementById("description");
const taskForm = document.getElementById("taskForm")
const taskFormInfo = document.getElementById("taskFormInfo")
const taskAdd = document.querySelector(".taskAdd");
const submitBtn = document.getElementById("submitBtn");
const taskCards = document.getElementById("taskCards")


import { indexOf } from 'lodash';
import {clearForm} from './functions.js'
import {addTaskCard,createTask} from './initialDom.js'


const addTaskBtn = (() =>{
    taskAdd.addEventListener("click", function add(event){
        taskForm.style.visibility = "visible"
        taskAdd.style.visibility = "hidden"
    })
})();

const submit = (()=>{
    submitBtn.addEventListener("click",function submit(event){

        const isFormValid = taskFormInfo.checkValidity();
        
        if(!isFormValid) {
            taskFormInfo.reportValidity();
        }else{
            event.preventDefault();
            createTask();
            addTaskCard();
            clearForm();
            taskAdd.style.visibility = "visible";  

        }
        
    })
})();

const cancel = (()=>{
    cancelBtn.addEventListener("click",function cancel(event){
        event.preventDefault();
        clearForm();
        taskAdd.style.visibility = "visible"
    })
})();







