const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var background;
var ball;
var dustbin;
var ground;

function preload(){
  backgroundImg = loadImage('Images/background blurred.png');
  platformImg = loadImage('Images/Platform.png')
  ballImg = loadImage('Images/ball.png')
  dustbinImage = loadImage('Images/dustbin.png')

}


function setup() {
  createCanvas(800,500);

  engine = Engine.create();
  world = engine.world;

  dustbin = createSprite(700, 450, 80, 30);
  dustbin.addImage(ballImg);

  

  platform1 = new Platform(300, 150, 300, 150);
  ball = new Ball(50, 50, 50, 50)
/*
  var ball_options = {
    restitution: 0.02
  }

  
  

  ball = Matter.Bodies.circle(250, 50, 30, ball_options);
  World.add(world,ball)
  */
}


function draw() 
{

  background(backgroundImg);
  platform1.show()
  ball.show()
  // ellipseMode(RADIUS)
  // ellipse(ball.position.x, ball.position.y, 50,50)
  Engine.update(engine);

  drawSprites()
}

