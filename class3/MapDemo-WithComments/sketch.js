var angle = 0;
var inc;


function setup() {
  createCanvas(window.innerWidth,window.innerHeight);
  noStroke();
  inc = TWO_PI/500.0;
}

function draw() {
  
  // Draw a white background
  background(126,255,155);
  
  // Use map() to scale an input value to a new range.
  // In this case, our initial range is 0 to width
  // and our new desired range is 0 to 255.
  // This re-scales our mouseX to be between 0 and 255 
  // (which is the range for a color value)
  var opacity = map(sin(angle)+1,0,1,30,50);
  angle+=inc
  console.log(sin(angle))
  // set a fill style with our new opacity
  fill(255,150,0,opacity)
  for(var i = 0; i < displayWidth; i += 50){
    for(var j = 0; j < displayHeight;j += 50){

        // draw the circle
        ellipse(i,j,25,25)

    }
  }

  
}