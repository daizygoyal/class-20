var fixedRect,movingRect; 

function setup() {
  createCanvas(800,400);
fixedRect =  createSprite(400, 200, 90, 50);
fixedRect.shapeColor="pink";
movingRect = createSprite(200,300,50,90);
movingRect.shapeColor="pink";

}

function draw() {
  background(0,0,0); 

movingRect.x=World.mouseX;  
movingRect.y=World.mouseY;

if(movingRect.x-fixedRect.x<fixedRect.width/2 + movingRect.width/2 &&
  fixedRect.x-movingRect.x<fixedRect.width/2 + movingRect.width/2 && 
  movingRect.y-fixedRect.y<fixedRect.height/2 + movingRect.height/2 &&
  fixedRect.y-movingRect.y<fixedRect.height/2 + movingRect.height/2)
{
movingRect.shapeColor="red";
}

else{
  movingRect.shapeColor="pink";
}

  drawSprites();
  
}
  

  

  




