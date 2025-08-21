let user= {
    name:"Asror",
    surname:"Fayzullayev",
    fullName:function(){
        return this.name+""+this.surname;
    },


}
let x=this;

console.log(x);

console.log(user.fullName());





// const todolist=document.querySelector('.todo-list')
// todoList.addEventListener('click',(evt)=>{
//    if(evt.target.classList.contains('delete-btn')){
//        evt.target.parentElement.remove();
//        //Ota elementni uchirish
// })




// function addTask() {
//     const taskInput = document.getElementById('taskInput');
//     const taskText = taskInput.value;
    
//     if (taskText) {
//         const taskList = document.getElementById('taskList');
//         const li = document.createElement('li');
//         li.textContent = taskText;
        
//         const deleteButton = document.createElement('button');
//         deleteButton.textContent = 'O\'chirish';
//         deleteButton.onclick = function() {
//             taskList.removeChild(li);
//         };
        
//         li.appendChild(deleteButton);
//         taskList.appendChild(li);
        
//         taskInput.value = '';
//     }
// }



