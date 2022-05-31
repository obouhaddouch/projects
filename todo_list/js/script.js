const input = document.querySelector(".input");
const addBtn = document.querySelector(".add-btn");
const todosCon = document.querySelector(".todos-con");
const todos = [];

const fun = function(){
    if (input.value !== "") {
        todos.push(input.value);
        todosCon.textContent = "";
        const rm = [];
        
        for (let i = 0; i < todos.length; i++) {
            const todoCon = document.createElement('div');
            const pEl = document.createElement("p");
            const inputBox = document.createElement("input");
            const imgRm = document.createElement("img");

            imgRm.src = "./img/rm.png"
            imgRm.classList = "img-rm"
            inputBox.classList = "checkbox";
            inputBox.type = "checkbox";
            todoCon.classList = "todo-con";

            pEl.textContent += `${todos[i]}`;

            rm.push(imgRm);
        
            todoCon.append(inputBox);
            todoCon.append(pEl);
            todoCon.append(imgRm);
            todosCon.append(todoCon);

            inputBox.addEventListener('click', function () {
                pEl.classList.toggle("line-through");
            })

            imgRm.addEventListener('click', function () {
                const indx = rm.indexOf(this);
                todoCon.textContent = "";
                todoCon.classList.toggle('display-none');
                todos.splice(indx, 1);
                rm.splice(indx, 1);
                console.log(todos);
            })
        }
        console.log(todos);
    }
    input.value = "";
}
addBtn.addEventListener('click', fun);
input.addEventListener('keypress', function (e){
    if (e.key === 'Enter') {
      fun();
    }
})