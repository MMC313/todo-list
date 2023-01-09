const cancelBtn = document.getElementById("cancelBtn");
const title = document.getElementById("title");
const date = document.getElementById("date");
const priority = document.getElementById("priority");
const desc = document.getElementById("description");
const taskForm = document.getElementById("taskForm")


const addTask = (() =>{
    const taskAdd = document.querySelector(".taskAdd");
    taskAdd.addEventListener("click", function add(event){
        taskForm.style.visibility = "visible"
    })
})();

const cancel = (()=>{
    cancelBtn.addEventListener("click",function cancel(event){
        title.textContent = "";
        date.textContent = "";
        priority.value = "";
        desc.textContent = "";
        taskForm.style.visibility = "hidden"
        event.preventDefault();
    })
})();