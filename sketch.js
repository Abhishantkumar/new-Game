var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  ob1=  createSprite(190,100,50,50);
  ob2= createSprite(100,100,50,50);
  ob3= createSprite(400,100,50,50);
  ob1.shapeColor = "green";
  ob2.shapeColor = "green";
  ob3.shapeColor = "green";
} 

function draw() {
  background(0,0,0); 

  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(isTouching(movingRect,ob2))
  {
    movingRect.shapeColor = "red";
   ob2.shapeColor = "red";
   
  }
  else{
    movingRect.shapeColor = "green";
   ob2.shapeColor = "green";

}


  
  drawSprites();
}