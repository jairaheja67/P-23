var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);

	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10,);
	groundSprite.shapeColor=color(255)
	 
	rectangle1=createSprite(360,635,20,50)
	rectangle2=createSprite(410,650,80,20)
	rectangle3=createSprite(460,635,20,50)

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:1, isStatic:true});
	World.add(world, packageBody);
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	World.add(world, ground);
	boxposition=width/2-100
	boxY=610
	boxleftsprite=createSprite(boxposition,boxY,20,100)
	boxleftsprite.shapeColor="green"
	boxleftbody=Bodies.rectangle(boxposition+20,boxY,20,100,{isStatic:true})
	World.add(world,boxleftbody)
	boxbase=createSprite(boxposition+100,boxY+40,200,20)
	boxbase.shapeColor="blue"
	boxbottombody=Bodies.rectangle(boxposition+100,boxY+45-20,200,20,{isStatic:true})
	World.add(world,boxbottombody)
    boxrightbody=Bodies.rectangle(boxposition+200-20,boxY,20,100,{isStatic:true})
    World.add(world,boxrightbody)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();
 
}

function keyPressed() {
	if(keyCode === LEFT_ARROW){
		helicopterSprite.x=helicopterSprite.x-20
		translation={x:-20,y:0}
		Matter.Body.translate(packageBody,translation)
	}
		else if(keyCode === RIGHT_ARROW){
			helicopterSprite.x=helicopterSprite.x+20
			translation={x:20,y:0}
			Matter.Body.translate(packageBody,translation)
		}
	 if (keyCode === DOWN_ARROW) {
    Matter.Body.setStatic(packageBody,false)
	 }
    
  }




