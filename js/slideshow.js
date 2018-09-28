/*  
    get all images into one place
    change src of img to be another after certain amount of time
    loop through that
*/

let pictures = ['url("/img/pexels-photo-1026392.jpeg")','url("/img/architectural-design-architecture-blue-204976.jpg")'];

let slideshowDiv = document.querySelector('.top-header');
let headertitle = document.querySelector('.top-header h2');
let currentImg = 0;
let changeCurrentImg = function(){
    currentImg = currentImg + 1;
    if(currentImg%2 == 0){
        headertitle.innerText = "Beautiful Masonry";
        return 0;
    }
    else{
        headertitle.innerText = "High Quality Roofing";
        return 1;
    }
}

function nextBackground() {
    slideshowDiv.style.backgroundImage = `${pictures[changeCurrentImg()]}`;
    slideshowDiv.style.transition = "1.5s";
    setTimeout(nextBackground, 10000);
}

nextBackground();