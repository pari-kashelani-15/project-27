
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var roof;
var rope;
var bob1, bob2, bob3, bob4, bob5;


function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	roof = new Roof(600,height,1200,20);
	bob1 = new Bob(700,320,70,70);
    bob2 = new Bob(920,320,70,70);
	bob3 = new Bob(700,240,70,70);
    bob4 = new Bob(920,240,70,70);
	bob5 = new Bob(810,160,70,70);
	rope = new Rope(bob.body , roof.body, -bobDiameter*2, 0);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  rope.display();
  roof.display();
  
  drawSprites();
 
}



