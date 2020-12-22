class Player
{
    constructor() {
		this.spt=createSprite(500, 200, 100,100);
		this.spt.shapeColor="blue";
		this.spt.addAnimation("player",marioAnimation);
		this.spt.scale=0.02;
	}

  applyGravity()
    {
        this.spt.velocityY=this.spt.velocityY+1;
	}

	moveLeft()
	{ 
		this.spt.x=constrain(this.spt.x-12,0,gameWidth);	
	}

	moveRight()
	{ 
		this.spt.x=constrain(this.spt.x+12,0,gameWidth);
	}

	jump()
	{ 
		this.spt.velocityY=-18;
    }
	
}
























