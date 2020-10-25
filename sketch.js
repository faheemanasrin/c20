var movingbox,fixedbox ;



function setup() {
  createCanvas(800,400);
   movingbox=createSprite(400, 200, 50, 50);
   fixedbox=createSprite(400, 200, 50, 50);
movingbox.shapeColor="blue";
fixedbox.shapeColor="blue";
}


function draw() {
  background(47); 
  
  movingbox.x =mouseX;
  movingbox.y = mouseY;

  if(movingbox.x -fixedbox.x <= movingbox.width/2 + fixedbox.width/2 &&
    fixedbox.x-movingbox.x<=movingbox.width/2 + fixedbox.width/2 &&
    movingbox.y- fixedbox.y <= movingbox.height/2 + fixedbox.height/2 &&
    fixedbox.y- movingbox.y<= movingbox.height/2 +fixedbox.height/2){
    movingbox.shapeColor="red";
    fixedbox.shapeColor="red";
  }
  else{
    movingbox.shapeColor="blue";
    fixedbox.shapeColor="blue";
}

  drawSprites();
}