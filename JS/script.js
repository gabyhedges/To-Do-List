const todolist = document.getElementById("todolist");

const addtodobtn = document.getElementById("addButton");

const newtodoinput = document.getElementById("newToDoInput");

addtodobtn.addEventListener("click", () => {
    const newToDoText = newtodoinput.value;

    if (newToDoText!=="") {
        const newtodoitem = document.createElement("li");
        newtodoitem.innerText = newToDoText;
        const deleteToDoBtn = document.createElement("button");
        deleteToDoBtn.innerText = "X";

        deleteToDoBtn.classList.add("delete-todo-btn");

        deleteToDoBtn.addEventListener("click", () => {
            newtodoitem.remove();
        });

       newtodoitem.appendChild(deleteToDoBtn);
        todolist.appendChild(newtodoitem);
        newtodoinput.value = "";
    }});
