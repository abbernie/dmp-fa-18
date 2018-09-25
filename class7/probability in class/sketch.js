var x, y;
var colors;

function setup(){
  createCanvas(windowWidth,windowHeight);
  x = width/2;
  y = height/2;
  colors = color(0,25);

  background(255);

}


function draw(){


  if(random(0,100) > 50){ 
    // 40% chance that this will happen
    x = x + 1; 

    if(random(0,100) > 50){
      y = y + 1;
    } else { 
      y = y - 1;
      
    }

  } else {
    // 60% this will happen
    x = x - 1;

    if(random(0,100) > 50){
      //50% either will happen
      y = y + 1;

      

    } else { 
      y = y - 1;
    }

  }

  strokeWeight(3);
  stroke(colors)
  point(x,y);

}