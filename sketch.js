const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const constraint=Matter.Constraint;


function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
    world = engine.world;
	
	roof = new Roof (width/2,height/4,width/7,20);

	bob1 = new Bob (290,300,40);
	bob2 = new Bob (330,300,40);
	bob3 = new Bob (410,300,40);
	bob4 = new Bob (450,300,40);
	bob5 = new Bob (370,300,40);

	chain1= new Chain(bob1.body,roof.body,-40,0);
	chain2= new Chain(bob2.body,roof.body,-20,0);
	chain3= new Chain(bob3.body,roof.body,20,0);
	chain4= new Chain(bob4.body,roof.body,40,0);
	chain5= new Chain(bob5.body,roof.body,0,0);
	//Create the Bodies Here.


	//Engine.run(engine);
  
}


function draw() {
	Engine.update(engine);
  rectMode(CENTER);
  background("lightblue");
  
  chain1.display();
  chain2.display();
  chain3.display();
  chain4.display();
  chain5.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
 

  roof.display();
   
}

function keyPressed(){
if (keyCode === 32 ){
Matter.Body.applyForce(bob1.body,bob1.body.position,{
	x:-50,
	y:-45
})
}
if (keyCode === UP_ARROW){
Matter.Body.applyForce(bob4.body,bob4.body.position,{
	x:-50,
	y:-45
})
}
}