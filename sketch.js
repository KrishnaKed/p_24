const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,ham;
var rub,iron1;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(200,350,50,50,PI+45);
    ground = new Ground(200,height,400,20);
    ham = new hammer(100,40);
 //  rub = new rubber(300,360,30);
   iron1 = new iron(100,350,70,40);
}

function draw(){
    background("lightblue");
    Engine.update(engine);
    box1.display();
    ground.display();
    ham.display();
   // rub.display();
    iron1.display();
}