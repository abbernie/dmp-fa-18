// setup global variables
var lines;
var inc = 0;

//Setup happens once when you run the sketch
function setup() {
  //Create and size a canvas (w, h)
  createCanvas(300,300);
  lines = new Array();

  for(var i = 0; i < 50; i++){
    var myline = new MovingLine(random(50, 200), random(50,200), 
      random(20,300), random(20,300));
    lines.push(myline);

  }
  // print(lines);

  // for(var i = 0; i < 3; i++){
  //   var myline = new MovingLine(random(50, 200), random(50,200), 
  //     random(20,300), random(20,300));
  //   lines.push(myline);
  // }
}

function draw() {
  background(255);

  for(var i = 0; i < lines.length; i++){
    lines[i].update();
    lines[i].draw();
  }

  inc = (inc + 1)%100;
  
}

// my moving line object

var MovingLine = function(x1,x2,y1,y2){

  this.red = random(255);
  this.green = random(255);
  this.blue = random(255);

  this.x1 = x1;
  this.y1 = x2;
  this.x2 = y1;
  this.y2 = y2;


    this.x1b = random(50,200);
    this.y1b = random(50,200);
    this.x2b = random(20,320);
    this.y2b = random(20, 200);


}

MovingLine.prototype.update = function(){
    
  if(mouseIsPressed){
    this.x1b = random(50,200);
    this.y1b = random(50,200);
    this.x2b = random(20,320);
    this.y2b = random(20, 200);
    inc = 0;


  }

  this.x1 = lerp(this.x1,this.x1b,inc/400);
  this.y1 = lerp(this.y1,this.y1b,inc/400);
  this.x2 = lerp(this.x2,this.x2b,inc/400);
  this.y2 = lerp(this.y2,this.y2b,inc/400);



}

MovingLine.prototype.draw = function(){

  strokeWeight(4);
  stroke(this.red, this.green, this.blue)
  //Draw a rectangle with parameters x,y,width,height
  line(this.x1,this.y1,this.x2,this.y2);


}


function mousePressed(){
  print(lines);
}




