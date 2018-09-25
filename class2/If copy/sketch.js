var x = 0
var y = 0


function setup() {
  createCanvas(1000,500)
}

function draw() {
  
  background(0)
  
  for(var column = 0; column < displayHeight; column = column + 30){
    for(var row = 0; row < displayWidth; row = row + 30){
      
      var red = map(row, 0, displayWidth, 0, 255);
      fill(red, 126, 56);
      ellipse(row,column,25,25)
    }
  }

  
}