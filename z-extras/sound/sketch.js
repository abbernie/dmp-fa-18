var osc, env;

function setup() {
  //Create and size a canvas (w, h)
  var canvas = createCanvas(400,400);

  env = new p5.Env();
  env.setADSR(0.001,0.2,0.2,1);
  env.setRange(0.5,0);

  osc = new p5.Oscillator();
  osc.setType('square');
  osc.freq(200);
  osc.amp(env);
  osc.start();

  canvas.mousePressed(playEnv)
  background(0);
  
}

function draw(){
  osc.freq(map(mouseX,0,displayWidth,1,1000));
}

function playEnv(){
  env.play();
}





























// function draw() {
//   background(0,10);

//   if(mouseIsPressed){
    


//     if(mouseX >= (width/2 - radius) && mouseX <= (width/2 + radius) 
//       && mouseY >= (height/2 - radius) && mouseY <= (height/2 + radius)){

//       fill(0,0,255);
//       blip.play();

//     } else {
//       fill(255,0,0);
//     }
    
//   } else {
//     fill(255,0,0);
//   }
  
//   ellipse(width/2, height/2, radius*2, radius*2);

//  }


