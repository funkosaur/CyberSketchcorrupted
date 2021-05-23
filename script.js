const grid = document.querySelector("#grids");
const scrolling = document.querySelector("#scroll");
const buttons = document.querySelectorAll("button");
const black = document.querySelector("#blackbtn");
const rainbow = document.querySelector("#rainbowbtn");
const shading = document.querySelector("#shadingbtn");
const gridon = document.querySelector("#gridon");
let boxes = document.querySelectorAll(".box");




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

function lighten () {
    let i = 0
    if (i < 10) {
        i++;
    } else if (i = 10) {
        i = 0;
    }
    document.getElementById("display").innerHTML = i;
}




function startDraw(boxes) {
    
    if (black.classList.contains("btns")){
        boxes.target.style.backgroundColor = ("orange");
    }else if (rainbow.classList.contains("btns")){
        boxes.target.style.backgroundColor = randomColor();
    }else if (shading.classList.contains("btns")){
        /*
        let currentOpacity = Number(this.style.backgroundColor.slice(-4, -1));
                if (currentOpacity <= 0.9) {
                    this.style.backgroundColor = `rgba(0, 0, 0, ${currentOpacity + 0.1})`;
                    this.classList.add('gray');
                    */
        
        
    }
    else {boxes.target.style.backgroundColor = ("white");}
    
   
}

scrolling.addEventListener("input", scrollFunction);
grid.addEventListener("mouseover", startDraw);

