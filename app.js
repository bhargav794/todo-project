let todoTxt = document.querySelector('#txt');
let appedndList = document.querySelector('.todoList');
let uList = document.querySelector('.myList');
let todoDiv = document.querySelector('.todo');
let addBtn = document.querySelector('#addBtn');

var i = new Date().getTime()

//Event listener to add the list when pressed on 'Enter' 
todoTxt.addEventListener('keydown', (e) =>{
    if(e.keyCode === 13){
        addFunc(e);
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
         inpTxt.id = "txt" + i++; // remember this way of setting an attribute
         todoTxt.value = "";
    
         //code for creating and adding id to the edit button 
         let editBtn =document.createElement('button');
         editBtn.innerHTML= 'edit';
         editBtn.id = "ed" + i++;
         todoDiv.appendChild(editBtn);

         editBtn.addEventListener("click",() =>{
            edFunc(inpTxt,editBtn,deleteBtn);
         })
    
         //code for creating and adding class to the edit button 
         var deleteBtn =document.createElement('button');
         deleteBtn.innerHTML= 'Delete';
         deleteBtn.id = "del" + i++;
         todoDiv.appendChild(deleteBtn);  

        deleteBtn.addEventListener("click", () =>{
            delFunc(inpTxt,editBtn,deleteBtn)
        });
    
         //todoDiv.appendChild(myLists);
    
    
}
addBtn.addEventListener("click",addFunc);


edFunc = (itemText,edId,delId) => {
    var txtId = document.getElementById(itemText.id);
    

    var edElem = document.createElement('input');
    edElem.type = "text";
    edElem.value = txtId.innerHTML;
    edElem.id =  "edi" + i++; 
    todoDiv.appendChild(edElem);

    var yesBtn =document.createElement('button');
    yesBtn.innerHTML= 'Yes';
    yesBtn.id = "yes" + i++;
    todoDiv.appendChild(yesBtn);  

    var noBtn =document.createElement('button');
    noBtn.innerHTML= 'No';
    noBtn.id = "no" + i++;
    todoDiv.appendChild(noBtn);  

   delFunc(itemText,edId,delId);
    
}


 delFunc = (itemText,edId,delId) =>{
        //e.preventDefault();
        var delLi = document.getElementById(itemText.id);
        var edIdpar = document.getElementById(edId.id);
        var delIdpar = document.getElementById(delId.id);

        delLi.remove();
        edIdpar.remove();
        delIdpar.remove();

}


 
 