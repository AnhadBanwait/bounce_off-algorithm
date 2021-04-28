var fixRect,moveRect
function setup() {
  createCanvas(1200,800);
 fixRect= createSprite(200, 100, 50, 80);
 fixRect.shapeColor="blue"
 fixRect.debug=true;
fixRect.velocityY=3
 moveRect = createSprite(200,500,50,80);
 moveRect.shapeColor="red"
 moveRect.debug=true;
 moveRect.velocityY=-3
}

function draw() {
  background("brown");  

 

  if(moveRect.x-fixRect.x<moveRect.width/2+fixRect.width/2&&
    fixRect.x-moveRect.x<moveRect.width/2+fixRect.width/2&&
  moveRect.y-fixRect.y<moveRect.height/2+fixRect.height/2&&
  fixRect.y-moveRect.y<moveRect.height/2+fixRect.height/2){
  fixRect.velocityY=(-1)*fixRect.velocityY;
  moveRect.velocityY=(-1)*moveRect.velocityY;

  }

 
  drawSprites();
}