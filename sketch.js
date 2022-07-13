
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var groundObj;
var leftSide;
var rightSide;

function preload()
{

	
}

function setup() {
	createCanvas(800, 700);

	


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	

	

	ball=Bodies.circle(400,350,25,ball_option);
	World.add(world,ball);

	var ball_option={
		isStatic:false,
		restitution:0.3,
		friction:0,
		density:1.2
	}


	Engine.run(engine);

	

	keyPressed();


		


	

  
}

function draw() {
  rectMode(CENTER);
  ellipseMode(CENTER);
  background(0);

  groundObj = new ground(width/2,670,width,20);
	leftSide = new ground(600,600,20,120);
	rightSide = new ground(700,600,20,120);

  groundObj.display();
  leftSide.display();
  rightSide.display();

  fill("white");

	ellipse(ball.position.x,ball.position.y,25);	

	

  

  drawSprites();
 

}

function keyPressed(){
	if(keyCode === UP_ARROW){
		console.log("up key pressed")
		Matter.Body.applyForce(ball,ball.position,{x:-85,y:85});
	}
}





