
const startBtn = document.getElementById("btn-start-game")
const canvas = document.getElementById("canvas");
const tetrisImg = document.getElementById("tetrisImg");




const ctx = canvas.getContext("2d");

ctx.fillStyle = "#FF0000";
ctx.fillRect(0, 0, 300, 450);

// ctx.moveTo(0, 0);
// ctx.lineTo(300, 450);
// ctx.stroke();

tetrisImg.style.width ="70px";

let tetrisImgStartY = 120;
let tetrisImgStartX = -10;

ctx.drawImage(tetrisImg, tetrisImgStartY, tetrisImgStartX);



let drop = function(){

    // console.log("drop worked");
   

    
var intervalID = setInterval(function(){

let tetrisImgRect = tetrisImg.getBoundingClientRect();
// console.log(tetrisImgRect)

tetrisImgStartX = tetrisImgStartX + 10;

  // console.log(tetrisImgStartX);
  ctx.fillRect(0, 0, 300, 450);
    //     tetrisImgStartX =  tetrisImgStartX + 10;
        ctx.drawImage(tetrisImg, tetrisImgStartY, tetrisImgStartX);
        // tetrisImgRect.style.border = "2px solid blue"
        // console.log(tetrisImgRect.top + tetrisImgRect.width);
  if (tetrisImgStartX == 380) clearInterval(intervalID);
}, 500);

 

// intervalID();

    function dropAction(){

        // while(tetrisImgStartX < 100){
        //     tetrisImgStartX =  tetrisImgStartX + 10;
        //     console.log(tetrisImgStartX);
        //     // ctx.fillRect(0, 0, 300, 450);
        //     // setInterval(function(){
        //     //     alert("working")
        //     //     // ctx.fillRect(0, 0, 300, 450);
        //     //     // tetrisImgStartX =  tetrisImgStartX + 10;
        //     //     // ctx.drawImage(tetrisImg, tetrisImgStartY, tetrisImgStartX);
        //     // }, 2000);
        //     // ctx.drawImage(tetrisImg, tetrisImgStartY, tetrisImgStartX);
        //     setInterval(function(callback){
        //         // alert("Hello"); 
                
        //         ctx.fillRect(0, 0, 300, 450);
        //         ctx.drawImage(tetrisImg, tetrisImgStartY, tetrisImgStartX);
        //         callback()
        //     }, 200);
        
    }

    

   
}

startBtn.addEventListener("click", drop);

document.onkeydown = checkKey;

function checkKey(e) {

    e = e || window.event;

  
    if (e.keyCode == '40') {
        // down arrow
        console.log("down");
        tetrisImgStartX = 380;
    }
    else if (e.keyCode == '37') {
       // left arrow
       console.log("left");
       tetrisImgStartY = tetrisImgStartY - 10;
    }
    else if (e.keyCode == '39') {
       // right arrow
       console.log("right");
       tetrisImgStartY = tetrisImgStartY + 10;
    }

}





// const gameItems = document.querySelectorAll('.game-item');
// const btnStartGame = document.getElementById('btn-start-game')


// btnStartGame.addEventListener('click', startGame)

// function rotateItem(item){
//     // item.style.transform = "rotate(90deg)";
//     console.log("clicked")

//     if (item.classList.contains("no-rotate")){
//         item.classList.add("rotate90");
//         item.classList.remove("no-rotate");
//     } else if(item.classList.contains("rotate90")){
        
//         item.classList.add("rotate180");
//         item.classList.remove("rotate90");
//     } else if (item.classList.contains("rotate180")){
//         item.classList.add("rotate270");
//         item.classList.remove("rotate180");
//     } else if (item.classList.contains("rotate270")){
//         item.classList.add("rotate360");
//         item.classList.remove("rotate270");
//     } else if (item.classList.contains("rotate360")){
//         item.classList.add("rotate90");
//         item.classList.remove("rotate360");
//     }
    
   
// }

// function startGame() {
//     // gameItems[0].classList.add("game-item-fall")
//     i = 0;
    

//     console.log(gameItems[0].parentElement.parentElement.style)
//     // gameItems[0].style.top = "-6rem"

//     // gameItems[0].style.bottom = gameItems.parentElement.parentElement.style.top.value

//     // while (gameItems[0].style.bottom > 0)
//     console.log(gameItems[i].parentElement.parentElement)
//     // while (gameItems[i].style.bottom.value > 1){
//     //     gameItems[0].style.transform = "translateY(1.5rem)"
//     // }
    
// }




