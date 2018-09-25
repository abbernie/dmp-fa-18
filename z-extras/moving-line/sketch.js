// setup global variables

// the (x,y) coordinates of our line

var x1a = 50;
var y1a = 200;
var x2a = 50;
var y2a = 65;


// (x,y) coordinates of where we want our line to move to
var x1b = 0; 
var y1b = 0; 
var x2b = 0; 
var y2b = 0;

// the incrementor that will take it there
var inc = 0;

function setup() {
  //Create and size a canvas (w, h)
  createCanvas(300,300);

  frameRate(30);

}

function draw() {

  // draw the background white
  background(255);

  if(mouseIsPressed){

    x1b = random(50,200);
    y1b = random(50,200);
    x2b = random(20,320);
    y2b = random(20, 200);

    inc = 0;
  }

  x1a = lerp(x1a,x1b,inc/100);
  y1a = lerp(y1a,y1b,inc/100);
  x2a = lerp(x2a,x2b,inc/100);
  y2a = lerp(y2a,y2b,inc/100);

  strokeWeight(3);
  line(x1a,y1a,x2a,y2a);



  inc = (inc + 1)%100;
  console.log(inc);

}




// function draw(){

//   background(255);

//   if(mouseIsPressed){
//     x1b = random(50,200);
//     y1b = random(50,200);

//     inc = 0;
//   }

//   x1a = lerp(x1a,x1b,inc);
//   y1a = lerp(y1a,y1b,inc);

//   fill(255,0,0);
//   rect(x1a,y1a,50,50);

//   inc+=0.1;
//   console.log(inc);
// }



