
export  function newDiv(content,classList,id){
            const newDiv = document.createElement("div");
            newDiv.textContent = content;
            if(classList !== ""){
                newDiv.classList.add(classList)
            }
            if(id !== undefined){
                newDiv.id = id; 
            }
            return newDiv;
        }
    
export  function newBtn(content,classList,id){
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

export function clearForm(){
    const title = document.getElementById("title");
    const date = document.getElementById("date");
    const priority = document.getElementById("priority");
    const proj = document.getElementById("project");
    const desc = document.getElementById("description");
    const taskForm = document.getElementById("taskForm")
    title.value = "";
    date.value = "";
    priority.value = "";
    proj.value = "";
    desc.value = "";
    taskForm.style.visibility = "hidden";
}
