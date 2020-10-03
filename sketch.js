const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,bird1;
var pig1,box2,log1,ground,log2,box3,box4,pig2,log3,log4,box5;

function setup(){
    var canvas = createCanvas(800,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(500,300,70,70);
    box2 = new Box(700,300,70,70);
    ground = new Ground(400,height,800,20);
    pig1 = new pig(600,300);
    log1 = new log(600,260,20,PI);
    bird1= new bird(200,180)

    box3 = new box(500,230,70,70);
    box4 = new box(700,230,70,70);
    pig2 = new pig(600,220);
    log2 = new log(600,170,20,PI/2);
    box5 = new box(600,150,70,70);
    log3 = new log(650,150,20,PI/2);
    log4 = new log(750,150,20,PI/2);
    
}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);


    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    log1.display();
    bird1.display();

    box3.display();
    box4.display();
    pig2.display();
    log2.display();
    box5.display();
    log3.display();
    log4.display();

}