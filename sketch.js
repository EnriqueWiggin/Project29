const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box;
var ball;
var slingShot;
var polygon_img;

function preload()
{
  polygon_img=loadImage("polygon.png");
}

function setup() {
  createCanvas(800,400);
 
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  ground = new Ground();
  stand1 = new Stand(390,300,250,10);
  stand2 = new Stand(700,200,200,10);

  box1 = new Box(300,275,30,40);
  console.log(box1);
  box2 = new Box(330,275,30,40);
  box3 = new Box(360,275,30,40);
  box4 = new Box(390,275,30,40);
  box5 = new Box(420,275,30,40);
  box6 = new Box(450,275,30,40);
  box7 = new Box(480,275,30,40);
  //level two
  box8 = new Box(330,235,30,40);
  box9 = new Box(360,235,30,40);
  box10 = new Box(390,235,30,40);
  box11 = new Box(420,235,30,40);
  box12 = new Box(450,235,30,40);
  //level three
  box13 = new Box(360,195,30,40);
  box14 = new Box(390,195,30,40);
  box15 = new Box(420,195,30,40);
  //top
  box16 = new Box(390,155,30,40);


  polygon = Bodies.circle(50,200,20);
  World.add(world,polygon);

 slingShot = new Slingshot(this.polygon,{x:100,y:200});

 ground = new Ground();

 stand1 = new Stand(390,300,250,10);

}

function draw() {
  background(255,255,255);  
  drawSprites();
  Engine.update(engine);
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();
  slingShot.display();
  ground.display();
  stand1.display();
  fill("gold");
  imageMode(CENTER)
  image(polygon_img ,polygon.position.x,polygon.position.y,40,40);

  
}
function mouseDragged() {

  Matter.Body.setPosition(this.polygon,{x:mouseX,y:mouseY})
}
function mouseReleased() {

   slingShot.fly(); 
}

