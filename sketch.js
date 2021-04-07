const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;
var stand1,stand2;
var box1;
var ball;
var slingshot;

function setup() {
  

  createCanvas(800,400);
  
  engine = Engine.create();
  world = engine.world;
  
  ground = new Ground(600,height,1200,20);
  stand1 = new Ground(380,300, 400, 10);
  stand2 = new Ground(700, 200, 200, 10);

//set one
  boxs1 = new Box(640,175,30,40);
  boxs2 = new Box(670,175,30,40);
  boxs3 = new Box(700,175,30,40);
  boxs4 = new Box(730,175,30,40);
  boxs5 = new Box(760,175,30,40);
  boxs6 = new Box(670,135,30,40);
  boxs7 = new Box(700,135,30,40);
  boxs8 = new Box(730,135,30,40);
  boxs9 = new Box(700,95,30,40);
 //set two 
  box1 = new Box(280,275,30,40);
  box2 = new Box(310,275,30,40);
  box3 = new Box(340,275,30,40);
  box4 = new Box(370,275,30,40);
  box5 = new Box(400,275,30,40);
  box6 = new Box(430,275,30,40);
  box7 = new Box(460,275,30,40);
  box8 = new Box(490,275,30,40);
  box9 = new Box(310,235,30,40);
  box10 = new Box(340,235,30,40);
  box11 = new Box(370,235,30,40);
  box12 = new Box(400,235,30,40);
  box13 = new Box(430,235,30,40);
  box14 = new Box(460,235,30,40);
  box15 = new Box( 340,195,30,40);
  box16 = new Box( 370,195,30,40);
  box17 = new Box( 400,195,30,40);
  box18 = new Box( 430,195,30,40);
  box19 = new Box( 370,155,30,40);
  box20 = new Box( 400,155,30,40);
  box21 = new Box( 385,115,30,40);

  ball= Bodies.circle(50,200,20);
  World.add(world,ball);
  slingshot= new Slingshot(this.ball,{x:100,y:200});


}

function draw() {
  background(255,255,255);
  Engine.update(engine);

  strokeWeight(2);
  stroke(15);

  stand1.display();
  stand2.display();

  stroke(15);
  fill("black");
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  stroke(15);
  fill("orange");
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  stroke(15);
  fill("violet");
  box15.display();
  box16.display();
  box17.display();
  box18.display();
  stroke(15);
  fill("green");
  box19.display();
  box20.display();
  stroke(15);
  fill("blue");
  box21.display();

  stroke(15);
  fill("red");
  boxs1.display(); 
  boxs2.display();
  boxs3.display();
  boxs4.display();
  boxs5.display();
  stroke(15);
  fill("yellow");
  boxs6.display();
  boxs7.display();
  boxs8.display();
  stroke(15);
  fill("pink");
  boxs9.display();

  ellipseMode(CENTER);
  ellipse(ball.position.x, ball.position.y, 40);

  drawSprites();
}
function mouseDragged(){
  Matter.Body.setPosition(this.ball, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  slingshot.fly();
}