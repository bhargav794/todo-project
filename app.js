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
        //listDiv.id = "li" + i++;
        listDiv.classList.add('todo-item'); //to add css for this
    
       
         let todoTxtVal = todoTxt.value;
         if(todoTxt.value.trimEnd()== "" ){//returns if text is empty
            alert("Enter text"); //in future will replace this with a proper error message
            return;
         }

          //code to add list to the front end
         const checkbox = document.createElement('input');
         checkbox.type = 'checkbox';
         let inputTxt = document.createElement('li');
         inputTxt.innerText = todoTxtVal;
         inputTxt.appendChild(checkbox);

         inputTxt.classList.add('myListItem'); //to add css for this
         inputTxt.id = "txt" + i++; //remember this way of setting an attribute
         inputTxt.dataset.index = j++; //data-index attribute which is used to retain the position after editing and adding
         listDiv.appendChild(inputTxt);
         
       
         // Add event listener to handle checkbox state changes
         checkbox.addEventListener('change',CheckboxChange);
       
         // Append the checkbox to the list item
         
         
         todoTxt.value = "";
         todoTxt.focus();
    
         //code for creating and adding id to the edit button 
         let editBtn =document.createElement('button');
         var editIcon = document.createElement('i');
         editIcon.classList.add('far','fa-edit');
         editBtn.id = "ed" + i++;
         editBtn.classList.add('myListEdit','editIcon');
         editBtn.appendChild(editIcon);
         listDiv.appendChild(editBtn);

         //code for creating and adding id to the delete button 
         var deleteBtn =document.createElement('button');
         var deleteIcon = document.createElement('i');
         deleteIcon.classList.add('fas', 'fa-trash-alt');
         deleteBtn.id = "del" + i++; // these ids are sent to edit and delete functions , these ids are used to detect the exact list-item
         deleteBtn.classList.add('myListDelete','deleteIcon');
         deleteBtn.appendChild(deleteIcon);
         listDiv.appendChild(deleteBtn); 

         todoDiv.appendChild(listDiv);//Add created div to container div

         editBtn.addEventListener("click",() =>{
            edFunc(inputTxt,editBtn,deleteBtn);
         })
    
        deleteBtn.addEventListener("click", () =>{
            delFunc(inputTxt,editBtn,deleteBtn,listDiv);
        });
        
    
}

addBtn.addEventListener("click",(e) =>{addFunc(e)});

CheckboxChange = (e) =>{
    const checkbox = e.target;
    const liElem = checkbox.parentNode;
    const liParent = liElem.parentNode;

    if(checkbox.checked){
        liParent.classList.add('checkBoxstrike');

    }
    else{
        liParent.classList.remove('checkBoxstrike');

    }

}

//Function to edit with yes/No buttons
edFunc = (itemText,edId,delId) => {
    var txtId = document.getElementById(itemText.id)//li element;
    var index = txtId.dataset.index; //getting data-index attribute of li element
    

    var edElem = document.createElement('input');
    edElem.type = "text";
    edElem.value = txtId.innerText;
    //edElem.id =  "edi" + i++; 
    txtId.parentNode.replaceChild(edElem,txtId);
    edElem.focus();
    edElem.classList.add('myEditedInput')
    

    var yesBtn =document.createElement('button');
    var yesIcon = document.createElement('i');
    yesIcon.classList.add('fas', 'fa-check');
    yesBtn.appendChild(yesIcon);
    yesBtn.classList.add('myListYes','yesIcon');

    var noBtn =document.createElement('button');
    var noIcon = document.createElement('i');
    noIcon.classList.add('fas','fa-times')
    noBtn.appendChild(noIcon);
    noBtn.classList.add('myListNo','noIcon');

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
        newLi.appendChild(txtId.lastChild);
        newLi.classList.add('myListItem')

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
 delFunc = (itemText,edId,delId,ldiv) =>{
        var delLi = document.getElementById(itemText.id);
        var edIdpar = document.getElementById(edId.id);
        var delIdpar = document.getElementById(delId.id);

        delLi.remove();
        ldiv.classList.remove('todo-item');
        edIdpar.remove();
        delIdpar.remove();

}


 
 