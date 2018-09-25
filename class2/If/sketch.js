var x = 0
var y = 200

var xinc = 5;
var yinc = 5;

function setup() {
  createCanvas(500,500)
}

function draw() {
  
  background(0)
  ellipse(x,y,50,50)
  
  x = x + xinc;

  if ( x == 500 || x == 0 ) {
	  	xinc = xinc * -1;
  } 

 y = y + yinc;

  if ( y == 500 || y == 0 ) {
	  	yinc = yinc * -1;
  } 




  
}