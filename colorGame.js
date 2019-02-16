var numSquares = 6;
var colors = generateRandomColors(numSquares);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColorFn();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");

easyBtn.addEventListener("click", function() {
  hardBtn.classList.remove("selected");
  easyBtn.classList.add("selected");
  numSquares = 3;
  colors = generateRandomColors(numSquares);
  pickedColor = pickColorFn();
  colorDisplay.textContent = pickedColor;
  for (var i = 0; i < squares.length; i++) {
    if (colors[i]) {
      squares[i].style.background = colors[i];
    } else {
      squares[i].style.display = "none";
    }
  }
});
hardBtn.addEventListener("click", function() {
  hardBtn.classList.add("selected");
  easyBtn.classList.remove("selected");
  numSquares = 6;
  colors = generateRandomColors(numSquares);
  pickedColor = pickColorFn();
  colorDisplay.textContent = pickedColor;
  for (var i = 0; i < squares.length; i++) {
    squares[i].style.background = colors[i];
    squares[i].style.display = "block";
  }
});

resetButton.addEventListener("click", function() {
  // generate new colors
  colors = generateRandomColors(numSquares);
  // pick a new random color from array
  pickedColor = pickColorFn();
  // change color display to match picked color
  colorDisplay.textContent = pickedColor;
  // change colors of squares on the page
  for (var i = 0; i < squares.length; i++) {
    squares[i].style.background = colors[i];
  }
  h1.style.background = "#4682b4";
});

colorDisplay.textContent = pickedColor;

for (var i = 0; i < squares.length; i++) {
  // add initial colors to squares
  squares[i].style.backgroundColor = colors[i];

  //   add click listener to squares
  squares[i].addEventListener("click", function() {
    //   grab color of clicked
    var clickedColor = this.style.backgroundColor;
    // compare color
    if (clickedColor === pickedColor) {
      // dom manipulation section
      messageDisplay.textContent = "Correct!";
      resetButton.textContent = "Play Again?";
      changeColors(clickedColor);
      h1.style.background = clickedColor;
    } else {
      this.style.background = "#232323";
      messageDisplay.textContent = "Try Again";
    }
  });
}

function changeColors(color) {
  // loop through and change each color to match winning color
  for (var i = 0; i < squares.length; i++) {
    squares[i].style.background = color;
  }
}

function pickColorFn() {
  // creating color game 3-- Math.random gives you a random number between 0 and 1. so multiplay that by 6 to get 6 numbers, and so on. and math.floor chops off the decimal.
  var random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

function generateRandomColors(num) {
  // make an array
  var arr = [];
  // repeat num times
  for (var i = 0; i < num; i++) {
    // get random color and push into array
    arr.push(randomColor());
  }
  // return array
  return arr;
}

function randomColor() {
  // pick a "red from 0-255"
  var r = Math.floor(Math.random() * 256);
  // pick a "green from 0-255"
  var g = Math.floor(Math.random() * 256);
  // pick a "blue from 0-255"
  var b = Math.floor(Math.random() * 256);
  // return "rgb(" + r + "," + g + "," + b + ")";
  var rgbString = `rgb(${r}, ${g}, ${b})`;
  return rgbString;
}
