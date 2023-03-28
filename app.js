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
        

        var listDiv = document.createElement('div');
        listDiv.id = "li" + i++;
    
       
         let todoTxtVal = todoTxt.value ;
         if(todoTxt.value.trimEnd()== "" ){//returns if text is empty
            alert("Enter text"); //in future will replace this with a proper error message
            return;
         }

          //code to add list to the front end
         let inpTxt = document.createElement('li');
         inpTxt.innerText = todoTxtVal;
         listDiv.appendChild(inpTxt);
         inpTxt.id = "txt" + i++; // remember this way of setting an attribute
         inpTxt.dataset.index = j++;
         
         
         
         todoTxt.value = "";
         todoTxt.focus();
    
         //code for creating and adding id to the edit button 
         let editBtn =document.createElement('button');
         editBtn.innerHTML= 'edit';
         editBtn.id = "ed" + i++;
         listDiv.appendChild(editBtn);

         todoDiv.appendChild(listDiv);



         editBtn.addEventListener("click",() =>{
            edFunc(inpTxt,editBtn,deleteBtn,listDiv);
         })
    
         //code for creating and adding id to the delete button 
         var deleteBtn =document.createElement('button');
         deleteBtn.innerHTML= 'Delete';
         deleteBtn.id = "del" + i++;
         listDiv.appendChild(deleteBtn);  

        deleteBtn.addEventListener("click", () =>{
            delFunc(inpTxt,editBtn,deleteBtn);
        });
        
    
}
addBtn.addEventListener("click",(e) =>{addFunc(e,j++)});


edFunc = (itemText,edId,delId,listDiv) => {
    var txtId = document.getElementById(itemText.id)//li element;
    var index = txtId.dataset.index;
    //var ediBtn = document.getElementById(edId.id);
    //var delBtn = document.getElementById(delId.id);

    let listDivid = document.getElementById(listDiv.id);
    

    var edElem = document.createElement('input');
    edElem.type = "text";
    edElem.value = txtId.innerHTML;
    edElem.id =  "edi" + i++; 
    txtId.parentNode.replaceChild(edElem,txtId);
    edElem.focus();
    

    var yesBtn =document.createElement('button');
    yesBtn.innerHTML= 'Yes';
    yesBtn.id = "yes" + i++;

    var noBtn =document.createElement('button');
    noBtn.innerHTML= 'No';
    noBtn.id = "no" + i++;

    edElem.insertAdjacentElement("afterend",yesBtn);
    yesBtn.insertAdjacentElement("afterend",noBtn);

    edId.remove();
    delId.remove();

   
    yesBtn.addEventListener("click",(e) => {
        var newLi = document.createElement("li");
        newLi.innerHTML= edElem.value;
        newLi.dataset.index = index;
        newLi.id = txtId.id;

        if(edElem.value.trimEnd() == "" ){//returns if text is empty
            alert("Enter text"); //in future will replace this with a proper error message
            return;
         }
        txtId = newLi;
        yesBtn.remove();
        noBtn.remove();
        edElem.parentNode.replaceChild(newLi,edElem);
        newLi.insertAdjacentElement("afterend",edId);
        edId.insertAdjacentElement("afterend",delId);

        /*yesBtn.parentNode.replaceChild(ediBtn,yesBtn);
        noBtn.parentNode.replaceChild(delBtn,noBtn);*/        
    });


    noBtn.addEventListener("click",(e) => {
        edElem.parentNode.replaceChild(txtId,edElem);
        txtId.insertAdjacentElement("afterend",edId);
        edId.insertAdjacentElement("afterend",delId);

        yesBtn.remove();
        noBtn.remove();
    })
    
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


 
 