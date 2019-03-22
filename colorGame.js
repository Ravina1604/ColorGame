var colors = [];
var numColors = 6;
var pickedColor;
var rgbColor = document.querySelector("#rgbColor");
var squares = document.querySelectorAll(".square");
var easybtn = document.querySelector("#easy");
var hardbtn = document.querySelector("#hard");
var resetbtn=document.querySelector("#reset");
var messageDisplay=document.getElementById("messageDisplay");
var h1=document.querySelector("h1");
colors = generateColors(numColors);
generateSquares();
pickedColor = pickColor();
rgbColor.textContent = pickedColor;


easybtn.addEventListener("click", function () {
    messageDisplay.textContent="";
    resetbtn.textContent="New Colors";
    this.classList.add("selected");
    hardbtn.classList.remove("selected" );
    numColors = 3;
    colors = generateColors(numColors);
    generateSquares();
    pickedColor = pickColor();
    rgbColor.textContent = pickedColor;
});

hardbtn.addEventListener("click",function(){
    messageDisplay.textContent="";
    resetbtn.textContent="New Colors";
    this.classList.add("selected");
    easybtn.classList.remove("selected" );
    numColors = 6;
    colors = generateColors(numColors);
    generateSquares();
    pickedColor = pickColor();
    rgbColor.textContent = pickedColor;
});

resetbtn.addEventListener("click",function(){
    messageDisplay.textContent="";
    resetbtn.textContent="New Colors";
    colors=generateColors(numColors);
    generateSquares();
    pickedColor=pickColor();
    rgbColor.textContent=pickedColor;
    h1.style.backgroundColor="steelblue";
})


function pickColor() {
    return colors[Math.floor(Math.random() * colors.length)];
}

function generateColors(numColors) {
    var arr = [];
    for (var i = 0; i < numColors; i++) {
        arr.push(randomColor());
    }
    return arr;
}

function randomColor() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);

    return "rgb(" + r + ", " + g + ", " + b + ")";
}

function generateSquares() {
    console.log(colors);
    for (var i = 0; i < squares.length; i++) {
        if (colors[i]) {
            squares[i].style.display="block";
            squares[i].style.backgroundColor = colors[i];
        }
        else {
            squares[i].style.display="none";
        }


        squares[i].addEventListener("click",function(){
            var selectedColor=this.style.backgroundColor;
            if(selectedColor===pickedColor){
                changeColors(selectedColor);
                messageDisplay.textContent="Correct!";
                resetbtn.textContent="Play Again?";
                h1.style.backgroundColor=selectedColor;
            }
            else{
                messageDisplay.textContent="Try Again!!"
                this.style.backgroundColor="#232323";
            }
        });

    }
}

function changeColors(color){
    for(var i=0;i<squares.length;i++){
        squares[i].style.backgroundColor=color;
    }
}