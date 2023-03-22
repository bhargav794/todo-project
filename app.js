var btns = document.getElementById('btnn');
btns.addEventListener("click", myfunc() );

function myfunc()  {
    let adiv = document.createElement('p');
    let atxt = document.getElementById('txt').value;
    let t = document.createTextNode(atxt);
    document.appendChild(t);
    document.appendChild(adiv);

}