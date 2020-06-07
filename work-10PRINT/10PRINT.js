let x = 0;
let y = 0;

let x_spacing = 20;
let y_spacing = 40;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255, 255, 255);
}

function draw() {

  let num = random(1);
  if (num < 0.3) {
    // stroke(0, 255, 0, 150);
    stroke(164, 149, 185, 50);
    fill(164, 149, 185, 50);
    // strokeWeight(3);
    // line(x, y, x + x_spacing, y + y_spacing);
    circle(x,y, random(1, 100));
  } 
  else {
    stroke(0, 255, 0, 150);
    textSize(random(10, 30));
    text("👩🏻‍💻", x, y);    
  }

  //let's get another random decimal number between 0 and 1
  let another_num = random(1);
    if (another_num < 0.2) {
    noStroke();
    fill(164, 149, 185, 1200);
    circle(x, y, 10)
  }

  
  
  //PROGRESSING OUR 10PRINT - you don't have to edit lines 71 - 79 as the code below progresses our sketch to continue to draw our 10PRINT elements
  //move our x position horizontally by x_spacing value (this is set in line 11 of our code
  x = x + x_spacing;
  
  //if x position is greater than width of the canvas, meaning that it has filled the current row
  if (x > width) {
    x = 0;
    y = y + y_spacing;
  }
  
}

