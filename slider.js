document.getElementById("left").addEventListener("click", leftClick);
document.getElementById("right").addEventListener("click", rightClick);
let imagesList = [""];
for(let y = 0; y < document.querySelectorAll(".inv").length; y++ ){
    imagesList[y] = document.getElementById("image"+y).src;
}
let i = 0;
function leftClick() {
    if(i <= imagesList.length && i > 0){
        i--;
        document.getElementById("image").src = imagesList[i];
    }
    else{
        i = imagesList.length-1;
        document.getElementById("image").src = imagesList[i];
    }
}
function rightClick() {
    if(i < imagesList.length - 1 && i >= 0){
        i++;
        document.getElementById("image").src = imagesList[i];
    }
    else{
        i = 0;
        document.getElementById("image").src = imagesList[i];
    }
}
/*1. Please in your HTML document create div.slider and his children 1st img#image and src with first value of path of your first image
  2.  2 buttons with onclicks(leftClick and rightClick) or with id = left and right */