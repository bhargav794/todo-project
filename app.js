var todoTxt = document.querySelector('#txt');
var appedndList = document.querySelector('.todoList');
var uList = document.querySelector('.myList');
var todoDiv = document.querySelector('.todo');


addBtn.addEventListener("click", (e) => {
    e.preventDefault();

    //code to add list to the front end
     var todoTxtVal = todoTxt.value ;
     var adiv = document.createElement('li');
     adiv.innerText = todoTxtVal;
     todoDiv.appendChild(adiv);
     todoTxt.value = "";

     //code for creating and adding class to the edit button 
     var editBtn =document.createElement('button');
     editBtn.innerHTML= 'edit';
     editBtn.classList.add("editbtn");
     aDiv.appendChild(editBtn);

     //code for creating and adding class to the edit button 
     var deleteBtn =document.createElement('button');
     deleteBtn.innerHTML= 'Delete';
     deleteBtn.classList.add("deletebtn");
     aDiv.appendChild(deleteBtn);
     //todoDiv.appendChild(myLists);
});

let edBtn = document.querySelector('.editbtn');
let delBtn = document.querySelector('.deletebtn');

delBtn.addEventListener("click", () =>{
    
})
 