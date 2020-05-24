const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground;
var ballOptions
var ball
function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;
ballOptions = {
    restitution: 2,
    density: 1
}

    

    var ground_options ={
        isStatic: true
    }
    

    ground = Bodies.rectangle(200,360,200,60,ground_options);
    World.add(world,ground);
    ball = Bodies.circle(100,200,20,ballOptions)
World.add(world,ball)
    console.log(ground);
    
}

function draw(){
    background(0);
    Engine.update(engine);
    rectMode(CENTER);
    rect(ground.position.x,ground.position.y,400,60);
    ellipseMode(RADIUS)
    ellipse(ball.position.x,ball.position.y,20,20)
}