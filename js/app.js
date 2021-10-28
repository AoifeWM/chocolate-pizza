'use strict'

let banner = document.getElementById('banner');
let banner2 = document.getElementById('banner2');

let imageString = "";
for (let i = 0; i < 930; i++){
    imageString += '<img src="img/hr-img.png" alt="">';
}

banner.innerHTML = imageString;
banner2.innerHTML = imageString;

let printButton = document.getElementById('print');

console.log(printButton);

function printFunction(){
    window.print();
}

printButton.addEventListener('click', printFunction);