
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;


function preload()
{
}

function setup() {
	createCanvas(1500, 700);


	engine = Engine.create();
	world = engine.world;

  //Create the Bodies Here.
	mango1=new mango(1250,200)
	mango2=new mango(1370,370)
	mango3=new mango(1200,300)
	mango4=new mango(1350,270)
	mango5=new mango(1000,300)
  stone=new Stone (400,500,60,60)

	sling = new Slingshoot(stone.body,{x:400,y:500})

    ground = new Ground(400,690,800,20)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightblue");
  stone.display();
  ground.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();

  sling.display();
  drawSprites();
 
}
function mouseDragged(){

    Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY})
}


function mouseReleased() {

    sling.fly();  


    
}



