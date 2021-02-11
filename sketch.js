
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject,paperobj;
var world;


function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	groundObject=new Ground(width/2,670,width,20);
	dustbinObj=new dustbin(1200,650);
	paperobj=new paper(200,1,110,110);

	var render = Render.create({
		element: document.body,
		engine: engine,
		options: {
		  width: 1600,
		  height: 700,
		  wireframes: false
		}
	  });

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);
 
  paperobj.display();
  groundObject.display();
  dustbinObj.display();

  if (keyCode === UP_ARROW) {

	Matter.Body.applyForce(paperObject.body,paperobj.body.position,{x:130,y:-145});


  }	
 
 Engine.update(engine);
}

