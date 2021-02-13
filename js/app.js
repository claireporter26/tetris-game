const gameItems = document.querySelectorAll('.game-item');


function rotateItem(item){
    // item.style.transform = "rotate(90deg)";
    console.log("clicked")

    if(!item.classList.contains("rotate90")){
        item.classList.add("rotate90");
    }else if(item.classList.contains("rotate90")){
        
        item.classList.add("rotate180");
        item.classList.remove("rotate90");
    }else{
        console.log("something else")
    }
    
   
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

