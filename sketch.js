
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var PaperBall;

function preload()
{
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
	PaperBall = new Paper(100,850,10)
	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  PaperBall.display();
  
  drawSprites();
 
}



