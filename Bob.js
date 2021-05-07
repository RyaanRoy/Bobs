class Bob {
    constructor(x,y,r) {
      var options = {
          isStatic: false,
          restitution: 1,
          friction: 0,
          density: 7.8
      }
      this.x=x;
      this.y=y;
      this.r=r;
      this.body =Bodies.circle(x,y,(this.r)/2,options);
     World.add(world, this.body);
      
    }
    display(){
     push();
     translate(this.body.position.x, this.body.position.y);
     
     fill(254,0,254);
     ellipse(0, 0, this.r, this.r);
     pop();
    }
  };