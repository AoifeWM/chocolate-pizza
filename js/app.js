'use strict'

let banner = document.getElementById('banner');

let imageString = "";
for (let i = 0; i < 930; i++){
    imageString += '<img src="img/hr-img.png" alt="">';
}

banner.innerHTML = imageString