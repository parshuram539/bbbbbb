class Iron {
    constructor(x, y,wigth, height, angle) {
      var options = {
          'restitution':0.8,
          'friction':3.0,
          'density':30.
      }
      this.body = Bodies.rectangle(x, y, 70, 70, options);
      this.width = 70;
      this.height = 70;
     // Matter.Body.setAngle(this.body,angle);
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      strokeWeight(4);
      stroke("black");
      fill("brown");
      rect(0,0, this.width, this.height);
      pop();
    }
  };
  