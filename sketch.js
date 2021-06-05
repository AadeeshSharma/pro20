
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var block1,block2,plane;
var p1,p2,p3;
var ball1,ball2,ball3,ball4,ball5;
var angle1=60,angle2=60,angle3=60;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	var ball_options = {
		restitution:0.4, 
	    frictionair :0.002	
	}

    var p_options = {
		isStatic:true
	};

	var plane_options = {
		isStatic: true
	  };

    var block_options = {
      isStatic: true
      };

ball1 = Bodies.circle(230,0,10,ball_options);
World.add(world,ball1);
  
ball2 = Bodies.circle(210,0,10,ball_options);
World.add(world,ball2);
  
ball3 = Bodies.circle(220,0,10,ball_options);
World.add(world,ball3);
	  
ball4 = Bodies.circle(225,0,10,ball_options);
World.add(world,ball4);

ball5 = Bodies.circle(215,0,10,ball_options);
World.add(world,ball5);
	
plane = Bodies.rectangle(400,690,800,10,plane_options);
World.add(world,plane);
	
block1 = Bodies.rectangle(200,400,100,20,block_options);
World.add(world,block1);

block2 = Bodies.rectangle(600,400,100,20,block_options);
World.add(world,block2);

p1 = Bodies.rectangle(350,200,150,150,p_options);		
World.add(world,p1);

p2 = Bodies.rectangle(350,200,20,150,p_options);		
World.add(world,p2);

p3 = Bodies.rectangle(350,200,20,150,p_options);		
World.add(world,p3);

rectMode(CENTER);
ellipse(RADIUS);

	}
function draw() {

  Engine.update(engine);

  
  fill("chocolate");

  background("yellow");
  
  ellipse(ball1.position.x,ball1.position.y,20);
  ellipse(ball2.position.x,ball2.position.y,20);
  ellipse(ball3.position.x,ball3.position.y,20);
  ellipse(ball4.position.x,ball4.position.y,20);
  ellipse(ball5.position.x,ball5.position.y,20);
  rect(plane.position.x,plane.position.y,800,10);
  rect(p1.position.x,p1.position.y,50,20);
  rect(p2.position.x,p2.position.y,50,20);
  rect(p3.position.x,p3.position.y,100,20);
  rect(block1.position.x,block1.position.y,100,20);
  rect(block2.position.x,block2.position.y,100,20);

  Matter.Body.rotate(p1,angle1);
  push();
  translate(p1.positionx,p1.position.y);
  rotate(angle1);
  rect(0,0,150,20);
  pop();
  angle1 += 0.2;

  Matter.Body.rotate(p2,angle2);
  push();
  translate(p2.positionx,p2.position.y);
  rotate(angle2);
  rect(0,0,150,20);
  pop();
  angle2 += 0.2;

  Matter.Body.rotate(p3,angle3);
  push();
  translate(p3.positionx,p3.position.y);
  rotate(angle3);
  rect(0,0,150,20);
  pop();
  angle3 += 0.2;

  drawSprites();
 
}



