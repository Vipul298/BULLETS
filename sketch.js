var wall,thickness;
var bullet,speed,weight;

function setup() {
  createCanvas(1600,400);

  speed = random(223,321);
  weight = random(30,50);
  thickness = random(22,83);
  bullet = createSprite(50,200,50,5);
  bullet.velocityX = speed;
  bullet.shaprcolor = color(255);
  wall = createSprite(1200,200,thickness,height/2);
  wall.shapecolor = color(80,80,80);

}

function draw() {
  background(0); 
  if (collided(bullet,wall))
  {
    bullet.velocityX = 0;
    var damage = 0.5 *weight*speed*speed/(thickness*thickness*thickness);
    if(damage>10)
    {
      wall.shapeColor=color(255,0,0);
    }
         
    if(damage<10)
    {
     wall.shapeColor=color(0,255,0);
    }

  } 
    
  drawSprites();
}

function collided(lbullet,lwall)
{
    bulletRightEdge = lbullet.x + lbullet.width;
    wallLeftEdge = lwall.x;
    if (bulletRightEdge>=wallLeftEdge)
    {
       return true;
    }
       return false;
}
