class paper {
    constructor(x, y, width, height, ) {
      var options = {
          'restitution':0.3,
          'friction':0.5,
          'density':1.2
      }
      this.body =  Matter.Bodies.circle(x, y, 20);
      this.width = width
      this.height = height;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      ellipseMode(CENTER);
      strokeWeight(4);
      stroke("pink");
      fill("pink");
      rect(0, 0, this.width, this.height);
      pop();
    }
  };
  