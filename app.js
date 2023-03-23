var todoTxt = document.querySelector('#txt');
var appedndList = document.querySelector('.todoList');
var uList = document.querySelector('.myList');
var todoDiv = document.querySelector('.todo');
todoTxt.addEventListener("click", myfunc() );

function myfunc()  {

    let adiv = document.createElement('li');
    adiv.innerText = todoTxt.value;
    
     todoDiv.appendChild(adiv);

}