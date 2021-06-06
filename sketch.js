var path ,pathImage;
var jake,jake_running,jake_collide;
var leftBoundary;
var rightBoundary;

function preload(){
 pathImage=loadImage("path.png");
  jake_running=loadAnimation("jake1.png","jake2.png","jake3.png","jake4.PNG",
" jake5.png");
                    
  
  
  
  
  
  
}

function setup(){
  createCanvas(400,400);
  path=createSprite(200,200);
  path.addImage(pathImage);
  path.velocityY=4;
  path.scale=1.2;
  
  jake=createSprite(129,256,30,30);
  jake.addAnimation("running",jake_running);
  
  leftBoundary=createSprite(8,16,50,50);
  rightBoundary=createSprite(397,19,50,50);
}
function draw() {
  
  background(0);
  
  
  jake.x=mouseX;
  
  if(path.y>400){
    path.y=height/2;
  }
  leftBoundary.visible=false;
  rightBoundary.visible=false;
  jake.collide(leftBoundary);
  jake.collide(rightBoundary)
  
  if(keyDown("RIGHT_ARROW")){
    jake.velocityX=4;
    jake.velocityY=0;
  }
  
   if(keyDown("LEFT_ARROW")){
   jake.velocityX=-4;
   jake.velocityY=0;
   }
drawSprites();
}
