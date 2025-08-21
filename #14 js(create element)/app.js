const elForm = document.querySelector("#form");
const elInput = document.querySelector("#todo");
const elTodoWrapper = document.querySelector(".todo-wrapper");
const titleCount= document.querySelector(".title-count");
const addBtn=document.querySelector(".btn");

let jarima=0;

elForm.addEventListener("submit", (event) => {
    event.preventDefault();
    //early-return
    if (elInput.value.trim() === '') return;
    elInput.placeholder="Yozish kerak..."
    elInput.classList.add('input-warning')
    addBtn.disabled=true;
    jarima++;

    if (jarima===4){
        alert("San inputga loyiqmassan");
        elInput.remove();   
    }
    setTimeout(function (){
        elInput.placeholder="Todo kiriting";
        elInput.classList.remove("input-warning");
        addBtn.disabled= false;
    },1700);
    return;
    const elTodo = document.createElement("li");
    const elBtn = document.createElement("button")
setTimeout(function(){
    elInput.placeholder="Todo kiriting";
    elInput.classList.remove("input-warning");
},1700);

   
    elTodo.textContent= `${elTodoWrapper.children.length+1}.${elInput.value}`;
    elTodo.setAttribute("class", "todo-item");
    elTodoWrapper.appendChild(elTodo);

    elBtn.innerText = "x"
    elBtn.setAttribute("class", "delete-btn");
    elTodo.appendChild(elBtn);

    //qiymatni bushatish 2ta usul
    //1-usul
    //el-Form.reset()'
    //2-usul
    elInput.value = "";
    titleCount.innerText=elTodoWrapper.children.length
})


//event deligation bu elementlaraga ota element orqali hodisa qushish

elTodoWrapper.addEventListener("click", (event) => {
    if (event.target.tagName === "LI") {
        event.target.classList.toggle("todo-done");
        
    }

    if(event.target.matches('.delete-btn')){
        event.target.parentElement.remove();
        titleCount.innerText=elTodoWrapper.children.length 
    }
})


