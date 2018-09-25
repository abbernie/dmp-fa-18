var dots = [];

var x,y;

function setup() {
  createCanvas(windowWidth,windowHeight);

  // for(var i = 0; i < 20; i++){
  // 	var r = random(255);
  // 	var g = random(255);
  // 	var b = random(255);

  // 	dots[i] = new RandomDot(width/2, height/2, color(r,g,b, 10));
  // }

  x = width/2;
  y= height/2;


  background(255);
}

function draw() {


 

  // there is a 50% chance that the x location of the circle
  // will increase and a 50% chance it will decrease, as random 
  // will return a number btwn 0 and 1

  if ( random(0,1) < 0.5) {

    x++;

    if (random(0,1) < 0.6){
    	y++;
    } else {
    	y--;
    }

  } else {

    x--;

    if (random(0,1) < 0.4){
    	y++;
    } else {
    	y--;
    }

  }

  fill(0);
  ellipse(x,y,5);

}

//   for(var i = 0; i < dots.length; i++){
//   	dots[i].wiggle();
//   	dots[i].draw();
//   }
// }


// function RandomDot(xloc, yloc, dotColor){

// 	this.x = xloc;
// 	this.y = yloc;
// 	this.color = dotColor;

// 	this.wiggle = function(){
// 		if ( random(0,1) < 0.5) {

// 		    this.x++;

// 		    if (random(0,1) < 0.6){

// 		    	this.y++;

// 		    } else {

// 		    	this.y--;

// 		    }

// 		} else {

// 		    this.x--;

// 		    if (random(0,1) < 0.4){

// 		    	this.y++;

// 		    } else {

// 		    	this.y--;

// 		    }

// 		  }
// 	}

// 	this.draw = function(){
// 		noStroke();
// 		fill(this.color);
//   		ellipse(this.x,this.y,5);
// 	}

// }