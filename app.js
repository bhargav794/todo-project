let todoTxt = document.querySelector('#txt');
let appedndList = document.querySelector('.todoList');
let uList = document.querySelector('.myList');
let todoDiv = document.querySelector('.todo');
let addBtn = document.querySelector('#addBtn');

var i = new Date().getTime();

//Event listener to add the list when pressed on 'Enter' 
todoTxt.addEventListener('keydown', (e) =>{
    if(e.keyCode === 13){
        addFunc();
        todoTxt.value = "";
    }
})

//Function which adds the todo list to the front end
let addFunc = (e) => {
    
        e.preventDefault();
    
        //code to add list to the front end
         let todoTxtVal = todoTxt.value ;
         let inpTxt = document.createElement('li');
         inpTxt.innerText = todoTxtVal;
         todoDiv.appendChild(inpTxt);
         inpTxt.id = "txt" + i;
         todoTxt.value = "";
    
         //code for creating and adding id to the edit button 
         let editBtn =document.createElement('button');
         editBtn.innerHTML= 'edit';
         editBtn.id = "ed" + i;
         inpTxt.appendChild(editBtn);

         editBtn.addEventListener("click",() =>{
            edFunc(inpTxt);
         })
    
         //code for creating and adding class to the edit button 
         var deleteBtn =document.createElement('button');
         deleteBtn.innerHTML= 'Delete';
         deleteBtn.id = "del" + i;
         inpTxt.appendChild(deleteBtn);  

        deleteBtn.addEventListener("click", () =>{
            delFunc(inpTxt)
        });
    
         //todoDiv.appendChild(myLists);
    
    
}
addBtn.addEventListener("click",addFunc);


edFunc = (itemText) => {
    
}


 delFunc = (itemText) =>{
        //e.preventDefault();
        var delLi = document.getElementById(itemText.id);
        delLi.remove();

}


 
 