class Walls {
    constructor(posX) {
      this.rx = posX;
      this.ry = height- random([310,450]);   

      this.spt=createSprite(this.rx, this.ry , 40, 200);
      this.spt.shapeColor="brown";
      this.spt.addAnimation("w1",wallAnimation);
      this.spt.scale=0.10;
  
    }
  
  
  }
  