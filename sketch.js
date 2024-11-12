let cor;
let posicaoHorizontal;
let posicaoVertical;

function setup() {
  createCanvas(400, 400); 
  background("cyan");
  cor=color(random(0,255), random(0,255), random(0,255));
  posicaoHorizontal=200;
  posicaoVertical=200;
}

function draw() {
 circle(posicaoHorizontal,posicaoVertical,50);
  fill(cor);
  
  if(mouseX < posicaoHorizontal){
    posicaoHorizontal=posicaoHorizontal-22;
  }
  if(mouseX > posicaoHorizontal){
    posicaoHorizontal=posicaoHorizontal+22;
  }
if(mouseY < posicaoVertical){
    posicaoVertical=posicaoVertical-22;
  }
  if(mouseY > posicaoVertical){
    posicaoVertical=posicaoVertical+22;
  }
  if(mouseIsPressed){
    cor=color(random(0,255),random(0,255),random(0,255),random(0,100));
  }
}
