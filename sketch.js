var car,wall;
var speed, weight;


function setup() {
  createCanvas(600,400);
 car = createSprite(100, 200, 30, 30);
 wall = createSprite(550,200,10,400);
 speed = random(20,40);
 weight = random(500,1500);
 car.velocityX = speed;
}

function draw() {
  background(255,255,200);  
  createEdgeSprites();
if(wall.x - car.x < (car.width + wall.width)/2){
car.velocity.X = 0}

var deformation = 0.5 * weight * speed * speed/22500;

if(deformation > 180){
car.shapecolor = (255,0,0);
}
if(deformation<180 && deformation>80){
car.shapecolor = (1230,230,0);
}
if(deformation<80){
car.shapecolor = (230,230,0);
}


  drawSprites();
}