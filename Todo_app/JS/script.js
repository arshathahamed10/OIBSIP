let input = document.querySelector(".inputs input"),
box = document.querySelector(".box"),
filter = document.querySelectorAll(".filters span"),
clear = document.querySelector(".clear");
// let todo = JSON.parse(localStorage.getItem("list"));
let todo = JSON.parse(localStorage.getItem("list"));

filter.forEach(btn => {
    btn.addEventListener("click" , () =>{
        document.querySelector("span.active").classList.remove("active");
        btn.classList.add("active");
        showTodo(btn.id);
        // console.log(btn.id);
    })
})
function showTodo(fil)
{   
    // console.log(fil);
    let li = "";
    if(todo)
    {
        todo.forEach((word,id)=> {
            let isCompleted = word.status == "completed" ? "checked" : "" ;
            
            // console.log(word.status);
            if(fil === word.status || fil==="all")
            {
                li += `<li class="tasks">
                    <label for="${id}">
                        <input onclick="updateStatus(this)" type="checkbox" id="${id}" ${isCompleted}>
                        <p class="${isCompleted}">${word.name}</p>
                    </label>
                    <div class="settings">
                        <i onclick = delMenu(${id}) class="uil uil-trash"></i>
                    </div>
                </li>`;
            }
        });
    }
    box.innerHTML = li || `<span>You have nothing to do here</span>`;
}
showTodo("all");

function updateStatus(selected)
{
    // console.log(selected);
    let name = selected.parentElement.lastElementChild;
    if(selected.checked)
    {
        name.classList.add("checked");
        todo[selected.id].status = "completed";
    }
    else
    {
        name.classList.remove("checked");
        todo[selected.id].status = "pending";
    }
    localStorage.setItem("list",JSON.stringify(todo));
}
input.addEventListener("keyup",e=>{
    let task = input.value.trim();
    if(e.key == "Enter" && task)
    {
        if(!todo)
        {
            todo = [];
        }
        input.value = "";
        let taskInfo = {name:task,status:"pending"};
        todo.push(taskInfo);
        localStorage.setItem("list",JSON.stringify(todo));
        showTodo("all",todo);
    }
});
function delMenu(id)
{
    // console.log(id);
    todo.splice(id,1);
    localStorage.setItem("list",JSON.stringify(todo));
    showTodo("all");
}
clear.addEventListener("click",()=>{
    todo.splice(0,todo.length);
    localStorage.setItem("list",JSON.stringify(todo));
    showTodo();
});