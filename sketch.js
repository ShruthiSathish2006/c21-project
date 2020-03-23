 var obj;
 var x;

function setup() {
  createCanvas(800,800);
  obj = createSprite(400,400,10,10);
  x = 1
}

function draw() {
  background("white");
  
    if (x=>400){
      obj.scale += x+0.05;
    }
  
  
  

 
  
  drawSprites();
  
}



