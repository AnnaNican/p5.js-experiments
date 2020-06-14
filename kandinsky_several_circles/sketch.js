new p5();

let w, h;

function setup() {
  w = 600;
  h = 600;
  
  createCanvas(w, h);
  background(19, 18, 14);
}


function draw() {
  
  //   big blue circle
  c1_stroke = drawCircle(color(198, 193, 198), w/2, h/2, 4.4*w/8, 0, 0);
  
  c1 = drawCircle(color(21, 33, 72), w/2, h/2, 4.4*w/8, 0, 0);
  
  c2 = drawCircle(color(180, 151, 34), (w/2-w/10*4), (h/2-h/10*4), (w/34), 0, 0); 
  if (mouseIsOverCircle((w/2-w/10*4), (h/2-h/10*4), (w/34))){
      c2 = drawCircle(color(173, 108, 112), (w/2-w/10*4), (h/2-h/10*4), (w/34), 0, 0);
  }else{c2 = drawCircle(color(180, 151, 34), (w/2-w/10*4), (h/2-h/10*4), (w/34), 0, 0);}
  
  c3 = drawCircle(color(173, 108, 112), w/8, 2*h/8, w/8, 0, 0);
  if (mouseIsOverCircle(w/8, 2*h/8, w/8)){
      c3 = drawCircle(color(84, 121, 140), w/8, 2*h/8, w/8, 0, 0);
  }else{c3 = drawCircle(color(173, 108, 112), w/8, 2*h/8, w/8, 0, 0);}
  
  
  c4 = drawCircle(color(84, 121, 140), w/7, 5.5*h/8, 1.1*w/6, 0, 0); 
  if (mouseIsOverCircle(w/7, 5.5*h/8, 1.1*w/6)){
      c4 = drawCircle(color(137, 106, 114), w/7, 5.5*h/8, 1.1*w/6, 0, 0);
  }else{c4 = drawCircle(color(84, 121, 140), w/7, 5.5*h/8, 1.1*w/6, 0, 0);}
  
  c5 = drawCircle(color(137, 106, 114), w/7, 5.5*h/8, w/6, 4, color(30, 21,15)); 
  
//   c6 = drawCircle(color(137, 106, 114), w/7, 5.5*h/8, w/6, 0, 0); 
  
  c7 = drawCircle(color(178, 112, 112), w/7, 7*h/8, w/34, 0, 0);
  
  c8 = drawCircle(color(13, 12,2 ), 0.9*w/7, 7.5*h/8, w/34, 2, color(94, 96, 42));
  if (mouseIsOverCircle(0.9*w/7, 7.5*h/8, w/34)){
      c8 = drawCircle(color(6,6,4), 0.9*w/7, 7.5*h/8, w/34, 2, color(94, 96, 42));
  }else{c8 = drawCircle(color(13, 12,2 ), 0.9*w/7, 7.5*h/8, w/34, 2, color(94, 96, 42));}
  
  
  c9 = drawCircle(color(6,6,4), 3.6*w/8, 3.6*h/8, 2.9*w/8, 0, 0);
  if (mouseIsOverCircle(3.6*w/8, 3.6*h/8, 2.9*w/8)){
      c9 = drawCircle(color(141, 131, 148), 3.6*w/8, 3.6*h/8, 2.9*w/8, 0, 0);
  }else{c9 = drawCircle(color(6,6,4), 3.6*w/8, 3.6*h/8, 2.9*w/8, 0, 0);}
  
  c41 = drawCircle(color(24,25,20), 2*w/8, 4.7*h/8, w/34, 3, color(192, 172, 45));
  
  c10 = drawCircle(color(159,121,29), 2.5*w/8, 5.8*h/8, w/9, 0, 0);
  if (mouseIsOverCircle(2.5*w/8, 5.8*h/8, w/9)){
      c10 = drawCircle(color(139,34,24), 2.5*w/8, 5.8*h/8, w/9, 0, 0);
  }else{c10 = drawCircle(color(159,121,29), 2.5*w/8, 5.8*h/8, w/9, 0, 0);}
  
  c11 = drawCircle(color(139,34,24), 2.5*w/8, 6.8*h/8, w/9, 0.5, 0);
  if (mouseIsOverCircle(2.5*w/8, 6.8*h/8, w/9)){
      c11 = drawCircle(color(236,201,79, 100), 2.5*w/8, 6.8*h/8, w/9, 0.5, 0);
  }else{c11 = drawCircle(color(139,34,24), 2.5*w/8, 6.8*h/8, w/9, 0.5, 0);}
  
  c12 = drawCircle(color(236,201,79, 100), 2*w/8, 6.6*h/8, w/9, 0, 0);
  if (mouseIsOverCircle(2*w/8, 6.6*h/8, w/9)){
       c12 = drawCircle(color(14, 29, 77), 2*w/8, 6.6*h/8, w/9, 0, 0);
  }else{ c12 = drawCircle(color(236,201,79, 100), 2*w/8, 6.6*h/8, w/9, 0, 0);}
  
  c13 = drawCircle(color(164,88,75, 100), 3*w/8, 6.7*h/8, w/9, 0.2, 0);
  if (mouseIsOverCircle(3*w/8, 6.7*h/8, w/9)){
       c13 = drawCircle(color(139,133,160, 100), 3*w/8, 6.7*h/8, w/9, 0.2, 0);
  }else{ c13 = drawCircle(color(164,88,75, 100), 3*w/8, 6.7*h/8, w/9, 0.2, 0);}
  
  c14 = drawCircle(color(128,64,24, 100), 3*w/8, 6.3*h/8, w/9, 0.2, 0);
  if (mouseIsOverCircle(3*w/8, 6.7*h/8, w/9)){
       c14 = drawCircle(color(164,88,75, 100), 3*w/8, 6.3*h/8, w/9, 0.2, 0);
  }else{ c14 = drawCircle(color(128,64,24, 100), 3*w/8, 6.3*h/8, w/9, 0.2, 0);}
  
  c15 = drawCircle(color(138,63,50), 3.1*w/8, 5.7*h/8, w/38, 3, 0);
  if (mouseIsOverCircle(3.1*w/8, 5.7*h/8, w/38)){
       c15 = drawCircle(color(24,50,48), 3.1*w/8, 5.7*h/8, w/38, 3, 0);
  }else{ c15 = drawCircle(color(138,63,50), 3.1*w/8, 5.7*h/8, w/38, 3, 0);}
  
  c16 = drawCircle(color(144,104,122), 3.5*w/8, 5.6*h/8, w/40, 0, 0);
  if (mouseIsOverCircle(3.5*w/8, 5.6*h/8, w/40)){
       c16 = drawCircle(color(113,105,124, 100), 3.5*w/8, 5.6*h/8, w/40, 0, 0);
  }else{ c16 = drawCircle(color(144,104,122), 3.5*w/8, 5.6*h/8, w/40, 0, 0);}
  
  c17 = drawCircle(color(113,105,124, 100), 4.2*w/8, 5.9*h/8, w/8, 0, 0);
  if (mouseIsOverCircle(4.2*w/8, 5.9*h/8, w/8)){
       c17 = drawCircle(color(6, 12, 5), 4.2*w/8, 5.9*h/8, w/8, 0, 0);
  }else{ c17 = drawCircle(color(113,105,124, 100), 4.2*w/8, 5.9*h/8, w/8, 0, 0);}
  
  c18 = drawCircle(color(6, 12, 5), 4*w/8, 6.2*h/8, w/45, 0, 0);
  if (mouseIsOverCircle(4*w/8, 6.2*h/8, w/45)){
       c18 = drawCircle(color(138, 24, 27), 4*w/8, 6.2*h/8, w/45, 0, 0);
  }else{ c18 = drawCircle(color(6, 12, 5), 4*w/8, 6.2*h/8, w/45, 0, 0);}
  
  c19 = drawCircle(color(134, 92, 122, 100), 5*w/8, 2.4*h/8, w/6.5, 1, color(132, 152, 158, 100));
  if (mouseIsOverCircle(5*w/8, 2.4*h/8, w/6.5)){
       c19 = drawCircle(color(106, 135, 112, 170), 5*w/8, 2.4*h/8, w/6.5, 1, color(132, 152, 158, 100));
  }else{ c19 = drawCircle(color(134, 92, 122, 100), 5*w/8, 2.4*h/8, w/6.5, 1, color(132, 152, 158, 100));}
  
  c20 = drawCircle(color(106, 135, 112, 170), 5*w/8, 4*h/8, w/9, 0, 0);
  if (mouseIsOverCircle(5*w/8, 4*h/8, w/9)){
       c20 = drawCircle(color(69, 104, 140, 170), 5*w/8, 4*h/8, w/9, 0, 0);
  }else{ c20 = drawCircle(color(106, 135, 112, 170), 5*w/8, 4*h/8, w/9, 0, 0);}
  
  c21 = drawCircle(color(69, 104, 140, 170), 4.6*w/8, 4.5*h/8, w/20, 0, 0);
  if (mouseIsOverCircle(4.6*w/8, 4.5*h/8, w/20)){
        c21 = drawCircle(color(148, 128, 39, 200), 4.6*w/8, 4.5*h/8, w/20, 0, 0);
  }else{ c21 = drawCircle(color(69, 104, 140, 170), 4.6*w/8, 4.5*h/8, w/20, 0, 0);}
  
  c22 = drawCircle(color(148, 128, 39, 200), 5*w/8, 5.2*h/8, w/8.9, 0, 0);
  if (mouseIsOverCircle(5*w/8, 5.2*h/8, w/8.9)){
        c22 = drawCircle(color(47, 89, 125, 240), 5*w/8, 5.2*h/8, w/8.9, 0, 0);
  }else{ c22 = drawCircle(color(148, 128, 39, 200), 5*w/8, 5.2*h/8, w/8.9, 0, 0);}
  
  c24 = drawCircle(color(47, 89, 125, 240), 5.6*w/8, 6.3*h/8, w/7, 0, 0);
  if (mouseIsOverCircle(5*w/8, 5.2*h/8, w/8.9)){
        c24 = drawCircle(color(154, 107, 16, 100), 5.6*w/8, 6.3*h/8, w/7, 0, 0);
  }else{ c24 = drawCircle(color(47, 89, 125, 240), 5.6*w/8, 6.3*h/8, w/7, 0, 0);}
  
  
  c23 = drawCircle(color(154, 107, 16, 100), 5.6*w/8, 5.2*h/8, w/6.5, 0, 0);
  if (mouseIsOverCircle(5.6*w/8, 5.2*h/8, w/6.5)){
        c23 = drawCircle(color(177, 123, 14, 240), 5.6*w/8, 5.2*h/8, w/6.5, 0, 0);
  }else{ c23 = drawCircle(color(154, 107, 16, 100), 5.6*w/8, 5.2*h/8, w/6.5, 0, 0);}
  
  
  c25 = drawCircle(color(177, 123, 14, 240), 5*w/8, 7.3*h/8, w/20, 0, 0);
  if (mouseIsOverCircle(5.6*w/8, 5.2*h/8, w/6.5)){
        c25 = drawCircle(color(178, 82, 80, 10), 5*w/8, 7.3*h/8, w/20, 0, 0);
  }else{ c25 = drawCircle(color(177, 123, 14, 240), 5*w/8, 7.3*h/8, w/20, 0, 0);}
  
  c26 = drawCircle(color(178, 82, 80, 10), 6.1*w/8, 5.5*h/8, w/16, 0, 0);
  if (mouseIsOverCircle(6.1*w/8, 5.5*h/8, w/16)){
        c26 = drawCircle(color(6, 12, 5), 6.1*w/8, 5.5*h/8, w/16, 0, 0);
  }else{ c26 = drawCircle(color(178, 82, 80, 10), 6.1*w/8, 5.5*h/8, w/16, 0, 0);}
  
  c27 = drawCircle(color(6, 12, 5), 5.9*w/8, 5.6*h/8, w/45, 0, 0); // little black dot
  
  
  c28 = drawCircle(color(193, 162, 75), 6.4*w/8, 1.6*h/8, w/11, 0, 0); 
   if (mouseIsOverCircle(6.4*w/8, 1.6*h/8, w/11)){
        c28 = drawCircle(color(28, 54, 54, 100), 6.4*w/8, 1.6*h/8, w/11, 0, 0);
  }else{ c28 = drawCircle(color(193, 162, 75), 6.4*w/8, 1.6*h/8, w/11, 0, 0);}
  
  
  
  c29 = drawCircle(color(28, 54, 54, 100), 6.3*w/8, 2.9*h/8, w/6, 0, 0); 
  if (mouseIsOverCircle(6.3*w/8, 2.9*h/8, w/6)){
        c29 = drawCircle(color(17,17,17), 6.3*w/8, 2.9*h/8, w/6, 0, 0);
  }else{ c29 = drawCircle(color(28, 54, 54, 100), 6.3*w/8, 2.9*h/8, w/6, 0, 0);}
  
  
  c30 = drawCircle(color(17,17,17), 6.3*w/8, 2.9*h/8, w/24, 0, 0);
  if (mouseIsOverCircle(6.3*w/8, 2.9*h/8, w/24)){
        c30 = drawCircle(color(141, 131, 148), 6.3*w/8, 2.9*h/8, w/24, 0, 0);
  }else{ c30 = drawCircle(color(17,17,17), 6.3*w/8, 2.9*h/8, w/24, 0, 0);}
  
  
  c34 = drawCircle(color(141, 131, 148), 7.2*w/8, 6.3*h/8, w/5, 0, 0); // big purple circle
  if (mouseIsOverCircle(7.2*w/8, 6.3*h/8, w/5)){
        c34 = drawCircle(color(132,106,69), 7.2*w/8, 6.3*h/8, w/5, 0, 0);
  }else{ c34 = drawCircle(color(141, 131, 148), 7.2*w/8, 6.3*h/8, w/5, 0, 0);}
  
  c31 = drawCircle(color(132,106,69, 100), 6.4*w/8, 6*h/8, w/17, 0, 0);
  if (mouseIsOverCircle(6.4*w/8, 6*h/8, w/17)){
        c31 = drawCircle(color(194, 114, 5), 6.4*w/8, 6*h/8, w/17, 0, 0);
  }else{ c31 = drawCircle(color(132,106,69, 100), 6.4*w/8, 6*h/8, w/17, 0, 0);}
  
  c32 = drawCircle(color(194, 114, 5), 7.4*w/8, 2*h/8, w/20, 0, 0);
  if (mouseIsOverCircle(7.4*w/8, 2*h/8, w/20)){
        c32 = drawCircle(color(160, 35, 36), 7.4*w/8, 2*h/8, w/20, 0, 0);
  }else{ c32 = drawCircle(color(194, 114, 5), 7.4*w/8, 2*h/8, w/20, 0, 0);}
  
  c33 = drawCircle(color(160, 35, 36), 7.7*w/8, 1.2*h/8, w/25, 0, 0);
  if (mouseIsOverCircle(7.7*w/8, 1.2*h/8, w/25)){
        c33 = drawCircle(color(136, 21, 11), 7.7*w/8, 1.2*h/8, w/25, 0, 0);
  }else{ c33 = drawCircle(color(160, 35, 36), 7.7*w/8, 1.2*h/8, w/25, 0, 0);}
  
  c35 = drawCircle(color(136, 21, 11), 7.1*w/8, 5.7*h/8, w/45, 0, 0); // little red dot
  
  
  c36 = drawCircle(color(6, 12, 5), 7.3*w/8, 5.7*h/8, w/60, 0, 0); // little black dot
  
  c37 = drawCircle(color(117, 155, 186, 150), 6.8*w/8, 6.2*h/8, w/20, 4, color(153, 132, 94, 150 )); 
  if (mouseIsOverCircle(6.8*w/8, 6.2*h/8, w/20)){
        c37 = drawCircle(color(136, 21, 11), 6.8*w/8, 6.2*h/8, w/20, 4, color(153, 132, 94, 150 ));
  }else{ c37 = drawCircle(color(117, 155, 186, 150), 6.8*w/8, 6.2*h/8, w/20, 4, color(153, 132, 94, 150 ));}
  
  c38 = drawCircle(color(136, 21, 11), 6.6*w/8, 7.5*h/8, w/25, 0, 0); 
  if (mouseIsOverCircle(6.6*w/8, 7.5*h/8, w/25)){
        c38 = drawCircle(color(179, 153, 12 ), 6.6*w/8, 7.5*h/8, w/25, 0, 0);
  }else{ c38 = drawCircle(color(136, 21, 11), 6.6*w/8, 7.5*h/8, w/25, 0, 0);}
  
  c39 = drawCircle(color(179, 153, 12 ), 6.8*w/8, 7.2*h/8, w/40, 0, 0);
  if (mouseIsOverCircle(6.8*w/8, 7.2*h/8, w/40)){
        c39 = drawCircle(color(28, 65, 93), 6.8*w/8, 7.2*h/8, w/40, 0, 0);
  }else{ c39 = drawCircle(color(179, 153, 12 ), 6.8*w/8, 7.2*h/8, w/40, 0, 0);}
  
  c40 = drawCircle(color(28, 65, 93), 7.6*w/8, 7.7*h/8, w/35, 0, 0); 
  if (mouseIsOverCircle(7.6*w/8, 7.7*h/8, w/35)){
        c40 = drawCircle(color(136, 21, 11), 7.6*w/8, 7.7*h/8, w/35, 0, 0);
  }else{ c40 = drawCircle(color(28, 65, 93), 7.6*w/8, 7.7*h/8, w/35, 0, 0);}
  
  
  
  
}


function drawCircle(color_def, cx, cy, size, sw, s_color){
  fill(color_def);
  strokeWeight(sw);
  stroke(s_color);
  ellipse(cx, cy, size);
}

function mouseIsOverCircle(x, y, radius) {
  var result;
  var d = dist(mouseX, mouseY, x, y);
  if (d < radius){
    result = true;
  } else {
    result = false;
  }
  return result;};