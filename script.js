const grid = document.querySelector("#grids");
const scrolling = document.querySelector("#scroll");
const buttons = document.querySelectorAll("button");
const black = document.querySelector("#blackbtn");
const rainbow = document.querySelector("#rainbowbtn");
const shading = document.querySelector("#shadingbtn");
const gridon = document.querySelector("#gridon");
let boxes = document.querySelectorAll(".box");
let size = document.querySelector("#size");

scrolling.addEventListener("input", scrollFunction);
grid.addEventListener("mouseover", startDraw);
makeBoxes()

function makeBoxes() {
    for (let i = 0; i < 256; i++) {
        
        let divs = document.createElement('div');
        divs.setAttribute("class", "box")
        grid.appendChild(divs);
        
   }

   for (let i = 0; i< 256; i++){
        grid.style.gridTemplateColumns = (`repeat(16, 1fr`);
        grid.style.gridTemplateRows = (`repeat(16, 1fr`);
   }
        
}

gridon.addEventListener("click", () => {
    let boxes = document.querySelectorAll(".box"); 
    gridon.classList.toggle("gridbtn");
    boxes.forEach(box => {box.style.border = "0.2px solid white"});
    if (gridon.classList.contains("gridbtn")){
        boxes.forEach(box => {box.style.border = "none"});
        gridon.textContent = "OFF"
    } else {gridon.textContent = "ON"}
 

});


shading.addEventListener("click", () => {

    shading.classList.toggle("btns");
    
    if (black.classList.contains("btns")){
        black.classList.remove("btns")
    }
    if (rainbow.classList.contains("btns")){
        rainbow.classList.remove("btns")
    }
    
})

black.addEventListener("click", () => {

    black.classList.toggle("btns");

    if (rainbow.classList.contains("btns")){
        rainbow.classList.remove("btns");
    }
    if (shading.classList.contains("btns")){
        shading.classList.remove("btns")
    }
});
rainbow.addEventListener("click", () => {

    rainbow.classList.toggle("btns");

    if (black.classList.contains("btns")){
        black.classList.remove("btns");
    }
    if (shading.classList.contains("btns")){
        shading.classList.remove("btns")
    }

});

function scrollFunction() {
    let scrollValue = scrolling.value * scrolling.value;
    
    while ( grid.firstChild ) grid.removeChild( grid.firstChild );
    
    for (let i = 0; i < scrollValue; i++) {
        
        let divs = document.createElement('div');
        divs.setAttribute("class", "box")
        grid.appendChild(divs);    
   }

   for (let i = 0; i< scrollValue; i++){
        grid.style.gridTemplateColumns = (`repeat(${scrolling.value}, 1fr`);
        grid.style.gridTemplateRows = (`repeat(${scrolling.value}, 1fr`);
        size.textContent = (`Size ${scrolling.value}x${scrolling.value}`)
   }

   gridon.classList.remove("gridbtn");
   gridon.textContent = "ON"

  

}

function randomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }



function startDraw(boxes) {
    
    
    if (black.classList.contains("btns")){
        boxes.target.style.backgroundColor = ("rgb(248, 97, 9)");
    }else if (rainbow.classList.contains("btns")){
        boxes.target.style.backgroundColor = randomColor();
    }else if (shading.classList.contains("btns")){               
        let currentOpacity = Number(boxes.target.style.backgroundColor.slice(-4, -1));
        if(currentOpacity == 0) {
            currentOpacity = 1;
        }
        if (currentOpacity <= 1) {
            boxes.target.style.backgroundColor = `rgba(0, 0, 0, ${currentOpacity - 0.1})`;}
                         
    }
    else {boxes.target.style.backgroundColor = ("white");}
    
   
}

