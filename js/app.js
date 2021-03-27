const gameItems = document.querySelectorAll('.game-item');
const btnStartGame = document.getElementById('btn-start-game')


btnStartGame.addEventListener('click', startGame)

function rotateItem(item){
    // item.style.transform = "rotate(90deg)";
    console.log("clicked")

    if (item.classList.contains("no-rotate")){
        item.classList.add("rotate90");
        item.classList.remove("no-rotate");
    } else if(item.classList.contains("rotate90")){
        
        item.classList.add("rotate180");
        item.classList.remove("rotate90");
    } else if (item.classList.contains("rotate180")){
        item.classList.add("rotate270");
        item.classList.remove("rotate180");
    } else if (item.classList.contains("rotate270")){
        item.classList.add("rotate360");
        item.classList.remove("rotate270");
    } else if (item.classList.contains("rotate360")){
        item.classList.add("rotate90");
        item.classList.remove("rotate360");
    }
    
   
}

function startGame() {
    // gameItems[0].classList.add("game-item-fall")
    i = 0;
    

    console.log(gameItems[0].parentElement.parentElement.style)
    // gameItems[0].style.top = "-6rem"

    // gameItems[0].style.bottom = gameItems.parentElement.parentElement.style.top.value

    // while (gameItems[0].style.bottom > 0)
    console.log(gameItems[i].parentElement.parentElement)
    // while (gameItems[i].style.bottom.value > 1){
    //     gameItems[0].style.transform = "translateY(1.5rem)"
    // }
    
}




