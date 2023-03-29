let todoTxt = document.querySelector('#txt');
let appedndList = document.querySelector('.todoList');
let uList = document.querySelector('.myList');
let todoDiv = document.querySelector('.todo');
let addBtn = document.querySelector('#addBtn');

let i = new Date().getTime();

let j = 0;

//making sure that i doesn't cross max integer limit
if(i==Number.MAX_SAFE_INTEGER)
    i=0;


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
        

        var listDiv = document.createElement('div'); //A new div element will be created and all li elements are appended inside it
        listDiv.id = "li" + i++;
    
       
         let todoTxtVal = todoTxt.value ;
         if(todoTxt.value.trimEnd()== "" ){//returns if text is empty
            alert("Enter text"); //in future will replace this with a proper error message
            return;
         }

          //code to add list to the front end
         let inputTxt = document.createElement('li');
         inputTxt.innerText = todoTxtVal;
         listDiv.appendChild(inputTxt);
         inputTxt.id = "txt" + i++; //remember this way of setting an attribute
         inputTxt.dataset.index = j++; //data-index attribute which is used to retain the position after editing and adding
         
         
         todoTxt.value = "";
         todoTxt.focus();
    
         //code for creating and adding id to the edit button 
         let editBtn =document.createElement('button');
         editBtn.innerHTML= 'edit';
         editBtn.id = "ed" + i++;
         listDiv.appendChild(editBtn);

         //code for creating and adding id to the delete button 
         var deleteBtn =document.createElement('button');
         deleteBtn.innerHTML= 'Delete';
         deleteBtn.id = "del" + i++;
         listDiv.appendChild(deleteBtn); 

         todoDiv.appendChild(listDiv);//Add created div to container div

         editBtn.addEventListener("click",() =>{
            edFunc(inputTxt,editBtn,deleteBtn);
         })
    
        deleteBtn.addEventListener("click", () =>{
            delFunc(inputTxt,editBtn,deleteBtn);
        });
        
    
}

addBtn.addEventListener("click",(e) =>{addFunc(e)});

//Function to edit with yes/No buttons
edFunc = (itemText,edId,delId) => {
    var txtId = document.getElementById(itemText.id)//li element;
    var index = txtId.dataset.index; //getting data-index attribute of li element
    

    var edElem = document.createElement('input');
    edElem.type = "text";
    edElem.value = txtId.innerHTML;
    edElem.id =  "edi" + i++; 
    txtId.parentNode.replaceChild(edElem,txtId);
    edElem.focus();
    

    var yesBtn =document.createElement('button');
    yesBtn.innerHTML= 'Yes';

    var noBtn =document.createElement('button');
    noBtn.innerHTML= 'No';

/***********************Inserts yes and no buttons*****/
    edElem.insertAdjacentElement("afterend",yesBtn);
    yesBtn.insertAdjacentElement("afterend",noBtn);
/*****************************************************/

/**************Removes edit and delete button******/
    edId.remove();
    delId.remove();
/*************************************************/
  
/************************** */
yesFunc = () => {
    var newLi = document.createElement("li");
        newLi.innerHTML= edElem.value;
        newLi.dataset.index = index; //assigns txts index to new li element
        newLi.id = txtId.id;

        if(edElem.value.trimEnd() == "" ) {//returns if text is empty
            alert("Enter text"); //in future will replace this with a proper error message
            return;
         }

        txtId = newLi;
        yesBtn.remove();
        noBtn.remove();
        edElem.parentNode.replaceChild(newLi,edElem);
        newLi.insertAdjacentElement("afterend",edId);
        edId.insertAdjacentElement("afterend",delId);
}
/************************** */


/********************** */
    yesBtn.addEventListener("click",yesFunc);

    edElem.addEventListener('keydown', (e) =>{
        if(e.key === 'Enter'){
            yesFunc();
        }
    })
/********************** */

    noBtn.addEventListener("click",(e) => {
        edElem.parentNode.replaceChild(txtId,edElem); //replaces the created inputfield with original li item
        txtId.insertAdjacentElement("afterend",edId);//adds edit button
        edId.insertAdjacentElement("afterend",delId);//adds delete button

        yesBtn.remove();
        noBtn.remove();
    })
    
}



//Delete function
 delFunc = (itemText,edId,delId) =>{
        var delLi = document.getElementById(itemText.id);
        var edIdpar = document.getElementById(edId.id);
        var delIdpar = document.getElementById(delId.id);

        delLi.remove();
        edIdpar.remove();
        delIdpar.remove();

}


 
 