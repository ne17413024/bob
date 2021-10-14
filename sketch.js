const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var platform;
var bob;


function preload() {

}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    //ground = new Ground(600,height,1200,20);
    //platform = new Ground(150, 305, 300, 170);

    bob = new Bob();
}

function draw(){
    background(0);
    Engine.update(engine);

    //platform.display();
    bob.display();    
}
