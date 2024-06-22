let input = document.getElementById("taskInput");
let btn = document.querySelector(".add");
let ul = document.getElementById("taskList");

btn.addEventListener("click",addTask);

function addTask(){


    let taskText = input.value.trim();
    if(taskText !== ""){

        let li = document.createElement("li");
        li.textContent = taskText;
    
        let deleteButton = document.createElement("button")
            deleteButton.innerHTML = '<i class="fa-solid fa-trash"></i>';
            deleteButton.className = "delete";
            deleteButton.onclick = function(){
                li.remove()
            }

   



    li.appendChild(deleteButton);
    ul.appendChild(li);
    input.value = "";
}
}