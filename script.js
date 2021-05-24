const grid = document.querySelector("#grids");
const scrolling = document.querySelector("#scroll");
const buttons = document.querySelectorAll("button");
const black = document.querySelector("#blackbtn");
const rainbow = document.querySelector("#rainbowbtn");
const shading = document.querySelector("#shadingbtn");
const gridon = document.querySelector("#gridon");
let boxes = document.querySelectorAll(".box");
let size = document.querySelector("#size");
let resetbtn = document.querySelector("#rstbtn");

scrolling.addEventListener("input", scrollFunction);
grid.addEventListener("mouseover", startDraw);
resetbtn.addEventListener("click", scrollFunction);
makeBoxes()
//initial .box div placement
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
//showing and removing borders on elements with .box
gridon.addEventListener("click", () => {
    let boxes = document.querySelectorAll(".box"); 
    gridon.classList.toggle("gridbtn");
    boxes.forEach(box => {box.style.border = "0.2px solid #05d9e8"});
    if (gridon.classList.contains("gridbtn")){
        boxes.forEach(box => {box.style.border = "none"});
        gridon.textContent = "OFF"
    } else {gridon.textContent = "ON"}
 

});

//toggle events for color buttons
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
//scroll function to make and delete divs in grid
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
//color randomizers for cyber and rainbow
function cyber () {
    let cyberColors = ["#ff124f", "#ff00a0", "#fe75fe", "#7a04eb", "#120458"];
    let diffColors = cyberColors[Math.floor(Math.random()*cyberColors.length)];
    return diffColors

}

function randomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }


// function to change the colours of .box divs on mouseover
function startDraw(boxes) {
    
    
    if (black.classList.contains("btns")){
        boxes.target.style.backgroundColor = cyber();
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

