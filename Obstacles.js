class Obstacles {
    constructor(posX) {
      this.rx = posX;
      this.ry = height- random([160,260,460]);  
     
      this.spt=createSprite(this.rx, this.ry , 20, 50);
      
      this.spt.shapeColor="blue";
      this.spt.addAnimation("ob",obstacle);
      this.spt.scale=0.03;

      this.spt.velocityX=-3;
      this.spt.velocityY=-2;
      
    }
  }
  