const grid = document.querySelector("#grids");
const scrolling = document.querySelector("#scroll");
const buttons = document.querySelectorAll("button");
const black = document.querySelector("#blackbtn");
const rainbow = document.querySelector("#rainbowbtn");
const shading = document.querySelector("#shadingbtn");
const gridon = document.querySelector("#gridon");
const gridoff = document.querySelector("#gridoff");
let boxes = document.querySelectorAll(".box");




gridon.addEventListener("click", () => {
    let boxes = document.querySelectorAll(".box"); 
    gridon.classList.toggle("gridbtn");
    boxes.forEach(box => {box.style.border = "0.2px solid white"});
    if (gridoff.classList.contains("gridbtn")){
        gridoff.classList.remove("gridbtn");
    }
 

});

gridoff.addEventListener("click", () => {
    let boxes = document.querySelectorAll(".box");
    gridoff.classList.toggle("gridbtn")
    boxes.forEach(box => {box.style.border = "none"});
    
    if (gridon.classList.contains("gridbtn")){
        gridon.classList.remove("gridbtn");
    }

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
   }

  

}



function startDraw(boxes) {
    if (black.classList.contains("btns")){
        boxes.target.style.backgroundColor = ("orange");
    }else if (rainbow.classList.contains("btns")){
        boxes.target.style.backgroundColor = ("green");
    }else if (shading.classList.contains("btns")){
        boxes.target.style.backgroundColor = ("red")
    }
    else {boxes.target.style.backgroundColor = ("white");}
    
   
}

scrolling.addEventListener("input", scrollFunction);
grid.addEventListener("mouseover", startDraw);

