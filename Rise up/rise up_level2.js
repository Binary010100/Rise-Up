//module aliases
var Engine = Matter.Engine;
var Render = Matter.Render;
var World = Matter.World;
var Bodies = Matter.Bodies;
var Body = Matter.Body;
var Events = Matter.Events;
var MouseConstaint = Matter.MouseConstraint;
var mouse = Matter.mouse;
var Mouse = Matter.Mouse;

// create an engine
var engine = Engine.create();

// create a renderer
var render = Render.create({
    element: document.body,
    engine: engine,
    options: {
              background: '#7fb3d5',
              wireframes: false
            }
});

//add mouse controll
var mouse = Mouse.create(render.canvas),
    mouseConstraint = MouseConstaint.create(engine,{
    mouse: mouse,
    constant:{
        // allow bodies on mouse to rotate
        angularStiffness: 0,
        render:{
            visible: false,
            
        }
    }
});
//keep the mouse in sync with the rendering
render.mouse = mouse;
    
// add the boddies
var balloon = Bodies.circle(600,550,25, {isStatic: true, label: 'uno'});
var controller = Bodies.circle(600,500,25);
var block1 =  Bodies.rectangle(600,0,20,20,{frictionAir: 0.1, label:'cros'});
var block2 =  Bodies.rectangle(600,0,20,20,{frictionAir: 0.045, label:'dos'});
var block3 =  Bodies.rectangle(600,0,20,20,{frictionAir:0.009, label:'dos'});
var block4 =  Bodies.rectangle(600,0,20,20,{frictionAir: 0.001, label:'dos'});
var block5 =  Bodies.rectangle(600,0,20,20,{frictionAir: 0.0009, label:'dos'});
var block6 =  Bodies.rectangle(600,0,20,20,{frictionAir: 0.0007, label:'dos'});
var block7 =  Bodies.rectangle(600,0,20,20,{frictionAir: 0.0001, label:'dos'});
var ground = Bodies.rectangle(0,700,10000,102,{isStatic: true, label:'nos'});

block1.render.fillStyle="#333"; 
block2.render.fillStyle="#333"; 
block3.render.fillStyle="#333";
block4.render.fillStyle="#333"; 
block5.render.fillStyle="#333";
block6.render.fillStyle="#333";
block7.render.fillStyle="#333";
controller.render.fillStyle="white";
balloon.render.fillStyle="white";

World.add(engine.world,[balloon, controller, block1, block2 , block3, block4, block5, mouseConstraint,ground, block6, block7]);

//run the engine
Engine.run(engine);

//run the renderer
Render.run(render);

function handleCollision(e) {
    e.pairs.forEach(pair => {
      const { label: labelA } = pair.bodyA;
      const { label: labelB } = pair.bodyB;
      if (labelA == 'uno' && labelB == 'dos') {
      alert('you loose');
                    window.location.href = 'file:///C:/Users/admin/Documents/MatterJS/Rise%20up/rise%20up.html';

      }
    
        if (labelA == 'uno' && labelB == 'cros') {
      alert('you loose');
                    window.location.href = 'file:///C:/Users/admin/Documents/MatterJS/Rise%20up/rise%20up.html';
   }

       
       
       
      
      
      
    });
      
  
  }
  Events.on(engine, 'collisionStart', handleCollision);