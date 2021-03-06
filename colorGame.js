let numSquares = 6;
let colors = [];
let pickedColor = "";
const squares = document.querySelectorAll(".square");
const colorDisplay = document.getElementById("colorDisplay");
const messageDisplay = document.querySelector("#message");
const h1 = document.querySelector("h1");
const resetButton = document.querySelector("#reset");
const modeButtons = document.querySelectorAll(".mode");

init();

function init() {
  // mode buttons EventListeners
  for (let i = 0; i < modeButtons.length; i++) {
    modeButtons[i].addEventListener("click", function () {
      modeButtons[0].classList.remove("selected");
      modeButtons[1].classList.remove("selected");
      this.classList.add("selected");
      this.textContent === "Easy" ? (numSquares = 3) : (numSquares = 6);
      // if(this.textContent === "Easy"){
      // 	numSquares = 3;
      // }else{
      // 	numSquares = 6;
      // }
      reset();
      // figure out how many squares to show
      // pick new color
      // pick a new pickedColor
      // update page to reflect changes
    });
  }

  for (i = 0; i < squares.length; i++) {
    // add click listener to squares
    squares[i].addEventListener("click", function () {
      // grab color of clicked square
      let clickedColor = this.style.backgroundColor;
      // compare color to pickedColor
      if (clickedColor === pickedColor) {
        messageDisplay.textContent = "Correct!";
        resetButton.textContent = "Play Again?";
        changeColors(clickedColor);
        h1.style.backgroundColor = clickedColor;
      } else {
        this.style.backgroundColor = "#232323";
        messageDisplay.textContent = "Try Again!";
      }
    });
  }
  reset();
}

function reset() {
  colors = generateRandomColors(numSquares);
  // pick a new random color from array
  pickedColor = pickColor();
  // change colorDisplay to match picked color
  colorDisplay.textContent = pickedColor;
  // change colors of squares
  for (i = 0; i < squares.length; i++) {
    if (colors[i]) {
      squares[i].style.display = "block";
      squares[i].style.backgroundColor = colors[i];
    } else {
      squares[i].style.display = "none";
    }
  }
  h1.style.backgroundColor = "steelblue";
  resetButton.textContent = "New Colors";
  messageDisplay.textContent = "";
}
// !!!!!Am  inlocuit tot codul asta cu reset();
// easyBtn.addEventListener("click", function(){
// 	easyBtn.classList.add("selected");
// 	hardBtn.classList.remove("selected");
// 	numSquares = 3
// 	colors = generateRandomColors(numSquares);
// 	pickedColor = pickColor();
// 	colorDisplay.textContent = pickedColor;
// 	for (var i = 0; i < squares.length; i++){
// 		if(colors[i]){
// 			squares[i].style.backgroundColor = colors[i];
// 		}else {
// 			squares[i].style.display = "none";
// 		}
// 	}
// })
// hardBtn.addEventListener("click", function(){
// 	easyBtn.classList.remove("selected");
// 	hardBtn.classList.add("selected");
// 	numSquares = 6
// 	colors = generateRandomColors(numSquares);
// 	pickedColor = pickColor();
// 	colorDisplay.textContent = pickedColor;
// 	for (var i = 0; i < squares.length; i++){
// 		squares[i].style.backgroundColor = colors[i];
// 		squares[i].style.display = "block";
// 		}
// })

resetButton.addEventListener("click", function () {
  // // generate new colors
  // colors = generateRandomColors(numSquares);
  // // pick a new random color from array
  // pickedColor = pickColor();
  // // change colorDisplay to match picked color
  // colorDisplay.textContent = pickedColor;
  // // change colors of squares
  // for (i = 0; i < squares.length; i++){
  // squares[i].style.backgroundColor = colors[i];
  // }
  // h1.style.backgroundColor = "steelblue";
  // this.textContent = "New Colors";
  // messageDisplay.textContent = "";
  reset();
});

// colorDisplay.textContent = pickedColor;

// !!!!!am pus totul in init()!!!!!!
// for (i = 0; i < squares.length; i++){
// 	// add initial color to squares
// 	squares[i].style.backgroundColor = colors[i];
// 	// add click listener to squares
// 	squares[i].addEventListener("click", function(){
// 		// grab color of clicked square
// 		var clickedColor = this.style.backgroundColor;
// 		// compare color to pickedColor
// 		if (clickedColor === pickedColor){
// 			messageDisplay.textContent = "Correct!"
// 			resetButton.textContent = "Play Again?"
// 			changeColors(clickedColor);
// 			h1.style.backgroundColor = clickedColor;
// 		} else {
// 			this.style.backgroundColor = "#232323";
// 			messageDisplay.textContent = "Try Again!"
// 		}
// 	})
// }

function changeColors(color) {
  // loop to all squares
  for (i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = color;
  }
  // change each color to match given color
}

function pickColor() {
  let random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

function generateRandomColors(num) {
  // make an array
  let arr = [];
  // repeat num times
  for (var i = 0; i < num; i++) {
    arr.push(randomColor());
    // get random color and push in to array
  }
  // return that array
  return arr;
}

function randomColor() {
  // pick a red from 0 - 255
  // pick a green from 0 - 255
  // pick a blue from 0 - 255
  var r = Math.floor(Math.random() * 256);
  var g = Math.floor(Math.random() * 256);
  var b = Math.floor(Math.random() * 256);
  return "rgb(" + r + ", " + g + ", " + b + ")";
}
