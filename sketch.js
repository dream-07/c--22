const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof,bob1,bob2,bob3,bob4,bob5,rope;
//Create multiple bobs, mulitple ropes varibale here


function setup() {
	createCanvas(800, 600);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	var roof_options={
		isStatic:true			
	}

	var bob_options={
		restitution :0.03,
	}

	roof = Bodies.rectangle(400,100,230,20,roof_options);
    World.add(world,roof);

	bob1=Bodies.circle(200,300,30,bob_options);
	World.add(world,bob1)

	bob2=Bodies.circle(246,300,20,bob_options);
	World.add(world,bob2)

	bob3=Bodies.circle(292,300,20,bob_options);
	World.add(world,bob3)

	bob4=Bodies.circle(338,300,20,bob_options);
	World.add(world,bob4)

	bob5=Bodies.circle(430,300,20,bob_options);
	World.add(world,bob5)

	Engine.run(engine);
	
  
}

function draw() {
  rectMode(CENTER);
  background("#99004d");

  rect(roof.position.x,roof.position.y,230,20);
	ellipse(bob1.position.x,bob1.position.y,30);
	ellipse(bob2.position.x,bob2.position.y,30);
	ellipse(bob3.position.x,bob3.position.y,30);
	ellipse(bob4.position.x,bob4.position.y,30);
	ellipse(bob5.position.x,bob5.position.y,30);
	line(300,roof.position.y,bob1.position.x,bob1.position.y);
	line(350,roof.position.y,bob2.position.x,bob2.position.y);
	line(roof.position.x,roof.position.y,bob3.position.x,bob3.position.y);
	line(450,roof.position.y,bob4.position.x,bob4.position.y);
	line(500,roof.position.y,bob5.position.x,bob5.position.y);
	

  //call display() to show ropes here
  con1 = Matter.Constraint.create({
    bodyA:roof ,
    bodyB:bob1,
    length:180,
    stiffness:1.0,
    });
	World.add(world,con1);

	con1 = Matter.Constraint.create({
		bodyA:roof ,
		bodyB:bob1,
		length:195,
		stiffness:1.0,
		});
		World.add(world,con1);

		con2 = Matter.Constraint.create({
			bodyA:roof ,
			bodyB:bob2,
			length:195,
			stiffness:1.0,
			});
			World.add(world,con2);

			con3 = Matter.Constraint.create({
				bodyA:roof ,
				bodyB:bob3,
				length:195,
				stiffness:1.0,
				});
				World.add(world,con3);

				con4 = Matter.Constraint.create({
					bodyA:roof ,
					bodyB:bob4,
					length:195,
					stiffness:1.0,
					});
					World.add(world,con4);

					con5 = Matter.Constraint.create({
						bodyA:roof,
						bodyB:bob5,
						length:195,
						stiffness:1.0,
						});
						World.add(world,con5);
								
				
  //create ellipse shape for multiple bobs here

 
}

//Write keyPressed function and apply force on pressing up_arrow key on the first bob.
