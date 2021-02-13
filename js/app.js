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
    gameItems[0]
}


//might work

// var eventValue = function (event) {
//     document.body.appendChild(document.createElement('div'))
//     .textContent = event.type;
//  }
//  var pressed = document.querySelector("#pressButtonDemo");
//  pressed.addEventListener("click", eventValue);


// gameItems.forEach(function(item){

//     item.addEventListener('click', rotateItem(e))
//     // item.addEventListener('click', function(e){
//     //     // let clickedItem = e.target;
        

//     //     // clickedItem.style.transform = "rotate(90deg)";
//     // })
// });

