const input = document.querySelector("#task")

const taskList = document.querySelector("#task-list")
const add = document.querySelector("#add")
add.addEventListener("click", () => {
    if (input.value !== '') {
        const taskLi = document.createElement("li")
        taskLi.className = "task-li"
        taskLi.textContent = input.value;
        const checkbox = document.createElement("input")
        checkbox.type = "checkbox";
        taskLi.prepend(checkbox)
        taskList.append(taskLi)
        const delbtn = document.createElement("button")
        delbtn.textContent = "delete"
        taskLi.append(delbtn)
        delbtn.addEventListener("click", (event) => {
            event.target.parentElement.remove();
        })
        input.value = "";
        checkbox.addEventListener("change", () => {
            taskLi.classList.toggle("completed")
        })
    }

})