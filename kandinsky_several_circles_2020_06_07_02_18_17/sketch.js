new p5();

let w = windowWidth;
let h = windowHeight;
  

function setup() {
  let w = windowWidth;
  let h = windowHeight;
  
  createCanvas(windowWidth, windowHeight);
  background(19, 18, 14);
}

function draw() {
  
  
  fill(18, 33, 69);
  strokeWeight(7);
  stroke(199, 194, 189);
  circle(w/2, h/2, 3*w/4);
  
  fill(180, 151, 34);
  noStroke();
  circle(w/2-w/10*4, h/2-h/10*4, w/13);
  
  fill(180, 151, 34);
  noStroke();
  circle(w/2-w/10*4, h/2-h/10*4, w/13);
  
  
  // print(mouseX, mouseY)
}