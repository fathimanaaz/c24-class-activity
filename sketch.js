const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box2,box3,box4,box5;
var pig1,pig2;
var log1,log2,log3,log4;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600,height,1200,20)

    //layer1
    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    pig1 = new Pig(810,350)
    log1 = new Log(810,260,300,PI/2)

    //layer2
    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
    pig2 = new Pig(810,220)
    log2 = new Log(810,180,300,PI/2)

    //layer3
    box5 = new Box(810,160,70,70);
    log3 = new Log(760,120,130,PI/7)
    log4 = new Log(870,120,130,-PI/7)
}

function draw(){
    background(0);

    Engine.update(engine);

    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);

    ground.display();

    //layer1
    box1.display();
    box2.display();
    pig1.display();
    log1.display();

    //layer2
    box3.display();
    box4.display();
    pig2.display();
    log2.display();

    //layer3
    box5.display();
    log3.display();
    log4.display();
}