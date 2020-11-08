var bullet ,wall;
var speed,weight,thickness;

function setup() {
  createCanvas(800,400);

speed =random(40,180);
weight = random(600,1400);
thickness =random (24,83);

  bullet = createSprite(40, 200, 90, 2);
bullet.velocityX=speed; 

  wall=createSprite(750,200,thickness,height/2);
}

function draw() {
  background(0);
  function hasCollided(bullet,wall){
  
  bulletRightEdge=bullet.x+bullet.width;
  wallLeftEdge=wall.x;
  
  if (bulletRightEdge>=wallLeftEdge){
    return true;
  }
  return false;
}
  if(hasCollided(bullet,wall)){
  bullet.velocityX=0;
  var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);



     if(damage<10){
       wall.shapeColor=color("green");
     }
  
     if(damage>10){
      wall.shapeColor=color("red");
    }
  
    }
  
  

  drawSprites();
}