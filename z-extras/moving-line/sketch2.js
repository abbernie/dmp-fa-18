var triangles = [];

function setup(){
	createCanvas(displayWidth,displayHeight);

	for(var i = 0; i < 10; i++){
		triangles.push(new MyTriangle());
	}
	
}

function draw(){
	background(255);

	for(var i = 0; i < triangles.length; i++){
		triangles[i].update();
		triangles[i].draw();
	}

	
}

var MyTriangle = function(){

 this.x1a = 30; 
 this.y1a = 50;
 this.x2a = 40;
 this.y2a = 55;
 this.x3a = 60;
 this.y3a = 80;
 
 this.x1b = random(0,displayWidth);
 this.y1b = random(0,displayHeight);
 this.x2b = random(0, displayWidth);
 this.y2b = random(0, displayHeight); 
 this.x3b = random(0,displayWidth); 
 this.y3b = random(0,displayHeight);

 this.inc = 0;

 this.myColor = color(random(255), random(255), random(255), random(255));

}

MyTriangle.prototype.update = function(){

	if(mouseIsPressed){
		this.x1b = random(50,75);
		this.y1b = random(200,500);
		this.x2b = random(100, 500);
		this.y2b = random(300, 915);
		this.x3b = random(100,650);
		this.y3b = random(300,1080);

		this.inc = 0;
	}

	this.x1a = lerp(this.x1a, this.x1b, this.inc/100);
	this.y1a = lerp(this.y1a, this.y1b, this.inc/100);
	this.x2a = lerp(this.x2a, this.x2b, this.inc/100);
	this.y2a = lerp(this.y2a, this.y2b, this.inc/100);
	this.x3a = lerp(this.x3a, this.x3b, this.inc/100);
	this.y3a = lerp(this.y3a, this.y3b, this.inc/100);

	this.inc = (this.inc + 1)%100;

}

MyTriangle.prototype.draw = function(){

	fill(this.myColor);
	triangle(this.x1a,this.y1a,this.x2a,this.y2a,this.x3a,this.y3a);

}








