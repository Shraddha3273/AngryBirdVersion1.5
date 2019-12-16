const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var Ground1,pig1,log1,engine, world,box1,box2;

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(800,420,50,50);
    box2 = new Box(1020,420,50,50);
    box3 = new Box(800,320,50,50);
    box4 = new Box(1020,320,50,50); 
    box5 = new Box(920,250,50,50);

    pig1 = new pig(920,420);
    pig2 = new pig(920,320);

    log1 = new log(910,400,300,PI/2);
    log2 = new log(910,300,300,PI/2);
    log3 = new log(75,150,100,PI/2);
    log4 = new log(160,250,100,PI/2);

    Ground1 = new Ground(600,590,1200,20);
}

function draw(){
    background(0);
    Engine.update(engine);

    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();

   Ground1.display();

    pig1.display();
    pig2.display();

    log1.display();
    log2.display();
    log3.display();
    log4.display();
   
}