var bullet,wall,thickness;
var speed,weight;
function setup() {
  createCanvas(1600,400);
  speed=random(223,321);
  weight=random(30,52)
  bullet=createSprite(40, 200, 30, 30);
  bullet.shapeColor="black";
  thickness=random(22,83);
  wall=createSprite(1200,200,40,thickness,height/2)
  bullet.velocityX=speed; 
 
}

function draw() {
  background("lightBlue"); 
 
  
  if(wall.x- bullet.x<(wall.width+ bullet.width)/2){
   bullet.velocityX=0;
  
  var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);
   console.log(damage)
  if(damage<10)
  {
      wall.shapeColor="green"


  }
   if(damage>10)
  {
    wall.shapeColor="red"


  }
}

  
  drawSprites();
}
